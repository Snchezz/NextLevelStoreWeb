import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextproductosComponent } from './textproductos.component';

describe('TextproductosComponent', () => {
  let component: TextproductosComponent;
  let fixture: ComponentFixture<TextproductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextproductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
