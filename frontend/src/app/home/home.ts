import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {

  constructor(private router: Router) {}

  goToRegister() {
    this.router.navigate(['/register']);
  }

  goToLogin() {
    alert("Login page not created yet 😊");
  }
}
