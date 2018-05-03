import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list=[];
  descripcion;
  id = 3;
  constructor() { 
   let tarea: any={};
    let tarea2: any = {};
    tarea.descripcion= "Comprar asado";
    tarea.id= 1;
    tarea.realizado = true;
    tarea2.descripcion ="Comprar lechuga";
    tarea2.id = 2;
    tarea2.realizado= false;
    this.list.push(tarea);
    this.list.push(tarea2);
    }

  

  ngOnInit() {
   
  }

  add(descripcion: string){
    if (descripcion === undefined || descripcion === "") {
      alert("No ha ingresado ninguna tarea!");
    }
    else{
      let tarea: any = {};
      tarea.descripcion = descripcion;
      tarea.id = this.id;
      tarea.realizado = false;
      this.id++;
      this.list.push(tarea);
      for (let index = 0; index < this.list.length; index++) {
      console.log(tarea.id); 
      this.descripcion = '';
    }


    }
  }
  marcarRealizado(id){
    for (let index = 0; index < this.list.length; index++) {
      if (this.list[index].id === id) {
        this.list[index].realizado = true;
      }
    }
    for (let index = 0; index < this.list.length; index++) {
      console.log("Tarea realizada? ", this.list[index].realizado)
    }
    }
}
