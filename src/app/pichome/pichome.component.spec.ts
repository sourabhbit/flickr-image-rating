import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PichomeComponent } from './pichome.component';

describe('PichomeComponent', () => {
  let component: PichomeComponent;
  let fixture: ComponentFixture<PichomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PichomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PichomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
