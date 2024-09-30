import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsecribtionComponent } from './subsecribtion.component';

describe('SubsecribtionComponent', () => {
  let component: SubsecribtionComponent;
  let fixture: ComponentFixture<SubsecribtionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubsecribtionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubsecribtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
