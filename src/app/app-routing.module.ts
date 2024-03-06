import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RecordRunComponent } from './components/record-run/record-run.component';
import { RouteMapComponent } from './components/route-map/route-map.component';

const routes: Routes = [
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'maps', pathMatch: 'full', component: RouteMapComponent },
  { path: 'record', pathMatch: 'full', component: RecordRunComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
