import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { dados } from '../../dados/dados';
@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css'],
})
export class ConteudoComponent implements OnInit {
  @Input()
  foto: string = '';
  @Input()
  titulo: string = '';
  @Input()
  descricao: string = '';
  private id: string | null = '0';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.id = value.get('id');
    });
    this.setValoresComponente(this.id);
  }

  setValoresComponente(idArtigo: string | null) {
    const result = dados.filter(
      (artigo) => artigo.id.toString() === idArtigo
    )[0];
    this.foto = result.foto;
    this.titulo = result.titulo;
    this.descricao = result.descricao;
  }
}
