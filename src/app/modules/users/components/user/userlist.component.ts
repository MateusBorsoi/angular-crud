import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { CadastroService } from '../../../../services/cadastro/cadastro.service';
import { IUser } from '../../../../services/cadastro/interface/IUser.interface';
import { IEditUser } from '../../../../../types/IEditUser.interface';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.scss',
})
export class UserlistComponent implements OnInit, OnDestroy {
  private usersSubscription: Subscription | null = null;
  private _editUser: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  private _userId: BehaviorSubject<number | null> = new BehaviorSubject<
    number | null
  >(null);
  public users = signal<IUser[]>([]);

  editUser$: Observable<boolean> = this._editUser.asObservable();
  userId$: Observable<number | null> = this._userId.asObservable();

  public changeEdit(edit: IEditUser): void {
    this._editUser.next(edit.isEdit);
    this._userId.next(edit.userId)
    console.log(edit)
  }

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
