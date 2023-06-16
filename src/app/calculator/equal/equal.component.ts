import { Component,Output, EventEmitter } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-equal',
  templateUrl: './equal.component.html',
  styleUrls: ['./equal.component.css']
})
export class EqualComponent {

  screenValue = "";
  result="";

  @Output() childEvent = new EventEmitter();



  constructor(public calcultorService:CalculatorService){

  }


  calculateValue(){
  // debugger
    this.screenValue = this.calcultorService.screenValue;
   
    try{
      this.result = (eval(this.screenValue))
      console.log(this.result)
     this.childEvent.emit(this.result);
    }catch (error) {
      alert('Invalid opertor error');
    }
    
    // this.result = (eval(this.screenValue))
    
    //  console.log(this.result)
    //  this.childEvent.emit(this.result);
    
     
    
  }

  

}
