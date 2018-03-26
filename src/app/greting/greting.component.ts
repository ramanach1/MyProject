import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greting',
  templateUrl: './greting.component.html',
  styleUrls: ['./greting.component.css']
})
export class GretingComponent implements OnInit {

  persons: {name: String}[] = [{name: 'Roman'}, {name: 'Ilya'}];
  constructor() {

   }



  ngOnInit() {
  }

}
