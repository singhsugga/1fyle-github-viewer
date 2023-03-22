import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsLoaderComponent } from './user-details-loader.component';

describe('UserDetailsLoaderComponent', () => {
  let component: UserDetailsLoaderComponent;
  let fixture: ComponentFixture<UserDetailsLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // declarations: [ UserDetailsLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailsLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
