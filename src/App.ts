import CommonLayout from '@gdlCommonLayout';

interface pageStructure {
  header: HTMLElement;
  main: HTMLElement;
  footer: HTMLElement;
}

class App {
  private readonly rootEle: HTMLElement;
  static readonly version: string = '0.0.1';
  private readonly pageContent!: pageStructure;
  constructor() {
    const dummyElement: HTMLElement = document.createElement('div');
    dummyElement.id = 'root';

    this.rootEle = document.getElementById('root') || dummyElement;
  }
  init() {
    let _this = this;
    document.addEventListener('DOMContentLoaded', function(event) {
      _this.AppInitialzieConsole();
    });
  }
  AppInitialzieConsole() {
    console.warn(`App Init Complete \r\n ${App.version}`);
  }

  setHeader(layout: CommonLayout) {
    this.pageContent.header = layout.getLayout();
  }

  setMain(layout: CommonLayout) {
    this.pageContent.main = layout.getLayout();
  }

  setFooter(layout: CommonLayout) {
    this.pageContent.footer = layout.getLayout();
  }

  create(layout: HTMLDivElement) {
    if (this.rootEle !== null) this.rootEle.appendChild(layout);
  }

  adjustLayout(): void {
    const pageContentKeys = Object.keys(this.pageContent);
    pageContentKeys.forEach((item, index) => {
      // this.rootEle.appendChild(this.pageContent[item]);
    });

    this.rootEle.appendChild(this.pageContent.header);
    this.rootEle.appendChild(this.pageContent.main);
    this.rootEle.appendChild(this.pageContent.footer);
  }

  getVersion() {
    return App.version;
  }
}

export default new App();
