import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomReportComponent } from './custom-report.component';

const routes: Routes = [{path:'',component:CustomReportComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomReportRoutingModule { }
