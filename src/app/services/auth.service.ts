import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn(): boolean {
    // Logic to check if the user is logged in
    // Example: Check if a token exists in localStorage or session storage
    return !!localStorage.getItem('token');
  }

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  async login(email: string, password: string): Promise<void> {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(email, password);
      console.log('Login successful', userCredential);
      this.router.navigate(['/tabs']);
    } catch (error) {
      console.error('Login Error:');
      // Handle login error: display an error message to the user
    }
  }

  logout(): void {
    // Logic to perform logout action
    // Example: Clear authentication token, session data, etc.
    localStorage.removeItem('token');
  }
}
