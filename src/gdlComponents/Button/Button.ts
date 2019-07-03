import CommonWidget, { commonWidgetProperties } from '@gdlCommonWidget';
import './Button.scss';

class Button extends CommonWidget {
  private _properties: commonWidgetProperties;
  constructor(properties: commonWidgetProperties) {
    const gdlButtonWidget = document.createElement('button');
    super(gdlButtonWidget);
    this._properties = properties;
  }

  private Init(): HTMLElement {
    const rootElement = document.createElement('div');

    return rootElement;
  }
  getProperty(key: string): string {
    return '참';
  }
}

export default Button;
