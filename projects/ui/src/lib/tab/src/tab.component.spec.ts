import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TabComponent } from './tab.component';
import { TabItem } from './interfaces/tab.interface';

describe('TabComponent', () => {
  let component: TabComponent;
  let fixture: ComponentFixture<TabComponent>;

  const mockItem = [
    {
      id: '01',
      text: 'item 01',
      selected: true,
      disabled: false,
    },
    {
      id: '02',
      text: 'item 02',
      selected: false,
      disabled: false,
    },
  ] as TabItem[];

  const mockHTMLElement = {
    offsetWidth: 450,
    style: {
      width: '450px',
    } as CSSStyleDeclaration,
  } as HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(TabComponent);
    component = fixture.componentInstance;
    component.itens = mockItem;
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });

  test('should create component', () => {
    expect(component).toBeTruthy();
  });

  test('click', () => {
    fixture.nativeElement.querySelector('ul li[data-id-tab="' + mockItem[0].id + '"]').click();
    component.click(mockItem[0]);
    component.byClick.subscribe({
      next: (x: TabItem) => {
        expect(x.id).toEqual(mockItem[0].id);
      },
    });
    fixture.detectChanges();
  });

  test('getSizeTab fixedWidth', () => {
    component.fixedWidth = 250;
    component.onResize();
    expect(component.widthTab).toEqual('250px');
  });

  test('getSizeTab maxWidthPx', () => {
    component.maxWidthPx = 250;
    //component.maxWidthElement = mockHTMLElement;
    component.onResize();
    expect(component.maxWidthTab).toEqual('250px');
  });

  test('getSizeTab maxWidthElement and maxWidthPx', () => {
    component.maxWidthPx = 250;
    component.maxWidthElement = mockHTMLElement;
    component.onResize();
    expect(component.maxWidthTab).toEqual('250px');
  });

  test('getSizeTab maxWidthElement', () => {
    component.maxWidthElement = mockHTMLElement;
    component.onResize();
    expect(component.maxWidthTab).toEqual('450px');
  });

  test('getSizeTab maxWidthElement < maxWidthPx', () => {
    component.maxWidthPx = 550;
    component.maxWidthElement = mockHTMLElement;
    component.onResize();
    expect(component.maxWidthTab).toEqual('450px');
  });
});
