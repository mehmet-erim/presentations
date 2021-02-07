import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLanguageServiceComponent } from './angular-language-service.component';

describe('AngularLanguageServiceComponent', () => {
  let component: AngularLanguageServiceComponent;
  let fixture: ComponentFixture<AngularLanguageServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularLanguageServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularLanguageServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
