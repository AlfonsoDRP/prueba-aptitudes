import { Component, Input, OnInit, } from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {
  @Input () datos_en_filtro :any;
  cliente:String="";
  usuario:String="";
  referencia:String="";
  fecha:Date = new Date();
  tipos:String="";
  constructor() {
  }
  ngOnInit(): void {
  }

}
