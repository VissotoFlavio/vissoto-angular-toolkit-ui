import { ObjectValues } from './object-values';

export const ROUNDED = {
  sm: 'sm',
  rounded: 'rounded',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  '2xl': '2xl',
  '3xl': '3xl',
  full: 'full',
  none: 'none',
} as const;

export type Rounded = ObjectValues<typeof ROUNDED>;
