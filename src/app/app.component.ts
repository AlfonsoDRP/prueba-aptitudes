import { Component, OnInit } from '@angular/core';
import { Tarea } from './models/tarea/tarea.model';
import { datosService } from './services/datos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'prueba-aptitudes';
  filtro: any;
  datos_clientes:Tarea[];
  constructor (public datosSrv:datosService){
    this.datos_clientes = datosSrv.datos_clientes;
    this.filtro = datosSrv.filtro;
  }
  tareas: Tarea[] = [];
  array_filtrado: Tarea[] = [];

  ngOnInit(): void {
    this.datos_clientes.forEach((s) => {
      this.tareas.push(new Tarea(s));
    });
    this.tareas.sort(function (fecha1, fecha2) {
      if (fecha1.fecha > fecha2.fecha) {
        return 1;
      } else if (fecha1.fecha < fecha2.fecha) {
        return -1;
      } else {
        return 0;
      }
    });

    this.array_filtrado = this.tareas;
  }

  compararFechas(index: number): void {
    if (this.filtro.fecha.length > 0) {
      if (
        this.filtro[0].toString() <= this.tareas[index].fecha.toString() &&
        this.tareas[index].fecha.toString() <= this.filtro[1].toString()
      ) {
        console.log('he filtrado la fecha');
      } else {
        console.log('no he filtrado');
      }
    }
  }
  buscarFiltroMaestro() {
    this.cargarDatos();
  }

  comprobarestado(item: String) {
    if (this.filtro.estado.pendiente) {
      if (item.toLowerCase() == 'pendiente') {
        return true;
      }
    }
    if (this.filtro.estado.recogiendo) {
      if (item.toLowerCase() == 'recogiendo') {
        return true;
      }
    }
    if (this.filtro.estado.recogida) {
      if (item.toLowerCase() == 'recogida') {
        return true;
      }
    }
    if (this.filtro.estado.desconsolidando) {
      if (item.toLowerCase() == 'desconsolidando') {
        return true;
      }
    }
    if (this.filtro.estado.desconsolidada) {
      if (item.toLowerCase() == 'desconsolidada') {
        return true;
      }
    }
    if (this.filtro.estado.entregada) {
      if (item.toLowerCase() == 'entregada') {
        return true;
      }
    }
    if (this.filtro.estado.incidencia) {
      if (item.toLowerCase() == 'incidencia') {
        return true;
      }
    }
    if (
      this.filtro.estado.pendiente == false &&
      this.filtro.estado.recogiendo == false &&
      this.filtro.estado.recogida == false &&
      this.filtro.estado.desconsolidando == false &&
      this.filtro.estado.desconsolidada == false &&
      this.filtro.estado.entregada == false &&
      this.filtro.estado.incidencia == false
    ) {
      return true;
    }
    return false;
  }

  cargarDatos() {
    this.array_filtrado = [];
    for (let i = 0; i < this.tareas.length; i++) {
      if (
        this.tareas[i].alias_cliente
          .toLowerCase()
          .indexOf(this.filtro.cliente.toLowerCase()) >= 0
      ) {
        if (
          this.tareas[i].usuario
            .toLowerCase()
            .indexOf(this.filtro.usuario.toLowerCase()) >= 0
        ) {
          if (
            this.tareas[i].referencia
              .toLowerCase()
              .indexOf(this.filtro.referencia.toLowerCase()) >= 0
          ) {
            if (
              this.tareas[i].tipo
                .toLowerCase()
                .indexOf(this.filtro.tipos.toLowerCase()) >= 0
            ) {
              if (this.comprobarestado(this.tareas[i].estado)) {
                this.array_filtrado.push(this.datosSrv.datos_clientes[i]);
                
              }

            }
          }
        }
      }
    }
  }
}
