import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent {

  constructor() { }

  values ='';

  loadComponent;

  getvalue(value){
    this.values = value;
    return this.values;
  }

  loadMyChild(){
  this.loadComponent = true;
  }
 
}
