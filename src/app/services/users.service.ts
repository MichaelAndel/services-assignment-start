import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class UsersService {
  activeUsers = [];
  inactiveUsers = [];

  setUserActive(user: string) {

  }

  setUserInactive(id: number) {

  }
}
