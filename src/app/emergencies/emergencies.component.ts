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

}
