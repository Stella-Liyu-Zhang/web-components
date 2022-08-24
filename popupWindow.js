const popuptemplate = document.createElement('template');
popuptemplate.innerHTML = `
<!----------Adding a modal to add A new movie --->
<dialog  class="modal hidden" id="add-movie-modal">
    <div class="modal__content">
        <section class="modal__header-left">
            <h1>Add a New Movie of your choice</h1>
        </section>
        <section class="modal__body">
            <form id="add-movie-form" class="movieform" action="">
                <ul>
                    <li class="form__group">
                        <label for="movie_name">Movie Name</label>
                        <input type="text" name="movie_name" id="movie_name" class="form__input">
                    </li>
                    <li class="form__group">
                        <label for="director_name">Director Name</label>
                        <input type="text" name="director_name" id="director_name" class="form__input">
                    </li>
                    <li class="form__group">
                        <label for="text">Comments</label>
                        <textarea name="text" id="text" class="form__input"></textarea>
                    </li>
                </ul>
            </form>
        </section>

        <section class="modal__footer">
            <button class="modal__button movie__button" id="add-button">
                Add Movie
            </button>
            <button class="modal__button movie__button modal__button__cancel" id="cancel-button">
                Cancel
            </button>
        </section>
    </div>
</dialog >
`;

class popUpWindow extends HTMLElement {
    constructor() {
        super();

        this.showInfo = true;
        //create a shadow dom
        this.attachShadow({mode: 'open'});
        //returns the copy of node; If the deep is true, the copy also includes the node's descendants
        this.shadowRoot.appendChild(popuptemplate.content.cloneNode(true));

        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');

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


window.customElements.define('popup-window', popUpWindow);