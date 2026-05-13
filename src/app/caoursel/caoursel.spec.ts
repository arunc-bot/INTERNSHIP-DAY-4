import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Caoursel } from './caoursel';

describe('Caoursel', () => {
  let component: Caoursel;
  let fixture: ComponentFixture<Caoursel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Caoursel],
    }).compileComponents();

    fixture = TestBed.createComponent(Caoursel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
