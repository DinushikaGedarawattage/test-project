import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {

  user = {
    first_name: '',
    last_name: '',
    email: '',
    city: '',
  };

  constructor(private router: Router,private userService: UserService,private location: Location) {}

  onSubmit() {

    this.userService.registerUser(this.user)
      .subscribe({
        next: (response) => {
          console.log("Success:", response);
          // alert("Registration Successful!");
          this.router.navigate(['/success'], {
            state: response
          });
        },
        error: (error) => {
          console.error("Error:", error);
          alert("Registration Failed!");
        }
      });

  }

  goToLogin() {
    this.router.navigate(['/login']);
  }


  goBack() {
    this.location.back();
  }

}
