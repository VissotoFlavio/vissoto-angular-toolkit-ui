export interface Day {
  day: number;
  month: number;
  year: number;
  isToday?: boolean;
  text?: string;
  prev?: boolean;
  next?: boolean;
  active?: boolean;
  notification?: boolean;
  countNotifications?: string;
  selected?: boolean;
  /*
   * Armazena informações que serão retornadas quando o usuário clicar o item.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: any;
}
