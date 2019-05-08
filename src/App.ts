class App {
  private readonly rootEle: HTMLElement;
  static readonly version: string = '0.0.1';

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
  create(layout: HTMLDivElement) {
    if (this.rootEle !== null) this.rootEle.appendChild(layout);
  }

  getVersion() {
    return App.version;
  }
}

export default new App();
