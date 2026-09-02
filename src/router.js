import { Router } from '@vaadin/router';
import { AUTH_KEY  } from './constants/auth.js'

import './layout/public-layout.js';
import './layout/auth-layout.js';
import './pages/login-page.js';
import './pages/home-page.js';

const outlet = document.querySelector('#outlet');
const router = new Router(outlet);

router.setRoutes([
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: 'public-layout',
        action: (context, commands) => {
            const isLoggedIn = localStorage.getItem(AUTH_KEY);

            if (isLoggedIn) {
                return commands.redirect('/home');
            }
        },
        children: [
            {
                path: '/',
                component: 'login-page'
            }
        ]
    },
    {
        path: '/home',
        component: 'auth-layout',
        children: [
            {
                path: '/',
                component: 'home-page'
            }
        ]
    },
    
]);
