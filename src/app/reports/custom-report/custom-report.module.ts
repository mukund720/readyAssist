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
import { CustomReportRoutingModule } from './custom-report-routing.module';
import { CustomReportComponent } from './custom-report.component';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [CustomReportComponent],
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
    CustomReportRoutingModule
  ],
  exports:[CustomReportComponent]
})
export class CustomReportModule { }
