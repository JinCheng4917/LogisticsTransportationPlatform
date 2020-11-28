import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Driver} from '../func/Driver';
import {Owner} from '../func/Owner';
import {CommonService} from './common.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  private url = 'driver';
  constructor(private commonService: CommonService,
              private httpClient: HttpClient) {
  }
  public getCurrentLoginOwner(): Observable<Owner> {
    const appOnReadyItem = this.commonService.getAppOnReadyItem();
    return this.httpClient.get<Owner>(`${this.url}/me`);
  }
}
