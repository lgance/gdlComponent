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

    const headerRightArea = document.createElement('div');
    headerRightArea.className = 'header__rightarea';

    const testElement = document.createElement('button');
    testElement.innerText = 'Button';

    headerRightArea.appendChild(testElement);

    this.append(headerRightArea);
  }
}

export default new HeaderLayout();
