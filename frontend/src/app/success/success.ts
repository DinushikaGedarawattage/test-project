import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from '../user-list/user-list';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [CommonModule, UserListComponent],
  templateUrl: './success.html',
  styleUrls: ['./success.css']
})
export class SuccessComponent {

  userName: string = '';
  userEmail: string = '';

  showUsers: boolean = false;

  constructor() {
    const data = history.state;
    this.userName = data.first_name;
    this.userEmail = data.email;
  }

  toggleUserList() {
    this.showUsers = !this.showUsers;
  }
}
