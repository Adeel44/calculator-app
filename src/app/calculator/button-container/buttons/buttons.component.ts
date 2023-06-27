import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonInput, CalculatorService } from '../../services/calculator.service';

// interface ButtonInput
// {
//   type: string, 
//   label: string|number
// }


@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  screenValue = ""
  
  
  @Input() metadata!: ButtonInput;
  @Input() metadata5!: ButtonInput;
  @Input() metadata6!: ButtonInput;
  @Input() metadata7!: ButtonInput;
  @Input() metadata8!: ButtonInput;
  @Input() metadata9!: ButtonInput;
  @Input() metadata0!: ButtonInput;
  @Input() metadata1!: ButtonInput;
  @Input() metadata2!: ButtonInput;
  @Input() metadata3!: ButtonInput;
  @Input() metadatadot!: ButtonInput;
  @Input() metadataclear!: ButtonInput;



  constructor(public calcultorService: CalculatorService) {

    
  }

  //@Output() childEvent = new EventEmitter();

   @Output() childEvent = new EventEmitter<ButtonInput>();



  // pressdot(value: string) {


  //   // let check = this.calcultorService.screenValue.includes('.')

  //   // if (check == true) {
  //   //   return
  //   // }

  //   this.screenValue = this.calcultorService.screenValue
  //   const PrevKey = this.screenValue[this.screenValue.length - 1];
  //   if (PrevKey === '/' || PrevKey === '*' || PrevKey === '-' || PrevKey === '+' || PrevKey === '.') {
  //     let oldValue = this.calcultorService.screenValue;
  //     this.childEvent.emit(oldValue);
  //   }
  //   else {
  //     let screenValue = this.calcultorService.screenValue += value;
  //     this.childEvent.emit(screenValue);

  //   }
  // }



  handleOnClear() {


    // let screenValue = this.calcultorService.screenValue
    // screenValue = "";
    // this.childEvent.emit(screenValue);
    this.childEvent.emit(this.metadataclear)

  }


  handleOnClick(){
    
    // let screenValue = this.calcultorService.screenValue += this.metadata.label;
    // this.childEvent.emit(screenValue)
    this.childEvent.emit(this.metadata)
  }
  handleOnClick5(){
   

    // let screenValue = this.calcultorService.screenValue
    // let str =screenValue.toString()
    // str = str += this.metadata5.label;
    // this.childEvent.emit(str)


    // let screenValue = this.calcultorService.screenValue += this.metadata5.label;
    // this.childEvent.emit(screenValue)
    
    this.childEvent.emit(this.metadata5)

    
  }
  handleOnClick6(){
    debugger
    

    // let screenValue = this.calcultorService.screenValue += this.metadata6.label;
    // this.childEvent.emit(screenValue)

    this.childEvent.emit(this.metadata6)
  }

  handleOnClick7(){
    

    // let screenValue = this.calcultorService.screenValue += this.metadata7.label;
    // this.childEvent.emit(screenValue)
       this.childEvent.emit(this.metadata7)

  }
  handleOnClick8(){

    this.childEvent.emit(this.metadata8)
  }
  handleOnClick9(){

    this.childEvent.emit(this.metadata9)
  }
  handleOnClick1(){

    this.childEvent.emit(this.metadata1)
  }
  handleOnClick2(){

    //debugger
    this.childEvent.emit(this.metadata2)

  }
  handleOnClick3(){
    this.childEvent.emit(this.metadata3)

  }
  handleOnClick0(){
    this.childEvent.emit(this.metadata0)
  }

  onClickdot(){
    

    this.screenValue = this.calcultorService.screenValue
    const PrevKey = this.screenValue[this.screenValue.length - 1];
    if (PrevKey === '/' || PrevKey === '*' || PrevKey === '-' || PrevKey === '+' || PrevKey === '.') {
      // let oldValue = this.calcultorService.screenValue;
      // this.childEvent.emit(oldValue);
      return
    }
    else {
      // let screenValue = this.calcultorService.screenValue += this.metadatadot.label;
       this.childEvent.emit(this.metadatadot)

    }

  }

  

  




  
  


}
