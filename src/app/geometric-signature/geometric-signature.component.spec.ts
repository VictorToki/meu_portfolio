import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeometricSignatureComponent } from './geometric-signature.component';

describe('GeometricSignatureComponent', () => {
  let component: GeometricSignatureComponent;
  let fixture: ComponentFixture<GeometricSignatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeometricSignatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeometricSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
