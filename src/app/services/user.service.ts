import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor() { }

  private isLoggedIn: boolean = false;

  isUserLoggedIn() {
    return this.isLoggedIn
  }

  setUserLoggedIn() {
    this.isLoggedIn = true;
  }

  setUserLoggedOut() {
    this.isLoggedIn = false;
  }
}
