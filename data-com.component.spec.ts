import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataComComponent } from './data-com.component';

describe('DataComComponent', () => {
  let component: DataComComponent;
  let fixture: ComponentFixture<DataComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
