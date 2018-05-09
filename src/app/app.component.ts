import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  nombre;
  mail;
  id = 0;
  password;
  list = [];
  perAModificar : any={};

  add(persona){
      this.list.push(persona);
      console.log(this.list);
  }
  eliminarPersona(id){
    for (let index = 0; index < this.list.length; index++) {
      if (this.list[index] === id) {
        this.list[index].pop();
      }
      
    }
  }
  modificarPassword(id){
    for (let index = 0; index < this.list.length; index++) {
      if(this.list[index]===id){
        let persona: any ={};
        persona.id = id;
        persona.nombre = this.list[index].nombre;
        persona.password = this.list[index].password;
        this.perAModificar=persona;
      }
      
    }
  }
}
