import { Component, Input, OnInit, EventEmitter } from '@angular/core';
//CHILD COMPONENT
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit 
{
@Input() footerSection: string  = 'Hello, This page is created by Marina Pajvancic'; //STEP 2-create var @Input()-this will appear on webpage

  //constructor() { } doesnt appaer contructor is needed

  ngOnInit() {
  }

}

