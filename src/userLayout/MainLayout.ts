import CommonLayout from '@gdlCommonLayout';
import '@userCSS/mainLayout.scss';

class MainLayout extends CommonLayout {
  constructor() {
    const mainLayout: HTMLMainElement = document.createElement('main');
    // mainLayout.className = 'main';
    super(mainLayout);
  }
  Init() {
    const lnbMenuArea = document.createElement('nav');
    lnbMenuArea.className = 'lnb__area';
    lnbMenuArea.innerText = 'lnb입니다.';

    const mainContentArea = document.createElement('div');
    mainContentArea.className = 'content__area';

    const textView = document.createElement('input');
    textView.value = '메인 레이아웃입니다.';

    mainContentArea.appendChild(textView);

    this.append(lnbMenuArea);
    this.append(mainContentArea);
  }
}

export default new MainLayout();
