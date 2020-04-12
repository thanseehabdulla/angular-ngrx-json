import { Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  @Output() buttonClickListner = new EventEmitter
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  onSubmit(event){
    this.buttonClickListner.emit("home")
  }
  
}
