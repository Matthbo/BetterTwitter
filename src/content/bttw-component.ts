import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("bttw-component")
export class BTTWComponent extends LitElement {

    static styles = css`
        div.wrapper {
            position: absolute;
            width: 500px;
            height: 500px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 999;
            color: #000;
            background-color: #fff;
        }
    `;

    render(){
        return html`
            <div class="wrapper">
                <p>Test component</p>
            </div>
        `;
    }

}
