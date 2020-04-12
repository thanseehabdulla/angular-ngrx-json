import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.scss']
})
export class StartscreenComponent implements OnInit {
  configurations:any;
  
  constructor(http:HttpClient, private router: Router, private route: ActivatedRoute) {
    http.get('app/configurations/screens/startscreen/config.json').subscribe(data => {
      this.configurations = data;
    });
  }
  
  ngOnInit(): void {
  }

  buttonClick(event){
    if(event.srcElement.id === "new"){
      this.go('register')
    }else if(event.srcElement.id === "exist"){
      this.go('home')
    }
    console.log(event.srcElement.id)
  }

  go(path) {
    this.router.navigate([`/${path}`], { relativeTo: this.route });
  }
  
}

interface jsonFormat {
  title:string
}
