import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortsListComponent } from './resorts-list.component';

describe('ResortsListComponent', () => {
  let component: ResortsListComponent;
  let fixture: ComponentFixture<ResortsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResortsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
