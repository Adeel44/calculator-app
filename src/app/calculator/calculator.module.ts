import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { ContainerComponent } from './container/container.component';
import { DisplayComponent } from './display/display.component';
import { AddComponent } from './add/add.component';
import { MultiplyComponent } from './multiply/multiply.component';
import { EqualComponent } from './equal/equal.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormsModule } from '@angular/forms';
import { CalculatorButtonComponent } from './buttons/calculator-button/calculator-button.component';
import { ButtonsContainerComponent } from './buttons/buttons-container/buttons-container.component';


console.log("cal")

@NgModule({
  declarations: [
    ContainerComponent,
    DisplayComponent,
    AddComponent,
    
    MultiplyComponent,
    EqualComponent,
    ButtonsComponent,
    CalculatorButtonComponent,
    ButtonsContainerComponent
  ],
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    FormsModule,
    
    
  ]
})
export class CalculatorModule { }
