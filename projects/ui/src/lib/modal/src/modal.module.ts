import { BodyInjectorService } from '@vissoto-angular/ui/src/lib/utils';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ModalComponent],
  providers: [BodyInjectorService],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ModalComponent],
})
export class ModalModule {}
