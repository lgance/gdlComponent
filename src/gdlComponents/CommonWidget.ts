import Util from '@gdlUtils/Util';

export interface widgetProperties {
  [key: string]: string;
}

abstract class CommonWidget {
  private _template: HTMLElement;
  private _properties: widgetProperties;
  private readonly _id: string;

  constructor(template: HTMLElement, properties: widgetProperties) {
    this._template = template;
    this._id = Util.createUUID();
    this._template.id = this._id;

    this._properties = properties;
  }

  getID(): string {
    return this._id;
  }

  getWidget(): HTMLElement {
    return this._template;
  }

  getProperty(attribute: string): string {
    return this._properties[attribute];
  }
}

export default CommonWidget;
