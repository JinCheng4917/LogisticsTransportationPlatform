import {Injectable} from '@angular/core';
import {CommonService} from './common.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, ReplaySubject} from 'rxjs';
import {Router} from '@angular/router';
import {catchError, map, tap} from 'rxjs/operators';
import {VUser} from '../base/vuser';
import {AbstractControl, AsyncValidatorFn, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';
import {User} from '../func/User';
import {Driver} from '../func/Driver';
import {Owner} from '../func/Owner';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentLoginUser: User;
  private currentLoginUserSubject = new ReplaySubject<User>(1);
  public currentLoginUser$: Observable<User>;
  private url = 'user';

  constructor(private commonService: CommonService,
              private httpClient: HttpClient,
              private router: Router) {
    this.currentLoginUser$ = this.currentLoginUserSubject.asObservable();
    this.getCurrentLoginUser();
  }

  private getCurrentLoginUser(): void {
    const appOnReadyItem = this.commonService.getAppOnReadyItem();

    this.httpClient.get<User>(`${this.url}/me`)
      .subscribe(user => {
        appOnReadyItem.ready = true;
        this.setCurrentLoginUser(user);
      }, () => {
        appOnReadyItem.ready = true;
        this.setCurrentLoginUser(null);
      });
  }

  /**
   * 获取登录用户时，应该结合appOnReady。示例：
   * this.commonService.appOnReady(() => {const user = this.userService.getCurrentUser();});
   */
  getCurrentUser(): User | null {
    return this.currentLoginUser;
  }

  login(user: User): Observable<User> {
    // 新建Headers，并添加认证信息
    let headers = new HttpHeaders();
    // 添加 content-type
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
    // 添加认证信息
    headers = headers.append('Authorization', 'Basic ' + btoa(user.username + ':' + encodeURIComponent(user.password)));
    // 发起get请求并返回
    return this.httpClient.get<User>(this.url + '/me', {headers}).pipe(tap((data) => {
      this.setCurrentLoginUser(data);
    }));
  }

  logout(): Observable<void> {
    return this.httpClient.get<void>(`${this.url}/logout`).pipe(map(() => {
      this.setCurrentLoginUser(null);
    }));
  }


  registerDriver(driver: Driver): Observable<void> {
    return this.httpClient.post<void>(`${this.url}/driverRegister`, driver);
  }

  registerOwner(owner: Owner): Observable<void> {
    return this.httpClient.post<void>(`${this.url}/ownerRegister`, owner);
  }

  /**
   * 设置当前登录用户
   * @param user 登录用户
   */
  setCurrentLoginUser(user: User): void {
    this.currentLoginUser = user;
    this.currentLoginUserSubject.next(user);
  }

  /**
   * 校验密码是否正确
   * @param password 密码
   */
  public checkPasswordIsRight(password: string): Observable<boolean> {
    const vUser = new VUser();
    vUser.password = password;
    return this.httpClient.post<boolean>(`${this.url}/checkPasswordIsRight`, vUser);
  }

  /**
   * 验证原密码是否正确
   */
  public oldPasswordValidator(): AsyncValidatorFn {
    return (ctrl: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return this.checkPasswordIsRight(ctrl.value)
        .pipe(map((isRight: boolean) => (isRight ? null : {passwordError: true})),
          catchError(() => null));
    };
  }

  /**
   * 验证新密码与确认密码是否相同
   * @param control 表单
   */
  public confirmPasswordValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const newPassword = control.get('newPassword').value;
    const confirmNewPassword = control.get('confirmNewPassword').value;

    // 判断确认密码与新密码是否相同
    if (newPassword && confirmNewPassword) {
      return newPassword !== confirmNewPassword ? {confirmPasswordError: true} : null;
    }
    return null;
  }

  /**
   * 登录用户修改密码
   * @param newPassword 新密码
   * @param oldPassword 旧密码
   */
  public updatePassword(newPassword: string, oldPassword: string): Observable<void> {
    const vUser = new VUser();
    vUser.password = oldPassword;
    vUser.newPassword = encodeURIComponent(newPassword);
    return this.httpClient.put<void>(`${this.url}/updatePassword`, vUser);
  }

  /**
   * 更新
   */
  public update(userId: number, user: User): Observable<User> {
    console.log(user);
    return this.httpClient.put<User>(`${this.url}/${userId.toString()}`, user);
  }

  /**
   * 重置密码
   * @param id  用户id
   * @param student  学生
   */
  public resetPassword(id: number): Observable<void> {
    console.log(this.url + '/resetPassword/' + id);
    return this.httpClient.put<void>(this.url + '/resetPassword/' + id , id);
  }
}
