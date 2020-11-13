import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public static AUTH_MODEL_PASSWORD_SMS = 0;
  public static AUTH_MODEL_PASSWORD_OTP = 1;

  /** 表单对象 */
  loginForm: FormGroup;
  authModel = LoginComponent.AUTH_MODEL_PASSWORD_SMS;
  constructor( private router: Router,
               private activatedRoute: ActivatedRoute,
               private builder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.builder.group({
      username: [ ''],
      password: [ ''],
    });
  }

  login(): void {
    this.router.navigateByUrl('order');
  }
}
