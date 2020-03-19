import { Component, OnInit, Input, Pipe } from '@angular/core';
import { DropDownMenuService } from '../drop-down-menu.service';
import { DropDown } from '../drop-down';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-data-tab',
  templateUrl: './data-tab.component.html',
  styleUrls: ['./data-tab.component.css']
})


export class DataTabComponent implements OnInit {
  tabSetCategory;
  allData;
  allDatacopy;
  allDataAUD;
  allDataFAQ;
  allDataCOM;
  AllDataREQ;
  copyOfallDataCopy=[];
  resList :any=[];
@Input() childMessage;
@Input('childData1') childData1 ;
childDataDoc;
childDataDate;
  
childData11;
childDataDoc11;
childDataDate11;
nameNextId="Audited Controls";
sortType:string="";
page=0;
pageSize=10;
startlimit=0;
lastLimit:number=3;
  childDataDate22: string;
  copyOfallDataCopy1=[];
  count=1;
 ret=[];
  con=false;
  constructor(private dropDownService:DropDownMenuService,private dd:DropDown,private domSanitizer: DomSanitizer) { 
    
    this.dropDownService.urrCompleteSize("","","","","","");

    this.dropDownService.findDataWithREQSize().subscribe(
      response1=>{
        this.pageSize=response1;
        if(response1){
          console.log(response1);
          console.log(response1[0]);
          console.log(response1[1]);
        }
  }
    )

    
  

   
  }
 

  ngOnInit(): void {
   
    console.log("ngoninit"+this.childMessage);

    this.dropDownService. findusersCateogory().subscribe(
      response1=>{
        this.tabSetCategory=response1;
        if(response1){
          console.log(response1);
          console.log(response1[0]);
          console.log(response1[1]);
        }
  }
    )


    this.dropDownService. findAllData().subscribe(
      response1=>{
        this.allData=response1;
        if(response1){
          console.log(response1);
          console.log(response1[0]);
          console.log(response1[1]);
          this.alldataincopy();
        }
  }
    )


    this.dropDownService. findAllDataAUD().subscribe(
      response1=>{
        this.allDataAUD=response1;
        if(response1){
          console.log(response1);
          console.log(response1[0]);
          console.log(response1[1]);
        }
  }
    )

    this.dropDownService. findAllDataFAQ().subscribe(
      response1=>{
        this.allDataFAQ=response1;
        if(response1){
          console.log(response1);
          console.log(response1[0]);
          console.log(response1[1]);
        }
  }
    )
    this.dropDownService. findAllDataCOM().subscribe(
      response1=>{
        this.allDataCOM=response1;
        if(response1){
          console.log(response1);
          console.log(response1[0]);
          console.log(response1[1]);
        }
  }
    )


this.newFuncForALl();
   


}

filesDown(title){
console.log(title)
this.dropDownService.urrFiles(title);
let thefile={};
this.dropDownService.findDataWithFile().subscribe(data => thefile = new Blob([data], { type: "application/octet-stream" }), //console.log(data),
error => console.log("Error downloading the file."),
() => console.log('Completed file download.'));



}
ngOnChanges(){




// let copyOfallDataCopy1=[];

// this.con=!this.con
// console.log(this.con);
// if(this.con===true){
//   this.allDatacopy.forEach(element => {
//     copyOfallDataCopy1.push(element.series);
//     this.copyOfallDataCopy.push(element.series);
//    // (<HTMLInputElement>document.getElementById(element.title)).checked=this.con;
//   console.log(copyOfallDataCopy1) 
  
//   });
 
//   console.log("copyalldata")
  
//   console.log(this.copyOfallDataCopy)
// }
// let allDatacopy1=[];
// this.copyOfallDataCopy.sort();
// this.allDatacopy.forEach(element => {
//   allDatacopy1.push(element.series);
 
//  // (<HTMLInputElement>document.getElementById(element.title)).checked=this.co
// });

// allDatacopy1.sort();

// for(var i = 0; i < allDatacopy1.length; i += 1) {
//   if(this.copyOfallDataCopy.indexOf(allDatacopy1[i]) > -1){
//     console.log(this.copyOfallDataCopy.indexOf(allDatacopy1[i]));
//     console.log(allDatacopy1[i])
//       this.ret.pop();
//   }
// }

// console.log("ret");
// console.log(this.ret);

// this.ret.forEach(element => {
   
//   (<HTMLInputElement>document.getElementById(element)).checked=this.con;
 

// });


this.count++
console.log(this.count);
if(this.count%2==0){
  this.allDatacopy.forEach(element => {
       this.copyOfallDataCopy1.push(element.series);
console.log(this.copyOfallDataCopy1);
  })
 
} else {
 this.copyOfallDataCopy1=this.copyOfallDataCopy1.splice(0,this.copyOfallDataCopy1.length-3);
 console.log("in else");
 console.log(this.copyOfallDataCopy1.splice(0,this.copyOfallDataCopy1.length-3))   
 console.log(this.copyOfallDataCopy1)
}

this.checkedinFunc();

}

checkedinFunc(){
  console.log("checked fun")
  for(var i = 0; i < this.allDatacopy.length; i += 1) {
    console.log("for");
    console.log(this.allDatacopy[i].series)
    console.log(this.copyOfallDataCopy1.indexOf(this.allDatacopy[i].series));
    if(this.copyOfallDataCopy1.indexOf(this.allDatacopy[i].series) > -1){
  console.log("in for if");
      (<HTMLInputElement>document.getElementById(this.allDatacopy[i].series)).checked=true;
    }else{
      (<HTMLInputElement>document.getElementById(this.allDatacopy[i].series)).checked=false;
    }
  
  }
}

