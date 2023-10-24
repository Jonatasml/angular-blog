import { CartaoRodapeComponent } from './../cartao-rodape/cartao-rodape.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-titulo',
  templateUrl: './barra-titulo.component.html',
  styleUrls: ['./barra-titulo.component.css'],
})
export class BarraTituloComponent implements OnInit {
  fontSize?: number;
  clamp: any;

  constructor() {}

  ngOnInit(): void {
    // Obtém o tamanho da tela
    const screenWidth = window.innerWidth;
    // Calcula o tamanho da fonte
    this.fontSize = this.clamp(38, screenWidth * 0.075, 224);
  }

  getFontSize() {
    return this.fontSize;
  }
}
