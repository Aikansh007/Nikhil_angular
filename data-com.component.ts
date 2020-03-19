import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { DropDownMenuService } from '../drop-down-menu.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { DropDown } from '../drop-down';


@Component({
  selector: 'app-data-com',
  templateUrl: './data-com.component.html',
  styleUrls: ['./data-com.component.css']
})

export class DataComComponent implements OnInit {

 @Output() dropdownCreated=new EventEmitter<{any}>();
  
 @Output() dropdownCreated1=new EventEmitter<{any}>();
 
 @Output() dropdownCreated2=new EventEmitter<{any}>();
 dropDown :Set<String>
dropDownType:Set<String>
  count: number;
   loadComponent=false;
checkboxValue=false;
   childDAta;
  childData1

childData11;
 checkedvar=[];
 checkedvar1=[]
checkedCount=0;
checkedCount1=0;
  constructor(private dropDownService:DropDownMenuService,private router:Router,private dd:DropDown) {
    this.count=0;
    
   }
    
   ngOnChanges1(event){
     
     console.log(event.target.value);
     this.dd.modeldate=event.target.value;
     this.dd.modeldate11=event.target.value
    console.log(this.dd.modeldate11);
    this.dropdownCreated2.emit();
}

ngOnChanges2(event){
     
  console.log(event.target.value);
  this.dd.modeldate=event.target.value;
  this.dd.modeldate22=event.target.value
 console.log(this.dd.modeldate22);
 this.dropdownCreated2.emit();
}


  ngOnInit(): void {
    this.dropDownService.findAll().subscribe(
      response=>{
        this.dropDown=response;
        if(response){
          console.log(response);
          console.log(response[0]);
          console.log(response[1]);
        }
      }
    )
        this.dropDownService.findAll1().subscribe(
          response1=>{
            this.dropDownType=response1;
            if(response1){
              console.log(response1);
              console.log(response1[0]);
              console.log(response1[1]);
            }

      }
    )
  
   
}

loadMyChildComponent(name){
//   this.childDAta=name;
//   console.log(name)
//  this.loadComponent = true;
//  this.childData11=name;

// this.dd.dropDownData1=name;




var a=this.checkedvar1.indexOf(name);
if(a<0){
  this.checkedvar1.push(name);
  this.dd.dropDownData22.push(name);
}else {
  var check = (<HTMLInputElement>document.getElementById(name)).checked=false ;   
  this.checkedvar1.splice(a,1);
  this.dd.dropDownData22.splice(a,1);
  console.log(this.dd.dropDownData22);
}

this.checkedvar1.forEach(element => {
  console.log(element);
  (<HTMLInputElement>document.getElementById(element)).checked=true;
  
  
});
this.dropdownCreated.emit();
}






// loadMyChildComponent1(name){
//   this.checkedCount++;
//   if(this.checkedCount==1){
// this.checkedvar.push(name);
  
// document.getElementById(name).checked=true;
//   this.dd.dropDownData2=name;
// }else{
// this.checkedvar.push(name);
// document.getElementById(this.checkedvar[0]).checked=false;
// document.getElementById(this.checkedvar[1]).checked=true;
// this.checkedvar.shift();

// this.dd.dropDownData2=name;
// }





// }

loadMyChildComponent1(name){

var a=this.checkedvar.indexOf(name);
if(a<0){
  this.checkedvar.push(name);
  this.dd.dropDownData11.push(name);
}else {
  (<HTMLInputElement>document.getElementById(name)).checked=false;
  this.checkedvar.splice(a,1);
  this.dd.dropDownData11.splice(a,1);
  console.log(this.dd.dropDownData11);
}

this.checkedvar.forEach(element => {
  console.log(element);
  (<HTMLInputElement>document.getElementById(element)).checked=true;
  
  
});
this.dropdownCreated1.emit();
}

}
