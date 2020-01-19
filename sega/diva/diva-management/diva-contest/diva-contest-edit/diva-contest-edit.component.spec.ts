import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DivaContestEditComponent} from './diva-contest-edit.component';

describe('DivaContestEditComponent', () => {
  let component: DivaContestEditComponent;
  let fixture: ComponentFixture<DivaContestEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DivaContestEditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivaContestEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
