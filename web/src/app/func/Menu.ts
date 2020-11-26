
/**
 * 菜单实体
 */
export class Menu {
  static ROLE_OWNER = 0;
  static ROLE_DRIVER = 1;
  /** id */
  id: number;

  /** 名称 */
  name: string;

  /** 路由 */
  url: string;

  /** 图标 */
  icon: string;

  roles = [Menu.ROLE_OWNER];

  constructor(data?: {
    id?: number,
    name?: string,
    roles?: number[],
    url?: string,
    icon?: string
  }) {
    if (data) {
      this.id = data.id;
      this.name =  data.name;
      this.roles = data.roles;
      this.url = data.url;
      this.icon = data.icon;
    }
  }
}
