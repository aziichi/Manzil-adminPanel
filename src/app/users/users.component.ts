import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-users',
  standalone: false,
  
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  Users: any = [];

  constructor(private http: HttpClient) {
    this.getAllUsers();
  }

  getAllUsers() {
    this.http.get('http://localhost:3000/getUsers').subscribe(
      (result) => {
        this.Users = result;
        console.log("Method: getAllUsers  |  No. of users fetched: ", this.Users.length);
      },
      (error) => {
        console.log("Method: getAllUsers  |  Error while getting users", error.message);
      }
    )
  }

}
