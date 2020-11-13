import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PartModule} from './part/part.module';
import {PersonalCenterModule} from './pages/personal-center/personal-center.module';
import {FuncModule} from './func/func.module';
import {OrderModule} from './pages/owner/order/order.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FuncModule,
    PersonalCenterModule,
    OrderModule,
    PartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
