import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hackerkernel';
  constructor(private router : Router){}
  logout(){
    localStorage.clear();
    this.router.navigate(['../login'])
    
  }
}
