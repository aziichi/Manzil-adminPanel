import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { io, Socket } from 'socket.io-client';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-emergencies',
  standalone: false,
  
  templateUrl: './emergencies.component.html',
  styleUrl: './emergencies.component.css'
})
export class EmergenciesComponent {
  apiUrl = environment.apiUrl;
  emergencies: any = [];
  showAlert: boolean = false;
  alertMessage: string = '';
  searchQuery: string = '';

  constructor(private http: HttpClient) {
    this.getAllEmergencies();
  }
  // private socket: Socket | undefined;

  getAllEmergencies() {
    this.http.get(`${this.apiUrl}/getEmergencies`).subscribe(
      (result) => {
        this.emergencies = result;
        console.log("Method: getAllEmergencies  |  No. of emergencies fetched: ", this.emergencies.length);
      },
      (error) => {
        console.log("Method: getAllEmergencies  |  Error while getting emergencies", error.message);
      }
    )
  }

  searchEmergencies() {
    if( this.searchQuery.trim() === '' ) {
      this.getAllEmergencies();
      return;
    }
    this.http.get(`${this.apiUrl}/getEmergenciesByName/${this.searchQuery}`).subscribe(
      (result) => {
        this.emergencies = result;
        console.log("Method: searchEmergencies  |  No. of emergencies fetched: ", this.emergencies.length);
      },
      (error) => {
        console.log("Method: searchEmergencies  |  Error while searching emergencies", error.message);
      }
    );
  }

  showRideDetails(emergency: any) {
    this.alertMessage = `
    <strong>Pushed By:</strong> ${emergency.username}<br>
    <strong>Date:</strong> ${emergency.rideData.date}<br>
    <strong>Time:</strong> ${emergency.rideData.time}<br>
    <strong>Pickup:</strong> ${emergency.rideData.pickup}<br>
    <strong>Dropoff:</strong> ${emergency.rideData.dropoff}<br>
    <strong>Driver:</strong> ${emergency.rideData.driverName}<br>
    <strong>Passenger:</strong> ${emergency.rideData.passengerName}<br>
    <strong>Status:</strong> ${emergency.rideData.status}
    `;

    this.showAlert = true;
  }

  closeAlert() {
    this.showAlert = false;
  }

}
