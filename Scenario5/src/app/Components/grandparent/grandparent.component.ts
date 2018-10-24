import { Component, ViewChild } from '@angular/core';
import { ParentComponent } from '../parent/parent.component'

@Component({
  selector: 'app-grandparent',
  templateUrl: './grandparent.component.html',
  styleUrls: ['./grandparent.component.css']
})
export class GrandparentComponent {

  constructor() { }

  @ViewChild(ParentComponent) parent;

  message:string;

  ngAfterViewInit() {
    this.message = this.parent.message
  }
}
