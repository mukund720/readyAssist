
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthService } from './shared/auth/auth.service';
//
const routes: Routes = [
{
  path: '',
  loadChildren: () => import('./reports/custom-report/custom-report.module').then(m => m.CustomReportModule)
},
{
  path: 'order-booking',
  loadChildren: () => import('./map/order-booking/order-booking.module').then(m => m.OrderBookingModule)
},
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
