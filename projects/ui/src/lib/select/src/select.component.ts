import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

import { SelectItem } from './interfaces/select.interface';
import { Size } from '@vissoto-angular/ui/src/lib/interface';

@Component({
  selector: 'vat-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  thisElementClicked = false;

  @HostListener('click')
  onLocalClick(): void {
    this.thisElementClicked = true;
  }

  @HostListener('document:click')
  onClick(): void {
    if (!this.thisElementClicked) {
      this.showItens = false;
    }
    this.thisElementClicked = false;
  }

  @Output() bySelected = new EventEmitter<SelectItem>();

  @Input() title: string;
  @Input() placeholder: string;

  idSelect = this.getRandomInt(0, 999999);

  cssClassRounded: string;

  private _rounded: Size;

  @Input() set itens(value: SelectItem[]) {
    this.selectItems = value;
    this.selectedItem = value.filter((x: SelectItem) => x.selected)[0];
  }
  get itens(): SelectItem[] {
    return this.selectItems;
  }

  selectItems: SelectItem[];
  selectedItem: SelectItem;
  showItens = false;

  clickButton(): void {
    this.showItens = true;
  }

  clickItem(value: SelectItem): void {
    this.selectItems = this.selectItems.map((x) => ({
      ...x,
      selected: x.value == value.value,
    }));
    this.selectedItem = value;
    this.bySelected.emit(value);
    this.showItens = false;
  }

  @Input() set rounded(value: Size) {
    this._rounded = value;
    this.cssClassRounded = this.getCssRounded();
  }

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

  private getCssRounded(): string {
    switch (this._rounded) {
      case 'extra-small':
        return 'rounded-sm';
      case 'small':
        return 'rounded';
      case 'base':
        return 'rounded-md';
      case 'large':
        return 'rounded-lg';
      case 'extra-large':
        return 'rounded-full';
      default:
        return '';
    }
  }
}
