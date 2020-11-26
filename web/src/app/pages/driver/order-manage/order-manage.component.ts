import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Orders} from '../../../func/Orders';
import {User} from '../../../func/User';
import {CommonService} from '../../../service/common.service';
import {UserService} from '../../../service/user.service';
import {OrdersService} from '../../../service/orders.service';
import {HttpErrorResponse} from '@angular/common/http';
import {config} from '../../../conf/app.conf';
import {UnknownProperty} from '../../../core/secondUtils';

@Component({
  selector: 'app-order-manage',
  templateUrl: './order-manage.component.html',
  styleUrls: ['./order-manage.component.scss']
})
export class OrderManageComponent implements OnInit {

  orderForm: FormGroup;
  status: number;
  searchButtonSubmitting = false;
  importButtonSubmitting = false;
  fontColor = '';
  /**
   * 分页信息
   */
  public params = {
    page: 0,
    size: 10,
  };

  /* 分页数据 */
  orders = {
    totalPages: 0,
    content: new Array<Orders>()
  };

  private user: User;

  constructor(private builder: FormBuilder,
              private commonService: CommonService,
              private userService: UserService,
              private ordersService: OrdersService) {
    this.commonService.appOnReady(
      () => {
        const user = this.userService.getCurrentUser();
        this.user = user;
      });
  }

  ngOnInit(): void {
    this.orderForm = this.builder.group({
      goodsName: null,
      goods: null,
      startPlace: null,
      endPlace: null,
      freight: null,
      startTime: null,
      endTime: null,
      driver: null
    });
    this.paramsInit();
    this.pageAll();
  }

  public pageAll(): void {
    this.ordersService.pageByDriver(this.params.page,
      this.params.size)
      .subscribe((response: { totalPages: number, content: Array<Orders> }) => {
        this.orders = response;
        // this.pages = this.makePagesByTotalPages(this.params.page, response.totalPages);
      });
  }

  public search(): void {
    this.searchButtonSubmitting = true;
    this.pageAll();
  }

  /**
   * 重新加载数据 根据 size
   */
  public reloadBySize(size: number): void {
    this.params.size = size;
    this.pageAll();
  }

  /**
   * 重新加载数据 根据 page
   */
  public reloadByPage(page: number): void {
    this.params.page = page;
    this.pageAll();
  }


  /**
   * 参数初始化
   */
  paramsInit(): void {
    this.params.page = 0;
    this.params.size = config.size;

    // 获取历史参数
    const params = this.commonService.getCurrentRouteState();

    if (params.page) {
      this.params.page = params.page as number;
    }
    if (params.size) {
      this.params.size = params.size as number;
    }
  }

  /**
   * 保存历史参数
   */
  updateCurrentRouteParams(): void {
    const params: UnknownProperty = {};
    params.page = this.params.page;
    params.size = this.params.size;
    params.name = this.orderForm.getRawValue().name;
    this.commonService.updateCurrentRouteState(params);
  }

  getFontColor(status: number): any {
    if (status === 0) {
      this.fontColor = '#000000';
    }
    else if (status === 1) {
      this.fontColor = '#2e5fee';
    }
    else if (status === 2) {
      this.fontColor = '#37be2e';
    }
    else if (status === 3) {
      this.fontColor = '#df2e2e';
    }
    return this.fontColor;
  }
}


