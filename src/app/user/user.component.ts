import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  users: User[];
  selectedUser: User = { id: 0, name: '', email: '', phone: '' };
  isEditing: boolean;

  constructor(public userService: UserService) {}

  selectUser(user: User | null): void {
    if (user) {
      this.selectedUser = user;
      this.isEditing = true;
    } else {
      this.selectedUser = { id: 0, name: '', email: '', phone: '' };
      this.isEditing = false;
    }
  }

  saveUser(): void {
    if (this.isEditing) {
      this.userService.updateUser(this.selectedUser);
    } else {
      this.userService.addUser(this.selectedUser);
    }
    this.users = this.userService.getUsers();
    this.resetForm();
  }

  resetForm(): void {
    this.selectedUser = { id: 0, name: '', email: '', phone: '' };
    this.isEditing = false;
  }
}
