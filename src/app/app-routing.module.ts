
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthService } from './shared/auth/auth.service';
//
const routes: Routes = [
{
  path: 'project-gantt-chart',
  loadChildren: () => import('./reports/project-gantt-chart/project-gantt-chart.module').then(m => m.ProjectGanttChartModule)
  // canLoad: [AuthService]
},
{
  path: 'project-gantts',
  loadChildren: () => import('./reports/project-gantt/project-gantt.module').then(m => m.ProjectGanttModule)
},
{
  path: 'project-org-chart',
  loadChildren: () => import('./reports/project-org-chart/project-org-chart.module').then(m => m.ProjectOrgChartModule)
},
{
  path: 'custom-report',
  loadChildren: () => import('./reports/custom-report/custom-report.module').then(m => m.CustomReportModule)
},
  // ReportsModule
  // { path: 'reports', loadChildren: './reports/reports.module#ReportModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
