import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
//import {MaterialChipsModule} from 'angular2-material-chips/lib';

import {FormsModule} from '@angular/forms'
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
      BrowserModule, /*MaterialChipsModule,*/ FormsModule
    ],   
    bootstrap: [AppComponent]
})
export class AppModule { }
