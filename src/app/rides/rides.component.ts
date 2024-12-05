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
  searchName: string = '';

  constructor(private router: Router, private http: HttpClient) {
    this.getAllRides();
  }
  navigateToUsers() {
    this.router.navigate(['/users']);
  }

  getAllRides() {
    this.http.get('https://shrimp-select-vertically.ngrok-free.app/getRides').subscribe(
      (result) => {
        this.rides = result;
        console.log("Method: getAllRides  |  No. of rides fetched: ", this.rides.length);
      },
      (error) => {
        console.log("Method: getAllRides  |  Error while getting rides", error.message);
      }
    )
  }

  searchRides() {
    if (this.searchName.trim()) {
      this.http.get(`https://shrimp-select-vertically.ngrok-free.app/getRidebyDriver/${this.searchName}`).subscribe(
        (result) => {
          console.log(this.searchName);
          this.rides = result;
          console.log("Method: searchRides  |  No. of rides fetched: ", this.rides.length);
        },
        (error) => {
          console.log("Method: searchRides  |  Error while getting rides by driver name", error.message);
        }
      );
    } else {
      this.getAllRides();  // Fetch all rides if no search query is provided
    }
  }
}
