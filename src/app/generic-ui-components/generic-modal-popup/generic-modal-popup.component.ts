import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr'; 
import { WebService } from '../../shared/services/web.service';
import { Router } from "@angular/router";
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-generic-modal-popup',
  templateUrl: './generic-modal-popup.component.html',
  styleUrls: ['./generic-modal-popup.component.scss']
})
export class GenericModalPopupComponent implements OnInit {
  @Input() modalDetails: any;
  @Output()
  sendAction = new EventEmitter()
  commonVariableList: any = {
    "actionsList": [{
      "name": "View",
      "icon": "fa fa-eye",
      "action": "view"
    }],
    "dataList": [],
    "columnList": [],
    "afterdivList": [],
    "beforedivList": [],
    "isProgressing": true,
    "modalDetails": {},
    "dataDetails": {},
    "tableDetails": {},
    "attachments": [],
    "approvalDetails": {},
    "afterDivDetails": {},
    "beforeDivDetails": {},
    "is_history":false,
    "historyList":[],
  };
  constructor(public webService: WebService,
    private toaster: ToastrService,
    private router: Router, private titleService: Title, ) {
    this.initListener();

  }
  company_setup: any = {};
  ngOnInit() {
  
    this.GetCompanySetUpData();
  }
  GetCompanySetUpData() {
          if (this.modalDetails.data) {
            this.apiCall();
          }
          document.getElementById('body').style.overflow = 'hidden';
      
      
      } 
  apiCall() {
    this.commonVariableList.is_history=this.modalDetails.is_history?this.modalDetails.is_history:false;
    switch (this.modalDetails.id) {
      case 'invoicereport':
        this.showInvoice(this.modalDetails.data);
        break;
 
      default:
        this.toaster.error("Error", "Wrong Data");
    }
  }
  getId(id: any, action: string, data: any) {
    this.sendAction.emit({
      "id": id,
      "action": action,
      "data": data,
    });
  }
  hideModal() {
    this.modalDetails.is_view = false;
    localStorage.setItem('dataList', '');
    document.getElementById('body').style.overflow = 'auto';
  }
  showInvoice(d) {
          this.makeFinalData({});
      
  }
 
  makeFinalData(response) {
    this.commonVariableList.dataList.push(response)
    this.commonVariableList.beforedivList = response.beforedivList ? response.beforedivList : []
    this.commonVariableList.afterdivList = response.afterdivList ? response.afterdivList : []
    this.commonVariableList.modalDetails.is_view = true;
    this.commonVariableList.isProgressing = false;

    this.commonVariableList.afterDivDetails = {};
    this.commonVariableList.afterDivDetails = response;
    this.commonVariableList.beforeDivDetails = {};
    this.commonVariableList.beforeDivDetails = response;
    this.commonVariableList.tableDetails = {};
    this.commonVariableList.tableDetails = response;
    this.commonVariableList.approvalDetails = {};
    this.commonVariableList.approvalDetails = response;
    this.commonVariableList.attachments = [];
    this.commonVariableList.attachments = response.attachment ? response.attachment : [];
  }
  initListener() {
    document.body.addEventListener('keypress', (event) => this.reset(event));
    document.body.addEventListener('keydown', (event) => this.reset(event));
    document.body.addEventListener('keyup', (event) => this.reset(event));

  }
  reset(event) {
    if (event.keyCode == '27') {
      this.modalDetails.is_view = false;
      document.body.style.overflow = 'auto';
    }
  }
  closeDiv(event) {
    if (event.keyCode == '27') {
      this.modalDetails.is_view = false;
      document.body.style.overflow = 'auto';
    }
  }
}
