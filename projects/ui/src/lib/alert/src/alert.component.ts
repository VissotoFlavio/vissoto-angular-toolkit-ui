import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Color } from '@vissoto-angular/ui/src/lib/interface';

@Component({
  selector: 'vat-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  /**
   * Dispara quando houver um clique do mouse no botão para fechar o elemento.
   *
   * Return: EventEmitter
   */
  @Output() byClickClose = new EventEmitter();

  /**
   * Cor utilizada para o alerta.
   */
  @Input() color: Color = 'blue';

  /**
   * Tempo de exibição do alerta em milisegundos.
   */
  @Input() timer = 3000;

  /**
   * Realiza o fechamento do alerta automaticamente no intervalo especificado no parametro "time" após aberto.
   */
  @Input() autoClose = true;

  _show = false;
  @Input() set show(value: boolean) {
    this._show = value;
    this.timeoutClose();
  }

  timeoutClose() {
    setTimeout(() => {
      if (this.autoClose) {
        this.close();
      }
    }, this.timer);
  }

  close(): void {
    this._show = false;
    this.byClickClose.emit();
  }
}
