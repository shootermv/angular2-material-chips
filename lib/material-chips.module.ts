import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule} from '@angular/forms'
import {MaterialChipsComponent} from './material-chips.component';

@NgModule({
    imports: [CommonModule,FormsModule],
    declarations: [MaterialChipsComponent],
    exports: [MaterialChipsComponent]
})
export class MaterialChipsModule {}
