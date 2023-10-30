import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TooltipComponent } from './tooltip.component';

@NgModule({
  declarations: [TooltipComponent],
  exports: [TooltipComponent],
  imports: [CommonModule],
})
export class TooltipModule {}
