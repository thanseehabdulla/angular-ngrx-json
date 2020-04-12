import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { FullWidthModule } from './layouts/full-width/full-width.module';
import { HttpClientModule } from  '@angular/common/http';
import { StoreModule } from "@ngrx/store";
import { SimpleReducer } from "./reducers/simple.reducer";
import { PostReducer } from "./reducers/post.reducer";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    FullWidthModule,
    HttpClientModule,
    StoreModule.forRoot(
      {
        message : SimpleReducer,
        post : PostReducer
      })
    ],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule { }
  