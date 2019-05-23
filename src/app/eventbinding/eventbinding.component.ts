import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {
login() {
  alert ('dazdza');
}
name: string = '';
 
setValue() { this.name = 'Nancy'; }
val1='';
val2='';
add(){
  alert(this.val1+this.val2)
}
  constructor() { }

  ngOnInit() {
  }

}
