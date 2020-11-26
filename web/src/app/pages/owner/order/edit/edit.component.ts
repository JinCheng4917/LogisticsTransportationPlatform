import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Orders} from '../../../../func/Orders';
import {OrdersService} from '../../../../service/orders.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AppComponent} from '../../../../app.component';
import {HttpErrorResponse} from '@angular/common/http';
import {CommonService} from '../../../../service/common.service';
import {GoodsType} from '../../../../func/GoodsType';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  orderForm: FormGroup;  // 学生表单组
  id: number;
  orders: Orders = new Orders();

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

  /**
   * 选择学院
   * @param goodsType 学院
   */
  bindGoods(goodsType: GoodsType): void {
    if (goodsType && goodsType.id) {
      // 合法，设置 college
      this.orderForm.patchValue({
        goods: goodsType
      });
    } else {
      this.orderForm.patchValue({
        goods: null
      });
    }
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
        this.initForm(order);
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

  submit(): any {
    this.updateOrders(this.orderForm.value);
  }
}


