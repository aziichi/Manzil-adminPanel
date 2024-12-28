import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-users',
  standalone: false,
  
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  apiUrl = environment.apiUrl;
  Users: any = [];
  searchQuery: string = '';

  constructor(private http: HttpClient) {
    this.getAllUsers();
  }

  getAllUsers() {
    this.http.get(`${this.apiUrl}/getUsers`).subscribe(
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
    this.http.put(`${this.apiUrl}/${userId}`, { isBanned: true }).subscribe(
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
    this.http.put(`${this.apiUrl}/banUser/${userId}`, { isBanned: false }).subscribe(
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

  searchUsers() {
    if (this.searchQuery.trim() === '') {
      this.getAllUsers();
    } else {
      this.http.get(`${this.apiUrl}/getUserByName/${this.searchQuery}`).subscribe(
        (result) => {
          this.Users = result; // Set the filtered users in the `Users` array
          console.log("Method: searchUsers  |  Filtered users fetched:", this.Users.length);
        },
        (error) => {
          console.log("Method: searchUsers  |  Error while searching users:", error.message);
        }
      );
    }
  }

}
