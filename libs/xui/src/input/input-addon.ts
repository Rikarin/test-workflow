import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { InputColor } from './input.types';

@Component({
  selector: 'xui-input-addon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<div [ngClass]="styles"><ng-content></ng-content></div>'
})
export class InputAddonComponent {
  @Input() color: InputColor = 'dark';

  get styles() {
    return `x-input-addon x-input-addon-${this.color}`;
  }
}
