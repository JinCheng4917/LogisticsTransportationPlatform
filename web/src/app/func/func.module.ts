import {NgModule} from '@angular/core';
import { GoodsSelectorComponent } from './selecter/goods-selector/goods-selector.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    GoodsSelectorComponent
  ],
  exports: [
    GoodsSelectorComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  entryComponents: [
  ]
})
export class FuncModule {
}
