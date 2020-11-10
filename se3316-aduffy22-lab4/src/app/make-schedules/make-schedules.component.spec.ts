import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeSchedulesComponent } from './make-schedules.component';

describe('MakeSchedulesComponent', () => {
  let component: MakeSchedulesComponent;
  let fixture: ComponentFixture<MakeSchedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeSchedulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
