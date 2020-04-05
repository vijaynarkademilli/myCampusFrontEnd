import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusModeratorComponent } from './campus-moderator.component';

describe('CampusModeratorComponent', () => {
  let component: CampusModeratorComponent;
  let fixture: ComponentFixture<CampusModeratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampusModeratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusModeratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
