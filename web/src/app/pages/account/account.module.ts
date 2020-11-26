import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxAmapModule} from 'ngx-amap';
import {BrowserModule} from '@angular/platform-browser';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [AddComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AccountModule {
}
