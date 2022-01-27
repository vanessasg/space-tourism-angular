import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewNavComponent } from './crew-nav.component';

describe('CrewNavComponent', () => {
  let component: CrewNavComponent;
  let fixture: ComponentFixture<CrewNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrewNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
