import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnoushehComponent } from './anousheh.component';

describe('AnoushehComponent', () => {
  let component: AnoushehComponent;
  let fixture: ComponentFixture<AnoushehComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnoushehComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnoushehComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
