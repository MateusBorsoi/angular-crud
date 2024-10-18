import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from '../../cadastro/pages/cadastro/cadastro.component';
import { HomeComponent } from '../../home/home/home.component';
import { UserpageComponent } from '../../users/pages/userpage/userpage.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'users', component: UserpageComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
