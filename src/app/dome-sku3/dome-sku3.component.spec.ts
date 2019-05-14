import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomeSku3Component } from './dome-sku3.component';

describe('DomeSku3Component', () => {
  let component: DomeSku3Component;
  let fixture: ComponentFixture<DomeSku3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomeSku3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomeSku3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
