import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgFlechaComponent } from './svg-flecha.component';

describe('SvgFlechaComponent', () => {
  let component: SvgFlechaComponent;
  let fixture: ComponentFixture<SvgFlechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgFlechaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgFlechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
