const btnOpen = document.querySelector('.open-modal-btn');
const modal = document.querySelector('.modal')
const btnClose = document.querySelector('.modal_inner_footer .modal_close');
const iconClose = document.querySelector('.modal_inner_header i');

function toggleModal(){
    modal.classList.toggle('modal_hide')
}

btnOpen.addEventListener('click',toggleModal)
btnClose.addEventListener('click',toggleModal)
iconClose.addEventListener('click',toggleModal)
modal.addEventListener('click',(e)=>{
    if(e.target === e.currentTarget){
        toggleModal()
    }
})