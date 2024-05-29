import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupsOverviewComponent } from './signups-overview.component';

describe('SignupsOverviewComponent', () => {
  let component: SignupsOverviewComponent;
  let fixture: ComponentFixture<SignupsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupsOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
