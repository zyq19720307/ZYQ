import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomeSku2Component } from './dome-sku2.component';

describe('DomeSku2Component', () => {
  let component: DomeSku2Component;
  let fixture: ComponentFixture<DomeSku2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomeSku2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomeSku2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
