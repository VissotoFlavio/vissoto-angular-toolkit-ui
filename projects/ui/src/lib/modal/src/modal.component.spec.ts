import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  jest.useFakeTimers();
  jest.spyOn(global, 'setTimeout');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalComponent],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.clearAllMocks();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('closeAndDestroy', () => {
    component.show = true;
    component['closeAndDestroy']().subscribe({
      next: () => {
        expect(component.show).toBeFalsy();
      },
    });
    jest.runOnlyPendingTimers();
  });

  test('setConfig', () => {
    component.setConfig({
      templateRef: fixture.debugElement.componentInstance.appComponentRef,
      color: 'blue',
    });
    expect(component.config.color).toEqual('blue');
  });

  test('closeModal', () => {
    component.show = true;
    component['closeAndDestroy']().subscribe({
      next: () => {
        expect(component.show).toBeFalsy();
      },
    });
    component.closeModal();
    jest.runOnlyPendingTimers();
  });

  test('clickBackdrop', () => {
    component.clickBackdrop();
    expect(component.show).toBeFalsy();
  });
});
