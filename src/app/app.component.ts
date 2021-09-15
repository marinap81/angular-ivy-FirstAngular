import { Component, Input, VERSION } from '@angular/core';
import { Car } from './Components/Models/car';
import { TextbodyComponent } from './Components/textbody/textbody.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
//PARENT COMPONENT
@Component({
  selector: 'my-app', //can change this name
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  footer1: string; //STEP 1 titlevar is the variable  that is declared

  textbody1: string; 

  header1: string;

  selectedCar: Car;//1

  carList: Car[] = // 2 declared and initialized from  parent app. this will sit in the textbody
  [
    { carName: 'Lightning McQueen', carColour: 'Red'},
    { carName: 'Luigi', carColour: 'sage-yellow'},
    { carName: 'Flo', carColour: 'blue'}
  ];


  handleBtnClick() //reference 2nd step in app.component.html
  {
    console.log('testing Button Click');
  }
}

