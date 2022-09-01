const ELEMS = {};
const movies = [];

//click the edit button and open the pop up window
window.addEventListener('open-popup', (e) => {
    document.querySelector('popup-modal').open(e.detail);
});

//close the pop up window 
window.addEventListener('close-popup', (e) => {
    document.querySelector('popup-modal').close(e.detail);
});

//from the pop up window. add a movie into the list.
window.addEventListener('add-event', (e) => {
    document.querySelector('popup-modal').addElement(e.detail);
});

//delete a movie element
window.addEventListener('deleteEvent', (e) => {
    document.querySelector('movie-card').delete(e.detail);
})

function queryElements() {
    ELEMS.movieheader = document.getElementById("movie-header");
    ELEMS.totalmovies = document.getElementById("movies");
    ELEMS.addMovieBtn = document.getElementById("add-movie-button");

    ELEMS.movieTitleInput = document.getElementById("popupModal").content.getElementById("movie_name");
    ELEMS.movieCommentInput = document.getElementById("popupModal").content.getElementById("comments");
    ELEMS.directorInput = document.getElementById("popupModal").content.getElementById("director_name");
    ELEMS.pictureInput = document.getElementById("popupModal").content.getElementById("movie_picture");

    ELEMS.addBtn = document.getElementById("popupModal").content.getElementById("add-button");
    ELEMS.cancelBtn = document.getElementById("popupModal").content.getElementById("cancel-button");
    ELEMS.modal = document.getElementById("popupModal").content.getElementById("add-movie-modal");
    ELEMS.movieList = document.getElementById("movie-list");

    //ELEMS.movieCardTemplate = document.;
    ELEMS.popup = document.querySelector('popup-modal');
    ELEMS.totalmovies.innerHTML = localStorage.length;

    // we report error if we have trouble finding the element.
    Object.keys(ELEMS).forEach((elem) => {
        if (!ELEMS[elem]) {
            console.error(`Trouble querying ${elem} element`);
        }
    });
}

function readfromStorage() {
    Object.keys(localStorage).forEach(key => {
        movies.push(JSON.stringify(localStorage.getItem(key)));
    });
    console.log(movies);
}


function addMovie(){
    ELEMS.addMovieBtn.addEventListener("click", (e) => {
        ELEMS.popup.open(e.detail);
    })
}

//add the input into the list
function addintoList() {
    ELEMS.addBtn.addEventListener("click", (e) => {
        //ELEMS.popup.add(e.detail);

        ELEMS.movieList.movie_name = ELEMS.movieTitleInput.value;
        ELEMS.movieList.director_name = ELEMS.directorInput.value;
        ELEMS.movieList.comments = ELEMS.movieCommentInput.value;
        ELEMS.movieList.movie_picture = ELEMS.pictureInput.value;

        //add an id on each movie
        let id = Math.floor(Math.random() * 100);
        //let sequentialid = localStorage.length+1;
        ELEMS.movieList.dataid = id;

        ELEMS.movieTitleInput.value = "";
        ELEMS.directorInput.value = "";
        ELEMS.movieCommentInput.value = "";
        ELEMS.pictureInput.value = "";

        ELEMS.modal.classList.add('hidden');
        ELEMS.movieheader.classList.remove('hidden');
        ELEMS.movieList.classList.remove('hidden');

        localStorage.setItem(ELEMS.movieList.dataid, JSON.stringify(ELEMS.movieList));

        window.location.reload();
    })
}



// function createMovieElems() {
//     movies.forEach(movie => {
//         let newMovieElem = document.createElement('div');
//         newMovieElem.classList.add('movie__item');
//         newMovieElem.classList.add('item-animation');

//         const node = ELEMS.movieCardTemplate.content;
//         const clone = node.cloneNode(true);
//         newMovieElem.appendChild(clone);

//         newMovieElem.querySelector('h3.movie_name').innerHTML = movie['movie_name'];
//         newMovieElem.querySelector('p.director_name').innerHTML = movie['director_name'];
//         newMovieElem.querySelector('p.comments').innerHTML = movie['comments'];
//         newMovieElem.querySelector('img').innerHTML = movie['movie_picture'];

//         newMovieElem.setAttribute('dataid', movie['dataid']);

//         ELEMS.movieList.append(newMovieElem);
//     });
// }

// function attachEvents() {
//     Array.from(ELEMS.movieList.children).forEach(movie => {
//         let editBtn = movie.querySelector('button.edit');
//         let deleteBtn = movie.querySelector('button.delete');

//         editBtn.addEventListener('click', () => {
//             editMovie(movie.getAttribute('dataid'));
//         });
//         deleteBtn.addEventListener('click', () => {
//             deleteMovie(movie.getAttribute('dataid'));
//         });
//     });
// }

//localstorage.remove(99);
function deleteMovie(id) {
    deleteConfirmation();
    localStorage.removeItem(id);
    window.location.reload();
}


function deleteConfirmation() {
    return confirm('Are you sure you want to Delete?');
}

// function editMovie(id) {
//     let currMovieElem = document.querySelector(`[data-id="${id}"]`);
//     console.log(currMovieElem);
//     let movieObject = JSON.parse(localStorage.getItem(id));
//     //make the window pops up
//     ELEMS.modal.classList.remove('hidden');
//     ELEMS.movieheader.classList.add('hidden');
//     ELEMS.movieList.classList.add('hidden');

//     // Display the previously stored value in the field
//     ELEMS.movieTitleInput.value = movieObject.movie_name;
//     ELEMS.directorInput.value = movieObject.director_name;
//     ELEMS.movieCommentInput.value = movieObject.text;

//     console.log(ELEMS.movieTitleInput.value, ELEMS.directorInput.value, ELEMS.movieCommentInput.value);
//     ELEMS.addBtn.innerHTML = "Save Edits";

//     ELEMS.addBtn.addEventListener("click", () => {
//         localStorage.setItem(id, JSON.stringify(movieObject));

//         ELEMS.modal.classList.add('hidden');
//         ELEMS.movieheader.classList.remove('hidden');
//         ELEMS.movieList.classList.remove('hidden');

//         localStorage.removeItem(id);
//         window.location.reload();
//     });
// }


function init() {
    readfromStorage();
    queryElements();
    //createMovieElems();
   // attachEvents();
    addMovie();
    addintoList();
}

document.addEventListener('DOMContentLoaded', init)
