import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserpageComponent } from './pages/userpage/userpage.component';
import { UserlistComponent } from './components/user/userlist.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [UserpageComponent, UserlistComponent],
  imports: [CommonModule, MatListModule],
  exports: [UserlistComponent],
})
export class UsersModule {}
