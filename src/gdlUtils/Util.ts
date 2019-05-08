class Util {
  constructor() {}
}

interface AjaxSettings {
  success: Function;
  error: Function;
  complete: Function;
  url: string;
  type: string;
  async: boolean;
  beforeSend: boolean;
  xhrFields: string | null;
  headers: string | null;
  responseType: string;
}
class Ajax extends Util {
  constructor() {
    super();
  }

  call(
    settings: AjaxSettings = {
      success: () => console.log('Ajax Success'),
      error: () => console.error('Ajax Error'),
      complete: () => console.warn('Ajax Complete'),
      url: 'http://localhost:8080',
      type: 'get',
      async: true,
      beforeSend: true,
      xhrFields: null,
      responseType: 'tt',
      headers: 'tt'
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
