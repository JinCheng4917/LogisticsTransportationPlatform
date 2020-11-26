import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Menu} from '../func/Menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menusSubject = new BehaviorSubject<Array<Menu>>([
    new Menu({name: '首页', icon: 'fas fa-car', url: 'dashboard', roles: [Menu.ROLE_OWNER, Menu.ROLE_DRIVER]}),
    new Menu({name: '订单管理', icon: 'fas fa-clipboard-list', url: 'order', roles: [Menu.ROLE_OWNER]}),
    new Menu({name: '订单揽收', icon: 'fas fa-clipboard-list', url: 'driverOrder', roles: [Menu.ROLE_DRIVER]}),
    new Menu({name: '订单管理', icon: 'far fa-calendar-alt', url: 'driverOrderManage', roles: [Menu.ROLE_DRIVER]}),
    new Menu({name: '账户管理', icon: 'far fa-credit-card',  url: 'account', roles: [Menu.ROLE_DRIVER, Menu.ROLE_OWNER]}),
    new Menu({name: '个人中心', icon: 'fas fa-user',  url: 'personalCenter', roles: [Menu.ROLE_OWNER, Menu.ROLE_DRIVER]})
  ]);

  constructor() {
  }

  getAll(): Observable<Array<Menu>> {
    return this.menusSubject.asObservable();
  }

  addMenu(menu: Menu): void {
    const menus = this.menusSubject.value;
    menus.push(menu);
    this.menusSubject.next(menus);
  }
}
