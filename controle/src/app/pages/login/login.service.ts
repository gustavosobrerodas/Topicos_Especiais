import { Injectable } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '@firebase/auth-types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  logout() {
    throw new Error('Method not implemented.');
  }
  isLoggedIn: Observable<User>;

  constructor(
    private nav: NavController,
    private toast: ToastController,
    private auth: AngularFireAuth,
  ) { 
       this.isLoggedIn = auth.authState;
  }

  login(user) {
    this.auth.signInWithEmailAndPassword(user.email, user.password)
    .then(() => this.nav.navigateForward('home')).
    catch(() => this.showError());
  }
  showError() {
    throw new Error('Method not implemented.');
  }



  createUser(user){
    this.auth.createUserWithEmailAndPassword(user.email, user.password)
    .then(credentials => console.log(credentials))
  }

  recoverPass(data){
    this.auth.sendPasswordResetEmail(data.email)
    .then(() => this.nav.navigateBack('login'))
    .catch(err => {
      console.log(err);
    });


  logout() {
    this.auth.signOut().
    then(() => this.nav.navigateBack('login'));
  }
}

  function logout() {
    throw new Error('Function not implemented.');
   }
}



