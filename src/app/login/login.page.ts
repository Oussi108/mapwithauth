import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    // Initialize Firebase app here in AppModule or in a dedicated service, not here
    // AngularFireModule.initializeApp(environment.firebaseConfig);
  }

  login() {
    this.authService.login(this.email, this.password);
  }

  goToSignUp() {
    this.router.navigate(['/signup']); // Redirect to the signup page
  }
}
