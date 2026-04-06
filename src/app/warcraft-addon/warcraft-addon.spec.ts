import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarcraftAddon } from './warcraft-addon';

describe('WarcraftAddon', () => {
  let component: WarcraftAddon;
  let fixture: ComponentFixture<WarcraftAddon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarcraftAddon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarcraftAddon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
