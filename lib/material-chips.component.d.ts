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
    labelsChange: EventEmitter<string[]>;
    readonly tagsfocused: boolean;
    private onTouchedCallback;
    private onChangeCallback;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    removeValue(value: string): void;
    addValue(value: string): void;
    writeValue(value: string[]): void;
    onFocus(): void;
    focusOutFunction(): void;
}
