import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../service/user.service';
import {HttpErrorResponse} from '@angular/common/http';
import {AuthService} from '../../../service/auth.service';
import {Router} from '@angular/router';
import {Driver} from '../../../func/Driver';
import {CommonService} from '../../../service/common.service';
import {Owner} from '../../../func/Owner';
import {config} from '../../../conf/app.conf';
import {GoodsType} from '../../../func/GoodsType';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy{

  /** 当前模式 */
  mode: string;

  /** 登录表单对象 */
  loginForm: FormGroup;

  /** 注册表单对象 */
  driverRegisterForm: FormGroup;
  ownerRegisterForm: FormGroup;

  version: string;

  /** 错误信息 */
  errorInfo: string;

  /** 显示错误信息 */
  showErrorInfo: boolean;
  year = new Date().getFullYear();

  /** 注册错误信息 */
  registerErrorInfo: string;

  /** 显示注册错误信息 */
  showRegisterErrorInfo: boolean;

  /** 注册提示信息 */
  registerInfo: string;

  /** 显示注册提示信息 */
  showRegisterInfo: boolean;

  projectConfig: {version: string};

  constructor(private userService: UserService,
              private authService: AuthService,
              private router: Router,
              private commonService: CommonService,
              private builder: FormBuilder) {
    this.version = config.version;
  }

  ngOnInit(): void {
    // this.projectConfig = this.configService.config;
    this.changeToLogin();
    /** 创建表单 */
    this.loginForm = this.builder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
    });
    this.initDriverTable();
    this.initOwnerTable();
  }

  initDriverTable(): void {
    /** 创建司机注册表单 */
    this.driverRegisterForm = this.builder.group({
      name: [''],
      phone: [''],
      car: [''],
      goods: null,
      licensePlateNumber: [''],
      password: [''],
    });
  }

  initOwnerTable(): void {

    /** 创建货主注册表单 */
    this.ownerRegisterForm = this.builder.group({
      name: [''],
      phone: [''],
      goods: null,
      address: [''],
      password: ['', Validators.required],
    });
  }

  login(): void {
    this.authService.login(this.loginForm.value)
      .subscribe(() => {
        this.authService.requestCurrentLoginUser(() => {
          this.router.navigateByUrl('dashboard');
        }); }, () => {
        this.errorInfo = '登录失败，请检查您的用户名、密码';
      });
  }

  bindGoods(goodsType: GoodsType): void {
    if (goodsType && goodsType.id) {
      // 合法，设置 college
      this.ownerRegisterForm.patchValue({
        goods: goodsType
      });
    } else {
      this.ownerRegisterForm.patchValue({
        goods: null
      });
    }
  }

  selectGoods(goodsType: GoodsType): void {
    if (goodsType && goodsType.id) {
      // 合法，设置 college
      this.driverRegisterForm.patchValue({
        goods: goodsType
      });
    } else {
      this.driverRegisterForm.patchValue({
        goods: null
      });
    }
  }


  changeToLogin(): void {
    this.mode = 'login';
  }

  changeToRegister(): void {
    this.mode = 'register';
  }

  changeToDriverRegister(): void {
    this.mode = 'driverRegister';
  }

  changeToOwnerRegister(): void {
    this.mode = 'ownerRegister';
  }


  ngOnDestroy(): void {
  }
  get username(): AbstractControl {
    return this.loginForm.get('username');
  }

  get no(): AbstractControl {
    return this.driverRegisterForm.get('no');
  }

  get name(): AbstractControl {
    return this.driverRegisterForm.get('name');
  }

  driverRegister(): void {
    const driver = new Driver();
    driver.user.name = this.driverRegisterForm.get('name').value;
    driver.user.password = this.driverRegisterForm.get('password').value;
    driver.goodsType = this.driverRegisterForm.get('goods')?.value;
    driver.carType = this.driverRegisterForm.get('car')?.value;
    driver.user.username = this.driverRegisterForm.get('phone').value;
    driver.licensePlateNumber = this.driverRegisterForm.get('licensePlateNumber').value;

    console.log(driver);
    this.userService.registerDriver(driver)
      .subscribe(() => {
        this.commonService.success(() => {
          this.changeToLogin();
        }, '注册成功');
      }, (response: HttpErrorResponse) => {
              this.registerErrorInfo = `${response.error.message}请尝试更换用户名或检查您的网络连接`;
              this.showRegisterErrorInfo = true;
            });
  }

  ownerRegister(): void {
    const owner = new Owner();
    owner.user.name = this.ownerRegisterForm.get('name').value;
    owner.goodsType = this.ownerRegisterForm.get('goods')?.value;
    owner.address = this.ownerRegisterForm.get('address').value;
    owner.user.username = this.ownerRegisterForm.get('phone').value;
    owner.user.password = this.ownerRegisterForm.get('password').value;

    console.log(owner);
    this.userService.registerOwner(owner)
      .subscribe(() => {
        this.commonService.success(() => {
          this.changeToLogin();
        }, '注册成功');
      }, (response: HttpErrorResponse) => {
        this.registerErrorInfo = `${response.error.message}请尝试更换用户名或检查您的网络连接`;
        this.showRegisterErrorInfo = true;
      });
  }
}

