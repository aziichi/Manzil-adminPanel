import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { RidesComponent } from './rides/rides.component';
import { EmergenciesComponent } from './emergencies/emergencies.component';
import { FareControlsComponent } from './fare-controls/fare-controls.component';
import { FraudsComponent } from './frauds/frauds.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'rides', component: RidesComponent },
  { path: 'emergencies', component: EmergenciesComponent },
  { path: 'farecontrols', component: FareControlsComponent },
  { path: 'frauds', component: FraudsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
