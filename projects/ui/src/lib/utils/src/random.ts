import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RandomCustom {
  private static chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  /**
   * Retorna um número entre o intervalo informado.
   * @param min Valor mínimo do intervalo.
   * @param max Valor máximo do intervalo.
   * @returns Valor entre o intervalo.
   */
  static getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

  /**
   * Retorna um valor em string com o tamanho informado contendo numeros e letras.
   * @param length Tamanho da string retornada.
   * @returns Valor em string com o tamanho informado.
   */
  static getRandomAlphanumeric(length: number): string {
    let result = '';
    for (let i = length; i > 0; --i) {
      result += this.chars[Math.floor(Math.random() * this.chars.length)];
    }
    return result;
  }
}
