import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DouglasComponent } from './douglas.component';

describe('DouglasComponent', () => {
  let component: DouglasComponent;
  let fixture: ComponentFixture<DouglasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DouglasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DouglasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
