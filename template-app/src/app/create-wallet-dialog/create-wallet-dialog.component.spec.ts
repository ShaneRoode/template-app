import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWalletDialogComponent } from './create-wallet-dialog.component';

describe('CreateWalletDialogComponent', () => {
  let component: CreateWalletDialogComponent;
  let fixture: ComponentFixture<CreateWalletDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWalletDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWalletDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
