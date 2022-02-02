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
      this.menuList = {
        response: [
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
      };
    
    this.companyThemeBlockColor =  "#035168";
    this.CompanyThemetextColor =  "#FFFFFF";
  
    document.getElementById('mySidenav').style.background=this.companyThemeBlockColor;
    document.getElementById('menu-ul').style.background=this.companyThemeBlockColor;
    document.getElementById('mySidenav').style.color=this.CompanyThemetextColor;
    document.getElementById('menu-ul').style.color=this.CompanyThemetextColor;
  }

  checkConnection() {
    if (!this.webService.isOnline()) {
      this.toaster.error('Something Went wrong', 'Error');
      return false;
    } else {
    }
  }




  navigate(url: any,) {
    
      this.webService.redirectURL(url)
      
  }

  openNav() {
    document.getElementById('mySidenav').style.width = '250px';
    this.isOpened = false;
    this.isclosed = true;
    const elem: any = document.querySelector(
      '.sublist-ul.active'
    ) as HTMLElement;
    if (elem) {
      elem.style.display = 'block';
    }
  }

  closeNav() {
    document.getElementById('mySidenav').style.width = '60px';
    this.isOpened = true;
    this.isclosed = false;
    const elem: any = document.querySelector(
      '.sublist-ul.active'
    ) as HTMLElement;
    if (elem) {
      elem.style.display = 'none';
    }
  }
  getModule(url) {
    let temp: any = [];
    temp = this.arrayForSearch.filter((v) => { return v.url == url })
    return temp[0] ? temp[0] : '';
  }

  gotoUp() {
    window.scrollTo(0, 0);
  }
  gotoDown() {
    const element = document.getElementById('body');
    const x = element.clientHeight;
    const y = element.clientWidth;
    window.scrollTo(y, y);
  }

 

  goHome() {
    window.location.href = '/#' + '/dashboard';
  }

  showSearchBox() {
    if (this.isSearch) {
      this.isSearch = false;
    } else {
      this.isSearch = true;
    }
  }

  serachDetails(event) {
    this.searchListItems = [];
  }
  last_notification_count:any='0';

  openMenuNav() {
    document.getElementById('menuNav').style.width = '150px';
    this.isMenuIconOpened = true;
  }

  closeMenuNav() {
    document.getElementById('menuNav').style.width = '0';
    this.isMenuIconOpened = false;
  }
  playAudio() {
    let audio = new Audio();
    audio.src = "../../../assets/audio/new.mp3";
    audio.load();
    audio.play();
  }
  is_active:boolean=false;
  detectMob() {
    let cls:any='sidenav_progressLogout'
    if (( window.innerWidth <= 800 ) && ( window.innerHeight <= 700 ) )
    {
      cls=cls+" sidenav_progressMobile"
    }
    if(this.is_active)
    {
      cls=cls+" sideProClass"
    }
    if(!this.is_active)
    {
      cls=''
    }
    return cls
  }
  showLogoutIssue(flag: boolean) {
    if (flag) {
      document.getElementById("IssueSidenavUserSession").style.width = "35%";
      document.getElementById("showIssueModelUserSession").style.display = "block";
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    } else {
      document.getElementById("IssueSidenavUserSession").style.width = "0";
      document.getElementById("showIssueModelUserSession").style.display = "none";
      document.body.style.backgroundColor = "#f0f0f1";
    }
  }

}
