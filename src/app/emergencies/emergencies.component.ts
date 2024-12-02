import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emergencies',
  standalone: false,
  
  templateUrl: './emergencies.component.html',
  styleUrl: './emergencies.component.css'
})
export class EmergenciesComponent {
  emergencies: any = [];
  showAlert: boolean = false;
  alertMessage: string = '';


  constructor(private http: HttpClient) {
    this.getAllEmergencies();
  }

  getAllEmergencies() {
    this.http.get('http://localhost:3000/getEmergencies').subscribe(
      (result) => {
        this.emergencies = result;
        console.log("Method: getAllEmergencies  |  No. of emergencies fetched: ", this.emergencies.length);
      },
      (error) => {
        console.log("Method: getAllEmergencies  |  Error while getting emergencies", error.message);
      }
    )
  }

  showRideDetails(rideData: any) {
    this.alertMessage = `
    <strong>Date:</strong> ${rideData.date}<br>
    <strong>Time:</strong> ${rideData.time}<br>
    <strong>Pickup:</strong> ${rideData.pickup}<br>
    <strong>Dropoff:</strong> ${rideData.dropoff}<br>
    <strong>Driver:</strong> ${rideData.driverName}<br>
    <strong>Passenger:</strong> ${rideData.passengerName}<br>
    <strong>Status:</strong> ${rideData.status}
    `;

    // Show the custom alert
    this.showAlert = true;
  }

  closeAlert() {
    // Close the custom alert when clicking on the close button
    this.showAlert = false;
  }

}
