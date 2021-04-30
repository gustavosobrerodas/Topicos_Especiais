import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
   
  

  constructor(
      private nav: NavController,
      private builder: FormBuilder,
      private toast: ToastController
  ) { }

  ngOnInit() {
      this.loginForm = this.builder.group({
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.required, Validators.minLength(8)]]
      });
  }

  login(){
    const user = this.loginForm.value;
    console.log(user);

    if(user.email === 'aluno@ifsp.edu.br' && user.password === '12345678'){
      //redireciona o usuario pra home
      this.nav.navigateForward('home');
    }else{
      //exibir mensagem de erro
      this.showError();
    }
  }

  private async showError(){
    const ctrl =  await this.toast.create({
      message: 'Dados de acesso incorretos',
      duration: 3000
    });
    
    ctrl.present(); 

  }

}
