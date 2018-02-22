import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  get x(){
    return this.title;
  }

  set x(title){
    this.title = title;
  }
  myTest(){
    enum Colors { Red, Green=4, Blue};
    let myName;
    myName = 'Hemant';
    console.log((<string>myName).toUpperCase()); 
  }

  constructor(){
    // this.myTest();
  }
}

let t = new AppComponent();

console.log(t.x);
t.x = 'pappa';
console.log(t.x);

