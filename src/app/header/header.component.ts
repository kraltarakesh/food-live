import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  IsmodelShow=false;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 92) {
       let element = document.getElementById('navbar');
       element.classList.add('sticky');
     } else {
      let element = document.getElementById('navbar');
        element.classList.remove('sticky');
     }
     if (window.pageYOffset > 92) {
      let element1 = document.getElementById('animateMain');
      element1.classList.add('fadeInDown');
    } else {
       let element1 = document.getElementById('animateMain');
      element1.classList.remove('fadeInDown');
    }
  }
  close() {
    this.IsmodelShow=true;// set false while you need open your model popup
   // do your more code
}
}
