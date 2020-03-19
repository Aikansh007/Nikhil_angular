import { NgModule } from '@angular/core';

import { DataComComponent } from './data-com/data-com.component';
import { Routes, RouterModule } from "@angular/router";
import { DataTabComponent } from './data-tab/data-tab.component';

const routes: Routes = [
  //{ path: 'dropDown', component: DataComComponent },
 { path: 'dropDown', component: DataTabComponent },
  {path:'tabSet',component:DataTabComponent}
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
