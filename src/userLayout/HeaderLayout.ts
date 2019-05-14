import CommonLayout from '@gdlCommonLayout';
import '@userCSS/headerLayout.scss';

class HeaderLayout extends CommonLayout {
  constructor() {
    const headerLayout: HTMLHeadElement = document.createElement('header');
    headerLayout.className = 'header';
    super(headerLayout);
  }
  Init() {
    // logo
    const logoRegion = document.createElement('div');
    logoRegion.className = 'header__logo';

    const logoElement = document.createElement('div');
    logoElement.className = 'logo';

    const logoTextView = document.createElement('a');
    logoTextView.className = 'logoString';
    logoTextView.textContent = 'Gdl Component';

    logoRegion.appendChild(logoElement);
    logoRegion.appendChild(logoTextView);

    this.append(logoRegion);
    // right

    const headerButtons = document.createElement('div');
    headerButtons.className = 'header__buttons';

    const testElement = document.createElement('button');
    testElement.innerText = 'Button';

    headerButtons.appendChild(testElement);

    this.append(headerButtons);
  }
}

export default new HeaderLayout();
