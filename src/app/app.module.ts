import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { RidesComponent } from './rides/rides.component';
import { EmergenciesComponent } from './emergencies/emergencies.component';
import { FareControlsComponent } from './fare-controls/fare-controls.component';
import { LayoutComponent } from './layout/layout.component';
import { FraudsComponent } from './frauds/frauds.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RidesComponent,
    EmergenciesComponent,
    FareControlsComponent,
    LayoutComponent,
    FraudsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
