import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftProject } from './left-project';

describe('LeftProject', () => {
  let component: LeftProject;
  let fixture: ComponentFixture<LeftProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftProject);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
