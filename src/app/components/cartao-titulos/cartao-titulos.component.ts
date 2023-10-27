import { BarraTituloComponent } from './../barra-titulo/barra-titulo.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartao-titulos',
  templateUrl: './cartao-titulos.component.html',
  styleUrls: ['./cartao-titulos.component.css'],
})
export class CartaoTitulosComponent implements OnInit {
  @Input() foto: string = '';
  @Input() titulo: string = '';
  @Input() id: string = '';
  constructor() {}

  ngOnInit(): void {}
}
