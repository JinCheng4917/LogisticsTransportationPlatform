/**
 * 司机实体
 */
import {GoodsType} from './GoodsType';
import {CarType} from './CarType';
import {User} from './User';

export class Owner {
  /** id */
  id: number;

  user = new User();

  goodsType: GoodsType;

  address: string;

  name: string;



  constructor(param?: {
    user?: User,
    id?: number,
    name?: string,
    goodsType?: GoodsType,
    address: string;
  }) {
    if (param) {
      this.user = param.user;
      this.id = param.id;
      this.name = param.name;
      this.goodsType = param.goodsType;
      this.address = param.address;
    }
  }
}
