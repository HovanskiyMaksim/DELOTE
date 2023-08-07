const burgerBlock = document.querySelector('.header_burger_block'),
      button = document.querySelector('.button__burger');



function burger(btn) {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        burgerBlock.classList.toggle('visible')
    })
}

burger(button)