import {Component, OnInit} from '@angular/core';
import {User} from '../../../func/User';
import {UserService} from '../../../service/user.service';

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

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    // this.currentUser = this.userService.getCurrentUser();
  }
}
