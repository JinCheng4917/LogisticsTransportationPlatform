import {Component, OnInit} from '@angular/core';
import {User} from '../../../func/User';
import {UserService} from '../../../service/user.service';
import {AuthService} from '../../../service/auth.service';
import {DriverService} from '../../../service/driver.service';
import {OwnerService} from '../../../service/owner.service';
import {Driver} from '../../../func/Driver';
import {Owner} from '../../../func/Owner';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  /**
   * 当前登录用户
   */
  currentUser: User;
  currentDriver: Driver;
  currentOwner: Owner;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.getCurrentLoginUser$()
      .subscribe((user: User) => {
        this.currentUser = user;
      });
  }
}
