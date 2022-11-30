import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
 
})
export class ListadoComponent  {
  deleteHeroe: string = '';
  
  heroes:string[]=[
    'Spiderman',
    'IronMan',
    'Hulk',
    'Thor'
  ];

  borrarHeroe(){
    this.deleteHeroe=this.heroes.shift() || '';
   
  
  }
  
  

}
