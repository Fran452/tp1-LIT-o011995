import { LitElement, html, css } from 'lit';
import "../components/home-component.js"
export class HomePage extends LitElement {
    static styles = [ 
        css`
            :host {
                display: block;
                width: min(100%, 960px);
                margin: 0 auto;
                color: #172033;
                font-family: Arial, Helvetica, sans-serif;
            }

            h1 {
                margin: 0 0 20px;
                color: #111827;
                font-size: 32px;
                font-weight: 700;
                line-height: 1.2;
            }

            home-component {
                display: block;
            }
        `
    ]

    render() {
        return html`
            <h1>Home</h1>
            <home-component></home-component>
        `;
    }
}

customElements.define('home-page', HomePage);
