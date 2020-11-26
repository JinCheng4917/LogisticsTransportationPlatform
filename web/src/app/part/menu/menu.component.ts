import { Component, OnDestroy, OnInit } from '@angular/core';
import {Menu} from '../../func/Menu';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {Subscription} from 'rxjs';
import {MenuService} from '../../service/menu.service';
import {UserService} from '../../service/user.service';
import {isDefined} from '../../core/secondUtils';
import {User} from '../../func/User';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: [ './menu.component.css' ]
})
export class MenuComponent implements OnInit, OnDestroy {

  currentLoginUser: User;

  environment = environment;

  // primaryMenus: Array<Menu>;

  menus: Array<Menu>;

  private subscription: Subscription;
  private userSubscription: Subscription;

  constructor(
    private router: Router,
    private menuService: MenuService,
    private authService: AuthService) {
  }

  ngOnInit(): void {

    this.subscription = this.menuService.getAll()
      .subscribe(data => {
        this.authService.getCurrentLoginUser$()
          .subscribe((user: User) => {
            this.currentLoginUser = user;
            this.menus = [];
            if (isDefined(this.currentLoginUser)) {
              data.forEach((menu) => {
                if (menu.roles.includes(user.role)) {
                  this.menus.push(menu);
                }
              });
            }
          });
      });

    // this.primaryMenus = menus;
    // this.subscription = this.authService.getCurrentLoginUser$()
    //   .subscribe((user: User) => {
    //     if (user === null) {
    //       this.menus = [];
    //       return;
    //     }
    //     this.currentLoginUser = user;
    //
    //     /**
    //      * 构造 当前用户被授权的菜单 url 集合
    //      */
    //     const urlSet = new Set<string>();
    //     for (const role of this.currentLoginUser.roles) {
    //       for (const menu of role.menus) {
    //         urlSet.add(menu.url);
    //       }
    //     }
    //
    //     /**
    //      * 过滤菜单，只显示用户有权访问菜单 或 默认显示菜单
    //      */
    //     this.menus = this.primaryMenus.filter(menu => urlSet.has(menu.url) || menu.defaultShow);
    //   });
  }

  navigate(menu: Menu): void {
    this.router.navigateByUrl(menu.url);
  }

  getBackgroundColor(menu: Menu): string {
    if (this.active(menu)) {
      return environment.color;
    }
  }

  getTextColor(menu: Menu): string {
    if (this.active(menu)) {
      return 'white';
    }
  }

  /**
   * 判断当前菜单是否激活
   * @param menu 菜单
   */
  active(menu: Menu): boolean {

    // 定义主路由
    let mainRoute: string;

    // 根据是否有第2个/选择截取方式
    // 从urlSegment[1]开始是因为urlSegment[0] === ""
    const urlSegment = this.router.url.split('/');
    if (urlSegment[1] === 'teacher' || urlSegment[1] === 'student') {
      mainRoute = urlSegment[1] + '/' + urlSegment[2];
    } else {
      mainRoute = urlSegment[1];
    }

    // 判断当前路由是否激活
    return mainRoute === menu.url;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
