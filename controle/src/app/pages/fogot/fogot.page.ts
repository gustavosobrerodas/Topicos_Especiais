import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'fogot',
  templateUrl: './fogot.page.html',
  styleUrls: ['./fogot.page.scss'],
})
export class FogotPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private service: LoginService,
    ) { }

  ngOnInit() {
    this.loginForm = this.builder.group({
      email: ['', [Validators.email, Validators.required]],
    });

  }

  recoveryPass(){
    const email = this.loginForm.value;
    this.service.recoverPass(email);
  }

}
