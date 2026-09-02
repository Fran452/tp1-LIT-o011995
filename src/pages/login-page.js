import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';
import "../components/login-component.js"
import "../components/alert-component.js"

export class LoginPage extends LitElement {
    
    static properties = {
        _error : { type: String, state: true } 
    };
    

    constructor(){
        super();
        this._error = "";
    }
    static styles = [ 
        css`
            :host {
                display: block;
                width: min(100%, 420px);
                box-sizing: border-box;
                padding: 32px;
                border: 1px solid rgba(148, 163, 184, 0.22);
                border-radius: 8px;
                background: #ffffff;
                box-shadow: 0 24px 70px rgba(15, 23, 42, 0.16);
                color: #172033;
                font-family: Arial, Helvetica, sans-serif;
            }

            h1 {
                margin: 0 0 24px;
                color: #111827;
                font-size: 28px;
                font-weight: 700;
                line-height: 1.15;
                text-align: center;
            }

            login-component {
                display: block;
            }

            alert-component {
                display: block;
                margin-top: 16px;
            }

            @media (max-width: 480px) {
                :host {
                    width: calc(100vw - 32px);
                    padding: 24px;
                }

                h1 {
                    font-size: 24px;
                }
            }
        `
    ]

    render() {
        return html`
            <h1> Inicio de sesión </h1>
            <login-component
                @login-success=${this._loginCorrecto}
                @login-error=${this._loginError}
            >
            </login-component>
            <alert-component
                .mensaje=${this._error}
                tipo="error"
            ></alert-component>

        `;
    }
    _loginCorrecto(){
        this._error = "";
        Router.go('/home');
    };

    _loginError(event){
        this._error = event.detail.error
    };

}

customElements.define('login-page', LoginPage);
