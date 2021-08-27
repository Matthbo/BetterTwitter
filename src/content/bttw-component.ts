import { css, html, LitElement, PropertyValues } from "lit";
import { customElement, property } from "lit/decorators.js";
import { log } from "./utils";

@customElement("bttw-component")
export class BTTWComponent extends LitElement {
    @property({ type: Boolean/* , attribute: "shown"  */})
    shown: boolean = false;

    static styles = css`
        div.wrapper {
            position: fixed;
            width: calc(100vw / 4 * 3);
            height: calc(100vh / 4 * 3);
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 999;
            color: #000;
            background-color: #fff;
        }
    `;

    update(ChangedProperties: PropertyValues){
        super.update(ChangedProperties);
        log(ChangedProperties);
    }

    render(){
        return this.shown ? html`
            <div class="wrapper">
                <p>Test component</p>
            </div>
        ` : null;
    }
}
