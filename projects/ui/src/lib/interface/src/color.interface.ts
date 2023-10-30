import { ObjectValues } from './object-values';

export const COLOR = {
  none: 'none',
  blue: 'blue',
  alternative: 'alternative',
  green: 'green',
  red: 'red',
  yellow: 'yellow',
  purple: 'purple',
  orange: 'orange',
  pink: 'pink',
  purpleToBlue: 'purple-to-blue',
  cyanToBlue: 'cyan-to-blue',
  greenToBlue: 'green-to-blue',
  purpleToPink: 'purple-to-pink',
  pinkToOrange: 'pink-to-orange',
  tealToLime: 'teal-to-lime',
  redToYellow: 'red-to-yellow',
} as const;

export type Color = ObjectValues<typeof COLOR>;
