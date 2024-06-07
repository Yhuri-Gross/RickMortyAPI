import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private user: any = null;

  login(username: string, password: string): boolean {
    if (username === 'Yhuri' && password === '1234') {
      this.isAuthenticated = true;
      this.user = username;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.user = null;
    
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getUser(): any {
    return this.user;
  }
}
