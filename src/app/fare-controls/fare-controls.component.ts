import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-fare-controls',
  standalone: false,
  
  templateUrl: './fare-controls.component.html',
  styleUrl: './fare-controls.component.css'
})
export class FareControlsComponent {
  fareControls: any = [];

  constructor(private http: HttpClient) {
    this.getFareControls();
  }

  getFareControls() {
    this.http.get('https://shrimp-select-vertically.ngrok-free.app/getFareControls').subscribe(
      (result) => {
        this.fareControls = result;
        console.log("Method: getFareControls  | fare controls fetched: ", this.fareControls);
      },
      (error) => {
        console.log("Method: getFareControls  |  Error while getting fare controls", error.message);
      }
    )
  }
  litersPerMeter: number = this.fareControls.litersPerMeter;
  petrolRate: number = this.fareControls.petrolRate;

  updateFareControls(): Promise<void> {
    return new Promise((resolve, reject) => {
        this.http.put('https://shrimp-select-vertically.ngrok-free.app/updateFareControls', {
            litersPerMeter: this.litersPerMeter,
            petrolRate: this.petrolRate
        }).subscribe(
            (result) => {
                console.log("Method: updateFareControls  |  Fare controls updated: ", result);
                resolve();
            },
            (error) => {
                console.log("Method: updateFareControls  |  Error while updating fare controls", error.message);
                reject(error);
            }
        );
    });
  }

  async update() {
    console.log("Method: update  |  Updating fare controls");
    try {
        await this.updateFareControls();        
        alert("Fare controls updated successfully");
        location.reload();
    } catch (error) {
        console.error("Error during fare controls update:", error);
    }
  }

}
