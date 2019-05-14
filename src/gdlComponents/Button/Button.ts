import CommonWidget, { widgetProperties } from '@gdlCommonWidget';
import './Button.scss';

class Button extends CommonWidget {
  constructor(properties: widgetProperties) {
    const buttonElement = document.createElement('button');

    super(buttonElement, properties);
  }
}

export default Button;
