import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertComponent } from './alert.component';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.clearAllTimers();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('set show equal true', () => {
    component.show = true;
    expect(component._show).toBeTruthy();
  });

  test('set show equal false', () => {
    component.show = false;
    expect(component._show).toBeFalsy();
  });

  test('close', () => {
    component._show = true;
    component.close();
    expect(component._show).toBeFalsy();
  });

  test('timeoutClose', () => {
    jest.useFakeTimers();
    component.autoClose = true;
    component.timer = 2000;
    component._show = true;
    component.timeoutClose();
    jest.runAllTimers();
    expect(component._show).toBeFalsy();
  });
});
