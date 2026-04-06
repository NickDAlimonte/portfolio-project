import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeploymentServer } from './deployment-server';

describe('DeploymentServer', () => {
  let component: DeploymentServer;
  let fixture: ComponentFixture<DeploymentServer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeploymentServer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeploymentServer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
