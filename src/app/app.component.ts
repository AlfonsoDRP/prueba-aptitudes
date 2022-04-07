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
  
 

  ngOnInit(): void {
  }

}
