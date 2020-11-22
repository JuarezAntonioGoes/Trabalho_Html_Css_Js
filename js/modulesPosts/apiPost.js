export default function apiPost() {
    const buttonSubmmit = document.querySelector('[data-enviar=""]');

    buttonSubmmit.addEventListener('click', (e) => {
        e.preventDefault();

        const texto = document.querySelector('form textarea');

        if (texto.value == 0) {
            document.querySelector('form span').classList.remove('hidden');
            texto.classList.add('erro');
            return
        }

        cadastrar(texto);

        async function cadastrar(texto) {

            const link = 'https://news-api-node.herokuapp.com/api/v1/news/a8a8485d-e58e-4051-ba6b-5bb5374bac52';
            const newPost = {
                post: texto.value
            }
            const corpo = {
                method: "POST",
                body: JSON.stringify(newPost),
                headers: {
                    "Content-type": "application/json"
                }
            };

            const result = await fetch(link, corpo);
            window.location.reload();
        }



    })

}