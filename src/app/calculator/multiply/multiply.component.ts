import { Component ,Output,EventEmitter} from '@angular/core';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
  styleUrls: ['./multiply.component.css']
})
export class MultiplyComponent {
  screenValue=""

  @Output() childEvent = new EventEmitter();


  constructor(public calcultorService:CalculatorService){

  }

  
pressNum(value: string) {

  let check = this.calcultorService.screenValue+value

    if(check== '/'|| check === '*' ){
       return
    }


  this.screenValue = this.calcultorService.screenValue
  const PrevKey = this.screenValue[this.screenValue.length - 1];

  if (PrevKey === '/' || PrevKey === '*' || PrevKey === '-' || PrevKey === '+' || PrevKey === '.') {
    let oldValue = this.calcultorService.screenValue;

    this.childEvent.emit(oldValue);
  }
  else{
    
    this.screenValue = this.calcultorService.screenValue += value;
    this.childEvent.emit(this.screenValue);

  }
}



}
