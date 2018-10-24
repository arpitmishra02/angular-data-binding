import { Component, ViewChild, AfterViewInit} from '@angular/core';
import { ChildComponent } from '../child/child.component'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit{

  constructor() { }

  @ViewChild(ChildComponent) child;

  message:string;

  ngAfterViewInit() {
    this.message = this.child.message
  }
}
