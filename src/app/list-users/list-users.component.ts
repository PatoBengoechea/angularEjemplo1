import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  
  @Input() list=[];
  @Output() eliminarPersona = new EventEmitter<any>();
  @Output() modificarPassword = new EventEmitter<any>();
  id;

  constructor() { }

  ngOnInit() {
  }


  modificarPersona(event, id){
    this.eliminarPersona.emit(id);
  }
  modificarPass(event, id){
    this.modificarPassword.emit(id);
  }
}
