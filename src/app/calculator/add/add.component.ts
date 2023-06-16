import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnChanges, OnInit {
  screenValue!: string;


  constructor(public calcultorService: CalculatorService) {

  }
  ngOnChanges(changes: SimpleChanges): void {

    console.log("changes")
  }
  ngOnInit(): void {
    console.log("Oninit")
  }



  @Output() childEvent = new EventEmitter();



  

  pressNum(value: any) {
    debugger
    this.screenValue = this.calcultorService.screenValue
    const PrevKey = this.screenValue[this.screenValue.length - 1];
    if (PrevKey === '/' || PrevKey === '*' || PrevKey === '-' || PrevKey === '+' || PrevKey === '.') {
      let current = this.calcultorService.screenValue;

      this.childEvent.emit(current);
    }
    else {
      this.screenValue = this.calcultorService.screenValue += value;
      this.childEvent.emit(this.screenValue);

    }
  }









}
