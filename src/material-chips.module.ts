import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import {MaterialChipsComponent} from './material-chips.component';

@NgModule({
    imports: [CommonModule],
    declarations: [MaterialChipsComponent],
    exports: [MaterialChipsComponent]
})
export class MaterialChips {}
