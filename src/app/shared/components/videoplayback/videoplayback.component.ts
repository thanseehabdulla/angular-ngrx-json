import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-videoplayback',
  templateUrl: './videoplayback.component.html',
  styleUrls: ['./videoplayback.component.scss']
})
export class VideoplaybackComponent implements OnInit {

  @Input() props:any
  config: any;

  constructor() { }

  ngOnInit(): void {
  this.config = JSON.parse(this.props)
  }

}
