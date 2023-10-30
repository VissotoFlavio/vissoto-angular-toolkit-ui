import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

import { ModalConfig } from './interface/modal.config';
import { ModalRef } from './models/modal.ref';

@Component({
  selector: 'vat-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  /**
   * Variavel de controle de exibição do modal.
   */
  show = false;

  /**
   * Configurações do Modal.
   */
  config: ModalConfig = {} as ModalConfig;

  /**
   * Referencia ao modal.
   */
  modalRef: ModalRef;

  /**
   * Tempo de transição do modal (usado para exibir o modal após o backdrop).
   */
  MODAL_TRANSITION = 200;

  ngOnInit(): void {
    this.showModal();
  }

  /**
   * Fecha o modal e destroi o componente.
   * @returns Observable após fechamento completo do modal.
   */
  private closeAndDestroy(): Observable<void> {
    this.show = false;

    return new Observable((subscriber: Subscriber<void>) => {
      setTimeout(() => {
        subscriber.next();
        subscriber.complete();
      }, this.MODAL_TRANSITION);
    });
  }

  /**
   * Atribui as configurações do modal.
   * @param config Configuração do modal.
   */
  setConfig(config: ModalConfig): void {
    this.config = config;
  }

  /**
   * Abre o modal.
   */
  showModal(): void {
    setTimeout(() => {
      this.show = true;
    }, this.MODAL_TRANSITION);
  }

  /**
   * Fecha o modal.
   */
  closeModal(): void {
    this.closeAndDestroy().subscribe({
      next: () => {
        this.modalRef.destroy();
      },
    });
  }

  /**
   * Click do usuário no backdrop.
   */
  clickBackdrop(): void {
    this.closeModal();
  }
}
