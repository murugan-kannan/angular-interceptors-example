import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommentsComponent } from './components/comments/comments.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent , CommentsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
