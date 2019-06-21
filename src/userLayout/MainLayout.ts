import CommonLayout from '@gdlCommonLayout';
import '@userCSS/mainLayout.scss';
import SideMenu from '@gdlComponents/SideMenu';
import CommonWidget, {
  commonWidgetProperties
} from '@gdlComponents/CommonWidget';

class MainLayout extends CommonLayout {
  private lnbComponent?: CommonWidget;
  constructor() {
    const mainLayout: HTMLElement = document.createElement('main');
    // mainLayout.className = 'main';
    super(mainLayout);
  }
  Init() {
    // left Lnb nav Area

    const lnbMenuArea = document.createElement('nav');
    lnbMenuArea.className = 'lnb__area';

    // Right Main Content Area
    const mainContentArea = document.createElement('div');
    mainContentArea.className = 'content__area';

    //test
    const textView = document.createElement('input');
    textView.value = '메인 레이아웃입니다.';

    mainContentArea.appendChild(textView);

    this.append(lnbMenuArea);
    this.append(mainContentArea);

    const sideMenuProperties = {
      text: '사이드메뉴',
      width: '100%',
      height: '100%'
    };
    const gdlSideMenu = new SideMenu(sideMenuProperties);
    this.lnbComponent = gdlSideMenu;
    lnbMenuArea.appendChild(gdlSideMenu.getWidget());
  }
}

export default new MainLayout();
