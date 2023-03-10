import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SpinnerColor } from './spinner.types';

@Component({
  selector: 'xui-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div [ngClass]="styles"></div>`
})
export class SpinnerComponent {
  @Input() color: SpinnerColor = 'primary';

  get styles() {
    const ret: { [klass: string]: boolean } = {
      'x-spinner': true
    };

    ret[`x-spinner-${this.color}`] = true;
    return ret;
  }
}
