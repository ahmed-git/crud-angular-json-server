import { Injectable } from '@angular/core';
import { AngularFireAuth } from  "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth) {
    
   }

  signUp(email: string, password: string) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  signIn(email: string, password: string) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  }
  
  signOut() {
    return this.fireAuth.auth.signOut();
  }
}
