import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../../service/common.service';
import {OrdersService} from '../../../service/orders.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Orders} from '../../../func/Orders';
import {Page} from '../../../base/page';
import {UnknownProperty} from '../../../core/secondUtils';
import {config} from '../../../conf/app.conf';
import {HttpErrorResponse} from '@angular/common/http';
import {UserService} from '../../../service/user.service';
import {User} from '../../../func/User';

@Component({
  selector: 'app-user',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup;
  searchButtonSubmitting = false;
  importButtonSubmitting = false;
  /**
   * 分页信息
   */
  public params = {
    page: 0,
    size: 20,
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
      () => {const user = this.userService.getCurrentUser();
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
  public delete(order: Orders): void {
    // 确认框
    this.commonService.confirm((confirm: boolean) => {
      if (confirm) {
        this.ordersService.delete(order.id).subscribe(() => {
          this.commonService.success(() => {
          }, '删除成功');
          this.pageAll();
        }, (response: HttpErrorResponse) => {
          this.commonService.httpError(response);
        });
      }
    }, '即将删除订单');
  }

  public pageAll(): void {
    this.ordersService.page(this.params.page,
      this.params.size)
      .subscribe((response: { totalPages: number, content: Array<Orders> }) => {
        this.orders = response;
        console.log(this.orders);
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
}

