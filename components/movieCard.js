const template = document.querySelector('template');

class movieCard extends HTMLElement {
    constructor() {
        super();

        this.showInfo = true;
        //create a shadow dom
        this.attachShadow({mode: 'open'});
        //returns the copy of node; If the deep is true, the copy also includes the node's descendants
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');

        this.shadowRoot.querySelector('#edit-btn').addEventListener('click', () => {
            let openEvent = new CustomEvent('open-popup', {
                detail: {
                   id: 1 
                }
            });
            window.dispatchEvent(openEvent);
        });

        //delete the movie
        this.shadowRoot.querySelector('#delete-btn').addEventListener('click', () => {
            let deleteEvent = new CustomEvent('delete-elem', {
                detail: {
                   id: 1 
                }
            });
            window.dispatchEvent(deleteEvent);
        })
    }
    toggleInfo(){
        this.showInfo = !this.showInfo;
        const info = this.shadowRoot.querySelector('.info');
        const toggleBtn = this.shadowRoot.querySelector('#toggle-info');

        if(this.showInfo){
            info.style.display = "block";
            toggleBtn.innerText = 'Hide Info';
        }else{
            info.style.display = "none";
            toggleBtn.innerText = 'Show Info';
        }
    }
    connectedCallback() {
        this.shadowRoot.querySelector('#toggle-info').addEventListener('click', () => this.toggleInfo());
    }
    disconnectedCallback() {
        this.shadowRoot.querySelector('#toggle-info').removeEventListener();
    }
}


window.customElements.define('movie-card', movieCard);