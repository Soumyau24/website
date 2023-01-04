import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionheaderComponent } from './questionheader.component';

describe('QuestionheaderComponent', () => {
  let component: QuestionheaderComponent;
  let fixture: ComponentFixture<QuestionheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
