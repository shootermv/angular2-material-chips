import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'



@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    tags = ['AngularJS','Angluar2']
    constructor() {

    }


}