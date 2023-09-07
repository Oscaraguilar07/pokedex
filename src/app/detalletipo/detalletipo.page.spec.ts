import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalletipoPage } from './detalletipo.page';

describe('DetalletipoPage', () => {
  let component: DetalletipoPage;
  let fixture: ComponentFixture<DetalletipoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalletipoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
