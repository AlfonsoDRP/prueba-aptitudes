export class Tarea {
  public id: string;
  public referencia: string;
  public logo: string;
  public usuario: string;
  public observacion: string;
  public cantidad: string;
  public estado: string;
  public fecha: string;
  public tipo: string;
  public codigo_cliente: string;
  public alias_cliente: string;

  constructor(json: any) {
    this.id = json.id ?? '';
    this.referencia = json.referencia ?? '';
    this.logo = json.logo ?? '';
    this.usuario = json.usuario ?? '';
    this.observacion = json.observacion ?? '';
    this.cantidad = json.cantidad ?? '';
    this.estado = json.estado ?? '';
    this.fecha = json.fecha ?? '';
    this.tipo = json.tipo ?? '';
    this.codigo_cliente = json.codigo_cliente ?? '';
    this.alias_cliente = json.alias_cliente ?? '';
  }

  extraerfecha() {
    let fecha_extraida = this.fecha.substring(8, 10);
    let mes_numero = this.fecha.substring(5, 7);
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
        fecha_extraida = fecha_extraida + ' ago';
        break;
      case '09':
        fecha_extraida = fecha_extraida + ' sept';
        break;
      case '10':
        fecha_extraida = fecha_extraida + ' oct';
        break;
      case '11':
        fecha_extraida = fecha_extraida + ' nov';
        break;
      case '12':
        fecha_extraida = fecha_extraida + ' dic';
        break;
    }
    fecha_extraida = fecha_extraida + ' ´' + this.fecha.substring(2, 4);
    return fecha_extraida;
  }
}


