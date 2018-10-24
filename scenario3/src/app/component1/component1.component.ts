import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component1',
  template: `
            <input type="text" #input> 
            <button (click)= "onAddItem(input.value)">Add data</button>
            <app-component2 [childMessage]="parentMessage"></app-component2>
            `,
  styleUrls: [ ]
})

export class Component1Component {
  parentMessage : string;
  constructor() { }

  onAddItem(data:string){
    this.parentMessage= data;
  }

}
