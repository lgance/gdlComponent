import CommonWidget, { commonWidgetProperties } from '@gdlCommonWidget';
import './SideMenu.scss';

class SideMenu extends CommonWidget {
  constructor(properties: commonWidgetProperties) {
    const gdlMenuWidget = document.createElement('div');
    super(gdlMenuWidget, properties);

    const rootElement = document.createElement('div');
    rootElement.innerText = '사이드메뉴입니다.';
    this.append(rootElement);
  }
}
export default SideMenu;
