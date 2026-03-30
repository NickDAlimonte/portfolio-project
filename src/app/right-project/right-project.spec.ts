import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightProject } from './right-project';

describe('RightProject', () => {
  let component: RightProject;
  let fixture: ComponentFixture<RightProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightProject);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
