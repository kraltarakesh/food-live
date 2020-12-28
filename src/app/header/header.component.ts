import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
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
     if (window.pageYOffset > 136) {
       let element = document.getElementById('navbar');
       element.classList.add('sticky');
       let element1 = document.getElementById('animateMain');
      element1.classList.add('fadeInDown');
     } else {
      let element = document.getElementById('navbar');
        element.classList.remove('sticky');
        let element1 = document.getElementById('animateMain');
      element1.classList.remove('fadeInDown');
     }
  }
}
