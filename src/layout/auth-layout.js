import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';
import {IsLoginMixin} from '../mixins/IsLoginMixin.js'
import { AUTH_KEY } from '../constants/auth.js';
import '@dile/ui/components/app-drawer/app-drawer.js';

export class AuthLayout extends IsLoginMixin(LitElement) {
    static styles = [
        css`
            :host {
                display: block;
                min-height: 100svh;
                font-family: Arial, Helvetica, sans-serif;
            }

            .layout {
                min-height: 100svh;
                display: grid;
                grid-template-rows: auto 1fr auto;
                background: #f8fafc;
            }

            header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 16px;
                padding: 16px 24px;
                background: #111827;
                color: #ffffff;
            }

            main {
                padding: 24px;
            }

            footer {
                padding: 16px 24px;
                border-top: 1px solid #e2e8f0;
                color: #64748b;
                font-size: 14px;
            }

            button {
                min-height: 36px;
                padding: 8px 12px;
                border: 0;
                border-radius: 6px;
                background: #ffffff;
                color: #111827;
                font: inherit;
                font-size: 14px;
                font-weight: 700;
                cursor: pointer;
            }

            button:hover {
                background: #e5e7eb;
            }
        `
    ];

    render() {
        return html`
            <section class="layout">
                <header>
                    <slot name="header">
                        <strong>TP1 Cell Proyect</strong>
                        <button type="button" @click=${this._toggleMenu}>Menu</button>
                        <dile-app-drawer>
                            <p><button type="button" @click=${this._closeMenu}>Cerrar menu</button></p>
                            <p><a href="#">Incio</a></p>
                            <p><a href="#">Perfil</a></p>
                            <p><a href="#">Catalogo</a></p>
                            <p><button type="button" @click=${this._logout}>Cerrar sesion</button></p>
                        </dile-app-drawer>
                       
                    </slot>
                </header>

                <main>
                    <slot></slot>
                </main>

                <footer>
                    <slot name="footer">
                        Vista privada
                    </slot>
                </footer>
            </section>
        `;
    }

    _logout() {
        localStorage.removeItem(AUTH_KEY);
        Router.go('/login');
    }

    _toggleMenu() {
        const drawer = this.renderRoot.querySelector('dile-app-drawer');
        drawer.toggle();
    }

    _closeMenu() {
        const drawer = this.renderRoot.querySelector('dile-app-drawer');
        drawer.close();
    }
}
customElements.define('auth-layout', AuthLayout);
