import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackPageComponent } from './track-page.component';

describe('TrackPageComponent', () => {
  let component: TrackPageComponent;
  let fixture: ComponentFixture<TrackPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
