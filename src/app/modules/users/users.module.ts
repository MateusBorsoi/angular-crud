import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { UserpageComponent } from './pages/userpage/userpage.component';
import { UserlistComponent } from './components/user/userlist.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { CadastroModule } from '../cadastro/cadastro.module';
@NgModule({
  declarations: [UserpageComponent, UserlistComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    CadastroModule,
    MatDividerModule,
    AsyncPipe
  ],
  exports: [UserlistComponent],
})
export class UsersModule {}
