import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conversationscreen',
  templateUrl: './conversationscreen.component.html',
  styleUrls: ['./conversationscreen.component.scss']
})
export class ConversationscreenComponent implements OnInit {
  configurations:any;
  myjson:any=JSON;
  
  constructor(http:HttpClient, private router: Router, private route: ActivatedRoute) {
    http.get('app/configurations/screens/conversationscreen/story1.json').subscribe(data => {
      this.configurations = data;
      
    });
  }
  
  ngOnInit(): void {
  }
  
  buttonClick(event){
    if(event.srcElement.id === "done-conversation"){
      this.go('video')
    }
    console.log(event.srcElement.id)
  }
  
  go(path) {
    this.router.navigate([`../${path}`], { relativeTo: this.route });
  }
  
  goBack(){
    console.log("goback")
    this.go('home')
    
  }
  
  
}
