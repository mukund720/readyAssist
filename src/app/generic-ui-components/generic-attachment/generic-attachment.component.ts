import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-generic-attachment',
  templateUrl: './generic-attachment.component.html',
  styleUrls: ['./generic-attachment.component.scss']
})
export class GenericAttachmentComponent implements OnInit {

  @Input() attachment: any;
  @Output()
  sendAction = new EventEmitter()  
  constructor() {
  }
  ngOnInit() {
    
  }
 
}