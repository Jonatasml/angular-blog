import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraMenuComponent } from './components/barra-menu/barra-menu.component';
import { BarraTituloComponent } from './components/barra-titulo/barra-titulo.component';
import { CartaoPrincipalComponent } from './components/cartao-principal/cartao-principal.component';
import { CartaoTitulosComponent } from './components/cartao-titulos/cartao-titulos.component';
import { CartaoRodapeComponent } from './components/cartao-rodape/cartao-rodape.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraMenuComponent,
    BarraTituloComponent,
    CartaoPrincipalComponent,
    CartaoTitulosComponent,
    CartaoRodapeComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
