import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { RidesComponent } from './rides/rides.component';
import { EmergenciesComponent } from './emergencies/emergencies.component';
import { FareControlsComponent } from './fare-controls/fare-controls.component';

const routes: Routes = [
  { path: '', redirectTo: '/farecontrols', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'rides', component: RidesComponent },
  { path: 'emergencies', component: EmergenciesComponent },
  { path: 'farecontrols', component: FareControlsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
