import { ObjectValues } from '@vissoto-angular/ui/src/lib/interface';

export const SHOW_TYPE = {
  frame: 'frame',
  side: 'side',
  central: 'central',
} as const;

export type ShowType = ObjectValues<typeof SHOW_TYPE>;
