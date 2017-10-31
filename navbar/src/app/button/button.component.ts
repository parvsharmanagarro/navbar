import { Component, OnInit } from '@angular/core';
var count:number=1;
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent implements OnInit {
content:string;
  constructor() {this.content="page"+count;
  count++;}

  ngOnInit() {
  }

}
