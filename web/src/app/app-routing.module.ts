import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './pages/auth/login/login.component';
import {LayoutComponent} from './part/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
        data: {
          title: '仪表盘'
        }
      },
      {
        path: 'order',
        loadChildren: () => import('./pages/owner/order/order.module').then(m => m.OrderModule),
        data: {
          title: '订单管理'
        }
      },
      {
        path: 'driverOrder',
        loadChildren: () => import('./pages/driver/dOrders/dOrder.module').then(m => m.DOrderModule),
        data: {
          title: '订单管理'
        }
      },
      {
        path: 'driverOrderManage',
        loadChildren: () => import('./pages/driver/order-manage/orderManage.module').then(m => m.OrderManageModule),
        data: {
          title: '查看订单'
        }
      },
      {
        path: 'account',
        loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule),
        data: {
          title: '账户管理'
        }
      },
      {
        path: 'personalCenter',
        loadChildren: () => import('./pages/personal-center/personal-center.module').then(m => m.PersonalCenterModule),
        data: {
          title: '个人中心'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
