import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { ContainerComponent } from './container/container.component';
import { DisplayComponent } from './display/display.component';
import { AddComponent } from './operator-container/add/add.component';
import { ButtonsComponent } from './button-container/buttons/buttons.component';
import { FormsModule } from '@angular/forms';
import { ButtonContainerComponent } from './button-container/button-container.component';
import { OperatorContainerComponent } from './operator-container/operator-container.component';


console.log("calculator module")

@NgModule({
  declarations: [
    ContainerComponent,
    DisplayComponent,
    AddComponent,
    ButtonsComponent,
    ButtonContainerComponent,
    OperatorContainerComponent,
    
  ],
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    FormsModule,
    
    
  ]
})
export class CalculatorModule { }
