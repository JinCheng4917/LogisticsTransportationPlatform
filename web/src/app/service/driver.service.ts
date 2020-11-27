import { Injectable } from '@angular/core';
import {CommonService} from './common.service';
import {HttpClient} from '@angular/common/http';
import {User} from '../func/User';
import {Observable, ReplaySubject} from 'rxjs';
import {Driver} from '../func/Driver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  private currentLoginDriver: Driver;
  private url = 'driver';
  constructor(private commonService: CommonService,
              private httpClient: HttpClient) { }
}
