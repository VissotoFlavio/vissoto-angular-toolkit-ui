import { ObjectValues } from './object-values';

export const SIZE = {
  'extra-small': 'extra-small',
  small: 'small',
  base: 'base',
  large: 'large',
  'extra-large': 'extra-large',
} as const;

export type Size = ObjectValues<typeof SIZE>;
