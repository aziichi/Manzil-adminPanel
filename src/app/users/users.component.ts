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
  
  loadingStates: { [userId: string]: boolean } = {};

  banUser(userId: string) {
    this.loadingStates[userId] = true;
    this.http.put(`http://localhost:3000/banUser/${userId}`, { isBanned: true }).subscribe(
      (result) => {
        console.log(`Method: banUser  |  User with ID ${userId} successfully banned:`, result);
        alert("User banned successfully");
        this.getAllUsers();
      },
      (error) => {
        console.log(`Method: banUser  |  Error while banning user with ID ${userId}:`, error.message);
      },
      () => {
        this.loadingStates[userId] = false; // Set loading state to false after operation completes
      }
    );
  }

  unBanUser(userId: string) {
    this.loadingStates[userId] = true;
    this.http.put(`http://localhost:3000/banUser/${userId}`, { isBanned: false }).subscribe(
      (result) => {
        console.log(`Method: unBanUser  |  User with ID ${userId} successfully unbanned:`, result);
        alert("User unbanned successfully");
        this.getAllUsers();
      },
      (error) => {
        console.log(`Method: unBanUser  |  Error while unbanning user with ID ${userId}:`, error.message);
      },
      () => {
        this.loadingStates[userId] = false;
      }
    );
  };

}
