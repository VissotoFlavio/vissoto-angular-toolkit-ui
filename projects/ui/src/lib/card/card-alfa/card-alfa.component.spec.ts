import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAlfa } from './interface/card-alfa.interface';
import { CardAlfaComponent } from './card-alfa.component';
import { CommonModule } from '@angular/common';

describe('CardAlfaComponent', () => {
  let component: CardAlfaComponent;
  let fixture: ComponentFixture<CardAlfaComponent>;

  const mockCard = {
    date: '01/11/2020',
    imageSrc:
      'https://i.pinimg.com/564x/d4/5c/ec/d45cec82cba21c3e222d70f79fa8881d.jpg',
    message:
      'Ele se esconde nas sombras. Diz-se que nas salas onde Gengar está escondido, a temperatura cai quase 10 graus Fahrenheit.',
    tags: [{ name: 'Pokemon' }, { name: 'Cards' }],
    title: '#094 Gengar',
  } as CardAlfa;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardAlfaComponent],
      imports: [CommonModule],
    }).compileComponents();
    fixture = TestBed.createComponent(CardAlfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create component', () => {
    component.card = mockCard;
    expect(component).toBeTruthy();
  });

  test('should emit clickCard on click', () => {
    component.card = mockCard;
    component.clickedCard.subscribe((x: boolean) => {
      expect(x).toEqual(true);
    });
    component.clickCard();
  });
});
