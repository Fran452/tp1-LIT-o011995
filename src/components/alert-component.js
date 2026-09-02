import { LitElement, html, css, nothing } from 'lit';

export class AlertComponent extends LitElement {
    static properties = { 
        mensaje: { type: String },
        tipo: { type: String }
    } 

    constructor () {
        super();
        this.mensaje = "",
        this.tipo = ""
    }

    static styles = [
        css`
            :host {
                display: block;
            }

            .alert {
                box-sizing: border-box;
                width: 100%;
                padding: 12px 14px;
                border-radius: 6px;
                font-family: Arial, Helvetica, sans-serif;
                font-size: 14px;
                font-weight: 700;
                line-height: 1.35;
            }

            .error {
                border: 1px solid #fecaca;
                background: #fef2f2;
                color: #b91c1c;
            }
        `
    ];

    render() {
        if(!this.mensaje){
            return nothing
        }

        return html`
            <div class="alert ${this.tipo}" role="alert">
                ${this.mensaje}
            </div>
        `;
    }
}

customElements.define('alert-component', AlertComponent);
