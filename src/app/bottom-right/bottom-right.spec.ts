import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomRight } from './bottom-right';

describe('BottomRight', () => {
  let component: BottomRight;
  let fixture: ComponentFixture<BottomRight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomRight]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomRight);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
