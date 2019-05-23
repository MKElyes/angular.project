import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforSwitchIfComponent } from './ngfor-switch-if.component';

describe('NgforSwitchIfComponent', () => {
  let component: NgforSwitchIfComponent;
  let fixture: ComponentFixture<NgforSwitchIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgforSwitchIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforSwitchIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
