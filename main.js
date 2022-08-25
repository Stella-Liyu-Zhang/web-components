const modal = document.querySelector("my-modal");
const open = document.querySelector("#open");
const close = document.querySelector("#close");


open.addEventListener("click", () =>{
    modal.open();
})

close.addEventListener("click", () =>{
    modal.close();
})