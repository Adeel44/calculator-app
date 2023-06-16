import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  screenValue = ""

  constructor(public calcultorService: CalculatorService) {

  }

  @Output() childEvent = new EventEmitter();


  pressNum(value: any) {
   
    let checks = this.calcultorService.screenValue + value
    if (checks == '0') {
      return
    }
    let screenValue = this.calcultorService.screenValue += value;
    console.log(screenValue)
    this.childEvent.emit(screenValue);
  }

  pressdot(value: string) {


    let check = this.calcultorService.screenValue.includes('.')

    if (check == true) {
      return
    }

    this.screenValue = this.calcultorService.screenValue
    const PrevKey = this.screenValue[this.screenValue.length - 1];
    if (PrevKey === '/' || PrevKey === '*' || PrevKey === '-' || PrevKey === '+' || PrevKey === '.') {
      let oldValue = this.calcultorService.screenValue;
      this.childEvent.emit(oldValue);
    }
    else {
      let screenValue = this.calcultorService.screenValue += value;
      this.childEvent.emit(screenValue);

    }
  }

  onButtonClick(event: any)
  {
    console.log(event)
  }


  clear() {


    let screenValue = this.calcultorService.screenValue
    screenValue = "";
    this.childEvent.emit(screenValue);

  }

}
