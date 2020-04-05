import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusUserComponent } from './campus-user.component';

describe('CampusUserComponent', () => {
  let component: CampusUserComponent;
  let fixture: ComponentFixture<CampusUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampusUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
