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
      'tipo': '',
      'fecha': [],
      'estado':{
        'pendiente:boolean':false,
        'recogiendo:boolean':false,
        'recogida:boolean':false,
        'desconsolidando:boolean':false,
        'desconsolidada:boolean':false,
        'entregada:boolean':false,
        'incidencia:boolean':false
      }
  };
  constructor() {}
  ngOnInit(): void {}
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
      'estado':{
        'pendiente':false,
        'recogiendo':false,
        'recogida':false,
        'desconsolidando':false,
        'desconsolidada':false,
        'entregada':false,
        'incidencia':false,
      }
    };
  }
}
