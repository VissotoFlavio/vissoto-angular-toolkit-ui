import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Day } from './interfaces/day.calendar.interface';
import { Month } from './interfaces/month.calendar.interface';
import { NotificationCalendar } from './interfaces/notification.calendar.interface';
import { Week } from './interfaces/week.calendar.interface';

@Component({
  selector: 'vat-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  date = new Date();
  currentDay = this.date.getDate();
  currentDayWeek = this.date.getDay();
  currentYear = this.date.getFullYear();
  currentMonth = this.date.getMonth();
  currentHours: string = this.getHours();
  selectedDay = this.date.getDate();

  renderDates: Day[] = [];

  @Input() months = [
    {
      index: 0,
      name: 'Janeiro',
      disabled: false,
      selected: false,
    },
    {
      index: 1,
      name: 'Fevereiro',
      disabled: true,
      selected: false,
    },
    {
      index: 2,
      name: 'Março',
      disabled: false,
      selected: false,
    },
    {
      index: 3,
      name: 'Abril',
      disabled: false,
      selected: false,
    },
    {
      index: 4,
      name: 'Maio',
      disabled: false,
      selected: false,
    },
    {
      index: 5,
      name: 'Junho',
      disabled: false,
      selected: false,
    },
    {
      index: 6,
      name: 'Julho',
      disabled: false,
      selected: false,
    },
    {
      index: 7,
      name: 'Agosto',
      disabled: false,
      selected: false,
    },
    {
      index: 8,
      name: 'Setembro',
      disabled: false,
      selected: false,
    },
    {
      index: 9,
      name: 'Outubro',
      disabled: false,
      selected: false,
    },
    {
      index: 10,
      name: 'Novembro',
      disabled: false,
      selected: false,
    },
    {
      index: 11,
      name: 'Dezembro',
      disabled: false,
      selected: false,
    },
  ] as Month[];

  @Input() daysWeek: Week[] = [
    {
      index: 0,
      name: 'Domingo',
      shortname: 'Dom',
    },
    {
      index: 1,
      name: 'Segunda-Feira',
      shortname: 'Seg',
    },
    {
      index: 2,
      name: 'Terça-Feira',
      shortname: 'Ter',
    },
    {
      index: 3,
      name: 'Quarta-Feira',
      shortname: 'Qua',
    },
    {
      index: 4,
      name: 'Quinta-Feira',
      shortname: 'Qui',
    },
    {
      index: 5,
      name: 'Sexta-Feira',
      shortname: 'Sex',
    },
    {
      index: 6,
      name: 'Sábado',
      shortname: 'Sáb',
    },
  ];

  yearList: number[] = [];

  showSelectDays = true;
  showSelectMonth = false;
  showSelectYear = false;

  disabledPlusButton = true;

  private intvalUpdateHour: ReturnType<typeof setInterval>;

  @Input() theme: 'classic' | 'dark' = 'classic';

  /**
   * Notificações que serão exibidas no calendário.
   */
  @Input() notifications: NotificationCalendar[];

  /**
   * Notificações que serão exibidas no calendário.
   */
  @Input() addNotification: EventEmitter<NotificationCalendar[]>;

  /**
   * Dispara quando houver um clique do mouse no botão "plus" elemento.
   */
  @Output() byClickPlus = new EventEmitter<Day>();

  /**
   * Dispara quando houver um clique do mouse no dia do mês.
   */
  @Output() byClickDate = new EventEmitter<Day>();

  /**
   * Dispara quando o mês for alterado.
   */
  @Output() byChangeMonth = new EventEmitter<Month>();

  /**
   * Dispara quando houver um clique do mouse no botão de seleção do mês.
   */
  @Output() byClickMonth = new EventEmitter();

  /**
   * Dispara quando o ano for alterado.
   */
  @Output() byChangeYear = new EventEmitter<number>();

  /**
   * Dispara quando houver um clique do mouse no botão de seleção do ano.
   */
  @Output() byClickYear = new EventEmitter();

  ngOnInit(): void {
    this.setListernerNotification();
    this.setHours();
    this.setYearsAvailables();
    this.renderCalendar();
  }

  ngOnDestroy(): void {
    clearInterval(this.intvalUpdateHour);
  }

  /**
   * Abre a seleção do mês.
   */
  openSelectMonth(): void {
    this.showSelectMonth = true;
    this.showSelectDays = false;
    this.showSelectYear = false;
    this.byClickMonth.emit();
  }

  /**
   * Altera a seleção do dia.
   * @param item Dia selecionado
   */
  changeMonth(item: Day): void {
    this.currentDay = item.day;
    this.currentMonth = item.month;
    this.currentYear = item.year;
    this.setDayWeek();
    this.renderCalendar();
    this.selectDate(item);
    this.byChangeMonth.emit();
  }

  /**
   * Abre a seleção do ano.
   */
  openSelectYear(): void {
    this.showSelectMonth = false;
    this.showSelectDays = false;
    this.showSelectYear = true;
    this.byClickYear.emit();
  }

  /**
   * Seleciona o dia.
   * @param item Dia selecionado
   */
  selectDate(item: Day): void {
    this.removeAllSelectedDay();
    const index = this.renderDates.findIndex((x) => x.day == item.day && x.month == item.month);
    this.selectedDay = item.day;
    this.renderDates[index].selected = true;
    this.disabledPlusButton = false;
    this.setDayWeek();
    this.byClickDate.emit(item);
  }

  /**
   * Altera a seleção do mês.
   * @param item Mês selecioando
   */
  selectedMonth(item: Month): void {
    for (let i = 0; i < this.months.length; i++) {
      this.months[i].selected = false;
    }
    this.months[item.index].selected = true;
    this.currentMonth = item.index;
    this.showCalendar();
    this.renderCalendar();
    this.byChangeMonth.emit(item);
  }

  /**
   * Altera a seleção do ano.
   * @param item Ano selecioando
   */
  selectedYear(year: number): void {
    this.currentYear = year;
    this.showCalendar();
    this.renderCalendar();
    this.byChangeYear.emit(year);
  }

  clickPlusButton(): void {
    const day = this.renderDates.filter((x) => x.selected);
    if (day && day.length > 0) {
      this.byClickPlus.emit(day[0]);
    }
  }

  private setListernerNotification(): void {
    if (this.addNotification == undefined || this.addNotification == null) {
      return;
    }

    this.addNotification.subscribe({
      next: (x: NotificationCalendar[]) => {
        this.notifications = x;
        this.addNotificationInCalendar();
      },
    });
  }

  /**
   * Atribui o dia da semana na variavel "currentDayWeek".
   */
  private setDayWeek(): void {
    this.currentDayWeek = new Date(this.currentYear, this.currentMonth, this.selectedDay).getDay();
  }

  /**
   * Renderiza o calendário.
   */
  private renderCalendar(): void {
    const firstDayofMonth = this.getFirstDayofMonth(this.currentYear, this.currentMonth);
    const lastDateOfMonth = this.getLastDateOfMonth(this.currentYear, this.currentMonth);
    const lastDayOfMonth = this.getLastDayWeekOfMonth(this.currentYear, this.currentMonth);
    const lastDateOfPreviousMonth = this.getLastDateOfMonth(this.currentYear, this.currentMonth - 1);

    this.renderDates = [];

    for (let i = firstDayofMonth; i > 0; i--) {
      this.renderDates.push({
        text: (lastDateOfPreviousMonth - i + 1).toString(),
        month: this.currentMonth - 1,
        prev: true,
        year: this.currentYear - 1,
        day: lastDateOfPreviousMonth - i + 1,
      });
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
      const isToday =
        i === this.date.getDate() && this.currentMonth === new Date().getMonth() && this.currentYear === new Date().getFullYear();
      this.renderDates.push({
        text: i.toString(),
        isToday: isToday,
        month: this.currentMonth,
        year: this.currentYear,
        day: i,
      });
    }

    for (let i = lastDayOfMonth; i < 6; i++) {
      let cMonth = this.currentMonth + 1;
      if (this.currentMonth > 11) {
        cMonth = 0;
      }

      this.renderDates.push({
        text: (i - lastDayOfMonth + 1).toString(),
        month: cMonth,
        next: true,
        year: this.currentMonth < 11 ? this.currentYear : this.currentYear + 1,
        day: i - lastDayOfMonth + 1,
      });
    }

    this.disabledPlusButton = true;
    this.addNotificationInCalendar();
  }

  /**
   * Atualiza a hora/minuto a cada 1 segundo.
   */
  private setHours(): void {
    this.intvalUpdateHour = setInterval(() => {
      this.currentHours = this.getHours();
    }, 1000);
  }

  /**
   *
   * @returns Retorna a hora e minuto atual.
   */
  private getHours(): string {
    const dateNow = new Date();
    return `${dateNow.getHours()}:${dateNow.getMinutes().toString().padStart(2, '0')}`;
  }

  /**
   * Cria a lista dos anos disponíveis para seleção.
   */
  private setYearsAvailables(): void {
    const yearStart = 2021;

    for (let i = 0; i < 6; i++) {
      this.yearList.push(yearStart + i);
    }
  }

  /**
   * Retorna o dia da semana inicial do mês.
   * @param year Ano
   * @param month Mês
   * @returns Retorna o dia da semana
   */
  private getFirstDayofMonth(year: number, month: number): number {
    return new Date(year, month, 1).getDay();
  }

  /**
   * Retorna o último dia da semana do mês.
   * @param year Ano
   * @param month Mês
   * @returns Retorna o dia da semana
   */
  private getLastDateOfMonth(year: number, month: number): number {
    return 32 - new Date(year, month, 32).getDate();
  }

  /**
   * Retorna o último dia da semana do mês.
   * @param year Ano
   * @param month Mês
   * @returns Retorna o último dia do Mês
   */
  private getLastDayWeekOfMonth(year: number, month: number): number {
    return new Date(year, month, this.getLastDateOfMonth(year, month)).getDay();
  }

  /**
   * Mostra o calendario e esconde a seleção de mês e ano.
   */
  private showCalendar(): void {
    this.showSelectMonth = false;
    this.showSelectYear = false;
    this.showSelectDays = true;
  }

  /**
   * Remove a opção de seleção de todos os dias do mês.
   */
  private removeAllSelectedDay(): void {
    for (let i = 0, max = this.renderDates.length; i < max; i++) {
      this.renderDates[i].selected = false;
    }
  }

  /**
   * Limpa todas as notificações do calendário;
   */
  private removeAllNotifications(): void {
    for (let i = 0; i < this.renderDates.length; i++) {
      this.renderDates[i].countNotifications = undefined;
      this.renderDates[i].notification = false;
      this.renderDates[i].active = false;
    }
  }

  /**
   * Adiciona as noticiações no calendário.
   */
  private addNotificationInCalendar(): void {
    this.removeAllNotifications();
    if (this.notifications == undefined && this.notifications == null) {
      return;
    }

    this.notifications.forEach((element: NotificationCalendar) => {
      const index = this.renderDates.findIndex((x) => x.day == element.day && x.month == element.month && x.year == element.year);
      if (index > 0) {
        this.renderDates[index].countNotifications = element.countNotifications;
        this.renderDates[index].notification = true;
        this.renderDates[index].active = true;
      }
    });
  }
}
