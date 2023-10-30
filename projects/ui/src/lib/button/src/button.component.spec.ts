import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  const cssBaseGradientOutline =
    'relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-gray-900 group bg-gradient-to-br hover:text-white ';
  const cssBaseShadow = 'shadow-lg ';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should trigger event when clicked', () => {
    const emitSpy = jest.spyOn(component.byClick, 'emit');
    fixture.nativeElement.querySelector('button').click();
    fixture.detectChanges();
    expect(emitSpy).toHaveBeenCalled();
  });

  test('should trigger event when mouse hover', () => {
    const emitSpy = jest.spyOn(component.byHover, 'emit');
    fixture.nativeElement.querySelector('button').dispatchEvent(
      new MouseEvent('mouseover', {
        view: window,
        bubbles: true,
        cancelable: true,
      })
    );
    fixture.detectChanges();
    expect(emitSpy).toHaveBeenCalled();
  });

  test('should trigger event when mouse leave', () => {
    const emitSpy = jest.spyOn(component.byLeave, 'emit');
    fixture.nativeElement.querySelector('button').dispatchEvent(
      new MouseEvent('mouseleave', {
        view: window,
        bubbles: true,
        cancelable: true,
      })
    );
    fixture.detectChanges();
    expect(emitSpy).toHaveBeenCalled();
  });
});
