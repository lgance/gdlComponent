import Util from '@gdlUtils/Util';
class CommonLayout {
  private readonly _id: string;
  constructor() {
    this._id = Util.createUUID();
  }

  getID(): string {
    return this._id;
  }
}

export default CommonLayout;
