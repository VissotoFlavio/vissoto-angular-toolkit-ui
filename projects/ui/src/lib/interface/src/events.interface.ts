import { EventEmitter } from '@angular/core';

export interface ByFormEvents {
  /**
   * Dispara no momento em que o elemento perde o foco.
   *
   * Return: EventEmitter<FocusEvent>
   */
  byBlur: EventEmitter<FocusEvent>;
  /**
   * Dispara no momento em que o valor do elemento é alterado.
   *
   * Return: EventEmitter<Event>
   */
  byChange: EventEmitter<Event>;
  /**
   * Dispara quando um menu de contexto é acionado.
   *
   * Return: EventEmitter<MouseEvent>
   */
  byContextMenu: EventEmitter<MouseEvent>;
  /**
   * Dispara no momento em que o elemento recebe o foco.
   *
   * Return: EventEmitter<FocusEvent>
   */
  byFocus: EventEmitter<FocusEvent>;
  /**
   * Dispara no momento em que o elemento recebe entrada do usuário.
   *
   * Return: EventEmitter<InputEvent>
   */
  byInput: EventEmitter<InputEvent>;
  /**
   * Dispara após algum texto ter sido selecionado em um elemento.
   *
   * Return: EventEmitter<Event>
   */
  bySelect: EventEmitter<Event>;
}

export interface ByKeyboardEvents {
  /**
   * Dispara quando o usuário está pressionando uma tecla.
   *
   * Return: EventEmitter<KeyboardEvent>;
   */
  byKeyDown: EventEmitter<KeyboardEvent>;
  /**
   * Dispara quando o usuário pressiona uma tecla.
   *
   * Return: EventEmitter<KeyboardEvent>;
   */
  byKeyPress: EventEmitter<KeyboardEvent>;
  /**
   * Dispara quando o usuário libera uma tecla.
   *
   * Return: EventEmitter<KeyboardEvent>;
   */
  byKeyUp: EventEmitter<KeyboardEvent>;
}

export interface ByMouseEvents {
  /**
   * Dispara com um clique do mouse no elemento.
   *
   * Return: EventEmitter<PointerEvent>
   */
  byClick: EventEmitter<PointerEvent>;
  /**
   * Dispara com um duplo clique do mouse no elemento
   *
   * Return: EventEmitter<MouseEvent>
   */
  byDblClick: EventEmitter<MouseEvent>;
  /**
   * Dispara quando um botão do mouse é pressionado no elemento.
   *
   * Return: EventEmitter<MouseEvent>
   */
  byMouseDown: EventEmitter<MouseEvent>;
  /**
   * Dispara quando o ponteiro do mouse está se movendo enquanto está sobre o elemento.
   *
   * Return: EventEmitter<MouseEvent>
   */
  byMouseMove: EventEmitter<MouseEvent>;
  /**
   * Dispara quando o ponteiro do mouse sai do elemento.
   *
   * Return: EventEmitter<MouseEvent>
   */
  byMouseOut: EventEmitter<MouseEvent>;
  /**
   * Dispara quando o ponteiro do mouse se move sobre o elemento.
   *
   * Return: EventEmitter<MouseEvent>
   */
  byMouseOver: EventEmitter<MouseEvent>;
  /**
   * Dispara quando um botão do mouse é liberado sobre o elemento.
   *
   * Return: EventEmitter<MouseEvent>
   */
  byMouseUp: EventEmitter<MouseEvent>;
  /**
   * Dispara quando a roda do mouse rola para cima ou para baixo sobre o elemento.
   *
   * Return: EventEmitter<WheelEvent>
   */
  byWheel: EventEmitter<WheelEvent>;
}

export interface ByClipboardEvents {
  /**
   * Dispara quando o usuário copia o conteúdo do elemento.
   *
   * Return: EventEmitter<ClipboardEvent>
   */
  byCopy: EventEmitter<ClipboardEvent>;
  /**
   * Dispara quando o usuário corta o conteúdo do elemento.
   *
   * Return: EventEmitter<ClipboardEvent>
   */
  byCut: EventEmitter<ClipboardEvent>;
  /**
   * Dispara quando o usuário cola algum conteúdo no elemento.
   *
   * Return: EventEmitter<ClipboardEvent>
   */
  byPaste: EventEmitter<ClipboardEvent>;
}

export interface ByDragEvents {
  /**
   * Disparado quando um elemento é arrastado.
   *
   * Return: EventEmitter<DragEvent>
   */
  byDrag: EventEmitter<DragEvent>;
  /**
   * Disparado no final de uma operação de arrastar.
   *
   * Return: EventEmitter<DragEvent>
   */
  byDragEnd: EventEmitter<DragEvent>;
  /**
   * Disparado quando um elemento for arrastado para um destino de soltar válido.
   *
   * Return: EventEmitter<DragEvent>
   */
  byDragEnter: EventEmitter<DragEvent>;
  /**
   * Disparado quando um elemento deixa um destino de soltar válido.
   *
   * Return: EventEmitter<DragEvent>
   */
  byDragLeave: EventEmitter<DragEvent>;
  /**
   * Disparado quando um elemento está sendo arrastado sobre um destino de soltar válido.
   *
   * Return: EventEmitter<DragEvent>
   */
  byDragOver: EventEmitter<DragEvent>;
  /**
   * Disparado no início de uma operação de arrastar.
   *
   * Return: EventEmitter<DragEvent>
   */
  byDragStart: EventEmitter<DragEvent>;
  /**
   * Disparado quando o elemento arrastado está sendo solto.
   *
   * Return: EventEmitter<DragEvent>
   */
  byDrop: EventEmitter<DragEvent>;
  /**
   * Disparado quando a barra de rolagem de um elemento está sendo rolada.
   *
   * Return: EventEmitter<DragEvent>
   */
  byScroll: EventEmitter<DragEvent>;
}
