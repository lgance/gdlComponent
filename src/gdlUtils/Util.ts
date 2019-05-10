class Util {
  constructor() {}

  static createUUID(): string {
    let d = new Date().getTime();
    if (
      typeof performance !== 'undefined' &&
      typeof performance.now === 'function'
    ) {
      d += performance.now(); // use high -precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
  }
}

interface AjaxSettings {
  success: Function | null;
  error: Function | null;
  complete: Function | null;
  url: string;
  type: string;
  async: boolean;
  beforeSend: boolean;
  xhrFields: xhrFieldsImpl;
  responseType: string;
  data: string | object | null;
  contentType: string;
}

interface xhrFieldsImpl {
  onprogress: Function;
}
class Ajax extends Util {
  constructor() {
    super();
  }

  call(
    settings: AjaxSettings = {
      success: null,
      error: null,
      complete: null,
      url: 'http://localhost:8080',
      type: 'get',
      async: true,
      beforeSend: true,
      xhrFields: { onprogress: () => console.log('on Progress') },
      responseType: 'text',
      data: null,
      contentType: 'application/json'
    }
  ) {
    let xhr = new XMLHttpRequest();
    let {
      success,
      error,
      complete,
      url,
      type,
      async,
      beforeSend,
      xhrFields,
      responseType
    } = settings;
    xhr.open(type, url, async);

    xhr.onload = function() {
      if (xhr.status === 200) {
      }
    };
  }
}

export { Ajax };
export default Util;
