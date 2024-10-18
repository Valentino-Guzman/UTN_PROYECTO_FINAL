import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoOtComponent } from './tipo-ot.component';

describe('TipoOtComponent', () => {
  let component: TipoOtComponent;
  let fixture: ComponentFixture<TipoOtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoOtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoOtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
