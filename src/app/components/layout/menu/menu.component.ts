import { Component } from '@angular/core';
import { IRoutes } from '../../../../types/IRoutes.interface';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  trackByFn(index: number, item: IRoutes): string {
    return item.title;
  }
  public routes: IRoutes[] = [
    {
      title: `Pagina inicial`,
      path: '/home',
    },
    {
      title: `Cadastro`,
      path: '/cadastro',
    },
  ];
}
