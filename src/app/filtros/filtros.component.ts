import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {
  @Input () datos_en_filtro :any;
  @Output () emisor_filtro = new EventEmitter();
  cliente:String="";
  usuario:String="";
  referencia:String="";
  fecha:Date = new Date();
  tipos:String="";
  estados:String="";
  filtro:any={
    'cliente':'',
    'usuario':'',
    'referencia':'',
    'tipos':''
  };
  constructor() {
  }
  ngOnInit(): void {
  }
  asigna_filtro(){
    
  }
  emitir_busqueda(){

    if(this.cliente.length > 0){
      this.filtro.cliente=this.cliente;
    }
    if(this.usuario.length > 0){
      this.filtro.usuario=this.usuario;
    }
    if(this.referencia.length > 0){
      this.filtro.referencia=this.referencia;
    }
    if(this.tipos.length > 0){
      this.filtro.tipos=this.tipos;
    }
    if(this.estados.length > 0){
      this.filtro.estados=this.estados;
    }
    this.emisor_filtro.emit(this.filtro);
  }
}
