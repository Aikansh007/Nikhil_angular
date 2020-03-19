import { Injectable } from '@angular/core';
import { DropDownMenuService } from './drop-down-menu.service';
import { Observable } from 'rxjs';

@Injectable()
export class DropDown {

dropDownData1=null;
dropDownData2=null;
modeldate=null;

dropDownData11=[];
dropDownData22=[];
modeldate11="";
modeldate22="";
//for use 
    childData11: any;
    childDataDoc11: any;
    childDataDate11:any
   
    allDatacopy: any="";

    constructor(private dropDownService:DropDownMenuService) { 
    
    
   
    }
  
   

dataSorting(name) :Observable <any>{
        let AllDataREQ :any;


    // debugger;
   this.childData11=this.dropDownData22.toString();


   this.childDataDoc11=this.dropDownData11.toString();



   this.childDataDate11=this.modeldate11;
   console.log(this.childData11+" dropDown");
  // this.allDatacopy=this.allData;
 
 console.log(name.nextId);
 console.log("hello from dataSorting")


 this.dropDownService.urrComplete1(this.childData11,name.nextId,this.childDataDoc11,this.childDataDate11);
this.dropDownService.findDataWithREQ().subscribe(
  response1=>{
     AllDataREQ=response1;
    if(response1){
      console.log(response1);
      console.log(response1[0]);
      console.log(response1[1]);
     
    }
    this.allDatacopy=AllDataREQ;
    
  }
)



return this.allDatacopy;

}



}



