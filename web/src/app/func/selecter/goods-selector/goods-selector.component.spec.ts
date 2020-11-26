import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsSelectorComponent } from './goods-selector.component';

describe('GoodsSelectorComponent', () => {
  let component: GoodsSelectorComponent;
  let fixture: ComponentFixture<GoodsSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodsSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
