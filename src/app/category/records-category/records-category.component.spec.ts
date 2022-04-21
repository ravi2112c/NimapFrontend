import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsCategoryComponent } from './records-category.component';

describe('RecordsCategoryComponent', () => {
  let component: RecordsCategoryComponent;
  let fixture: ComponentFixture<RecordsCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordsCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
