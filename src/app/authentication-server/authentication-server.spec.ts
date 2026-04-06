import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationServer } from './authentication-server';

describe('AuthenticationServer', () => {
  let component: AuthenticationServer;
  let fixture: ComponentFixture<AuthenticationServer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticationServer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticationServer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
