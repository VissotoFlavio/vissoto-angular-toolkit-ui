import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabComponent } from './tab.component';

@NgModule({
  declarations: [TabComponent],
  exports: [TabComponent],
  imports: [CommonModule],
})
export class TabModule {}
