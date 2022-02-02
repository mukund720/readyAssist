import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr'; 
@Component({
  selector: 'app-generic-afterdiv-list', templateUrl: './generic-afterdiv-list.component.html', styleUrls: ['./generic-afterdiv-list.component.scss']
})
export class GenericAfterdivListComponent implements OnInit {
  @Input() divDetails: any;
  @Output()
  sendAction = new EventEmitter()
  commonVariableList: any = { "divList": [], };
  constructor(    private toaster: ToastrService) { }
    company_setup: any = {};

    ngOnInit() {
  this.getSetup();
    }
  
    getSetup() 
    {
      this.apiCall();
    }
    apiCall() {
      this.commonVariableList.divList = [];
      switch (this.divDetails.id) {  
        case 'invoicereport': this.showInvoice(this.divDetails.data); break;
        default:
      }
    }
    showInvoice(response) {
      
      this.commonVariableList.divList.push(
        {
          "display": 'Additional Info', "value":'', "div_size": 'col-sm-12', "is_history": true, "is_array": true, "is_disabled": true, "is_view": true, "input_type": 'text'
        }
        
      );
    }
    
  }
  