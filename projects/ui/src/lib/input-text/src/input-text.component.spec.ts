import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextComponent } from './input-text.component';

describe('InputTextComponent', () => {
  let component: InputTextComponent;
  let fixture: ComponentFixture<InputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputTextComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('parseInputEvent', () => {
    const event = new Event('click');
    const newEvent = component.parseInputEvent(event);
    expect(newEvent).toBeTruthy();
  });

  test('parsePointerEvent', () => {
    const event = new Event('click');
    const newEvent = component.parsePointerEvent(event);
    expect(newEvent).toBeTruthy();
  });
});
