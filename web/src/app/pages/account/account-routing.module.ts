import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccountComponent} from './account.component';
import {AddComponent} from './add/add.component';



const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    data: {
      title: '首页'
    }
  },
  {
    path: 'add',
    component: AddComponent,
    data: {
      title: '新增'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {
}
