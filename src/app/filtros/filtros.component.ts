import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../models/tarea/tarea.model';
import { datosService } from '../services/datos.service';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss'],
})
export class FiltrosComponent implements OnInit {
  @Output() emisor_filtro = new EventEmitter();
  constructor(public datosSrv:datosService){};
  ngOnInit(): void {}
  buscar() {
    console.log('Emito que quiero filtrar');
    console.log(this.datosSrv.filtro);
    this.emisor_filtro.emit();
    this.datosSrv.filtro={
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
