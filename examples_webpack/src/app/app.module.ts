import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {MaterialChipsModule} from 'angular2-material-chips/lib';

@NgModule({
    imports: [
       MaterialChipsModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
