import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FormControl } from '@angular/forms';
import { RandomCustom } from '@vissoto-angular/ui/src/lib/utils';

@Component({
  selector: 'vat-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {
  id: number;
  @Input() text: string;
  @Input() helperText: string;
  @Input() checked: boolean;
  @Input() disabled: boolean;
  @Input() control: FormControl;
  @Input() controlName: string;

  /**
   * O evento byChange é acionado quando o usuário modifica o valor do elemento.
   */
  @Output() byChange = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.id = RandomCustom.getRandomInt(0, 999999);
  }

  changeCheckbox(event: Event): void {
    this.byChange.emit((event.target as HTMLInputElement).checked);
  }
}
