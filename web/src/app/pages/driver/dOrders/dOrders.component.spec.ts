import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DOrdersComponent } from './dOrders.component';

describe('EquipmentComponent', () => {
  let component: DOrdersComponent;
  let fixture: ComponentFixture<DOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
