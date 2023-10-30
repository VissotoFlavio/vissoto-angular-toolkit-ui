import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

import { TabItem } from './interfaces/tab.interface';

@Component({
  selector: 'vat-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent {
  /**
   * Itens que serão utilizados para criação do Tab.
   */
  @Input() itens: TabItem[];
  /**
   * Elemento utilizado como base para largura máxima do Tab.
   */
  @Input() maxWidthElement: HTMLElement;
  /**
   * Valor utilizado para a largur máxima do Tab em pixels.
   */
  @Input() maxWidthPx: number;
  /**
   * Valor fixo para largura do tab em pixels.
   */
  @Input() fixedWidth: number;
  /**
   * Evento disparado quando usuário clica em um item.
   * Retorna o item clicado pelo usuário.
   */
  @Output() byClick = new EventEmitter<TabItem>();

  maxWidthTab: string;
  widthTab: string;

  ngAfterViewInit(): void {
    this.getSizeTab();
  }

  click(value: TabItem): void {
    if (!value.disabled) {
      this.itens = this.itens.map((x) => ({
        ...x,
        selected: x.id == value.id,
      }));
      this.byClick.emit(value);
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.getSizeTab();
  }

  private getSizeTab(): void {
    if (this.fixedWidth) {
      this.widthTab = this.fixedWidth + 'px';
      return;
    }
    if (this.maxWidthPx) {
      if (this.maxWidthElement && this.maxWidthElement.offsetWidth < this.maxWidthPx) {
        this.maxWidthTab = this.maxWidthElement.offsetWidth + 'px';
      } else {
        this.maxWidthTab = this.maxWidthPx + 'px';
      }
      return;
    }
    if (this.maxWidthElement) {
      this.maxWidthTab = this.maxWidthElement.offsetWidth + 'px';
      return;
    }
  }
}
