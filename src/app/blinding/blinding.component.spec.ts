import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlindingComponent } from './blinding.component';

describe('BlindingComponent', () => {
  let component: BlindingComponent;
  let fixture: ComponentFixture<BlindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
