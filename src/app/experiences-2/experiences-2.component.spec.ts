import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiences2Component } from './experiences-2.component';

describe('Experiences2Component', () => {
  let component: Experiences2Component;
  let fixture: ComponentFixture<Experiences2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Experiences2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Experiences2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
