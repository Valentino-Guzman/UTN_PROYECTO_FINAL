import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterContenedorComponent } from './footer-contenedor.component';

describe('FooterContenedorComponent', () => {
  let component: FooterContenedorComponent;
  let fixture: ComponentFixture<FooterContenedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterContenedorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterContenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
