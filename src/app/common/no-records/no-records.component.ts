import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-no-records',
  templateUrl: './no-records.component.html',
  styleUrls: ['./no-records.component.scss']
})
export class NoRecordsComponent implements OnInit {
  @Input() message: any;

  constructor() { }

  ngOnInit() {
    if(this.message==''||this.message==undefined||this.message==null)
    {
      this.message="No Data Found";
    }
    
  }

}
