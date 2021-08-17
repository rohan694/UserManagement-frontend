import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginViewlistComponent } from './admin-login-viewlist.component';

describe('AdminLoginViewlistComponent', () => {
  let component: AdminLoginViewlistComponent;
  let fixture: ComponentFixture<AdminLoginViewlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLoginViewlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLoginViewlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
