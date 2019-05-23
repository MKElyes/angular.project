import { Component, OnInit } from '@angular/core';
// ngfor
// const HEROES = [
//   {id: 1, name:'Superman'},
//   {id: 2, name:'Batman'},
//   {id: 5, name:'BatGirl'},
//   {id: 3, name:'Robin'},
//   {id: 4, name:'Flash'}
// ];

@Component({
  selector: 'app-ngfor-switch-if',
  templateUrl: './ngfor-switch-if.component.html',
  styleUrls: ['./ngfor-switch-if.component.css']
})

export class NgforSwitchIfComponent implements OnInit {
  // heroes = HEROES;
  // people: any[] = [
  //   {
  //     "name": "Douglas  Pace",
  //     "age": 35
  //   },
  //   {
  //     "name": "Mcleod  Mueller",
  //     "age": 32
  //   },
  //   {
  //     "name": "Day  Meyers",
  //     "age": 21
  //   },
  //   {
  //     "name": "Aguirre  Ellis",
  //     "age": 34
  //   },
  //   {
  //     "name": "Cook  Tyson",
  //     "age": 32
  //   }
  // ];
  people: any[] = [
    {
      "name": "Douglas  Pace",
      "age": 35,
      "country": 'MARS'
    },
    {
      "name": "Mcleod  Mueller",
      "age": 32,
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "age": 21,
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "age": 34,
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "age": 32,
      "country": 'USA'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
