import { LitElement, html, css } from 'lit';

export class PublicLayout extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                min-height: 100svh;
            }

            .layout {
                min-height: 100svh;
                display: grid;
                grid-template-rows: 1fr auto;
            }

            main {
                display: grid;
                place-items: center;
                padding: 24px;
            }

            footer {
                padding: 16px 24px;
                color: #64748b;
                font-family: Arial, Helvetica, sans-serif;
                font-size: 14px;
                text-align: center;
            }
        `
    ];

    render() {
        return html`
            <section class="layout">
                <main>
                    <slot></slot>
                </main>

                <footer>
                    TP1 Cell Proyect
                </footer>
            </section>
        `;
    }
}
customElements.define('public-layout', PublicLayout);
