import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompiderComponent } from './compider.component';

describe('CompiderComponent', () => {
  let component: CompiderComponent;
  let fixture: ComponentFixture<CompiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompiderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
