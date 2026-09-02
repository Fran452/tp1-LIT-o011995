import { LitElement, css, html } from 'lit';

export class HomeComponent extends LitElement {
    static properties = {
        _username   :{ type: String, state: true},
        _puesto     :{ type: String, state: true},
        _year       :{ type: Number, state: true},
        _curso      :{ type: String, state: true},
    }
    constructor(){
        super(),
        this._username   = "Francisco Lema",
        this._puesto     = "Desarrollador",
        this._year       = 6,
        this._curso      = "Sistemas"
    }

    static styles = [
        css`
            :host {
                display: block;
                padding: 24px;
                border: 1px solid #e2e8f0;
                border-radius: 8px;
                background: #ffffff;
                box-shadow: 0 18px 48px rgba(15, 23, 42, 0.08);
                color: #172033;
                font-family: Arial, Helvetica, sans-serif;
            }

            h1 {
                margin: 0 0 8px;
                color: #111827;
                font-size: 24px;
                font-weight: 700;
                line-height: 1.2;
            }

            h2 {
                margin: 0 0 18px;
                color: #475569;
                font-size: 16px;
                font-weight: 700;
                line-height: 1.3;
            }

            p {
                margin: 0;
                padding: 12px 0;
                border-top: 1px solid #e2e8f0;
                color: #334155;
                font-size: 15px;
                line-height: 1.45;
            }

            @media (max-width: 560px) {
                :host {
                    padding: 18px;
                }

                h1 {
                    font-size: 22px;
                }
            }
        `
    ];

    render() {
        return html`
        <h1> Bienvenido ${this._username} </h1>
        <h2> Ficha del usuario </h2>
        <p> curso: ${this._curso} </p>
        <p> año:  ${this._year} </p>
        <p> puesto actual: ${this._puesto}</p>
        `;
    }
}
customElements.define('home-component', HomeComponent);
