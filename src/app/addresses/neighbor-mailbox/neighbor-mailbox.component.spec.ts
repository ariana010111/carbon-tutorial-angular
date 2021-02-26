import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeighborMailboxComponent } from './neighbor-mailbox.component';

describe('NeighborMailboxComponent', () => {
  let component: NeighborMailboxComponent;
  let fixture: ComponentFixture<NeighborMailboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeighborMailboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeighborMailboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
