import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Orders} from '../../../../func/Orders';
import {CommonService} from '../../../../service/common.service';
import {GoodsType} from '../../../../func/GoodsType';
import {OrdersService} from '../../../../service/orders.service';
import {AuthService} from '../../../../service/auth.service';
import {User} from '../../../../func/User';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  ordersForm: FormGroup;
  show = false;
  submitting = false;
  currentUser: User;

  constructor(private builder: FormBuilder,
              private commonService: CommonService,
              private router: Router,
              private ordersService: OrdersService,
              private authService: AuthService,
              private httpClient: HttpClient) {}

  public initForm(): void {
    this.ordersForm = this.builder.group({
      goods: null,
      goodsName: ['', Validators.required],
      startPlace: ['', Validators.required],
      endPlace: ['', Validators.required],
      freight: ['', Validators.required],
    });
  }


  ngOnInit(): void {
    this.authService.getCurrentLoginUser$()
      .subscribe((user: User) => {
        this.currentUser = user;
      });
    this.initForm();
  }

  /**
   * 选择学院
   * @param goodsType 学院
   */
  bindGoods(goodsType: GoodsType): void {
    if (goodsType && goodsType.id) {
      // 合法，设置 college
      this.ordersForm.patchValue({
        goods: goodsType
      });
    } else {
      this.ordersForm.patchValue({
        goods: null
      });
    }
  }


  public saveOrder(order: Orders): void {
    this.submitting = true;
    this.ordersService.save(order).subscribe(() => {
      this.submitting = false;
      this.commonService.success(() => {
        this.commonService.back();
      }, '订单发布成功');
    }, (response: HttpErrorResponse) => {
      this.submitting = false;
      this.commonService.httpError(response);
    });
  }

  submit(): void {
    if (this.ordersForm.get('freight').value > this.currentUser.quota) {
      this.commonService.error(() => {
        this.commonService.back();
      }, '您的余额不足，请及时充值');

    }else {
      this.saveOrder(this.ordersForm.value);
    }
  }
}
