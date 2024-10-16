import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { MenuComponent } from './components/layout/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //
import { RoutingModule } from './modules/routes/router/routing.module';
import { CadastroModule } from './modules/cadastro/cadastro.module';
@NgModule({
  declarations: [MenuComponent, AppComponent],
  imports: [
    BrowserModule,
    MatCardModule,
    MatIconModule,
    CadastroModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    RoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
