import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NannyesComponent } from './nannyes/nannyes.component';
import { NannyDetailComponent } from './nanny-detail/nanny-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, NannyesComponent, NannyDetailComponent, MessagesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
