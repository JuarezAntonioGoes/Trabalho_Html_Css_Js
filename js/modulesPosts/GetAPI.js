export default async function GetAPI() {
    const link = 'https://news-api-node.herokuapp.com/api/v1/news/a8a8485d-e58e-4051-ba6b-5bb5374bac52';
    const GetPost = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    }

    const requisicao = await fetch(link, GetPost);
    const resultGet = await requisicao.json();

    resultGet.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = '<img src="../img/logo.png" alt=""><h4>SHINE</h4><p></p>';
        div.querySelector('p').innerText = element.post;
        document.querySelector('.todos-posts .post').before(div)

    });


}