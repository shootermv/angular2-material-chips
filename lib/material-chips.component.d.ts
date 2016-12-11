import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class MaterialChipsComponent implements ControlValueAccessor {
    addAreaDisplayed: boolean;
    isTagsFocused: boolean;
    values: string[];
    labelToAdd: string;
    focused: string;
    tagsfocusedChange: EventEmitter<{}>;
    tagsfocused: boolean;
    private onTouchedCallback;
    private onChangeCallback;
    labelsChange: any;
    constructor();
    ngOnInit(): void;
    removeValue(value: any): void;
    addValue(value: any, event: any): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    onFocus(): void;
    focusOutFunction(): void;
}
