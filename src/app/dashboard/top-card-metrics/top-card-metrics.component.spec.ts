import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCardMetricsComponent } from './top-card-metrics.component';

describe('TopCardMetricsComponent', () => {
  let component: TopCardMetricsComponent;
  let fixture: ComponentFixture<TopCardMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopCardMetricsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopCardMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
