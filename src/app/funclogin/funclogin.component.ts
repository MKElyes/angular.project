import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funclogin',
  templateUrl: './funclogin.component.html',
  styleUrls: ['./funclogin.component.css']
})
export class FuncloginComponent implements OnInit {
  login(){
    console.log('yoo')
  }
  constructor() { }

  ngOnInit() {
  }

}
