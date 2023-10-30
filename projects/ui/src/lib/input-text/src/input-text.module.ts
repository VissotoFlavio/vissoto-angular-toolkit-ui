import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputTextComponent],
  exports: [InputTextComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class InputTextModule {}
