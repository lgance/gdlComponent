import Util from '@gdlUtils/Util';
abstract class CommonLayout {
  private readonly _id: string;
  private _template: HTMLElement;

  constructor(template: HTMLElement) {
    this._template = template;
    this._id = Util.createUUID();
    this._template.id = this._id;
  }

  abstract Init(template: HTMLElement): void;

  getID(): string {
    return this._id;
  }

  append(template: HTMLElement): void {
    this._template.appendChild(template);
  }

  getLayout(): HTMLElement {
    return this._template;
  }
}

export default CommonLayout;
