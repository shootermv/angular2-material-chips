import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {MaterialChipsComponent} from 'angular2-material-chips/lib';



@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    tags:string[]  = ['AngularJS','Angluar2']
    constructor() {

    }


}