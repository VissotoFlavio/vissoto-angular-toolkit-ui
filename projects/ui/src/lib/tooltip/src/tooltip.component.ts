import { Component, Input } from '@angular/core';

import { Position } from '@vissoto-angular/ui/src/lib/interface';

@Component({
  selector: 'vat-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent {
  @Input() text = '';
  @Input() position: Position = 'top';
  @Input() show = false;
}
