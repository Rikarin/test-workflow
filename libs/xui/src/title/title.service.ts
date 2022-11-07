import { Injectable } from '@angular/core';

@Injectable()
export class XuiTitleService {
  private _callbacks: (() => void)[] = [];

  register(callback: () => void) {
    this._callbacks.push(callback);
  }

  resetAll() {
    this._callbacks = [];
  }

  tick() {
    this._callbacks.forEach(x => x());
  }
}
