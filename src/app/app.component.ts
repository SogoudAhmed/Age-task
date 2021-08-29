import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

public age = any;

  calculateAge(){
  const input = document.getElementById('birthday') as HTMLInputElement;
    const value = input.value;
    this.age = value;
    }

}

