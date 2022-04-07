import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../models/tarea/tarea.model';
import { datosService } from '../services/datos.service';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss'],
})
export class FiltrosComponent implements OnInit {
  constructor(public datosSrv:datosService){};
  filtro = {
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
}
  ngOnInit(): void {}
  buscar() {
    console.log('Emito que quiero filtrar');
    this.datosSrv.cargarDatos(this.filtro);
    this.filtro={
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
  }
  }
}
