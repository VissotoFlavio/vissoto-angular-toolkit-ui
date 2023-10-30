import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FormControl } from '@angular/forms';
import { RandomCustom } from '@vissoto-angular/ui/src/lib/utils';

@Component({
  selector: 'vat-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent implements OnInit {
  @Output() id: string;

  @Input() control: FormControl;
  @Input() controlName: string;

  /**
   * Valor exibido acima do input (label).
   */
  @Input() label: string;

  /**
   * O atributo placeholder especifica uma dica curta que descreve o valor esperado de um campo de entrada (por exemplo, um valor de amostra ou uma breve descrição do formato esperado).
   *
   * A dica curta é exibida no campo de entrada antes que o usuário insira um valor.
   */
  @Input() placeholder: string;

  /**
   * Especifica que o campo de entrada deve ser preenchido antes de enviar o formulário.
   */
  @Input() required: boolean;

  /**
   * Especifica o tipo do elemento (input) que será exibido.
   */
  @Input() type:
    | 'email'
    | 'file'
    | 'hidden'
    | 'month'
    | 'number'
    | 'password'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week' = 'text';

  /**
   * Especifica o valor do elemento (input).
   */
  @Input() value: string;

  /**
   * Especifica se o elemento será um campo de apenas leitura.
   */
  @Input() readonly: boolean;

  /**
   * Especifica o valor máximo do elemento (input)
   */
  @Input() max: number;

  /**
   * Especifica a quantidade máxima de caracteres permitidos no elemento (input).
   */
  @Input() maxlength: number;

  /**
   * Especifica o valor mínimo do elemento (input)
   */
  @Input() min: number;

  /**
   * Especifica a quantidade mínima de caracteres permitidos no elemento (input).
   */
  @Input() minlength: number;

  /**
   * Especifica o nome do elemento (input).
   */
  @Input() name: number;

  ngOnInit(): void {
    this.id = RandomCustom.getRandomInt(0, 999999).toString();
  }

  /**
   * Dispara quando o usuário copia o conteúdo do elemento.
   *
   * Return: EventEmitter<ClipboardEvent>
   */
  @Output() byCopy: EventEmitter<ClipboardEvent> = new EventEmitter();
  /**
   * Dispara quando o usuário corta o conteúdo do elemento.
   *
   * Return: EventEmitter<ClipboardEvent>
   */
  @Output() byCut: EventEmitter<ClipboardEvent> = new EventEmitter();
  /**
   * Dispara quando o usuário cola algum conteúdo no elemento.
   *
   * Return: EventEmitter<ClipboardEvent>
   */
  @Output() byPaste: EventEmitter<ClipboardEvent> = new EventEmitter();

  /**
   * Dispara com um clique do mouse no elemento.
   *
   * Return: EventEmitter<PointerEvent>
   */
  @Output() byClick: EventEmitter<PointerEvent> = new EventEmitter();
  /**
   * Dispara com um duplo clique do mouse no elemento
   *
   * Return: EventEmitter<MouseEvent>
   */
  @Output() byDblClick: EventEmitter<MouseEvent> = new EventEmitter();
  /**
   * Dispara quando um botão do mouse é pressionado no elemento.
   *
   * Return: EventEmitter<MouseEvent>
   */
  @Output() byMouseDown: EventEmitter<MouseEvent> = new EventEmitter();
  /**
   * Dispara quando o ponteiro do mouse está se movendo enquanto está sobre o elemento.
   *
   * Return: EventEmitter<MouseEvent>
   */
  @Output() byMouseMove: EventEmitter<MouseEvent> = new EventEmitter();
  /**
   * Dispara quando o ponteiro do mouse sai do elemento.
   *
   * Return: EventEmitter<MouseEvent>
   */
  @Output() byMouseOut: EventEmitter<MouseEvent> = new EventEmitter();
  /**
   * Dispara quando o ponteiro do mouse se move sobre o elemento.
   *
   * Return: EventEmitter<MouseEvent>
   */
  @Output() byMouseOver: EventEmitter<MouseEvent> = new EventEmitter();
  /**
   * Dispara quando um botão do mouse é liberado sobre o elemento.
   *
   * Return: EventEmitter<MouseEvent>
   */
  @Output() byMouseUp: EventEmitter<MouseEvent> = new EventEmitter();
  /**
   * Dispara quando a roda do mouse rola para cima ou para baixo sobre o elemento.
   *
   * Return: EventEmitter<WheelEvent>
   */
  @Output() byWheel: EventEmitter<WheelEvent> = new EventEmitter();

  /**
   * Dispara quando o usuário está pressionando uma tecla.
   *
   * Return: EventEmitter<KeyboardEvent>;
   */
  @Output() byKeyDown: EventEmitter<KeyboardEvent> = new EventEmitter();
  /**
   * Dispara quando o usuário pressiona uma tecla.
   *
   * Return: EventEmitter<KeyboardEvent>;
   */
  @Output() byKeyPress: EventEmitter<KeyboardEvent> = new EventEmitter();
  /**
   * Dispara quando o usuário libera uma tecla.
   *
   * Return: EventEmitter<KeyboardEvent>;
   */
  @Output() byKeyUp: EventEmitter<KeyboardEvent> = new EventEmitter();

  /**
   * Dispara no momento em que o elemento perde o foco.
   *
   * Return: EventEmitter<FocusEvent>
   */
  @Output() byBlur: EventEmitter<FocusEvent> = new EventEmitter();
  /**
   * Dispara no momento em que o valor do elemento é alterado.
   *
   * Return: EventEmitter<Event>
   */
  @Output() byChange: EventEmitter<Event> = new EventEmitter();
  /**
   * Dispara quando um menu de contexto é acionado.
   *
   * Return: EventEmitter<MouseEvent>
   */
  @Output() byContextMenu: EventEmitter<MouseEvent> = new EventEmitter();
  /**
   * Dispara no momento em que o elemento recebe o foco.
   *
   * Return: EventEmitter<FocusEvent>
   */
  @Output() byFocus: EventEmitter<FocusEvent> = new EventEmitter();
  /**
   * Dispara no momento em que o elemento recebe entrada do usuário.
   *
   * Return: EventEmitter<InputEvent>
   */
  @Output() byInput: EventEmitter<InputEvent> = new EventEmitter();
  /**
   * Dispara após algum texto ter sido selecionado em um elemento.
   *
   * Return: EventEmitter<Event>
   */
  @Output() bySelect: EventEmitter<Event> = new EventEmitter();

  parseInputEvent(event: Event): InputEvent {
    return event as InputEvent;
  }

  parsePointerEvent(event: Event): PointerEvent {
    return event as PointerEvent;
  }

  /**
   * Define o tamanho da fonte do elemento.
   */
  @Input() fontSize: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' = 'sm';

  /**
   * Define o raio dos cantos do elemento.
   */
  @Input() rounded: 'sm' | 'rounded' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full' | 'none' = 'none';
}
