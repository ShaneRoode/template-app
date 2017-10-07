import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
  MdButtonModule,
  MdCheckboxModule,
  MdInputModule,
  MdCardModule,
  MdListModule,
  MatSidenavModule,
  MdTableModule,
  MdDatepickerModule,
  MdNativeDateModule,
  MdIconModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdProgressSpinnerModule,
  MdButtonToggleModule,
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
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdCardModule,
    MdListModule,
    MatSidenavModule,
    MdTableModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdIconModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdProgressSpinnerModule,
    MdButtonToggleModule,
    MatTabsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
