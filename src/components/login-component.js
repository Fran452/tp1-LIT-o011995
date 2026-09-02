import { LitElement, html, css } from 'lit';
import { CustomEventMixin } from "../mixins/CustomEventMixin.js"
import { AUTH_KEY } from '../constants/auth.js';

export class LoginComponent extends CustomEventMixin(LitElement) {
    static properties = {
        _username: { type: String, state: true},
        _password: { type: String, state: true}
    }
    constructor(){
        super(),
        this._username = "",
        this._password = ""
    }
    static styles = [
        css`
            :host {
                display: block;
            }

            form {
                display: grid;
                gap: 12px;
            }

            label {
                color: #334155;
                font-size: 14px;
                font-weight: 700;
                line-height: 1.3;
            }

            input {
                width: 100%;
                box-sizing: border-box;
                min-height: 44px;
                padding: 10px 12px;
                border: 1px solid #cbd5e1;
                border-radius: 6px;
                background: #f8fafc;
                color: #0f172a;
                font: inherit;
                outline: none;
                transition: border-color 160ms ease, box-shadow 160ms ease, background 160ms ease;
            }

            input:focus {
                border-color: #2563eb;
                background: #ffffff;
                box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.16);
            }

            button {
                min-height: 44px;
                margin-top: 8px;
                border: 0;
                border-radius: 6px;
                background: #2563eb;
                color: #ffffff;
                font: inherit;
                font-size: 15px;
                font-weight: 700;
                cursor: pointer;
                transition: background 160ms ease, transform 160ms ease, box-shadow 160ms ease;
            }

            button:hover {
                background: #1d4ed8;
                box-shadow: 0 10px 24px rgba(37, 99, 235, 0.28);
                transform: translateY(-1px);
            }

            button:active {
                transform: translateY(0);
            }
        `
    ];

    render() {
        return html`
        <form @submit=${this._validateCredential}>
            <label> Ingrese su nombre </label>

            <input
                type="text"
                .value=${this._username}
                @input=${(event) => this._actualizarVariables(event.target.value,"_username")}
            />

            <label> Ingrese su contraseña </label>

            <input
                type="text"
                .value=${this._password}
                @input=${(event) => this._actualizarVariables(event.target.value,"_password")}
            />

            <button> Enviar </button>

        </form>        
        `;
    }

    
    /**
     * Actualiza dinámicamente una propiedad del componente.
     *
     * @param {*} valor - Nuevo valor que se asignará.
     * @param {string} variable - Nombre de la propiedad que se actualizará.
     * @returns {void}
     */
    _actualizarVariables(valor, variable) {
        this[variable] = valor;
    };

    _validateCredential(event){
        event.preventDefault()

        if(this._username == "alumno" && this._password == "lit2026"){
            this._emitEvent("login-success");
            localStorage.setItem(AUTH_KEY, 'true');
        }else{
            this._emitEvent("login-error", {
                error: "Usuario o contraseña incorrectos"
            });
        }
    };
}

customElements.define('login-component', LoginComponent);
