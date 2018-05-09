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
      if (persona.id !== undefined) {
        for (let index = 0; index < this.list.length; index++) {
          if (persona.id === this.list[index].id) {
            this.list.splice(index, 1);
          }
        }
      }
      persona.id = this.id;
      this.id++;
      this.list.push(persona);
      console.log(this.list);
  }
  eliminarPersona(id){
    for (let index = 0; index < this.list.length; index++) {
      if (this.list[index].id === id) {
        this.list.splice(index, 1);
      }
      console.log(this.list);
    }
  }
  modificarPassword(id){
    for (let index = 0; index < this.list.length; index++) {
      if(this.list[index].id===id){
        let persona: any ={};
        persona.id = id;
        persona.nombre = this.list[index].nombre;
        persona.mail = this.list[index].mail;
        persona.password = this.list[index].password;
        this.perAModificar=persona;
      }
      
    }
    console.log(this.list);
  }
}
