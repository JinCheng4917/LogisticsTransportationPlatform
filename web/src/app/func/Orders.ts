/**
 * 模型实体
 */
import {GoodsType} from './GoodsType';
import {Driver} from './Driver';

export class Orders {
  /** id */
  id: number;

  /** 名称 */
  name: string;

  /** 类型 */
  goodsType: GoodsType;

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
  freight: string;

  /** 司机 */
  driver: Driver;

  /** 发布时间 */
  putTime: string;

  constructor(param?: {
    name?: string,
    id?: number,
    goodsType: GoodsType;
    startPlace: string;
    endPlace: string;
    freight: string;
    driver: Driver;
    putTime: string;
  }) {
    if (param) {
      this.name = param.name;
      this.id = param.id;
      this.goodsType = param.goodsType;
      this.startPlace = param.startPlace;
      this.endPlace = param.endPlace;
      this.freight = param.freight;
      this.driver = param.driver;
      this.putTime = param.putTime;
    }
  }
}
