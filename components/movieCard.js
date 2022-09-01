const movieCardTemplate = document.getElementById('movieCard');

class movieCard extends HTMLElement {
    constructor() {
        super();

        this.showInfo = true;
        //create a shadow dom
        this.attachShadow({ mode: 'open' });
        //returns the copy of node; If the deep is true, the copy also includes the node's descendants
        this.shadowRoot.appendChild(movieCardTemplate.content.cloneNode(true));
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
    }
    movies = [];

    toggleInfo() {
        this.showInfo = !this.showInfo;
        const info = this.shadowRoot.querySelector('.info');
        const toggleBtn = this.shadowRoot.querySelector('#toggle-info');

        if (this.showInfo) {
            info.style.display = "block";
            toggleBtn.innerText = 'Hide Info';
        } else {
            info.style.display = "none";
            toggleBtn.innerText = 'Show Info';
        }
    }
    readfromStorage() {
        Object.keys(localStorage).forEach(key => {
            movies.push(JSON.stringify(localStorage.getItem(key)));
        });
        console.log(movies);
    }

    deleteMovie(id){
        deleteConfirmation();
        localStorage.removeItem(id);
        window.location.reload();
    }
    deleteConfirmation(){
        return confirm('Are you sure you want to Delete?');
    }
    editMovie(id){

    }
    connectedCallback() {
        this.shadowRoot.querySelector('#toggle-info').addEventListener('click', () => this.toggleInfo());
        this.shadowRoot.querySelector('#edit-btn').addEventListener('click', () => this.editMovie());
        this.shadowRoot.querySelector('#delete-btn').addEventListener('click', () => this.deleteMovie());
    }
    disconnectedCallback() {
        this.shadowRoot.querySelector('#toggle-info').removeEventListener();
        this.shadowRoot.querySelector('#edit-btn').removeEventListener();
        this.shadowRoot.querySelector('#delete-btn').removeEventListener();
    }
}


window.customElements.define('movie-card', movieCard);