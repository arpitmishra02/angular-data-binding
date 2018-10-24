import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component2',
  template: `
         <h2> {{childMessage}}</h2>
            `,
  styleUrls: [ ]
})
export class Component2Component {
 
  @Input() childMessage: string;
  constructor() { }


}
