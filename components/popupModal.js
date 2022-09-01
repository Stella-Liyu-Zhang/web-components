const popupModalTemplate = document.getElementById('popupModal');

class PopupModal extends HTMLElement {
    constructor() {
        super();

        const ELEMS = {};
        const movies = [];

        //create a shadow dom
        this.attachShadow({ mode: "open" });
        //returns the copy of node; If the deep is true, the copy also includes the node's descendants
        this.shadowRoot.appendChild(popupModalTemplate.content.cloneNode(true));

        //when clicking the "cancel" on modal, the modal would be closed.
        this.shadowRoot.querySelector('#cancel-button').addEventListener('click', () => {
            let closeEvent = new CustomEvent('close-popup', {
                detail: {
                    id: 1
                }
            });
            window.dispatchEvent(closeEvent);
        });

        //grab the add button, and attach an event to it. 
        // this.shadowRoot.querySelector('#add-button').addEventListener('click', () => {
        //     let addEvent = new CustomEvent('add-event', {
        //         detail: {
        //             id: 1
        //         }
        //     });
        //     window.dispatchEvent(addEvent);
        // });
    }


    //function to open the pop up modal
    open(data) {
        this.shadowRoot.querySelector(".modal").style.display = "flex";
    }
    close(data) {
        this.shadowRoot.querySelector(".modal").style.display = "none";
    }
        //movie list is the array of movies, <div> element
        movieList =  this.shadowRoot.querySelector("#movie-list");
        movieTitleInput = document.querySelector("#movie_name");
        directorInput = document.querySelector("#director_name");
        movieCommentInput = document.querySelector("#comments");
        pictureInput = document.querySelector("#movie_picture");
        movieModal = document.querySelector("#add-movie-modal");
        movieheader = document.getElementById("movie-header");
    

    //function to create an element
    createMovieElems() {
        this.movies.forEach(movie => {
            let newMovieElem = document.createElement('div');
            newMovieElem.classList.add('movie__item');
            newMovieElem.classList.add('item-animation');

            //grab the template from html file 
            movieCardTemplate = document.querySelector('#movieCard > .movie-card');
            newMovieElem.appendChild(movieCardTemplate.content.cloneNode(true));

            newMovieElem.querySelector('h3.movie_name').innerHTML = movie['movie_name'];
            newMovieElem.querySelector('p.director_name').innerHTML = movie['director_name'];
            newMovieElem.querySelector('p.comments').innerHTML = movie['comments'];
            newMovieElem.querySelector('img').innerHTML = movie['movie_picture'];

            newMovieElem.setAttribute('dataid', movie['dataid']);

            movieList.append(newMovieElem);
        });
    }

    //function to add the created movie element into the list "movieList"
    addintoList() {
        
        this.shadowRoot.querySelector('#add-button').addEventListener("click", (e) => {
            //ELEMS.popup.add(e.detail);

            movieList.movie_name = movieTitleInput.value;
            movieList.director_name = directorInput.value;
            movieList.comments = movieCommentInput.value;
            movieList.movie_picture = pictureInput.value;

            //add an id on each movie
            let id = Math.floor(Math.random() * 100);
            //let sequentialid = localStorage.length+1;
            movieList.dataid = id;

            movieTitleInput.value = "";
            directorInput.value = "";
            movieCommentInput.value = "";
            pictureInput.value = "";

            movieModal.classList.add('hidden');
            movieheader.classList.remove('hidden');
            movieList.classList.remove('hidden');

            localStorage.setItem(movieList.dataid, JSON.stringify(movieList));

            window.location.reload();
        })
    }


    connectedCallback() {
        const TEMPLATE = document.querySelector('#movieCard');

        this.shadowRoot.append(STYLES, TEMPLATE.content.cloneNode(true));


        this.shadowRoot.querySelector('#add-button').addEventListener('click', () => this.addintoList());
    }
    disconnectedCallback() {
        this.shadowRoot.querySelector('#add-button').removeEventListener();

    }

}


customElements.define("popup-modal", PopupModal);