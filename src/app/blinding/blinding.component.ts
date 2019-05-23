import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blinding',
  templateUrl: './blinding.component.html',
  styleUrls: ['./blinding.component.css']
})
export class BlindingComponent implements OnInit {
imgsrc= 'https://www.sitepen.com/blog/wp-content/uploads/2017/09/blog.jpg';
title = 'angular';
col = 5;
  constructor() { }

  ngOnInit() {
  }

}
