import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor() { }
  private isAuthenticated = false;
  private readonly username = 'admin';
  private readonly password = 'admin';

  login(inputUsername: string, inputPassword: string): boolean {
    if (inputUsername === this.username && inputPassword === this.password) {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
