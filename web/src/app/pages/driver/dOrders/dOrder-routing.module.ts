import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DOrdersComponent} from './dOrders.component';


const routes: Routes = [
  {
    path: '',
    component: DOrdersComponent,
    data: {
      title: '首页'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DOrderRoutingModule {
}
