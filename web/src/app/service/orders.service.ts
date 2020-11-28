import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Orders} from '../func/Orders';
import {Observable} from 'rxjs';
import {Page} from '../base/page';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private url = 'Orders';

  constructor(private  httpClient: HttpClient) { }

  save(orders: Orders): any{
    console.log(orders);
    return this.httpClient.post(`${this.url}`, orders);
  }

  query(params: { startPlace?: string, endPlace?: string, page?: number, size?: number }): any {
    /* 设置默认值 */
    if (params.page === undefined) {
      params.page = 0;
    }
    if (params.size === undefined) {
      params.size = 10;
    }

    /* 初始化查询参数 */
    const queryParams = new HttpParams()
      .set('startPlace', params.startPlace ? params.startPlace : '')
      .set('endPlace', params.endPlace ? params.endPlace : '')
      .set('page', params.page.toString())
      .set('size', params.size.toString());
    const PARAM = {
      startPlace: params.startPlace ? params.startPlace : '',
      endPlace: params.endPlace ? params.endPlace : '',
      page: params.page.toLocaleString(),
      size: params.size.toLocaleString()
    };
    console.log(PARAM);

    return this.httpClient.get<{ totalPages: number, content: Array<Orders> }>(`${this.url}/queryPlace`, {params: PARAM});

  }

  driverQuery(params: { startPlace?: string, endPlace?: string, page?: number, size?: number, status?: number }): any {
    console.log(params);
    /* 设置默认值 */
    if (params.page === undefined) {
      params.page = 0;
    }
    if (params.size === undefined) {
      params.size = 10;
    }
    if (params.status === undefined) {
      params.status = 0;
    }
    const PARAM = {
      status: params.status.toLocaleString(),
      startPlace: params.startPlace ? params.startPlace : '',
      endPlace: params.endPlace ? params.endPlace : '',
      page: params.page.toLocaleString(),
      size: params.size.toLocaleString()
    };
    console.log(PARAM);

    return this.httpClient.get<{ totalPages: number, content: Array<Orders> }>(`${this.url}/driverPlace`, {params: PARAM});

  }

  ownerQuery(params: { startPlace?: string, endPlace?: string, page?: number, size?: number, reviewed?: boolean ,  status?: number }): any {
    /* 设置默认值 */
    if (params.page === undefined) {
      params.page = 0;
    }
    if (params.size === undefined) {
      params.size = 10;
    }
    if (params.status === undefined) {
      params.status = 4;
    }
    const PARAM = {
      status: params.status.toLocaleString(),
      startPlace: params.startPlace ? params.startPlace : '',
      endPlace: params.endPlace ? params.endPlace : '',
      page: params.page.toLocaleString(),
      size: params.size.toLocaleString()
    };
    console.log(PARAM);

    return this.httpClient.get<{ totalPages: number, content: Array<Orders> }>(`${this.url}/ownerPlace`, {params: PARAM});

  }

  /**
   * 更新
   */
  update(orderId: number, order: Orders): Observable<Orders> {
    return this.httpClient.put<Orders>(`${this.url}/${orderId.toString()}`, order);
  }

  /**
   * 更新
   */
  default(orderId: number, order: Orders): Observable<Orders> {
    return this.httpClient.put<Orders>(`${this.url}/default/${orderId.toString()}`, order);
  }

  /**
   * 更新
   */
  updateStatus(orderId: number, status: number): Observable<Orders> {
    return this.httpClient.put<Orders>(`${this.url}/update/${orderId.toString()}`, status);
  }


  completeOrder(orderId: number, order: Orders): Observable<Orders> {
    return this.httpClient.put<Orders>(`${this.url}/complete/${orderId.toString()}`, order);
  }

  confirmOrder(orderId: number, order: Orders): Observable<Orders> {
    return this.httpClient.put<Orders>(`${this.url}/confirm/${orderId.toString()}`, order);
  }

  /**
   * 根据id获取订单
   * @param id  订单id
   */
  public getById(id: number): Observable<Orders> {
    return this.httpClient.get<Orders>(`${this.url}/${id}`);
  }

  /**
   * 删除
   */
  public delete(orderId: number): Observable<null> {
    return this.httpClient.delete<null>(`${this.url}/${orderId.toString()}`);
  }

  /**
   * 分页方法
   * @param page 第几页
   * @param size 每页条数
   * @param userId 用户
   */
  public page(page: number, size: number): Observable<Page<Orders>> {
    const params: { [key: string]: any } = {
      page: String(page),
      size: String(size),
    };

    return this.httpClient.get<Page<Orders>>(`${this.url}/page`, {params});
  }

  /**
   * 分页方法
   * @param page 第几页
   * @param size 每页条数
   * @param userId 用户
   */
  public pageById(page: number, size: number): Observable<Page<Orders>> {
    const params: { [key: string]: any } = {
      page: String(page),
      size: String(size),
    };

    return this.httpClient.get<Page<Orders>>(`${this.url}/pageById`, {params});
  }

  /**
   * 分页方法
   * @param page 第几页
   * @param size 每页条数
   * @param userId 用户
   */
  public pageByStatus(status: number, page: number, size: number): Observable<Page<Orders>> {
    const params: { [key: string]: any } = {
      status: Number(status),
      page: String(page),
      size: String(size),
    };

    return this.httpClient.get<Page<Orders>>(`${this.url}/pageByStatus`, {params});
  }

  /**
   * 分页方法
   * @param page 第几页
   * @param size 每页条数
   * @param userId 用户
   */
  public pageByDriver(page: number, size: number): Observable<Page<Orders>> {
    const params: { [key: string]: any } = {
      page: String(page),
      size: String(size),
    };

    return this.httpClient.get<Page<Orders>>(`${this.url}/pageByDriver`, {params});
  }

}
