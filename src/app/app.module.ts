import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NannyesComponent } from './nannyes/nannyes.component';
import { NannyDetailComponent } from './nanny-detail/nanny-detail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, NannyesComponent, NannyDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
