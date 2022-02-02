import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GenericTableComponent } from './generic-table/generic-table.component';
// import { GenericGrandTableComponent } from './generic-grand-table/generic-grand-table.component';
import { GenericBeforedivListComponent } from './generic-beforediv-list/generic-beforediv-list.component';
import { GenericAttachmentComponent } from './generic-attachment/generic-attachment.component';
import { GenericApprovalsComponent } from './generic-approvals/generic-approvals.component';
import { GenericAfterdivListComponent } from './generic-afterdiv-list/generic-afterdiv-list.component';
import { CommonFunctionModule } from '../common/commonFunction.module';
import { GenericModalPopupComponent } from './generic-modal-popup/generic-modal-popup.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    CommonFunctionModule,
    FormsModule,
    MatTooltipModule,
    MatInputModule,
    MatExpansionModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatTabsModule
  ],
  exports: [
   
    GenericAfterdivListComponent,
    GenericApprovalsComponent,
    GenericAttachmentComponent,
    GenericBeforedivListComponent,
    // GenericGrandTableComponent,
    GenericTableComponent,
    GenericModalPopupComponent,
  ],
  declarations: [
    GenericAfterdivListComponent,
    GenericApprovalsComponent,
    GenericAttachmentComponent,
    GenericBeforedivListComponent,
    // GenericGrandTableComponent,
    GenericTableComponent,
    GenericModalPopupComponent,
  ],
  providers: []
})
export class GenericUiModule {}
