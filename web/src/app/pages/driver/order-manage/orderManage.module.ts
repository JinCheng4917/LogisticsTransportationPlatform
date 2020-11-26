import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FuncModule } from '../../../func/func.module';
import { ViewComponent } from './view/view.component';
import {OrderManageRoutingModule} from './orderManage-routing.module';



@NgModule({
  declarations: [ ViewComponent],
  imports: [
    CommonModule,
    OrderManageRoutingModule,
    ReactiveFormsModule,
    FuncModule,
    FormsModule
    // NgxAmapModule.forRoot({
    //   apiKey: '1c966914bda7a573909e2376cfe05b1d'
    // })
  ]
})
export class OrderManageModule {
}
