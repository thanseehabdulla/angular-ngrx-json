import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './components/cards/cards.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ChatmessageboxComponent } from './components/chatmessagebox/chatmessagebox.component';
import { BackbuttonComponent } from './components/backbutton/backbutton.component';
import { VideoplaybackComponent } from './components/videoplayback/videoplayback.component';

@NgModule({
  declarations: [CardsComponent, RegistrationComponent, ChatmessageboxComponent, BackbuttonComponent, VideoplaybackComponent],
  imports: [
  CommonModule
  ],
  exports:[CardsComponent, RegistrationComponent, ChatmessageboxComponent, BackbuttonComponent, VideoplaybackComponent]
})
export class SharedModule { }
