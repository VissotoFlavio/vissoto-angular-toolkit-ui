import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CardBeta } from './interface/card-beta.interface';

@Component({
  selector: 'vat-card-beta',
  templateUrl: './card-beta.component.html',
  styleUrls: ['./card-beta.component.scss'],
})
export class CardBetaComponent implements OnInit {
  @Input() card: CardBeta;
  @Input() title: string;
  @Input() message: string;
  @Input() imageSrc: string;

  @Output() clickedButton = new EventEmitter();

  ngOnInit(): void {
    if (this.card) {
      this.title = this.card.title;
      this.message = this.card.message;
      this.imageSrc = this.card.imageSrc;
    }
  }

  clickCard(): void {
    this.clickedButton.emit(true);
  }
}
