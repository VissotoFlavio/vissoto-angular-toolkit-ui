import { ObjectValues } from './object-values';

export const POSITION = {
  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left',
} as const;

export type Position = ObjectValues<typeof POSITION>;
