import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TradesComponent } from './../trades/trades.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { WalletsComponent } from './../wallets/wallets.component';
import { ApiComponent } from './../api/api.component';
import { SettingsComponent } from './../settings/settings.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'wallets',
    component: WalletsComponent,
  },
  {
    path: 'trades',
    component: TradesComponent,
  },

  {
    path: 'api',
    component: ApiComponent,
  },

  {
    path: 'settings',
    component: SettingsComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRouterModule { }
