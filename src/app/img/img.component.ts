import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {
imgsrc = 'https://i.udemycdn.com/course/750x422/1455016_0b2d_2.jpg';
  constructor() { }

  ngOnInit() {
  }

}
