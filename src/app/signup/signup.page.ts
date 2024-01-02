import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage   {

  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private afAuth: AngularFireAuth, private router: Router) {}
 
  signup() {
    if (this.password === this.confirmPassword) {
      this.afAuth.createUserWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          console.log('Signup successful', userCredential);
          this.router.navigate(['/login']); 
        })
        .catch((error) => {
          console.error('Signup Error:', error.message);
          
        });
    } else {
      console.error('Passwords do not match.');
      
    }
  }

}
