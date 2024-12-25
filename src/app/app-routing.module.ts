import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { RidesComponent } from './rides/rides.component';
import { EmergenciesComponent } from './emergencies/emergencies.component';
import { FareControlsComponent } from './fare-controls/fare-controls.component';
import { FraudsComponent } from './frauds/frauds.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'rides', component: RidesComponent, canActivate: [AuthGuard] },
  { path: 'emergencies', component: EmergenciesComponent, canActivate: [AuthGuard] },
  { path: 'farecontrols', component: FareControlsComponent, canActivate: [AuthGuard] },
  { path: 'frauds', component: FraudsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
