import { Injectable } from '@angular/core';
import { User } from './models/user.model';

var users: User[] = [
  {
    id: 1,
    name: 'gabriel',
    email: 'gabriel@example.com',
    phone: '123-456-7890',
  },
  {
    id: 2,
    name: 'gabriella',
    email: 'gabriella@example.com',
    phone: '098-765-4321',
  },
  { id: 2, name: 'gabby', email: 'gabby@example.com', phone: '888-111-0000' },
  { id: 2, name: 'gabi', email: 'gabi@example.com', phone: '555-555-5555' },
];

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getUsers() {
    return users;
  }

  addUser(user: User): void {
    user.id = users.length + 1;
    users.push(user);
  }

  updateUser(user: User): void {
    const index = users.findIndex((u) => u.id === user.id);
    if (index !== -1) {
      users[index] = user;
    }
  }
}
