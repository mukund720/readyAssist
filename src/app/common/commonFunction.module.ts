import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { LoaderComponent } from './loader/loader.component';
import { SharedPipesModule } from '../pipes/shared-pipes.module';
import { NoRecordsComponent } from './no-records/no-records.component';
import { DynamicMenuComponent } from './dynamic-menu/dynamic-menu.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { ModalComponent } from './modal/modal.component';
import { ApiProgressingComponent } from './api-progressing/api-progressing.component';

@NgModule({
  declarations: [
    LoaderComponent,
    NoRecordsComponent,
    DynamicMenuComponent,
    DialogBoxComponent,
    ModalComponent,
    ApiProgressingComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatMenuModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    SharedPipesModule,
    MatIconModule,
    ],
  exports: [
    LoaderComponent,
    NoRecordsComponent,
    DynamicMenuComponent,
    DialogBoxComponent,
    MatIconModule,
    ModalComponent,
    ApiProgressingComponent
  ]
})
export class CommonFunctionModule {}
