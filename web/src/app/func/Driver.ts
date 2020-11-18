/**
 * 司机实体
 */
import {GoodsType} from './GoodsType';
import {CarType} from './CarType';

export class Driver {
  /** id */
  id: number;

  /** 名称 */
  name: string;

  goodsType: GoodsType;

  carType: CarType;

  phone: string;

  licensePlateNumber: string;

  company: string;

  IDNumber: string;


  constructor(param?: {
    name?: string,
    id?: number,
    goodsType?: GoodsType,
    carType: CarType;
    phone: string;
    licensePlateNumber: string;
    company: string;
    IDNumber: string;
  }) {
    if (param) {
      this.name = param.name;
      this.id = param.id;
      this.goodsType = param.goodsType;
      this.carType = param.carType;
      this.phone = param.phone;
      this.licensePlateNumber = param.licensePlateNumber;
      this.company = param.company;
      this.IDNumber = param.IDNumber;
    }
  }
}
