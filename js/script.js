function imagem() {
    let imagens = document.querySelectorAll('.smallimg');
    let modal = document.querySelector('.modal');
    let modalImg = document.querySelector('#modal_img');
    let btn_close = document.querySelector('#bt_close');

    let srcVal = "";

    imagens.forEach((item) => {
        item.addEventListener('click', function () {


            srcVal = item.getAttribute('src');
            modalImg.setAttribute('src', srcVal);
            modal.classList.toggle('modal_active');
            btn_close.classList.toggle('btn_close');


        })
    })

    btn_close.addEventListener('click', function () {
        modal.classList.remove('modal_active');
        btn_close.classList.add('btn_close');
    })

}

function SectionJs() {
    const selecao = document.querySelectorAll('.js-section');
    const TamanhoTela = window.innerHeight * 0.7;


    function ScroolAction(e) {
        selecao.forEach((item) => {
            const scroll = ((item.getBoundingClientRect().top) - TamanhoTela) < 0;

            if (scroll) {
                item.classList.add('ativo');
            } else {
                item.classList.remove('ativo');
            }
        })
    }

    window.addEventListener('scroll', ScroolAction)
    ScroolAction();
}

function MenuScroll() {
    const menuLink = document.querySelectorAll('.menu a[href^="#"]');

    function Scroll(e) {
        e.preventDefault();
        let link = e.currentTarget.getAttribute("href");
        let IdTop = document.querySelector(link).getBoundingClientRect().top;
        console.log(IdTop);
        window.scroll({
            top: IdTop,
            left: 0,
            behavior: 'smooth'
        });
    }

    menuLink.forEach((item) => {
        item.addEventListener('click', Scroll)
    })
}

document.querySelector('html').classList.add('js');

MenuScroll();

SectionJs();

imagem();