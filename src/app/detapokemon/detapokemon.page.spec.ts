import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetapokemonPage } from './detapokemon.page';

describe('DetapokemonPage', () => {
  let component: DetapokemonPage;
  let fixture: ComponentFixture<DetapokemonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetapokemonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
