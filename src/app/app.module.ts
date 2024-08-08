import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { GetallComponent } from './getall/getall.component';
import { PostComponent } from './post/post.component';
import { ForObservableComponent } from './for-observable/for-observable.component';

@NgModule({
  declarations: [
    AppComponent,
    GetallComponent,
    PostComponent,
    ForObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
