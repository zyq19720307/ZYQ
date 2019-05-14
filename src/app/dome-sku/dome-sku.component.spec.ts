import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomeSkuComponent } from './dome-sku.component';

describe('DomeSkuComponent', () => {
  let component: DomeSkuComponent;
  let fixture: ComponentFixture<DomeSkuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomeSkuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomeSkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
