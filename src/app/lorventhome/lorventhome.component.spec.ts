import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LorventhomeComponent } from './lorventhome.component';

describe('LorventhomeComponent', () => {
  let component: LorventhomeComponent;
  let fixture: ComponentFixture<LorventhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LorventhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LorventhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
