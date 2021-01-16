import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideTitleComponent } from './slide-title.component';

describe('SlideTitleComponent', () => {
  let component: SlideTitleComponent;
  let fixture: ComponentFixture<SlideTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
