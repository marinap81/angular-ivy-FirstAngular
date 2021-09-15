import { Component, OnInit, Input } from '@angular/core';
//metadata
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] //array can have multiple files
})
export class HeaderComponent implements OnInit { 
  @Input() headertext: string = "This is the Header";
  constructor() { }

  ngOnInit() {
  }

 

}