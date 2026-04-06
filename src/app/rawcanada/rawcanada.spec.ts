import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rawcanada } from './rawcanada';

describe('Rawcanada', () => {
  let component: Rawcanada;
  let fixture: ComponentFixture<Rawcanada>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rawcanada]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rawcanada);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
