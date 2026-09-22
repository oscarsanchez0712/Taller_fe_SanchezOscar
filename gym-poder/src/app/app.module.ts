import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './features/landing/components/navbar/navbar.component';
import { HeroComponent } from './features/landing/components/hero/hero.component';
import { NosotrosComponent } from './features/landing/components/nosotros/nosotros.component';
import { ProductosComponent } from './features/landing/components/productos/productos.component';
import { PromocionComponent } from './features/landing/components/promocion/promocion.component';
import { ContactoComponent } from './features/landing/components/contacto/contacto.component';
import { FooterComponent } from './features/landing/components/footer/footer.component';
import { InicioComponent } from './features/landing/pages/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    NosotrosComponent,
    ProductosComponent,
    PromocionComponent,
    ContactoComponent,
    FooterComponent,
    InicioComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
