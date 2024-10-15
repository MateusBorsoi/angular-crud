import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { MenuComponent } from './components/layout/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //

@NgModule({
  declarations: [MenuComponent, AppComponent],
  imports: [
    BrowserModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule, 
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent],
 
})
export class AppModule {}
