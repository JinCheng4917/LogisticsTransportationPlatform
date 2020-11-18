import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Orders} from '../../../../func/Orders';
import {CommonService} from '../../../../service/common.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  ordersForm: FormGroup;
  show = false;
  submitting = false;

  constructor(private builder: FormBuilder,
              private commonService: CommonService,
              private router: Router,
              private httpClient: HttpClient) {}

  public initForm(): void {
    this.ordersForm = this.builder.group({
      goodsName: ['', Validators.required],
      goodsType: ['', Validators.required],
      startPlace: ['', Validators.required],
      endPlace: ['', Validators.required],
      freight: ['', Validators.required],
    });
  }


  ngOnInit(): void {
    this.initForm();
  }

  public saveOrder(order: Orders): void {
    this.submitting = true;
    this.httpClient.post<Orders>(`Orders`, order).subscribe(() => {
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
    this.saveOrder(this.ordersForm.value);
  }
}
