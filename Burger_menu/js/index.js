(function burgerBtn() {
    document.querySelector('.btn_burger').addEventListener('click', function() {
        this.classList.toggle('btn-active');
        document.querySelector('.nav__burger').classList.toggle('nav-active');
    })    
})();