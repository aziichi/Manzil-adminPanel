import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-rides',
  standalone: false,
  
  templateUrl: './rides.component.html',
  styleUrl: './rides.component.css'
})
export class RidesComponent {
  rides: any = [];

  constructor(private router: Router, private http: HttpClient) {
    this.getAllRides();
  }
  navigateToUsers() {
    this.router.navigate(['/users']);
  }

  getAllRides() {
    this.http.get('http://localhost:3000/getRides').subscribe(
      (result) => {
        this.rides = result;
        console.log("Method: getAllRides  |  No. of rides fetched: ", this.rides.length);
      },
      (error) => {
        console.log("Method: getAllRides  |  Error while getting rides", error.message);
      }
    )
  }
}
