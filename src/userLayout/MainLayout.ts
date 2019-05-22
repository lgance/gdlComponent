import CommonLayout from '@gdlCommonLayout';
import '@userCSS/mainLayout.scss';

class MainLayout extends CommonLayout {
  constructor() {
    const mainLayout: HTMLMainElement = document.createElement('main');
    mainLayout.className = 'main';
    super(mainLayout);
  }
  Init() {
    const textView = document.createElement('input');
    textView.value = '메인 레이아웃입니다.';
    this.append(textView);
  }
}

export default new MainLayout();
