import CommonLayout from '@gdlCommonLayout';

interface pageStructureIndexable {
  [key: string]: HTMLElement;
}
// test! 은 test의 null 과 undefined 타입을 제거

class App {
  private readonly rootEle: HTMLElement;
  static readonly version: string = '0.0.1';
  // ?는 프로퍼티를 선택적으로 바꿈
  private pageContent: pageStructureIndexable;
  constructor() {
    // this.pageContent = {} as pageStructure; // 비추
    this.pageContent = {};

    const dummyElement: HTMLElement = document.createElement('div');
    dummyElement.id = 'root';
    this.rootEle = document.getElementById('root') || dummyElement;
  }
  init() {
    let _this = this;
    document.addEventListener('DOMContentLoaded', function(event) {
      _this.AppInitializeConsole();
    });
  }
  AppInitializeConsole() {
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
      this.rootEle.appendChild(this.pageContent[item]);
    });
  }

  getVersion() {
    return App.version;
  }
}

export default new App();
