import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CommonService} from '../../../service/common.service';
import {Router} from '@angular/router';
import {OrdersService} from '../../../service/orders.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {GoodsType} from '../../../func/GoodsType';
import {Orders} from '../../../func/Orders';
import {User} from '../../../func/User';
import {UserService} from '../../../service/user.service';
import {AuthService} from '../../../service/auth.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  userForm: FormGroup;
  show = false;
  submitting = false;
  /**
   * 当前登录用户
   */
  currentUser: User;

  constructor(private builder: FormBuilder,
              private commonService: CommonService,
              private router: Router,
              private userService: UserService,
              private authService: AuthService) {
    this.creatForm();
  }


  public creatForm(): void {
    this.userForm = this.builder.group({
      id: [''],
      role: [''],
      name: [''],
      phone: [''],
      IDNumber: [''],
      quota: [''],
    });
  }



  ngOnInit(): void {
    this.authService.getCurrentLoginUser$()
      .subscribe((user: User) => {
        this.currentUser = user;
      });
    this.initForm(this.currentUser);
  }

  public initForm(user: User): void {
    this.userForm = this.builder.group({
      id: user.id,
      role: user.role,
      name: user.name,
      phone: user.username,
      IDNumber: user.idnumber,
      quota: [''],
    });
  }


  public saveUser(user: User): void {
    this.submitting = true;
    this.userService.update(user.id, user).subscribe(() => {
      this.submitting = false;
      this.commonService.success(() => {
        this.commonService.back();
      }, '账户充值成功');
    }, (response: HttpErrorResponse) => {
      this.submitting = false;
      this.commonService.httpError(response);
    });
  }

  submit(): void {
    this.saveUser(this.userForm.value);
  }
}
