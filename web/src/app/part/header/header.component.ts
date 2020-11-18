import { Component, OnDestroy, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../service/user.service';
import {CommonService} from '../../service/common.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  color: string;
  constructor(private router: Router,
              private userService: UserService,
              private commonService: CommonService) {
  }
  ngOnInit(): void {
    this.color = 'blue';
  }

  logout(): void {
    this.userService.logout()
      .subscribe(() => {
      }, () => {
      }, () => {
        this.router.navigateByUrl('');
      });
  }


  ngOnDestroy(): void {
  }
}
