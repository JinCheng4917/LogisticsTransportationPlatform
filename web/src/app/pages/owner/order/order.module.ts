import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FuncModule } from '../../../func/func.module';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { OrderComponent } from './order.component';
import {NgxAmapModule} from 'ngx-amap';
import {BrowserModule} from '@angular/platform-browser';
import {PartModule} from '../../../part/part.module';

@NgModule({
  declarations: [OrderComponent, AddComponent, EditComponent],
    imports: [
        CommonModule,
        OrderRoutingModule,
        ReactiveFormsModule,
        FuncModule,
        FormsModule,
        PartModule,
        // NgxAmapModule.forRoot({
        //   apiKey: '1c966914bda7a573909e2376cfe05b1d'
        // })
    ]
})
export class OrderModule {
}
