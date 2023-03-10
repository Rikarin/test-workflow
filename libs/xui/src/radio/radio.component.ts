import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  Inject,
  Input,
  OnInit
} from '@angular/core';
import { RADIO_GROUP_ACCESSOR, RadioColor, RadioGroupAccessor, RadioValue } from './radio.types';
import { BooleanInput } from '@angular/cdk/coercion';
import { InputBoolean } from '../utils';

@Component({
  selector: 'xui-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div [ngClass]="styles">
    <xui-icon>{{ selected ? 'radiobox-marked' : 'radiobox-blank' }}</xui-icon>
    <ng-content></ng-content>
  </div>`
})
export class RadioComponent implements OnInit {
  static ngAcceptInputType_disabled: BooleanInput;

  @Input() @InputBoolean() disabled = false;
  @Input() value: RadioValue = null;
  @Input() color?: RadioColor;

  get selected() {
    return this.group.value === this.value;
  }

  get isDisabled() {
    return this.disabled || this.group.disabled;
  }

  get styles() {
    const ret: { [klass: string]: boolean } = {
      'x-radio': true,
      'x-radio-disabled': this.isDisabled
    };

    ret[`x-radio-${this.color ?? this.group.color}`] = true;
    return ret;
  }

  constructor(@Inject(RADIO_GROUP_ACCESSOR) private group: RadioGroupAccessor, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.group.onChange$.subscribe(() => this.cdr.markForCheck());
  }

  @HostListener('click')
  private _click() {
    if (!this.isDisabled) {
      this.group.value = this.value;
    }
  }
}
