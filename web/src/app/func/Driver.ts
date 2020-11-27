/**
 * 司机实体
 */
import {GoodsType} from './GoodsType';
import {CarType} from './CarType';
import {User} from './User';

export class Driver {
  /** id */
  id: number;

  /** 名称 */
  name: string;

  goodsType: GoodsType;

  carType: CarType;

  user = new User();

  phone: string;

  licensePlateNumber: string;

  company: string;



  constructor(param?: {
    name?: string,
    id?: number,
    goodsType?: GoodsType,
    carType: CarType;
    phone: string;
    user: User;
    licensePlateNumber: string;
    company: string;
  }) {
    if (param) {
      this.name = param.name;
      this.id = param.id;
      this.goodsType = param.goodsType;
      this.carType = param.carType;
      this.user = param.user;
      this.phone = param.phone;
      this.licensePlateNumber = param.licensePlateNumber;
      this.company = param.company;
    }
  }
}
