import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public toastConfig: ToasterConfig = new ToasterConfig({
  positionClass: 'toast-top-right',
  animation: 'fade',
  showCloseButton: true,
  limit: 1
  });
  notificationList: any = {};
  notificationLength: any = 0;
  constructor(
  private router: Router,
  private toasterService: ToasterService,
  ) {

  }
  ngOnInit() {
  }
}