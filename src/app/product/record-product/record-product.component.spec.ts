import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordProductComponent } from './record-product.component';

describe('RecordProductComponent', () => {
  let component: RecordProductComponent;
  let fixture: ComponentFixture<RecordProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
