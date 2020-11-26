/**
 * 司机实体
 */
import {GoodsType} from './GoodsType';
import {CarType} from './CarType';
import {User} from './User';

export class Owner {
  /** id */
  id: number;

  user: User;

  goodsType: GoodsType;

  address: string;



  constructor(param?: {
    user?: User,
    id?: number,
    goodsType?: GoodsType,
    address: string;
  }) {
    if (param) {
      this.user = param.user;
      this.id = param.id;
      this.goodsType = param.goodsType;
      this.address = param.address;
    }
  }
}
