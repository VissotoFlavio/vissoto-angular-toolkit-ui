import { CardBetaComponent } from './card-beta.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [CardBetaComponent],
  exports: [CardBetaComponent],
  imports: [CommonModule],
})
export class CardBetaModule {}
