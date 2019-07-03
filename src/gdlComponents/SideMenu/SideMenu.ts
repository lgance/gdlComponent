import CommonWidget, { commonWidgetProperties } from '@gdlCommonWidget';
import './SideMenu.scss';

interface SideMenuInterface extends commonWidgetProperties {
  title: string;
  type: string;
  menuItems: string[];
}

class SideMenu extends CommonWidget {
  private _properties: SideMenuInterface;
  constructor(properties: SideMenuInterface) {
    const gdlMenuWidget = document.createElement('div');
    super(gdlMenuWidget);
    this._properties = properties;
    this.Init();
  }
  public updateMenu(menuList: []): void {
    console.log('updateMenu');
    console.log(menuList.length);
  }

  Init(): void {
    console.warn('SideMenu Initialize');
    // this.getProperty('menuItems');
    // this._template.innerText=
  }
  getProperty(key: keyof SideMenuInterface) {
    return;
    // return this._getProperty[key];
  }
}
export default SideMenu;
