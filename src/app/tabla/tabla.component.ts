import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {
  @Input () datos_clientes_tabla:any;
  page: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
