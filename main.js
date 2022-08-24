
const ELEMS = {};
const movies = [];
const movieElems = [];

function queryElements(){
    ELEMS.addMovieBtn= document.getElementById("add-movie-button");

}


function addMovie(){
    ELEMS.addMovieBtn.addEventListener("click", () => {
        ELEMS.modal.classList.remove('hidden');
        ELEMS.movieheader.classList.add('hidden');
        ELEMS.movieList.classList.add('hidden');
    })
}

function init() {
    //Read from local storage
    ////readfromStorage();
    // queryElements();
    // createMovieElems();
    //attachEvents();
    addMovie();
    // cancelMovie();
    // addintoList();
}

document.addEventListener('DOMContentLoaded', init)