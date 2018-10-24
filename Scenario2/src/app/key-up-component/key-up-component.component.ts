import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-up-component',
  templateUrl: './key-up-component.component.html',
  styleUrls: ['./key-up-component.component.css']
})
export class KeyUpComponentComponent{
  values = '';
  onKey(value: string) {
    this.values = value + '';
  }
}
