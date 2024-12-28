import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-frauds',
  standalone: false,
  
  templateUrl: './frauds.component.html',
  styleUrl: './frauds.component.css'
})
export class FraudsComponent {
  Frauds: any = [];
  searchQuery: string = '';
  apiUrl = environment.apiUrl;


  constructor(private http: HttpClient) {
    this.getAllFrauds();
  }

  getAllFrauds() {
    this.http.get(`${this.apiUrl}/getFrauds`).subscribe(
      (result) => {
        this.Frauds = result;
        console.log("Method: getAllFrauds  |  No. of frauds fetched: ", this.Frauds.length);
      },
      (error) => {
        console.log("Method: getAllFrauds  |  Error while getting frauds", error.message);
      }
    )
  }

  searchFrauds() {
    if(this.searchQuery.trim() === '') {
      this.getAllFrauds();
      return;
    }
    this.http.get(`${this.apiUrl}/${this.searchQuery}`).subscribe(
      (result) => {
        this.Frauds = result;
        console.log("Method: searchFrauds  |  No. of frauds fetched: ", this.Frauds.length);
      },
      (error) => {
        console.log("Method: searchFrauds  |  Error while searching frauds", error.message);
      }
    )
  }

}
