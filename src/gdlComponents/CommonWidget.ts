import Util from '@gdlUtils/Util';

export interface commonWidgetProperties {
  width: string;
  height: string;
  margin: string;
  padding: string;
}

interface commonWidgetEvents {
  onClick: Function;
  onAttach: Function;
  onDetach: Function;
}

abstract class CommonWidget {
  private _template: HTMLElement;
  private _properties: commonWidgetProperties;
  private readonly _id: string;

  constructor(template: HTMLElement, properties: commonWidgetProperties) {
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

  getProperty(key: keyof commonWidgetProperties) {
    return this._properties[key];
  }
}

export default CommonWidget;
