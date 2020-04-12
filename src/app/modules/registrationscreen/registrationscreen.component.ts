import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registrationscreen',
  templateUrl: './registrationscreen.component.html',
  styleUrls: ['./registrationscreen.component.scss']
})
export class RegistrationscreenComponent implements OnInit {
  
  constructor(http:HttpClient, private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
  }
  
  
  onSubmit(event){
    if(event === "home"){
      this.go('home')
    }else if(event === "start"){
      this.go('home')
    }
    console.log(event)
  }
  
  go(path) {
    this.router.navigate([`./../${path}`], { relativeTo: this.route });
  }
  
  goBack(){
    console.log("goback")
    this.router.navigate([`../`], { relativeTo: this.route });

  }
  
}
