import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../models/tarea/tarea.model';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss'],
})
export class FiltrosComponent implements OnInit {
  @Output() emisor_filtro = new EventEmitter();
  filtro: any = {
    cliente: '',
    usuario: '',
    referencia: '',
    tipos: '',
    fecha: [],
    estado: {
      'pendiente': false,
      'recogiendo': false,
      'recogida': false,
      'desconsolidando': false,
      'desconsolidada': false,
      'entregada': false,
      'incidencia': false,
    }
  };
  constructor() {}
  ngOnInit(): void {}
  buscar() {
    console.log('Emito que quiero filtrar');
    console.log(this.filtro);
    this.emisor_filtro.emit(this.filtro);
    this.filtro = {
      cliente: '',
      usuario: '',
      referencia: '',
      tipos: '',
      fecha: '',
      estado: {
        pendiente: false,
        recogiendo: false,
        recogida: false,
        desconsolidando: false,
        desconsolidada: false,
        entregada: false,
        incidencia: false,
      },
    };
  }
}
