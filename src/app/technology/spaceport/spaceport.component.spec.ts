import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceportComponent } from './spaceport.component';

describe('SpaceportComponent', () => {
  let component: SpaceportComponent;
  let fixture: ComponentFixture<SpaceportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
