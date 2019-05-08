class Util {
  constructor() {}
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

  static call(
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
      headers,
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
