import CommonLayout from '@gdlCommonLayout';
class HeaderLayout extends CommonLayout {
  constructor() {
    const headerLayout: HTMLHeadElement = document.createElement('header');
    super(headerLayout);
  }
  Init() {
    const textView: HTMLInputElement = document.createElement('input');
    textView.textContent = '텍스트뷰 생성 테스트입니다.';
    this.append(textView);
  }
}

export default new HeaderLayout();
