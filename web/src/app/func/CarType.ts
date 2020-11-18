/**
 * 车辆类型实体
 */

export class CarType {
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
