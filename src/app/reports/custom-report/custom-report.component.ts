import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { WebService } from 'src/app/shared/services/web.service';
@Component({
  selector: 'app-custom-report',
  templateUrl: './custom-report.component.html',
  styleUrls: ['./custom-report.component.scss']
})
export class CustomReportComponent implements OnInit {
  dataList: any=[];
  buttonProgressing:boolean=false;
  projectList:any=[];
  searchProject:any='';
  project_id:any='';
  heading: any = "";
  breadCrumb: any = '';
  isProgressing: boolean = false;
  printpage: boolean = false;
  showChart:boolean=false;
  colorCode = {
    "0": '#e98853',
    "1": '#3894f0',
    "2": "#56b569"
  }

  mainObj: any = {
    "selected_project": "",
    "from_date": '',
    "to_date": '',
    "status": ""
  }
  is_note:boolean=true;
  tempArray: any = []
  statusList: any = [
    { 'proprity_id': '', 'proprity_name': 'All' },
    { 'proprity_id': '0', 'proprity_name': 'Low' },
    { 'proprity_id': '1', 'proprity_name': 'Medium' },
    { 'proprity_id': '2', 'proprity_name': 'High' },
  ]
  mode: string='vertical';
  modeList: any= [{'id':'vertical','name':'VERTICAL MODE'},{'id':'horizontal','name':'HORIZONTAL MODE'}];
  constructor(
    private webService: WebService,
    private toaster: ToastrService,) { }
  nodes:any=[];
  menu_name: any = '';
  main_menu_name: any = '';
  api_progressing:any={
    is_project_api:true,
    is_location_api:false,
    is_employee_api:false,
    is_uom_api:false,
    is_shift_api:false,
    is_boq_api:false,
    is_vendor_api:false,
    is_table_api:false,
    is_column_api:false,
  }
  is_side_menu:boolean=false;
  sideMenu:any={list:[]}
  activeSideMenu:any={parent:{},child:{}}
  toolBarList:any=[]
  is_tool_bar:boolean=false;
  activeToolBar:any={};

