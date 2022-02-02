import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {

  @Input() dialogData: any;

  constructor() { }

  ngOnInit() {
  }

  hideDialog() {
    document.getElementById('errorDialog').style.display = 'none';
    this.dialogData.visibility = false;
  }
}
