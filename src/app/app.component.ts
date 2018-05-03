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

  add(persona){
      this.list.push(persona);
      console.log(this.list);

  }
}
