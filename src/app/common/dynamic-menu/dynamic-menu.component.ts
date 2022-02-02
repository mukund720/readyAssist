import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from 'src/app/shared/services/web.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-menu',
  templateUrl: './dynamic-menu.component.html',
  styleUrls: ['./dynamic-menu.component.scss'],
  providers: [WebService]
})
export class DynamicMenuComponent implements OnInit {
  constructor(
    private router: Router,
    public webService: WebService,
    private toaster: ToastrService
  ) { }
  myControl = new FormControl();

  isOpened = true;
  isclosed = false;
  prevClicked = -1;
  userName = '';
  companyName = '';
  menuList: any = [];
  empDetails: any = [];
  companies: any = [];
  isMultiple = false;
  id: any = 0;
  companyLogo: any = '';
  isSearch = false;
  searchBox: any = '';
  searchListItems: any = [];
  notificationList: any = [];
  searchedItem: any = '';
  searchModel: any = '';
  userCode: any = '';
  dialogData: any = {
    visibility: false,
    data: '',
    type: ''
  };
  options: string[] = ['One', 'Two', 'Three'];
  storeMenudata: any = [];
  currentUrl: any = '';

  arrayForSearch: any = [];

  vendorDetails: any;

  unreadNotifications: any = [];

  notificationIdDelete: any = '';

  isMenuIconOpened = false;

  loadResponse: any = [];

  flaglist = false;
  companyThemeBlockColor: any = "";
  CompanyThemetextColor: any = "";
  CheckthemeImage:any ="";
  buttonProgressing:boolean=false;

  ngOnInit() {
    console.log('%cStop! You Are Not Allowed', 'color: white; font-size: 30px; font-weight: bold;background:#035168;');
    let role: any = '';
    role =  'administrator';
    let comp_id: any ='0';
    document.body.scrollTop = 0;
    this.id = '121'
    this.companyLogo = "";
    this.userName = 'Temp'
    this.userCode = 'ABC'

    this.companyName ="Ready Assist"
      this.menuList = 
      [
          {
            id: '1',
            parent: '0',
            menuitemname: 'Dashboard',
            menuitemicon: 'fa fa-th-list',
            url: '',
            aurl: '/dashboard',
            has_submenu: false
          },
          {
            id: '2',
            parent: '0',
            menuitemname: 'My Orders',
            menuitemicon: 'fa fa-file-text-o',
            url: '',
            aurl: '#',
            has_submenu: true,
            submenu: [
              {
                id: '1',
                menuitemname: 'My Purchase Orders',
                menuitemicon: 'fa fa-file-text-o',
                url: '',
                aurl: '/vendor-orders'
              }
            ]
          },
          {
            id: '3',
            parent: '0',
            menuitemname: 'Invoice Data',
            menuitemicon: 'fa fa-file-text-o',
            url: '',
            aurl: '#',
            has_submenu: true,
            submenu: [
              {
                id: '11',
                menuitemname: 'Add Invoice',
                menuitemicon: 'fa fa-file-text-o',
                url: '',
                aurl: '/invoice-data'
              },
              {
                id: '12',
                menuitemname: 'All Invoices',
                menuitemicon: 'fa fa-file-text-o',
                url: '',
                aurl: '/invoices'
              }
            ]
          }
        ]
    
    this.companyThemeBlockColor =  "#035168";
    this.CompanyThemetextColor =  "#FFFFFF";
  }

 

}
