import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class DropDownMenuService {

  private usersUrl: string;
 private usersUrl1: string;
 private usersCateogryUrl:string;
 private userAllData:string
 private usersCateogryAUD:string
 private usersCateogryFAQ:string
 private usersCateogryCOM:string
 private usersCommman:string;
 private usersCommman1:string;
public dType:string="";
public cType:string="";
public docType:string="";
public dateT:string="";
public sortType:string="";
public limit:string=""
public usersCommman1Size:string="";
public startlimit:number=0;
 public dateT1:string="";
 public userFiles:string="";
  fileName: any;
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8087/onlyDataType';
    this.usersUrl1 = 'http://localhost:8087/onlyDataCatogory';
    this.usersCateogryUrl="http://localhost:8087/onlyCategory1";
    this.userAllData="http://localhost:8087/AllContent";
    this.usersCateogryAUD="http://localhost:8087/dataAccordingtoCategoryAuditedControls";
    this.usersCateogryFAQ="http://localhost:8087/dataAccordingtoCategoryFAQandWhitePapers";
    this.usersCateogryCOM="http://localhost:8087/dataAccordingtoCategoryComplianceGuides";
   
  }

urrComplete(dType,cType,docType,dateT){
  this.dType=dType;
  this.cType=cType;
  this.docType=docType;
  this.dateT=dateT;
  if(this.dType==null && docType==null){
        if(this.dateT==null){
  this.usersCommman="http://localhost:8087/AllData1?cType="+this.cType ;
}else {
this.usersCommman="http://localhost:8087/AllData1?cType="+this.cType+"&dateT="+this.dateT ;
  }
}else if(this.dType!=null && this.docType==null){ 
  if(this.dateT==null){
    this.usersCommman="http://localhost:8087/AllData1?cType="+this.cType+"&dType="+this.dType;
  }else{
    this.usersCommman="http://localhost:8087/AllData1?cType="+this.cType+"&dType="+this.dType+"&dateT="+this.dateT;
  }
}
else if(this.dType==null && this.docType!=null){
  if(this.dateT==null){
  this.usersCommman="http://localhost:8087/AllData1?cType="+this.cType+"&docType="+this.docType;
  }else{
    this.usersCommman="http://localhost:8087/AllData1?cType="+this.cType+"&docType="+this.docType+"&dateT="+this.dateT;
  }
}
else if(this.dType!=null && this.docType!=null){
  if(this.dateT==null){
  this.usersCommman="http://localhost:8087/AllData1?cType="+this.cType+"&docType="+this.docType+"&dType="+this.dType;
  }else{
    this.usersCommman="http://localhost:8087/AllData1?cType="+this.cType+"&docType="+this.docType+"&dType="+this.dType+"&dateT="+this.dateT;
  }
}
  console.log(this.usersCommman);
}

urrComplete1(dType,cType,docType,dateT){
  this.dType=dType;
  this.cType=cType;
  this.docType=docType;
  this.dateT=dateT;

  this.usersCommman1="http://localhost:8087/AllData2?cType="+this.cType+"&docType="+this.docType+"&dType="+this.dType+"&dateT="+this.dateT;
console.log(this.usersCommman1);
}

urrComplete2(dType,cType,docType,dateT,dateT1,sortType,startlimit,limit){
  this.dType=dType;
  this.cType=cType;
  this.docType=docType;
  this.dateT=dateT;
  this.dateT1=dateT1;
  this.sortType=sortType;
  this.startlimit=startlimit;
  this.limit=limit
  this.usersCommman1="http://localhost:8087/AllData21?cType="+this.cType+"&docType="+this.docType+"&dType="+this.dType+"&dateT="+this.dateT+"&dateT1="+this.dateT1+"&sortType="+this.sortType+"&startlimit="+this.startlimit+"&limit="+this.limit;
console.log(this.usersCommman1);
}

urrCompleteSize(dType,cType,docType,dateT,sortType,limit){
  this.dType=dType;
  this.cType=cType;
  this.docType=docType;
  this.dateT=dateT;
  this.sortType=sortType;
  this.limit=limit
  this.usersCommman1Size="http://localhost:8087/AllData211?cType="+this.cType+"&docType="+this.docType+"&dType="+this.dType+"&dateT="+this.dateT+"&sortType="+this.sortType+"&limit="+this.limit;

}
urrFiles(fileName){
  this.fileName=fileName;
  this.userFiles="http://localhost:8087/file/"+this.fileName;
}



  public findAll(): Observable<Set<String>> {
    return this.http.get<Set<String>>(this.usersUrl);
  }

  public findAll1(): Observable<Set<String>> {
    return this.http.get<Set<String>>(this.usersUrl1);
  }

  public findusersCateogory() :Observable<Set<string>> {
    return  this.http.get<Set<string>>(this.usersCateogryUrl);
  }
  public findAllData() :Observable<Set<string>> {
    return  this.http.get<Set<string>>(this.userAllData);
  }
  public findAllDataAUD() :Observable<Set<string>> {
    return  this.http.get<Set<string>>(this.usersCateogryAUD);
  }
  public findAllDataFAQ() :Observable<Set<string>> {
    return  this.http.get<Set<string>>(this.usersCateogryFAQ);
  }
  public findAllDataCOM() :Observable<Set<string>> {
    return  this.http.get<Set<string>>(this.usersCateogryCOM);
  }
  public findDataWithREQ() :Observable<Set<string>> {

    return  this.http.get<Set<string>>(this.usersCommman1);
  }



  public findDataWithREQSize() :Observable<number> {

    return  this.http.get<number>(this.usersCommman1Size);
  }
  public findDataWithFile() :Observable<Blob> {
    console.log(this.userFiles);
console.log("running")
    return  this.http.get(this.userFiles,{responseType: 'blob'});
  }
 


}