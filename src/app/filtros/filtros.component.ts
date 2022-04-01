import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss'],
})
export class FiltrosComponent implements OnInit {
  @Input() datos_en_filtro: any;
  @Output() emisor_filtro = new EventEmitter();
  filtro_datos: any;
  filtro: any = {
    'cliente': '',
    'usuario': '',
    'referencia': '',
    'tipos': '',
  };
  constructor() {}
  ngOnInit(): void {}
  asigna_filtro() {}
  buscar() {
    console.log(this.filtro.cliente);
    this.filtro_datos = [];
    this.filtro_datos = this.filtro;
    this.emisor_filtro.emit(this.filtro_datos);
    this.filtro = {
      'cliente': '',
      'usuario': '',
      'referencia': '',
      'tipo': '',
      'fecha': '',
    };
  }
}
