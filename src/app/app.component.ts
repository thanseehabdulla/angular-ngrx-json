import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';

interface AppState {
  message : string
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'json-angular-starter';
  message:Observable<string>
  
  constructor(private store : Store<AppState>){
    this.message = this.store.select('message')
  }
  
  spanishMessage(){
    this.store.dispatch({type : 'SP'})
  }
  
  englishMessage(){
    this.store.dispatch({type: 'EN'})
  }
  
}
