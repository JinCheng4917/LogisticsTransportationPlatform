
/**
 * 菜单实体
 */
export class Menu {
  /** id */
  id: number;

  /** 名称 */
  name: string;

  /** 路由 */
  url: string;

  /** 图标 */
  icon: string;

  constructor(data?: {
    id?: number,
    name?: string,
    url?: string,
    icon?: string
  }) {
    if (data) {
      this.id = data.id;
      this.name =  data.name;
      this.url = data.url;
      this.icon = data.icon;
    }
  }
}
