import { Component,
         NgModule,
         OnInit, 
         Input,
         Output,
         EventEmitter, 
         ElementRef,
         forwardRef} from '@angular/core'
import {NgClass} from '@angular/common';


import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';


const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR : any= {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MaterialChipsComponent),
    multi: true
};

@Component({
  selector: 'material-chips',
  templateUrl: './templates/default/material-chips.html',
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  styleUrls: ['templates/default/material-chips.css']
})

export class MaterialChipsComponent implements ControlValueAccessor { 

  addAreaDisplayed:boolean;           
  isTagsFocused = false;
  values:string[];
  labelToAdd:string;
  focused:string;

  @Output() tagsfocusedChange = new EventEmitter();
  @Output()
  labelsChange: EventEmitter<string[]> = new EventEmitter<string[]>();

  @Input()
  get tagsfocused() {
    return this.isTagsFocused;
  }

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;
  registerOnChange(fn: any) { this.onChangeCallback = fn;}
  registerOnTouched(fn: any) { this.onTouchedCallback = fn;}



  removeValue(value:string) {
    var index = this.values.indexOf(value, 0);
    if (index != undefined) {
      this.values.splice(index, 1);
      this.labelsChange.emit(this.values);
    }
  }

  addValue(value:string) {
    if(!value || value.trim()===''){return;}
    this.values.push(value);
    this.labelsChange.emit(this.values);
    this.labelToAdd = '';
  }
  
  //From ControlValueAccessor interface
  writeValue(value:string[]) {
      if (value !== this.values) {
          this.values = value;
      }
  } 

  onFocus() {
   this.focused = 'md-focused';
   this.isTagsFocused = true;
   console.log('tags focused', this.isTagsFocused)
   this.tagsfocusedChange.emit(this.isTagsFocused)
  }
  focusOutFunction() {
    this.focused = '';
    this.isTagsFocused = false;
    console.log('tags focused', this.isTagsFocused)
    this.tagsfocusedChange.emit(this.isTagsFocused)
  } 
}