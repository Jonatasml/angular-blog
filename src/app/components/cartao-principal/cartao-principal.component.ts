import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartao-principal',
  templateUrl: './cartao-principal.component.html',
  styleUrls: ['./cartao-principal.component.css'],
})
export class CartaoPrincipalComponent implements OnInit {
  @Input() foto: string = '';
  @Input() titulo: string = '';
  @Input() descricao: string = '';
  @Input() id: string = '';

  constructor() {}

  ngOnInit(): void {}
}
