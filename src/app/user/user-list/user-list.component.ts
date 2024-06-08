import { Component, OnInit } from '@angular/core';
import { UserSharedService } from '../../core/services/user-shared.service';
import { User } from '../../shared/models/user.model';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  isLoading = true;

  constructor(private userSharedService: UserSharedService, private authService: AuthService) {}

  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    if (currentUser) {
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      this.userSharedService.setUsers(storedUsers);
    } else {
      this.userSharedService.setUsers([]);
    }

    this.userSharedService.users$.subscribe(users => {
      this.users = users;
      this.isLoading = false;
    });
  }

  togglePasswordVisibility(user: User): void {
    user.showPassword = !user.showPassword;
  }

  deleteUser(email: string): void {
    this.authService.deleteUser(email);
    this.users = this.users.filter(user => user.email !== email);
    this.userSharedService.setUsers(this.users);
  }
}
