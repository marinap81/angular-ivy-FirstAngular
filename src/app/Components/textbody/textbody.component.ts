import { Component, OnInit, Input, Output } from '@angular/core';
import { Car } from '../../Components/Models/car';


@Component({
  selector: 'app-textbody',
  templateUrl: './textbody.component.html',
  styleUrls: ['./textbody.component.css']
})
export class TextbodyComponent implements OnInit {
@Input() textbodyinfo: string;
@Input() titlevar: string;
@Input() carListinfo: Car[]; //3. carlist is now created as a variable input so html knows to display it
@Input() selectedCarvar: Car []; //4

  
  constructor(){}

ngOnInit() {
this.selectedCarvar = this.carListinfo; //5
  }
}

  
