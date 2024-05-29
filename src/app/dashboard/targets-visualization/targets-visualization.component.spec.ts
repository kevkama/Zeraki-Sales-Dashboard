import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetsVisualizationComponent } from './targets-visualization.component';

describe('TargetsVisualizationComponent', () => {
  let component: TargetsVisualizationComponent;
  let fixture: ComponentFixture<TargetsVisualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TargetsVisualizationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TargetsVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
