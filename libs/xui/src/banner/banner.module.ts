import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XuiBannerComponent } from './banner.component';
import { XuiIconModule } from '../icon';

@NgModule({
  imports: [CommonModule, XuiIconModule],
  declarations: [XuiBannerComponent],
  exports: [XuiBannerComponent]
})
export class XuiBannerModule {}
