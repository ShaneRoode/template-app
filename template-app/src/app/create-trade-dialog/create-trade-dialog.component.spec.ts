import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTradeDialogComponent } from './create-trade-dialog.component';

describe('CreateTradeDialogComponent', () => {
  let component: CreateTradeDialogComponent;
  let fixture: ComponentFixture<CreateTradeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTradeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTradeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
