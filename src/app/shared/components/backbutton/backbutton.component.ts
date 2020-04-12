import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-backbutton',
  templateUrl: './backbutton.component.html',
  styleUrls: ['./backbutton.component.scss']
})
export class BackbuttonComponent implements OnInit {
  @Output() goBack = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  goback(){
    this.goBack.emit()
  }

}
