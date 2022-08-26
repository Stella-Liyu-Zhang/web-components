class PopupModal extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.render();
        this.shadowRoot.querySelector('#cancel-button').addEventListener('click', () => {
            let closeEvent = new CustomEvent('close-popup', {
                detail: {
                   id: 1 
                }
            });
            window.dispatchEvent(closeEvent);
        });

        //add to list function 
        this.shadowRoot.querySelector('#add-btn').addEventListener('click', () => {
            //add an id on each movie
            let id = Math.floor(Math.random() * 100);
            //let sequentialid = localStorage.length+1;
            ELEMS.movieList.dataid = id;
            let addEvent = new CustomEvent('add-event', {
                detail: {
                   id: 1 
                }
            });
            window.dispatchEvent(addEvent);
        });
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
                position: fixed;
                top:20%;
                left: 15%;
                width: 70%;
                height: 50%;
                overflow: auto;
                background-color: #fcf8f4;
                border-radius: 20px;
            }
            .modalcontent{
                background-color: white;
                border-radius: 10px;
                padding: 10px;
                width: 70%;
                height: 60%;
            }
            
            .movie__button{
                outline: none;
                display: inline;
                padding: 12px 24px;
                border-radius: 10px;
                transition: all 0.3s ease 0s;
                font-weight: 600;
                font-size: 14px;
                line-height: 20px;
                color: rgb(242.244,254);
                cursor: pointer;
                border: medium none;
                background: #e2ddd9 none repeat scroll 0% 0%;
            }

            .movie__button:hover{
                background: #c6c1ba none repeat scroll 0% 0%;
                transform: translateX(0rem) translateY(-0.125rem);
            }
            .modalcontent{
                animation: slide-up 0.3s ease-in-out 0% 0%;
                display: flex;
                flex-direction: column;
                gap: 24px;
                border-radius: 10px;
                padding: 42px;
            }
                            
            textarea{
                justify-content: center;
                align-items: center;
                resize: none;
                border: medium none;
                overflow: auto;
                outline: none;
                background: #fcf8f4 none repeat scroll 0% 0%;
                border-radius: 5px;
                height: 96px;
                padding: 24px;
                font-size: 15px;
                line-height: 22px;
                color:rgb(140,146,179);
                margin-bottom: 24px;
            }
            .modal__footer{
                display: flex;
                align-self: flex-end;
                gap: 16px;
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
                    <button class="modal__button movie__button modal__button__cancel" id="cancel-button">
                        CANCEL
                    </button>
                    <button class="modal__button movie__button" id="add-button">
                        ADD
                    </button>
                </section>
            </div>
        </dialog >
        `
        this.shadowRoot.innerHTML = `${style} ${template}`
    }

    open(data){
        console.log(data);
        this.shadowRoot.querySelector(".modal").style.display = "flex";
    }
    close(data){
        this.shadowRoot.querySelector(".modal").style.display = "none";
    }


}


customElements.define("popup-modal", PopupModal)