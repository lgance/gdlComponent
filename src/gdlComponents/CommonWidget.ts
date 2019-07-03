import Util from '@gdlUtils/Util';

export interface commonWidgetProperties {
  width?: string;
  height?: string;
  text?: string;
}

interface commonWidgetEvents {
  onClick: Function;
  onAttach: Function;
  onDetach: Function;
}

abstract class CommonWidget {
  private _template: HTMLElement;
  // private _properties: commonWidgetProperties;
  private readonly _id: string;

  constructor(template: HTMLElement) {
    this._template = template;
    this._id = Util.createUUID();
    this._template.id = this._id;
    // this._properties = properties;
  }
  getID(): string {
    return this._id;
  }
  getWidget(): HTMLElement {
    return this._template;
  }
  abstract getProperty(key: any): any;

  // getProperty(key: keyof commonWidgetProperties) {
  //   return this._properties[key];
  // }
  public append(template: HTMLElement): void {
    this._template.appendChild(template);
  }
}

export default CommonWidget;
