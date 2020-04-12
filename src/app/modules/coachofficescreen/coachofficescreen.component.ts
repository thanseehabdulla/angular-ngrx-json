import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coachofficescreen',
  templateUrl: './coachofficescreen.component.html',
  styleUrls: ['./coachofficescreen.component.scss']
})
export class CoachofficescreenComponent implements OnInit {
  configurations:any;
  
  constructor(http:HttpClient, private router: Router, private route: ActivatedRoute) {
    http.get('app/configurations/screens/homescreen/config.json').subscribe(data => {
      this.configurations = data;
    });
  }
  
  ngOnInit(): void {
  }
  
  buttonClick(event){
    if(event.srcElement.id === "accept-offer"){
      this.go('conversation')
    }
    console.log(event.srcElement.id)
  }
  
  go(path) {
    this.router.navigate([`../${path}`], { relativeTo: this.route });
  }
  
  goBack(){
    console.log("goback")
    this.router.navigate([`../`], { relativeTo: this.route });
    
  }
  
}
