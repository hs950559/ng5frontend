import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent implements OnInit {
  contactMethods = [
    { id: 1, name: 'phone' },
    { id: 2, name: 'email' },
    { id: 3, name: 'Fax' }
  ];

  constructor() { }

  ngOnInit() {
  }

  ontdfSubmit(value) {
    console.log(value);
  }

}
