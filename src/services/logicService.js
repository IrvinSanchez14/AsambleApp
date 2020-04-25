import axios from 'axios';
import {URL_DEV_LOCAL} from './apiURL';
import {store} from '../store';

const baseURL = URL_DEV_LOCAL;
//const createToken = `Bearer ${store.getState().Acceso.token}`;
//const token = createToken.replace(/"/g, '');

export class UsersCLient {
  constructor(http) {
    this.http = http;
    this.baseURL = baseURL;
  }

  createUser(usuario) {
    let url = this.baseURL + '/Usuarios';
    let options = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${store.getState().Acceso.token}`,
    };

    return axios.post(url, usuario, {
      headers: options,
    });
  }
}
