import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { passwordMismatchValidator } from '../../../../../utils/form';
import { CadastroService } from '../../../../services/cadastro/cadastro.service';
import { IUser } from '../../../../services/cadastro/interface/IUser.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrl: './form-cadastro.component.scss',
})
export class FormCadastroComponent implements OnInit, OnDestroy {
  @Input() isEditing!: boolean;
  @Input() userToEdit!: number;

  _formCadastro: FormGroup;

  private userSubscription: Subscription | null = null;

  public validationMessages: ValidationErrors = {
    name: {
      required: 'Nome é obrigatório',
    },
    email: {
      required: 'Email é obrigatório',
      email: 'Email inválido',
    },
    password: {
      required: 'Senha é obrigatoria',
      min: 'Senha deve conter ao menos 8 caracteres',
    },
    confirmPassword: {
      required: 'É necessário confirmar a senha',
      passwordMismatch: 'Senha não confere',
    },
  };

  constructor(
    private _fb: FormBuilder,
    private _cadastroService: CadastroService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this._formCadastro = this._fb.group(
      {
        name: [``, Validators.required],
        email: [``, [Validators.required, Validators.email]],
        password: [``, [Validators.required, Validators.minLength(6)]],
        confirmPassword: [``, Validators.required],
      },
      {
        validators: passwordMismatchValidator('password', 'confirmPassword'),
      }
    );
  }

  ngOnInit(): void {
    if (this.isEditing) {
      this.userSubscription = this._cadastroService
        .getUserById(this.userToEdit)
        .subscribe({
          next: (response) => {
            this._formCadastro.patchValue(response);
          },
        });
    }
  }

  ngOnDestroy(): void {}

  getErrorMessage(controlName: string): string | null {
    const control = this._formCadastro.get(controlName);

    if (control?.invalid && (control?.touched || control?.dirty)) {
      const errors = control.errors;

      if (errors) {
        for (const errorKey in errors) {
          if (errors.hasOwnProperty(errorKey)) {
            return this.validationMessages[controlName][errorKey];
          }
        }
      }
    }

    if (
      this._formCadastro.hasError('passwordMismatch') &&
      controlName === 'confirmPassword'
    ) {
      return this.validationMessages['confirmPassword'].passwordMismatch;
    }

    return null;
  }

  public onSubmit() {
    if (this._formCadastro.valid) {
      const user: IUser = {
        email: this._formCadastro.get('email')?.value,
        name: this._formCadastro.get('name')?.value,
        password: this._formCadastro.get('password')?.value,
      };
      if (this.isEditing) {
        this._cadastroService.updateUser(this.userToEdit, user).subscribe({
          next: (response) => {
            this._snackBar.open('Cadastro atualizado com sucesso', 'Fechar');
            window.location.reload()
          },
          error: (err) => {
            this._snackBar.open(
              'Falha ao atualizar usuário, motivo:' + err.message,
              'Fechar'
            );
          },
        });
        return;
      }
      this._cadastroService.createUser(user).subscribe({
        next: (response) => {
          this._snackBar.open('Cadastro realizado com sucesso', 'Fechar');
          this._formCadastro.reset();
          
        },
        error: (err) => {
          this._snackBar.open(
            'Falha ao cadastrar usuário, motivo:' + err.message,
            'Fechar'
          );
        },
      });
    }
  }
}
