import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrderManageComponent} from './order-manage.component';
import {ViewComponent} from './view/view.component';


const routes: Routes = [
  {
    path: '',
    component: OrderManageComponent,
    data: {
      title: '首页'
    }
  },
  {
    path: 'view/:id',
    component: ViewComponent,
    data: {
      title: '查看订单'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderManageRoutingModule {
}
