import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
usuario: UsuarioModel = new UsuarioModel();
  constructor() { }

  ngOnInit() {
  }

  guardar( form: NgForm) {
    console.log(form);
    console.log(this.usuario);
  }

}
