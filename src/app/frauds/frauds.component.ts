import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-frauds',
  standalone: false,
  
  templateUrl: './frauds.component.html',
  styleUrl: './frauds.component.css'
})
export class FraudsComponent {
  Frauds: any = [];

  constructor(private http: HttpClient) {
    this.getAllFrauds();
  }

  getAllFrauds() {
    this.http.get('http://localhost:3000/getFrauds').subscribe(
      (result) => {
        this.Frauds = result;
        console.log("Method: getAllFrauds  |  No. of frauds fetched: ", this.Frauds.length);
      },
      (error) => {
        console.log("Method: getAllFrauds  |  Error while getting frauds", error.message);
      }
    )
  }

}
