import { Image } from '@vissoto-angular/ui/src/lib/interface';

export interface TabItem {
  /**
   * Identificador do item.
   */
  id: string;
  /**
   * Texto que será exibido no Tab.
   */
  text?: string;
  /**
   * Imagem que será utilizada no Tab.
   */
  img?: Image;
  /**
   * Atribui o item como selecionado.
   */
  selected?: boolean;
  /**
   * Deixa o item desabilitado.
   */
  disabled?: boolean;
  /**
   * Armazena informações que serão retornadas quando o usuário clicar o item.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: any;
}