  ngOnInit(): void {

this.makeSideMenu();
this.makeToolBar();

this.GetCompanySetUpData();

  }
  makeSideMenu()
  {
    this.sideMenu.list.push(
      {
      class:'sub-title',
      name:'Data Source',
      key:'data_source',
      description:'Connect with Data source',
      list:[
        {
        class:'',
      name:'MySQL',
      key:'my_sql',
      description:'Connect to MYSQL',
      list:[]
      },
      {
        class:'',
      name:'JSON and CSV',
      key:'json_csv',
      description:'Connect to JSON & CSV',
      list:[]
      },
      {
        class:'',
      name:'API',
      key:'api',
      description:'Connect to API',
      list:[]
      }
    ]
    },
    {
      class:'sub-title',
      name:'Views',
      key:'views',
      description:'',
      list:[
        {
        class:'',
      name:'Flat Table',
      key:'flat_table',
      description:'Show as Table',
      list:[]
      }
    ]
    }
    ,
    {
      class:'sub-title',
      name:'Integration',
      key:'integration',
      description:'',
      list:[
        {
        class:'',
      name:'With Charts',
      key:'charts',
      description:'Connect to CHARTS',
      list:[]
      }
    ]
    }
    ,
    {
      class:'sub-title',
      name:'Others',
      key:'others',
      description:'',
      list:[
        {
        class:'',
      name:'Theme',
      key:'theme',
      description:'',
      list:[]
      },
      {
        class:'',
      name:'Live Data',
      key:'live_data',
      description:'',
      list:[]
      }
    ]
    }
    )
    this.setActive(0,0)
    this.is_side_menu=true;
  }
  makeToolBar()
  {
    this.toolBarList=[];
    this.toolBarList.push(
      {
        key:'my_sql_tool',
        name:'Connect',
        description:'click to connect',
        icon:'analytics',
        class:'fa',
        is_visible:true,
         open_popup:'',  popup_type:'',
            list:[
          {
            key:'my_sql_query',
            name:'MY SQL QUERY',
            description:'click to write query',
            icon:'query_stats',
            class:'',
            is_visible:true,
             open_popup:'my_sql_query',  popup_type:'normal',
                },
          {
            key:'api',
            name:'API URL',
            description:'click to add url',
            icon:'api',
            class:'',
            is_visible:true,
             open_popup:'',  popup_type:'',
                }
        ]
      },
      {
        key:'open',
        name:'Open',
        description:'click to open list',
        icon:'open_in_new',
        class:'fa',
        is_visible:true,
              open_popup:'',  popup_type:'',
        list:[
          {
            key:'local_report',
            name:'Local Report',
            description:'click to open local report',
            icon:'local_library',
            class:'',
            is_visible:true,
            open_popup:'local_report',
            popup_type:'modal',

          }
        ]
      },
      {
        key:'save',
        name:'Save',
        description:'click to save list',
        icon:'folder',
        class:'fa',
        is_visible:true,
        list:[
          {
            key:'save_data',
            name:'Save',
            description:'click to save',
            icon:'file_copy',
            class:'',
            is_visible:true,
            open_popup:'save_data',
            popup_type:'modal',

          }
        ]
      },
      {
        key:'share',
        name:'Share',
        description:'click to open share feature',
        icon:'share',
        class:'fa',
        is_visible:true,
        open_popup:'share',
        popup_type:'modal',
        list:[]
      },
      {
        key:'grid',
        name:'Grid',
        description:'click to open grid',
        icon:'vertical_split',
        class:'fa',
        is_visible:true,
              open_popup:'',  popup_type:'',
        list:[]
      },
      {
        key:'export',
        name:'Export',
        description:'click to export',
        icon:'get_app',
        class:'fa',
        is_visible:true,
        open_popup:'',  popup_type:'',
        list:[
          {
            key:'export_html',
            name:'Export HTML',
            description:'click to export as html',
            icon:'html',
            class:'',
            is_visible:true,
             open_popup:'',  popup_type:'',     },
          {
            key:'export_pdf',
            name:'Export PDF',
            description:'click to export as PDF',
            icon:'picture_as_pdf',
            class:'',
            is_visible:true,
             open_popup:'',  popup_type:'',     }
        ]
      },
      {
        key:'charts',
        name:'Charts',
        description:'click to open chart list',
        icon:'donut_large',
        class:'fa',
        is_visible:true,
        open_popup:'',  popup_type:'',
        list:[
          {
            key:'column_chart',
            name:'Column CHart',
            description:'click to open column chart',
            icon:'leaderboard',
            class:'',
            is_visible:true,
             open_popup:'',  popup_type:'',     },
          {
            key:'bar_chart',
            name:'Bar Chart',
            description:'click to open bar chart',
            icon:'stacked_line_chart',
            class:'',
            is_visible:true,
             open_popup:'',  popup_type:'',     }
        ]
      },
      {
        key:'format',
        name:'Formats',
        description:'click to open format list',
        icon:'backup_table',
        class:'fa',
        is_visible:true,
        list:[
          {
            key:'format_cells',
            name:'Format Cells',
            description:'click to open cell format',
            icon:'view_column',
            class:'',
            is_visible:true,
             open_popup:'',  popup_type:'',     },
          {
            key:'format_conditional',
            name:'Conditional Formating',
            description:'click to open conditional formating',
            icon:'hvac',
            class:'',
            is_visible:true,
             open_popup:'',  popup_type:'',     }
        ]
      },
      {
        key:'options',
        name:'Options',
        description:'click to open options settings',
        icon:'settings_suggest',
        class:'fa',
        is_visible:true,
        open_popup:'options',
        popup_type:'modal',
        list:[]
      },
      {
        key:'fields',
        name:'Fields/Columns',
        description:'click to open fields',
        icon:'tune',
        class:'fa',
        is_visible:true,
        open_popup:'fields',
        popup_type:'modal',
        list:[]
      }
    )
this.is_tool_bar=true;
  }
  renderBreadcrum() {
    this.heading = this.menu_name
    this.breadCrumb = [this.main_menu_name, this.menu_name];
  }
  company_setup:any={}
  GetCompanySetUpData() {
  }

is_active:boolean=false;
already_active_msg:any='';
detectMob() {
  let cls:any='sidenav_progressCustomPopup'
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
ConfirmLogout()
  {
    this.showLogoutIssue(false);
  }
  showLogoutIssue(flag: boolean) {
    if (flag) {
      document.getElementById("IssueSidenavCustomPopup").style.width = "35%";
      document.getElementById("showIssueModelCustomPopup").style.display = "block";
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    } else {
      document.getElementById("IssueSidenavCustomPopup").style.width = "0";
      document.getElementById("showIssueModelCustomPopup").style.display = "none";
      document.body.style.backgroundColor = "#f0f0f1";
    }
  }
  activeParentMenu:any={key:''};
  is_normal_div:boolean=true;
  checkParentMenu(parentData,parentIndex)
  {
if(parentData.open_popup!='' && parentData.popup_type=='modal')
{
  console.log(parentData);
  this.activeParentMenu=this.toolBarList[parentIndex]
  this.is_active=true;
  this.showLogoutIssue(true);
}
else if(parentData.open_popup!='')
{
  this.activeParentMenu=this.toolBarList[parentIndex]
  this.is_active=false;
}
else
{
  this.is_active=false;

}
  }
  activeChildMenu:any={key:''};

  checkChildMenu(childData,parentData,childIndex,parentIndex)
  {
    if(childData.open_popup!='' && childData.popup_type=='modal')
    {
      this.activeChildMenu=this.toolBarList[parentIndex].list[childIndex]
      this.activeParentMenu=this.toolBarList[parentIndex]
      this.is_active=true;
      this.showLogoutIssue(true);
    }
    else if(childData.open_popup!='')
    {
      // console.log(parentData);
      this.is_active=false;
      this.is_normal_div=true;
      this.activeChildMenu=this.toolBarList[parentIndex].list[childIndex]
      this.activeParentMenu=this.toolBarList[parentIndex]
      this.activeChildMenu.query='';
      this.activeChildMenu.table='';
      this.activeChildMenu.tableSearch='';
      this.activeChildMenu.tableList=[{item_id:'employees','item_text':'Employees'},{item_id:'products','item_text':'Products'}];
      this.activeChildMenu.columnList=[];
      this.activeChildMenu.searchColumns=''
      this.activeChildMenu.columnRecordList=[];
      this.activeChildMenu.order_by='';
      this.activeChildMenu.order_by_column=[];
      this.activeChildMenu.searchOrderColumns=''


      this.webService.makeFocusById(this.activeChildMenu.key)
    }
    else
    {
      this.is_active=false;

    }
  }
  setColumns(id)
  {
    this.activeChildMenu.columnRecordList=[];
    if(id=='employees')
    {
      this.activeChildMenu.columnRecordList=[{item_id:'id','item_text':'ID'},{item_id:'first_name','item_text':'First Name'},{item_id:'email','item_text':'Email'}];
    }
    if(id=='products')
    {
      this.activeChildMenu.columnRecordList=[{item_id:'*','item_text':'*'},{item_id:'id','item_text':'ID'},{item_id:'name','item_text':'Product Name'},{item_id:'hsn','item_text':'HSN Code'}];
    }
    this.makeQuery();
  }
  setActive(mainIndex,childIndex)
  {
    if(this.sideMenu.list)
    {
      for(let i of this.sideMenu.list)
      {
        if(i.list)
        {
          for(let j of i.list)
          {
            j.class=''
          }
        }
      }
    }
    this.sideMenu.list[mainIndex].list[childIndex].class='active';
    this.activeSideMenu.parent=this.sideMenu.list[mainIndex];
    this.activeSideMenu.child=this.sideMenu.list[mainIndex].list[childIndex];

  }
  SQLQuery() {
    this.isProgressing = true;
    let req = {
      "query": this.activeChildMenu.query?this.activeChildMenu.query:""
    }
    console.log('l')
    this.webService.commonPostMethod("Update_company_meta/ajax_getall_bycompany", req).subscribe(
      data => {
        if (data.status)
        {}
        else {
        }
        this.isProgressing = false;
      }, error => {
        this.isProgressing = false;
      }
    )
  }

  makeQuery()
  {
    this.activeChildMenu.query='';
    let index:number=0;
    if(this.activeChildMenu.columnList.length>0 && this.activeChildMenu.columnList.some((v)=>{return v=='*'}))
    {
      index = this.activeChildMenu.columnList.findIndex(x => x==="*");
      if(this.activeChildMenu.columnList.length>1)
      {
      this.activeChildMenu.columnList=['*']
      this.toaster.info('You can not combine other columns and All(*) at a time','Info')
      }
    }


    let query:any=''
    if(this.activeChildMenu.table!='')
    {
      query="select from "+this.activeChildMenu.table;
    }
    if(this.activeChildMenu.columnList.length>0)
    {
      query="select "+this.activeChildMenu.columnList.join(",")+" from "+this.activeChildMenu.table;
    }
    if(this.activeChildMenu.order_by_column.length>0)
    {
      query="select "+this.activeChildMenu.columnList.join(",")+" from "+this.activeChildMenu.table+" order by "+this.activeChildMenu.order_by_column.join(",")+" "+this.activeChildMenu.order_by;
    }
    this.activeChildMenu.query=query;

  }
}
