import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nextdoorconnect } from './nextdoorconnect';

describe('Nextdoorconnect', () => {
  let component: Nextdoorconnect;
  let fixture: ComponentFixture<Nextdoorconnect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nextdoorconnect],
    }).compileComponents();

    fixture = TestBed.createComponent(Nextdoorconnect);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
