import { Component, EventEmitter, Input, Output } from '@angular/core';

interface IButtonInput
{
  type: string, 
  label: string | number
}

@Component({
  selector: 'app-calculator-button',
  templateUrl: './calculator-button.component.html',
  styleUrls: ['./calculator-button.component.css']
})
export class CalculatorButtonComponent {
  @Input() metadata!: IButtonInput;
  @Output() buttonClick = new EventEmitter<IButtonInput>();

  handleOnClick()
  {
    this.buttonClick.emit(this.metadata)
  }
}
