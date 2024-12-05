import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { io, Socket } from 'socket.io-client';


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

  newEmergency: any = [];

  isSocketConnected: boolean = false; 


  constructor(private http: HttpClient) {
    this.getAllEmergencies();
  }
  private socket: Socket | undefined;

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
    this.showAlert = false;
  }

  ioConnect(){
    this.isSocketConnected = true;
    this.socket = io('http://localhost:3001');
    this.socket.on('connect', () => {
      console.log('connected');
    });

    this.socket.on('newEmergency', (data: any) => {
      console.log(data);
      this.newEmergency.push(data);
    });
  }
  
  removeNotification(index: number) {
  this.newEmergency.splice(index, 1);
}

  ioDisconnect(){
    this.socket?.disconnect();
    this.isSocketConnected = false;
  }

}
