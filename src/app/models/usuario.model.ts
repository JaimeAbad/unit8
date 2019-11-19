export class UsuarioModel {
  id: string;
  nombre:string;
  apellido:string;
  edad:number;
  //true:casado, false: soltero
  estadoCivil: boolean = false;
}
