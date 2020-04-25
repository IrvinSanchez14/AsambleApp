import axios from 'axios';
import {URL_DEV_LOCAL} from './apiURL';

const baseURL = URL_DEV_LOCAL;

export class authClient {
  constructor(http) {
    this.http = http;
    this.baseURL = baseURL;
  }

  loginAuth(objectForm) {
    let url = this.baseURL + '/authenticate';
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    return axios.post(url, objectForm, {
      headers: options,
    });
  }
}
