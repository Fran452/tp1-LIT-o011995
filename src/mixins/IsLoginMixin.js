import { Router } from '@vaadin/router';
import { AUTH_KEY } from '../constants/auth.js';

const IsLoginMixin = (superClass) => class extends superClass {
    connectedCallback() {
        super.connectedCallback();
        this._checkLogin();
    }

    _checkLogin() {
    const isLoggedIn = localStorage.getItem(AUTH_KEY);

    if (!isLoggedIn) {
        return Router.go('/login');
    }
    
  }
};

export {IsLoginMixin} 