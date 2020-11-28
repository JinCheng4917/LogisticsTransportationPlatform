import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Orders} from '../../../../func/Orders';
import {ActivatedRoute, Router} from '@angular/router';
import {OrdersService} from '../../../../service/orders.service';
import {CommonService} from '../../../../service/common.service';
import {GoodsType} from '../../../../func/GoodsType';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  orderForm: FormGroup;  // 学生表单组
  id: number;
  order: Orders;
  fontColor = '';

  constructor(private builder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private orderService: OrdersService,
              private commonService: CommonService,
  ) {
    this.creatForm();
  }

  /**
   * 创建表单
   */
  creatForm(): void {
    this.orderForm = this.builder.group({
      goods: null,
      goodsName: ['', Validators.required],
      startPlace: ['', Validators.required],
      endPlace: ['', Validators.required],
      freight: ['', Validators.required],
    });
  }

  initForm(orders: Orders): void {
    this.orderForm.setValue({
      goods: orders.goods,
      goodsName: orders.goodsName,
      startPlace: orders.startPlace,
      endPlace: orders.endPlace,
      freight: orders.freight,
    });
  }

  ngOnInit(): void {
    this.getEditOrder();
  }

  /**
   * 获取要编辑的用户
   */
  public getEditOrder(): void {
    this.route.params.subscribe(params => {
      this.orderService.getById(params.id).subscribe((order: Orders) => {
        this.order = order;
      });
    });
  }

  public updateOrders(orders: Orders): any {
    this.route.params.subscribe(params => {
      this.orderService.update(params.id, orders).subscribe(() => {
        this.commonService.success(() => {
          this.commonService.back();
        }, '订单保存成功');
      }, (response: HttpErrorResponse) => {
        this.commonService.error(() => {
        }, response.error.message);
      });
    });
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
      this.fontColor = '#2eb9be';
    }
    else if (status === 4) {
      this.fontColor = '#df2e2e';
    }
    return this.fontColor;
  }

  public transfer(order: Orders): void {
    // 确认框
    this.commonService.confirm((confirm: boolean) => {
      if (confirm) {
        this.orderService.updateStatus(order.id, 2).subscribe(() => {
          this.commonService.success(() => {
          }, '状态变更成功');
        }, (response: HttpErrorResponse) => {
          this.commonService.httpError(response);
        });
      }
    }, '即将变更订单状态');
  }

  public complete(order: Orders): void {
    // 确认框
    this.commonService.confirm((confirm: boolean) => {
      if (confirm) {
        this.orderService.completeOrder(order.id, order).subscribe(() => {
          this.commonService.success(() => {
          }, '状态变更成功');
        }, (response: HttpErrorResponse) => {
          this.commonService.httpError(response);
        });
      }
    }, '即将变更订单状态');
  }
}


