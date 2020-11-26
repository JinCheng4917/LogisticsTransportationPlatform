import { Injectable } from '@angular/core';
import {User} from '../func/User';
import {HttpClient} from '@angular/common/http';
import {GoodsType} from '../func/GoodsType';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {
  private url = 'goodsType';

  constructor(private  httpClient: HttpClient) { }

  getAll(): any{
    return this.httpClient.get<Array<GoodsType>>(`${this.url}`);
  }
}
