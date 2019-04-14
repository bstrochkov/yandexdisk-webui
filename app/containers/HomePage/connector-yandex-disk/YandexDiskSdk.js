
const YANDEX_DISK_BASE_URL = 'https://cloud-api.yandex.net/v1/disk/';

export default class YandexDiskSdk {

    constructor(options) {
        this._options = options;
    }

    diskInfo() {
        return this._request('GET', '/')
    }

    _request(method, path, {headers, body} = {}) {
        const url = new URL(path, YANDEX_DISK_BASE_URL); //@todo-r build url
        return fetch(url.href, {
            method,
            headers: {
                Authorization: 'OAuth' + ' ' + this._options.token,
                ...headers,
            },
            mode: 'no-cors',
        })
    }

}
