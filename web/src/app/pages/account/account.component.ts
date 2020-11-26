import { Component, OnInit } from '@angular/core';
import {User} from '../../func/User';
import {UserService} from '../../service/user.service';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  /**
   * 当前登录用户
   */
  currentUser: User;

  constructor(private userService: UserService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.getCurrentLoginUser$()
      .subscribe((user: User) => {
        this.currentUser = user;
      });
  }
}
