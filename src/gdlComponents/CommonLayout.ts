import Util from '@gdlUtils/Util';
import CommonWidget, { commonWidgetProperties } from '@gdlCommonWidget';

abstract class CommonLayout {
  protected readonly _id: string;
  protected _template: HTMLElement;
  protected _children: Array<CommonWidget>;

  constructor(template: HTMLElement) {
    this._template = template;
    this._id = Util.createUUID();
    this._template.id = this._id;
    this._children = [];
  }

  abstract Init(template: HTMLElement): void;

  public getID(): string {
    return this._id;
  }

  public append(template: HTMLElement): void {
    this._template.appendChild(template);
  }
  public appendWidget(gdlComponent: CommonWidget): void {
    let gdlWidgetTemplate = gdlComponent.getWidget();
    this._template.appendChild(gdlWidgetTemplate);
    this._children.push(gdlComponent);
  }
  public getLayout(): HTMLElement {
    return this._template;
  }
}

export default CommonLayout;
