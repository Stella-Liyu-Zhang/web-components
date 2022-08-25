const movieOpen = document.querySelector("template").content.querySelector('#open');


movieOpen.addEventListener("click", () =>{
    console.log("haha");
    modal.open();
})

window.addEventListener('open-popup', (e) => {
    document.querySelector('my-modal').open(e.detail);
});

window.addEventListener('close-popup', (e) =>{
    document.querySelector('my-modal').close(e.detail);
})