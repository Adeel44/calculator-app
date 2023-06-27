import { Component } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})

export class ContainerComponent {


  screenValue = "";

  constructor(public calcultorService: CalculatorService) {

  }



  // childNumData(value: any) {
  //   this.screenValue = value;
  //   console.log(value)

  // }



  childData(event: any) {
    // this.screenValue=value
    if (event.type == 'operator') {
      let screenValue = event.label
      screenValue = screenValue.toString()
      this.screenValue += screenValue;
    }


    if (event.label == '=') {
      debugger

      this.screenValue = this.calcultorService.screenValue;

      try {
        let result = (eval(this.screenValue))
        this.screenValue = result
        if (result === undefined) {
          this.screenValue = ""

        }

      } catch (error) {
        alert('Invalid opertor error');
      }

    }



  }



  onButtonClick(event: any) {

    //debugger
    if (event.type == 'number') {
      let screenValue = event.label
      screenValue = screenValue.toString()
      this.screenValue += screenValue;
    }

    if (event.label === 'C') {

      this.screenValue = ""
    }


  }


}
