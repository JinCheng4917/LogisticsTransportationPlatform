/**
 * 货物类型实体
 */

export class GoodsType {
  /** id */
  id: number;

  /** 名称 */
  name: string;

  constructor(param?: {
    name?: string,
    id?: number,
  }) {
    if (param) {
      this.name = param.name;
      this.id = param.id;
    }
  }
}
