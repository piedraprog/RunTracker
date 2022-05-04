import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordRunComponent } from './record-run.component';

describe('RecordRunComponent', () => {
  let component: RecordRunComponent;
  let fixture: ComponentFixture<RecordRunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordRunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
