import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { CheckboxComponent } from './checkbox.component';
import { RandomCustom } from '@vissoto-angular/ui/src/lib/utils';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckboxComponent],
      providers: [RandomCustom],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('changeCheckbox', () => {
    const elem = fixture.debugElement.query(By.css('#vat-chb-' + component.id));
    elem.triggerEventHandler('change', {
      target: {
        checked: true,
      } as HTMLInputElement,
    });
    component.byChange.subscribe({
      next: (x: boolean) => {
        expect(x).toBeTruthy();
      },
    });
    fixture.detectChanges();
  });
});
