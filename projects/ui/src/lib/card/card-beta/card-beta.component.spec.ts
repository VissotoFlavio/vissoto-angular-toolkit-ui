import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBetaComponent } from './card-beta.component';

describe('CardBetaComponent', () => {
  let component: CardBetaComponent;
  let fixture: ComponentFixture<CardBetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardBetaComponent],
      imports: [],
    }).compileComponents();
    fixture = TestBed.createComponent(CardBetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create component', () => {
    expect(component).toBeTruthy();
  });

  test('should OnInit', () => {
    const card = {
      imageSrc: 'testeImg',
      message: 'Message',
      title: 'Title',
    };
    component.card = card;
    component.ngOnInit();
    expect(component.imageSrc).toStrictEqual(card.imageSrc);
    expect(component.message).toStrictEqual(card.message);
    expect(component.title).toStrictEqual(card.title);
  });

  test('should emit clickCard on click', () => {
    component.clickCard();
    component.clickedButton.subscribe((x: boolean) => {
      expect(x).toEqual(true);
    });
  });
});
