import { Color, Position, Rounded, Size } from '@vissoto-angular/ui/src/lib/interface';

import { ShowType } from './show-type';
import { TemplateRef } from '@angular/core';

export interface ModalConfig {
  templateRef: TemplateRef<unknown>;
  color?: Color;
  position?: Position;
  rounded?: Rounded;
  showType?: ShowType;
  size?: Size;
  width?: string;
}
