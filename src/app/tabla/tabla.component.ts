import { Component, Input, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
})
export class TablaComponent implements OnInit {
  @Input() datos_clientes_tabla: any;
  array_filtrado: any[] = [];
  page: number = 1;
  constructor() {}
  ngOnInit(): void {
    this.array_filtrado = this.datos_clientes_tabla.slice(0, 28);
  }
  extraerhora(fecha: String) {
    let hora_extraida = fecha.substring(11, 16);
    return hora_extraida;
  }
  extraerfecha(fecha: String) {
    let fecha_extraida = fecha.substring(8, 10);
    let mes_numero = fecha.substring(5, 7);
    switch (mes_numero) {
      case '01':
        fecha_extraida = fecha_extraida + ' enero';
        break;
      case '02':
        fecha_extraida = fecha_extraida + ' febrero';
        break;
      case '03':
        fecha_extraida = fecha_extraida + ' marzo';
        break;
      case '04':
        fecha_extraida = fecha_extraida + ' abril';
        break;
      case '05':
        fecha_extraida = fecha_extraida + ' mayo';
        break;
      case '06':
        fecha_extraida = fecha_extraida + ' junio';
        break;
      case '07':
        fecha_extraida = fecha_extraida + ' julio';
        break;
      case '08':
        fecha_extraida = fecha_extraida + ' sept';
        break;
      case '09':
        fecha_extraida = fecha_extraida + ' oct';
        break;
      case '10':
        fecha_extraida = fecha_extraida + ' nov';
        break;
      case '11':
        fecha_extraida = fecha_extraida + ' dic';
        break;
      case '12':
        fecha_extraida = fecha_extraida + ' enero';
        break;
    }
    fecha_extraida = fecha_extraida + ' ´' + fecha.substring(2, 4);
    return fecha_extraida;
  }
  observaciones(item: any) {
    if (item.observacion != '') {
      alert(item.observacion);
    } else {
      alert('Sin observaciones');
    }
  }
  startItem:any;
  endItem:any;
  pageChanged(event: PageChangedEvent): void {
    this.startItem = (event.page - 1) * event.itemsPerPage;
    this.endItem = event.page * event.itemsPerPage;
    this.array_filtrado = this.datos_clientes_tabla.slice(this.startItem, this.endItem);
  }
}
