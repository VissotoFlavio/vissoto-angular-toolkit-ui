import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarComponent } from './calendar.component';
import { Day } from './interfaces/day.calendar.interface';
import { EventEmitter } from '@angular/core';
import { Month } from './interfaces/month.calendar.interface';
import { NotificationCalendar } from './interfaces/notification.calendar.interface';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  jest.useFakeTimers();

  const mockDay = {
    day: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    active: true,
    countNotifications: '10',
    isToday: true,
    next: false,
    notification: true,
    prev: false,
    selected: true,
    text: 'dia',
  } as Day;

  const mockMonth = {
    index: 0,
    name: 'Janeiro',
    disabled: false,
    selected: true,
  } as Month;

  const mockNotifications = [
    {
      day: new Date().getDate(),
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      countNotifications: '2',
    },
  ] as NotificationCalendar[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalendarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
    jest.clearAllTimers();
    jest.restoreAllMocks();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('ngOnDestroy', () => {
    const spyFake = jest.spyOn(global, 'clearInterval');
    component.ngOnDestroy();
    expect(spyFake).toHaveBeenCalled();
  });

  test('openSelectMonth', () => {
    component.openSelectMonth();
    expect(component.showSelectMonth).toBeTruthy();
    expect(component.showSelectDays).toBeFalsy();
    expect(component.showSelectYear).toBeFalsy();
    component.byClickMonth.subscribe({
      next: (x: unknown) => {
        expect(x).toBeFalsy();
      },
    });
  });

  test('changeMonth', () => {
    component.changeMonth(mockDay);
    expect(component.currentDay).toEqual(new Date().getDate());
    expect(component.currentMonth).toEqual(new Date().getMonth());
    expect(component.currentYear).toEqual(new Date().getFullYear());

    component.byChangeMonth.subscribe({
      next: (x: unknown) => {
        expect(x).toBeFalsy();
      },
    });
  });

  test('openSelectYear', () => {
    component.openSelectYear();
    expect(component.showSelectMonth).toBeFalsy();
    expect(component.showSelectDays).toBeFalsy();
    expect(component.showSelectYear).toBeTruthy();
    component.byClickYear.subscribe({
      next: (x: unknown) => {
        expect(x).toBeFalsy();
      },
    });
  });

  test('selectDate', () => {
    component.renderDates = [mockDay];
    component.selectDate(mockDay);
    const index = component.renderDates.findIndex((x) => x.day == mockDay.day && x.month == mockDay.month);

    expect(component.selectedDay).toEqual(new Date().getDate());
    expect(component.renderDates[index].selected).toBeTruthy();
    expect(component.disabledPlusButton).toBeFalsy();

    expect(component.currentYear).toEqual(new Date().getFullYear());
    component.byClickDate.subscribe({
      next: (x: Day) => {
        expect(x.day).toEqual(mockDay.day);
        expect(x.month).toEqual(mockDay.month);
        expect(x.year).toEqual(mockDay.year);
      },
    });
  });

  test('selectedMonth', () => {
    component.selectedMonth(mockMonth);
    expect(component.months[mockMonth.index].selected).toBeTruthy();
    expect(component.currentMonth).toEqual(mockMonth.index);
    component.byChangeMonth.subscribe({
      next: (x: Month) => {
        expect(x.index).toEqual(mockMonth.index);
        expect(x.name).toEqual(mockMonth.name);
      },
    });
  });

  test('selectedYear', () => {
    const emitSpy = jest.spyOn(component.byChangeYear, 'emit');
    component.selectedYear(new Date().getFullYear());

    expect(component.currentYear).toEqual(new Date().getFullYear());
    expect(emitSpy).toHaveBeenCalledWith(new Date().getFullYear());
  });

  test('clickPlusButton', () => {
    const emitSpy = jest.spyOn(component.byClickPlus, 'emit');
    component.renderDates = [mockDay];
    component.clickPlusButton();
    expect(emitSpy).toHaveBeenCalled();
  });

  test('private setListernerNotification', () => {
    const emit = new EventEmitter<NotificationCalendar[]>();
    component.addNotification = emit;
    component['setListernerNotification']();

    emit.emit(mockNotifications);

    expect(component.notifications.length).toEqual(mockNotifications.length);
  });

  test('private setHours', () => {
    component['setHours']();
    const dateNow = new Date();
    const hours = `${dateNow.getHours()}:${dateNow.getMinutes().toString().padStart(2, '0')}`;
    jest.advanceTimersByTime(1000);
    expect(component.currentHours).toEqual(hours);
  });

  test('private getHours', () => {
    const dateNow = new Date();
    const hours = `${dateNow.getHours()}:${dateNow.getMinutes().toString().padStart(2, '0')}`;
    expect(component['getHours']()).toEqual(hours);
  });

  test('private getLastDayWeekOfMonth', () => {
    // Test with December/2022
    const lastDay = component['getLastDayWeekOfMonth'](2022, 11);
    expect(lastDay).toEqual(6);
  });

  test('private addNotificationInCalendar', () => {
    component.notifications = mockNotifications;
    component['addNotificationInCalendar']();

    const index = component.renderDates.findIndex(
      (x) => x.day == mockNotifications[0].day && x.month == mockNotifications[0].month && x.year == mockNotifications[0].year
    );

    expect(component.renderDates[index].countNotifications).toEqual(mockNotifications[0].countNotifications);
    expect(component.renderDates[index].notification).toBeTruthy();
    expect(component.renderDates[index].active).toBeTruthy();
  });

  test('private renderCalendar', () => {
    component['renderCalendar']();

    expect(component.renderDates.length).toBeGreaterThan(0);
  });

  test('private renderCalendar next', () => {
    component.currentMonth = 12;
    component['renderCalendar']();
    const indexNext = component.renderDates.findIndex((x) => x.next);

    expect(component.renderDates.length).toBeGreaterThan(0);
    expect(component.renderDates[indexNext].month).toEqual(0);
  });

  test('private renderCalendar previous', () => {
    component.currentMonth = 1;
    component['renderCalendar']();
    const indexPrevious = component.renderDates.findIndex((x) => x.prev);

    expect(component.renderDates.length).toBeGreaterThan(0);
    expect(component.renderDates[indexPrevious].month).toEqual(0);
  });
});
