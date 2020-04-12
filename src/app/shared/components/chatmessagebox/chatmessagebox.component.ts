import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chatmessagebox',
  templateUrl: './chatmessagebox.component.html',
  styleUrls: ['./chatmessagebox.component.scss']
})
export class ChatmessageboxComponent implements OnInit {
  @Input() props: any;
  config: any;
  
  constructor() { }

  ngOnInit(): void {
  console.log(this.props)
  this.config = JSON.parse(this.props)

  }

}
