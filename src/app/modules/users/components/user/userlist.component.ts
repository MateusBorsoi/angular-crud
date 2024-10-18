import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { CadastroService } from '../../../../services/cadastro/cadastro.service';
import { IUser } from '../../../../services/cadastro/interface/IUser.interface';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.scss',
})
export class UserlistComponent implements OnInit, OnDestroy {
  private usersSubscription: Subscription | null = null;
  public users = signal<IUser[]>([]);

  constructor(private _cadastroService: CadastroService) {}

  public trackBy(index: number, user: IUser) {
    return user.id;
  }

  ngOnInit(): void {
    this.usersSubscription = this._cadastroService.getAllUsers().subscribe({
      next: (response) => this.users.set(response),
    });
  }
  ngOnDestroy(): void {
    if (this.usersSubscription) {
      this.usersSubscription.unsubscribe();
      this.users.set([]);
    }
  }
}
