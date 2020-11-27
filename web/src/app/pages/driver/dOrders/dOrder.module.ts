import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FuncModule } from '../../../func/func.module';
import {DOrdersComponent} from './dOrders.component';
import {DOrderRoutingModule} from './dOrder-routing.module';
import {PartModule} from '../../../part/part.module';



@NgModule({
  declarations: [DOrdersComponent],
    imports: [
        CommonModule,
        DOrderRoutingModule,
        ReactiveFormsModule,
        FuncModule,
        FormsModule,
        PartModule,
        // NgxAmapModule.forRoot({
        //   apiKey: '1c966914bda7a573909e2376cfe05b1d'
        // })
    ]
})
export class DOrderModule {
}
