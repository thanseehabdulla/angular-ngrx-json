import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StartscreenComponent } from './../../modules/startscreen/startscreen.component';
import { HomescreenComponent } from './../../modules/homescreen/homescreen.component';
import { DefaultComponent } from './default.component';
import { SharedModule } from './../../shared/shared.module';
import { RegistrationscreenComponent } from './../../modules/registrationscreen/registrationscreen.component';
import { ConversationscreenComponent } from './../../modules/conversationscreen/conversationscreen.component';
import { VideoplaybackscreenComponent } from './../../modules/videoplaybackscreen/videoplaybackscreen.component';
import { CoachofficescreenComponent } from './../../modules/coachofficescreen/coachofficescreen.component';


@NgModule({
  declarations: [
    StartscreenComponent,
    HomescreenComponent,
    RegistrationscreenComponent,
    ConversationscreenComponent,
    VideoplaybackscreenComponent,
    CoachofficescreenComponent,
    DefaultComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports:[DefaultComponent]
})
export class DefaultModule { }
