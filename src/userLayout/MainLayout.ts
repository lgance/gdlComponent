import CommonLayout from '@gdlCommonLayout';
import '@userCSS/mainLayout.scss';
import SideMenu from '@gdlComponents/SideMenu';

class MainLayout extends CommonLayout {
  constructor() {
    const mainLayout: HTMLElement = document.createElement('main');
    // mainLayout.className = 'main';
    super(mainLayout);
  }
  Init() {
    const lnbMenuArea = document.createElement('nav');
    lnbMenuArea.className = 'lnb__area';

    const mainContentArea = document.createElement('div');
    mainContentArea.className = 'content__area';

    const textView = document.createElement('input');
    textView.value = '메인 레이아웃입니다.';

    mainContentArea.appendChild(textView);

    const sideMenuProperties = {
      text: '사이드메뉴',
      width: '100%',
      height: '100%'
    };
    const gdlSideMenu = new SideMenu(sideMenuProperties);

    this.append(lnbMenuArea);
    this.append(mainContentArea);
  }
}

export default new MainLayout();
