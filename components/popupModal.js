const popupModalTemplate = document.getElementById('popupModal');

class PopupModal extends HTMLElement {
    constructor() {
        super();

        //create a shadow dom
        this.attachShadow({ mode: "open" });
        //returns the copy of node; If the deep is true, the copy also includes the node's descendants
        this.shadowRoot.appendChild(popupModalTemplate.content.cloneNode(true));

        this.shadowRoot.querySelector('#cancel-button').addEventListener('click', () => {
            let closeEvent = new CustomEvent('close-popup', {
                detail: {
                    id: 1
                }
            });
            window.dispatchEvent(closeEvent);
        });

        //add to list function 
        this.shadowRoot.querySelector('#add-button').addEventListener('click', () => {
            let addEvent = new CustomEvent('add-event', {
                detail: {
                    id: 1
                }
            });
            window.dispatchEvent(addEvent);
        });
    }

    open(data) {
        this.shadowRoot.querySelector(".modal").style.display = "flex";
    }
    close(data) {
        this.shadowRoot.querySelector(".modal").style.display = "none";
    }
}


customElements.define("popup-modal", PopupModal);