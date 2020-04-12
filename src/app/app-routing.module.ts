import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomescreenComponent } from './modules/homescreen/homescreen.component';
import { StartscreenComponent } from './modules/startscreen/startscreen.component';
import { RegistrationscreenComponent } from './modules/registrationscreen/registrationscreen.component';
import { ConversationscreenComponent } from './modules/conversationscreen/conversationscreen.component';
import { VideoplaybackscreenComponent } from './modules/videoplaybackscreen/videoplaybackscreen.component';
import { CoachofficescreenComponent } from './modules/coachofficescreen/coachofficescreen.component';

const routes: Routes = [
  {
    path:'',
    component:DefaultComponent,
    children:[
      {
        path:'',
        component:StartscreenComponent
      },
      {
        path:'home',
        component:HomescreenComponent
      }
      ,
      {
        path:'register',
        component:RegistrationscreenComponent
      },
      {
        path:'conversation',
        component:ConversationscreenComponent
      },
      {
        path:'video',
        component:VideoplaybackscreenComponent
      },
      {
        path:'coach-office',
        component:CoachofficescreenComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
