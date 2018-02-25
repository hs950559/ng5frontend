import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudSampleComponent } from './crud-sample.component';

describe('CrudSampleComponent', () => {
  let component: CrudSampleComponent;
  let fixture: ComponentFixture<CrudSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
