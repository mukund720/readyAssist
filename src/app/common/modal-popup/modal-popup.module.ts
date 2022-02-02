import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonPopupComponent } from '../common-popup/common-popup.component';
import { CommonFunctionModule } from '../commonFunction.module';
import {
  MatInputModule,
  MatMenuModule,
  MatCardModule,
  MatTableModule,
  MatExpansionModule,
  MatPaginatorModule,
  MatDatepickerModule,
  MatSelectModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [CommonPopupComponent],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatMenuModule,
    MatCardModule,
    MatTableModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatSelectModule,
    CommonFunctionModule,
    //CommonPopupComponent
  ],
  entryComponents:[CommonPopupComponent],
  exports:[CommonPopupComponent]
})
export class ModalPopupModule { }
