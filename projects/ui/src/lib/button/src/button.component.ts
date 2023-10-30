import { Color, Rounded, Size } from '@vissoto-angular/ui/src/lib/interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'vat-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text: string;
  @Input() message: string;
  @Input() loading: boolean;
  @Input() cssClassButton: boolean;
  @Input() cssClassText: boolean;

  @Output() byClick = new EventEmitter();
  @Output() byHover = new EventEmitter();
  @Output() byLeave = new EventEmitter();

  @Input() color: Color = 'blue';
  @Input() size: Size = 'small';
  @Input() rounded: Rounded = 'none';

  @Input() disabled: boolean;

  btnClick(): void {
    this.byClick.emit();
  }

  btnHover(): void {
    this.byHover.emit();
  }

  btnLeave(): void {
    this.byLeave.emit();
  }
}
