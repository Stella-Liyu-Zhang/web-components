class MyModal extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.render();
    }
    //to render the template
    render(){
        const style = `
        <style>
            .modal{
                display: none;
                position: fixed;
                height: 100vh;
                width: 100vw;
                background-color: rgba (0,0,0,.8);
                top: 0;
                left: 0;
                justify-content: center;
                align-items: center;
            }
            .modalcontent{
                background-color: white;
                border-radius: 10px;
                padding: 10px;
                width: 70%;
                height: 60%;
            }
        </style>`
        const template = `                    
        <dialog  class="modal" id="add-movie-modal">
        <div class="modalcontent">
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
                    cancel
                </button>
                <button class="modal__button movie__button modal__button__cancel" id="cancel-button">
                     <slot></slot>
                </button>
            </section>
        </div>
        </dialog >
        `
        this.shadowRoot.innerHTML = `${style} ${template}`
    }

    open(){
        this.shadowRoot.querySelector(".modal").style.display = "flex";
    }
    close(){
        this.shadowRoot.querySelector(".modal").style.display = "none";
    }
}


customElements.define("my-modal", MyModal)