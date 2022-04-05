import { Component, Input, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Tarea } from '../models/tarea/tarea.model';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
})
export class TablaComponent implements OnInit {

  @Input() datos_clientes_tabla: Tarea[]=[];
  array_filtrado: any[] = [];
  page: number = 1;
  startItem:any = 0;
  endItem:any=28;

  ngOnInit(): void {
    this.page= 1;
  }

  extraerhora(fecha: String) {
    let hora_extraida = fecha.substring(11, 16);
    return hora_extraida;
  }

  pageChanged(event: PageChangedEvent): void {
    this.startItem = (event.page - 1) * event.itemsPerPage;
    this.endItem = event.page * event.itemsPerPage;
    // this.array_filtrado=this.datos_clientes_tabla.slice(this.startItem, this.endItem);
  }
}
