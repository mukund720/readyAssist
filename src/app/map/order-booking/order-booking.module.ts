import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonFunctionModule } from 'src/app/common/commonFunction.module';
import { SharedPipesModule } from 'src/app/pipes/shared-pipes.module';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SharedServicesModule } from 'src/app/shared/shared-services.module';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { GenericUiModule } from 'src/app/generic-ui-components/generic-ui.module';
import {MatRadioModule} from '@angular/material/radio';

import {MatBadgeModule} from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { OrderBookingRoutingModule } from './order-booking-routing.module';
import { OrderBookingComponent } from './order-booking.component';


@NgModule({
  declarations: [OrderBookingComponent],
  imports: [
    CommonModule,
    CommonFunctionModule,
    SharedPipesModule,
    FormsModule,
    SharedServicesModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    GenericUiModule,
    MatRadioModule,
    MatMenuModule,
    MatBadgeModule,
    OrderBookingRoutingModule
  ],
  exports:[OrderBookingComponent]
})
export class OrderBookingModule { }
