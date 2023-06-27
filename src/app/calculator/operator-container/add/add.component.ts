import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { ButtonInput, CalculatorService } from '../../services/calculator.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnChanges, OnInit {
  screenValue!: string;
  result="";


  constructor(public calcultorService: CalculatorService) {

  }
  ngOnChanges(changes: SimpleChanges): void {

    console.log("changes")
  }
  ngOnInit(): void {
    console.log("Oninit")
  }

  @Input() metadataplus!: ButtonInput;
  @Input() metadataminus!: ButtonInput;
  @Input() metadatamulty!: ButtonInput;
  @Input() metadatadivide!: ButtonInput;
  @Input() metadatacalculate!: ButtonInput;


  @Output() childEvent = new EventEmitter();



  calculateValue(){
    debugger
      // this.screenValue = this.calcultorService.screenValue;
     
      // try{
      //   this.result = (eval(this.screenValue))
      //   console.log(this.result)
      //  this.childEvent.emit(this.result);
      // }catch (error) {
      //   alert('Invalid opertor error');
      // }

      this.childEvent.emit(this.metadatacalculate);
      
      
    }

    handleOnClickPlus(){
    this.screenValue = this.calcultorService.screenValue
    const PrevKey = this.screenValue[this.screenValue.length - 1];
    if (PrevKey === '/' || PrevKey === '*' || PrevKey === '-' || PrevKey === '+' || PrevKey === '.') {
      // let current = this.calcultorService.screenValue;
      // this.childEvent.emit(current);
      return
    }
    else {
      this.childEvent.emit(this.metadataplus);

    }


    }
    handleOnClickMinus(){
      this.screenValue = this.calcultorService.screenValue
    const PrevKey = this.screenValue[this.screenValue.length - 1];
    if (PrevKey === '/' || PrevKey === '*' || PrevKey === '-' || PrevKey === '+' || PrevKey === '.') {
      // let current = this.calcultorService.screenValue;
      // this.childEvent.emit(current);
      return
    }
    else {
      this.childEvent.emit(this.metadataminus);

    }

    }

    handleOnClickMulti(){

      
     
      this.screenValue = this.calcultorService.screenValue
      const PrevKey = this.screenValue[this.screenValue.length - 1];
      if (PrevKey === '/' || PrevKey === '*' || PrevKey === '-' || PrevKey === '+' || PrevKey === '.') {
        return
      }
      else {
        this.childEvent.emit(this.metadatamulty);
  
      }

    }
    handleOnClickDivide(){
      this.screenValue = this.calcultorService.screenValue
      const PrevKey = this.screenValue[this.screenValue.length - 1];
      if (PrevKey === '/' || PrevKey === '*' || PrevKey === '-' || PrevKey === '+' || PrevKey === '.') {
        // let current = this.calcultorService.screenValue;
        // this.childEvent.emit(current);
        return
      }
      else {
        this.childEvent.emit(this.metadatadivide);
  
      }

    }

  

  







}
