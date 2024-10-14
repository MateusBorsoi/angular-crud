import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormCadastroComponent } from './modules/cadastro/components/form-cadastro/form-cadastro.component';
import { MenuComponent } from './components/layout/menu/menu.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormCadastroComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 
}
