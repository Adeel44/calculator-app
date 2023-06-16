import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {


  screenValue= "";
  curreentOpertor="";
  


  childNumData(value:any){
   // debugger
    this.screenValue = value;
    console.log(value)

  }
  childData(value:any){
    this.screenValue=value

  }

  childDatafMultiply(value:any){
 //   debugger
    this.screenValue=value

  }




  // screenValue:any;
  // childNumberData:any;
  // curreentOpertor:any;





  // childProperty(value:any){
  //  // console.log(value)
  //   this.screenValue = value;

  //   console.log("child number is"+value)

  // }

  // childNumData(value:any){
  //   //debugger
  //   this.childNumberData = value;
  //   console.log(value)
  //  console.log("child number is"+value)

  // }

  // childData(value:any){
  //   this.curreentOpertor=value
  //  // this.childNumberData =value
  
  //  // alert(value)

  // }



  
  


 


}
