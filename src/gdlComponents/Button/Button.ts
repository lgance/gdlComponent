import CommonWidget, { commonWidgetProperties } from '@gdlCommonWidget';
import './Button.scss';

class Button extends CommonWidget {
  constructor(properties: commonWidgetProperties) {
    const gdlButtonWidget = document.createElement('button');
    super(gdlButtonWidget, properties);
  }

  private Init(): HTMLElement {
    const rootElement = document.createElement('div');

    return rootElement;
  }
}

export default Button;
