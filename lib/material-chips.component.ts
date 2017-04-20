import {
  Component,
  NgModule,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  forwardRef
} from '@angular/core'
//import {NgClass} from '@angular/common';


import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';


const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MaterialChipsComponent),
  multi: true
};

@Component({
  selector: 'material-chips',
  template: `
    <div *ngIf="values && values.length" class="md-chip-list" [ngClass]="focused">
        <span *ngFor="let value of values" class="md-chip">         
        {{value}} <i class="md-icon" (click)="removeValue(value)" >clear</i>
        </span>

        <span style="display:inline-block;">
        <input [(ngModel)]="labelToAdd" 
        (keyup.enter)="addValue(box.value, $event);$event.preventDefault()"
        (focus)="onFocus()" 
        (focusout)="focusOutFunction()"  
        #box />
        </span>
    </div>
    <div *ngIf="!values || !values.length">
        <input class="md-chips-input" placeholder="Tags" #tbox style="width:100%" (keyup.enter)="addValue(tbox.value, $event);$event.preventDefault()"
        />
    </div>
  `,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  styles: [`
    .md-chip{background-color:#e0e0e0;color:rgba(0,0,0,0.87)}.md-chip-list input{border:none;outline:0;background:transparent}.md-chip-list .material-icons{height:15px;width:15px;float:right;position:relative;font-size:15px;border-radius:10px;left:5px;cursor:pointer}.md-chip-list .material-icons:hover{background:gray;color:black}.md-chip-list{padding-bottom:5px;box-shadow:0 1px rgba(0,0,0,0.12)}.md-chip-list.md-focused{box-shadow:0 2px #106cc8}.md-chip{display:inline-block;padding:8px 12px 8px 12px;border-radius:16px;font-size:13px;line-height:16px}.md-chip i.md-icon{font-family:'Material Icons';font-weight:normal;font-style:normal;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;cursor:pointer;border-radius:15px}.md-chip i.md-icon:hover{background:gray}.md-chips-input{border:0;box-shadow:0 1px rgba(0,0,0,0.12);outline:0;background:transparent}.md-chips-input:focus{box-shadow:0 2px #106cc8}
  `]
})

export class MaterialChipsComponent implements ControlValueAccessor {

  addAreaDisplayed: boolean;
  isTagsFocused = false;
  values: string[];
  labelToAdd: string;
  focused: string;

  @Output() tagsfocusedChange = new EventEmitter();
  @Output()
  labelsChange: EventEmitter<string[]> = new EventEmitter<string[]>();

  @Input()
  get tagsfocused() {
    return this.isTagsFocused;
  }

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;
  registerOnChange(fn: any) { this.onChangeCallback = fn; }
  registerOnTouched(fn: any) { this.onTouchedCallback = fn; }



  removeValue(value: string) {
    var index = this.values.indexOf(value, 0);
    if (index != undefined) {
      this.values.splice(index, 1);
      this.labelsChange.emit(this.values);
    }
  }

  addValue(value: string) {
    if (!value || value.trim() === '') { return; }
    this.values.push(value);
    this.labelsChange.emit(this.values);
    this.labelToAdd = '';
  }

  //From ControlValueAccessor interface
  writeValue(value: string[]) {
    if (value !== this.values) {
      this.values = value;
    }
  }

  onFocus() {
    this.focused = 'md-focused';
    this.isTagsFocused = true;
    this.tagsfocusedChange.emit(this.isTagsFocused)
  }
  focusOutFunction() {
    this.focused = '';
    this.isTagsFocused = false;
    this.tagsfocusedChange.emit(this.isTagsFocused)
  }
}