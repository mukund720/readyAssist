import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderBookingComponent } from './order-booking.component';

const routes: Routes = [{path:'',component:OrderBookingComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderBookingRoutingModule { }
