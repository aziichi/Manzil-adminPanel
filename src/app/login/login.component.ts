import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    if (this.username === '' && this.password === '') {
      this.errorMessage = 'Please enter both username and password.';
      return;
    } else if (!this.username){
      this.errorMessage = 'Please enter username.';
      return;
    } else if (!this.password){
      this.errorMessage = 'Please enter password.';
      return
    }

    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/users']);
    } else {
      this.errorMessage = 'Invalid credentials. Please try again.';
    }
  }
}