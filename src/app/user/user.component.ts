import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Output() newPersona = new EventEmitter<any>();
  @Input() persona: any = {};
  list=[];
  
  nombre;
  password;
  mail;
  constructor() { }

  ngOnInit() {
    this.nombre = this.persona.nombre;
    this.mail = this.persona.mail;
  }

  add(event){
    let persona: any={};
    persona.nombre = this.nombre;
    persona.password = this.password;
    persona.mail = this.mail;
    //persona.id = this.id;
    //this.id++;
    this.newPersona.emit(persona);
  }

}
