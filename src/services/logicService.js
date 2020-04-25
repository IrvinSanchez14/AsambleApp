import axios from 'axios';
import {URL_DEV_LOCAL} from './apiURL';

const baseURL = URL_DEV_LOCAL;

export class UsersCLient {
  constructor(http) {
    this.http = http;
    this.baseURL = baseURL;
  }

  createUser(usuario) {
    let url = this.baseURL + '/Usuarios';
    let options = {
      'Content-Type': 'application/json',
      //Authorization: this.token,
    };

    return axios.post(url, usuario, {
      headers: options,
    });
  }
}
