import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocalStorageModule } from 'angular-2-local-storage';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatCardModule,
  MatListModule,
  MatSidenavModule,
  MatTableModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatButtonToggleModule,
  MatTabsModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router/app-router.module';

import { DataService } from './services/data.service';

import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { TradesComponent } from './trades/trades.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WalletsComponent } from './wallets/wallets.component';
import { ApiComponent } from './api/api.component';
import { SettingsComponent } from './settings/settings.component';
import { CreateWalletDialogComponent } from './create-wallet-dialog/create-wallet-dialog.component';
import { CreateTradeDialogComponent } from './create-trade-dialog/create-trade-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    TradesComponent,
    FooterComponent,
    DashboardComponent,
    WalletsComponent,
    ApiComponent,
    SettingsComponent,
    CreateWalletDialogComponent,
    CreateTradeDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    }),
    AppRouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatButtonToggleModule,
    MatTabsModule
  ],
  entryComponents: [
    CreateWalletDialogComponent,
    CreateTradeDialogComponent
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
