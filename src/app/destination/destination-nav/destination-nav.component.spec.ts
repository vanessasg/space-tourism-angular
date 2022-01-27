import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationNavComponent } from './destination-nav.component';

describe('DestinationNavComponent', () => {
  let component: DestinationNavComponent;
  let fixture: ComponentFixture<DestinationNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
