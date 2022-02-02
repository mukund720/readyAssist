import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebService } from './services/web.service';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
  providers: [AuthService, WebService]
})
export class SharedServicesModule {}