  async downloadAllFile(){
    let seriesVar;
   var a = document.createElement("a");

seriesVar=this.copyOfallDataCopy1.toString();
   a.href ="http://localhost:8087/downloadZip/series?series="+seriesVar;
   
   console.log(a.href)
   a.click();
   (<HTMLInputElement>document.getElementById("title")).checked=!this.con;
   this.copyOfallDataCopy.forEach(element => {
   
    (<HTMLInputElement>document.getElementById(element)).checked=!this.con;
   
  
  });
seriesVar="";
this.copyOfallDataCopy=[];
this.ngOnChanges();
  // this.copyOfallDataCopy.forEach(element => {
   
  //    ;
  //   setTimeout(() => {
  //     a.href ="http://localhost:8087/file/"+element ;
     
  //   }, 2000);

  //   console.log(a.href);
  
  // });
  
  
  // for (var i = 0; i < this.copyOfallDataCopy.length; ) { 
  

    
  //     setTimeout(function(){ 
  //        a.href ="http://localhost:8087/file/"+this.copyOfallDataCopy[i];
  //        i++;
  //     a.click();
  //     }
  //     , 3000);
    

       
         
        
  // }       




}

alldataincopy(){
  this.allDatacopy=this.allData;
}

pagination(event){
  console.log(event);
  
var p=(event.target.text)
if(typeof p === 'string'){
this.page=Number(p.slice(1,2));

}else{
  this.page=this.page+1;
}
console.log(this.page);
this.pagination2();
}

pagination2(){

// this.con=true;
 this.count=1;
//this.ngOnChanges();
this.startlimit=Number((this.page-1)*3);
console.log(this.startlimit);
this.lastLimit=3;
console.log(this.lastLimit);
this.childData11=this.dd.dropDownData22.toString();


  this.childDataDoc11=this.dd.dropDownData11.toString();



  this.childDataDate11=this.dd.modeldate11;
  this.childDataDate22=this.dd.modeldate22;
 
  this.allDatacopy=[];
  this.dropDownService.urrComplete2(this.childData11,this.nameNextId,this.childDataDoc11,this.childDataDate11,this.childDataDate22,this.sortType,this.startlimit,this.lastLimit);
  this.dropDownService.findDataWithREQ().subscribe(
    response1=>{
      this.AllDataREQ=response1;
      if(response1){
        console.log(response1);
        console.log(response1[0]);
        console.log(response1[1]);
       
      }
      this.allDatacopy=this.AllDataREQ;
    }
  )

  this.dropDownService.urrCompleteSize(this.childData11,this.nameNextId,this.childDataDoc11,this.childDataDate11,this.sortType,3);
 
    this.dropDownService.findDataWithREQSize().subscribe(
      response1=>{
        this.pageSize=response1*10/3;
       
  }
  
    )

    this.checkedinFunc();
}

onSort(sort){
console.log(sort)
this.sortType=sort;
console.log(this.sortType);
this.pagination2();
}





// dataSorting(name){
//  // debugger;
//   this.childData1=this.dd.dropDownData1;
//   this.childDataDoc=this.dd.dropDownData2;
//   this.childDataDate=this.dd.modeldate;
//   console.log(this.childData1+" dropDown");
//  // this.allDatacopy=this.allData;

// this.nameNextId=name.nextId;
// console.log("hello from dataSorting")
// console.log("child data doc before"+this.childDataDoc);
// // if(name.nextId=="Compliance Guides" || name.nextId=="Audited Controls" || name.nextId=="FAQ and White Papers" && (this.childData1==null && this.childDataDoc==null)){
// //  // this.allDatacopy=this.allDataCOM;
// //   console.log("IN IF");
// //   console.log("child data doc "+this.childDataDoc);
// // this.dropDownService.urrComplete(this.childData1,name.nextId,this.childDataDoc);
// // this.dropDownService.findDataWithREQ().subscribe(
// //   response1=>{
// //     this.AllDataREQ=response1;
// //     if(response1){
// //       console.log(response1);
// //       console.log(response1[0]);
// //       console.log(response1[1]);
     
// //     }
// //     this.allDatacopy=this.AllDataREQ;
// // }
// // )

// // }
// // else if(name.nextId=="Compliance Guides" || name.nextId=="Audited Controls" || name.nextId=="FAQ and White Papers" && (this.childData1!=null && this.childDataDoc==null)) {
// // this.dropDownService.urrComplete(this.childData1,name.nextId,this.childDataDoc);
// // console.log("IN ELSE 1")
// // this.dropDownService.findDataWithREQ().subscribe(
// //     response1=>{
// //       this.AllDataREQ=response1;
// //       if(response1){
// //         console.log(response1);
// //         console.log(response1[0]);
// //         console.log(response1[1]);
       
// //       }
// //       this.allDatacopy=this.AllDataREQ;
// // }
// //   )
  
// //   console.log("Compliance Guides else if")
// // console.log("alldatacopy");
// // console.log("ALl data"+this.AllDataREQ);
// // }




// // else if(name.nextId=="Compliance Guides" || name.nextId=="Audited Controls" || name.nextId=="FAQ and White Papers"&& (this.childData1==null &&this.childDataDoc!=null)) {
// //   this.dropDownService.urrComplete(this.childData1,name.nextId,this.childDataDoc);
// //   console.log("IN ELSE 2last")
// //   console.log("child data doc "+this.childDataDoc);
// //   this.dropDownService.findDataWithREQ().subscribe(
// //       response1=>{
// //         this.AllDataREQ=response1;
// //         if(response1){
// //           console.log(response1);
// //           console.log(response1[0]);
// //           console.log(response1[1]);
         
// //         }
// //         this.allDatacopy=this.AllDataREQ;
// //   }
// //     )
    
// //     console.log("Compliance Guides else if")
// //   console.log("alldatacopy");
// //   console.log("ALl data"+this.AllDataREQ);
// //   }

// //   else if(name.nextId=="Compliance Guides" || name.nextId=="Audited Controls" || name.nextId=="FAQ and White Papers" && (this.childData1!=null &&this.childDataDoc!=null)) {
// //     this.dropDownService.urrComplete(this.childData1,name.nextId,this.childDataDoc);
// //     console.log("IN ELSE last")
// //     this.dropDownService.findDataWithREQ().subscribe(
// //         response1=>{
// //           this.AllDataREQ=response1;
// //           if(response1){
// //             console.log(response1);
// //             console.log(response1[0]);
// //             console.log(response1[1]);
           
// //           }
// //           this.allDatacopy=this.AllDataREQ;
// //     }
// //       )
      
// //       console.log("Compliance Guides else if")
// //     console.log("alldatacopy");
// //     console.log("ALl data"+this.AllDataREQ);
// //     }


// //old running code




// //Main 
// this.dropDownService.urrComplete(this.childData1,this.nameNextId,this.childDataDoc,this.childDataDate);
// this.dropDownService.findDataWithREQ().subscribe(
//   response1=>{
//     this.resList = response1;
//     this.AllDataREQ=response1;
//     if(response1){
//       console.log(response1);
//       console.log(response1[0]);
//       console.log(response1[1]);
     
//     }
//     this.allDatacopy=this.AllDataREQ;
//   }
// )

// //main








// // if(name.nextId=="Audited Controls" && this.childData1==null){
// //   this.allDatacopy=this.allDataAUD;
// //   console.log(this.allDatacopy)
// // }else {

// //   this.dropDownService. findDataWithREQ(this.childData1,name.nextId).subscribe(
// //     response1=>{
// //       this.AllDataREQ=response1;
// //       if(response1){
// //         console.log(response1);
// //         console.log(response1[0]);
// //         console.log(response1[1]);
// //       }
// // }
// //   )



// // }

// // if(name.nextId=="FAQ and White Papers" && this.childData1==null){
// //   this.allDatacopy=this.allDataFAQ;
// //   console.log(this.allDatacopy)
 
// //   console.log(this.childData1);
// //   console.log(this.childMessage)
// // }else {

// //   this.dropDownService. findDataWithREQ(this.childData1,name.nextId).subscribe(
// //     response1=>{
// //       this.AllDataREQ=response1;
// //       if(response1){
// //         console.log(response1);
// //         console.log(response1[0]);
// //         console.log(response1[1]);
// //       }
// // }
// //   )



// // }

// }


dataSorting1(name){
  this.checkedinFunc();
//  this.ngOnChanges();
  console.log("name--------------------------------"+name);
//   // debugger;
// main code 
this.page=1;
this.startlimit=0;





   this.childData11=this.dd.dropDownData22.toString();


   this.childDataDoc11=this.dd.dropDownData11.toString();



   this.childDataDate11=this.dd.modeldate11;
   console.log(this.childData11+" dropDown");
  // this.allDatacopy=this.allData;
 
 this.nameNextId=name.nextId;
 console.log("hello from dataSorting")
 console.log("child data doc before"+this.childDataDoc);




// main code 

//this.newFuncForALl();

this.pagination2();


 }
newFuncForALl(){
  this.lastLimit;
  this.childData11=this.dd.dropDownData22.toString();


  this.childDataDoc11=this.dd.dropDownData11.toString();



  this.childDataDate11=this.dd.modeldate11;
  this.childDataDate22=this.dd.modeldate22;
 
  this.allDatacopy=[];
  this.dropDownService.urrComplete2(this.childData11,this.nameNextId,this.childDataDoc11,this.childDataDate11,this.childDataDate22,this.sortType,this.startlimit,this.lastLimit);
  this.dropDownService.findDataWithREQ().subscribe(
    response1=>{
      this.AllDataREQ=response1;
      if(response1){
        console.log(response1);
        console.log(response1[0]);
        console.log(response1[1]);
       
      }
      this.allDatacopy=this.AllDataREQ;
    }
  )
  this.dropDownService.urrCompleteSize(this.childData11,this.nameNextId,this.childDataDoc11,this.childDataDate11,this.sortType,3);
 
    this.dropDownService.findDataWithREQSize().subscribe(
      response1=>{
        this.pageSize=response1*10/3;
       
  }
  
    )



 }
}

