/**
 * 模型实体
 */
import {GoodsType} from './GoodsType';
import {Driver} from './Driver';
import {Owner} from './Owner';

export class Orders {
  /** id */
  id: number;

  /** 名称 */
  goodsName: string;

  /** 类型 */
  goods: GoodsType;

  /**
   * 初始地
   */
  startPlace: string;

  /**
   * 目的地
   */
  endPlace: string;

  /**
   * 运费
   */
  freight: number;

  /** 司机 */
  driver: Driver;

  owner: Owner;

  /** 发布时间 */
  startTime: string;

  endTime: string;

  status: number;

  constructor(param?: {
    name?: string,
    id?: number,
    goods?: GoodsType;
    startPlace?: string;
    endPlace?: string;
    freight?: number;
    driver?: Driver;
    startTime?: string;
    engTime?: string;
    status?: number;
  }) {
    if (param) {
      this.goodsName = param.name;
      this.id = param.id;
      this.goods = param.goods;
      this.startPlace = param.startPlace;
      this.endPlace = param.endPlace;
      this.freight = param.freight;
      this.driver = param.driver;
      this.startTime = param.startTime;
      this.endTime = param.engTime;
      this.status = param.status;
    }
  }
}
