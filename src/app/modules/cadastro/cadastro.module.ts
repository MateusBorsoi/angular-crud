import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { FormCadastroComponent } from './components/form-cadastro/form-cadastro.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [CadastroComponent, FormCadastroComponent],
  imports: [CommonModule, MatCardModule],
  exports: [CadastroComponent],
})
export class CadastroModule {}
