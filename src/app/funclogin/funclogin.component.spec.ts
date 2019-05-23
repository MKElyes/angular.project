import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncloginComponent } from './funclogin.component';

describe('FuncloginComponent', () => {
  let component: FuncloginComponent;
  let fixture: ComponentFixture<FuncloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
