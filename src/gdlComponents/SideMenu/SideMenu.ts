import CommonWidget, { commonWidgetProperties } from '@gdlCommonWidget';
import './SideMenu.scss';

class SideMenu extends CommonWidget {
  constructor(properties: commonWidgetProperties) {
    const gdlMenuWidget = document.createElement('div');
    super(gdlMenuWidget, properties);
  }
  private Init(): HTMLElement {
    const rootElement = document.createElement('div');
    rootElement.innerText = '사이드메뉴입니다.';
    return rootElement;
  }
}
export default SideMenu;
