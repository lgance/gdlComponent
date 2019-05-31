import CommonLayout from '@gdlCommonLayout';
import '@userCSS/footerLayout.scss';

class FooterLayout extends CommonLayout {
  constructor() {
    const footerLayout: HTMLElement = document.createElement('footer');
    // footerLayout.className = 'footer';

    super(footerLayout);
  }

  Init() {
    const textView = document.createElement('input');
    textView.value = '하단 레이아웃입니다.';
    this.append(textView);
  }
}

export default new FooterLayout();
