class DemoComponent extends HTMLElement {
    constructor() {
        super();
        console.log('constructor');
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        console.log('connectedCallback');

        const TEMPLATE = document.querySelector('template');

        const STYLES = document.createElement('style');
        STYLES.innerHTML = `
          span {
            color: green;
          }
        `;

        if (this['name']) {
            TEMPLATE.content.querySelector('span').innerHTML = this['name'];
        }

        this.shadowRoot.append(STYLES, TEMPLATE.content.cloneNode(true));
    }

    disconnectedCallback() {
        console.log('disconnectedCallback');
    }

    static get observedAttributes() {
        //only monitor the color attribute, statics
        return ['name'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
        console.log('attributeChangedCallback');
    }
}

customElements.define('demo-component', DemoComponent);
