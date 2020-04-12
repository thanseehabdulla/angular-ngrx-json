import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-videoplaybackscreen',
  templateUrl: './videoplaybackscreen.component.html',
  styleUrls: ['./videoplaybackscreen.component.scss']
})
export class VideoplaybackscreenComponent implements OnInit {
  
  configurations:any;
  myjson:any=JSON;
  
  constructor(http:HttpClient, private router: Router, private route: ActivatedRoute) {
    http.get('app/configurations/screens/videoplayback/story1.json').subscribe(data => {
      this.configurations = data;
    });
  }
  
  ngOnInit(): void {
  }
  
  buttonClick(event){
    if(event.srcElement.id === "skip-video"){
      this.go('coach-office')
    }
    console.log(event.srcElement.id)
  }
  
  go(path) {
    this.router.navigate([`../${path}`], { relativeTo: this.route });
  }
  
  goBack(){
    console.log("goback")
    this.go('conversation')
    
  }
}
