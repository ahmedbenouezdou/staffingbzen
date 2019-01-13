import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateCometenceComponent } from './candidate-cometence.component';

describe('CandidateCometenceComponent', () => {
  let component: CandidateCometenceComponent;
  let fixture: ComponentFixture<CandidateCometenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateCometenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateCometenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
