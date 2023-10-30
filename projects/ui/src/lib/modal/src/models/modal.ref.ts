import { ComponentRef } from '@angular/core';
import { ModalComponent } from '../modal.component';

/**
 * Classe de referencia do modal.
 */
export class ModalRef {
  constructor(private componentRef: ComponentRef<ModalComponent>) {}

  /**
   * Fecha e destroi o componente.
   */
  destroy(): void {
    this.componentRef.destroy();
  }
}
