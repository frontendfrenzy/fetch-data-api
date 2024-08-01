const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '84bf6b7ec5mshd28a7636fd13358p197967jsnbb361921cf1c',
		'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};

async function res(){
    try {
        const response = await fetch(url, options);
        const result = await response.json();
       displaydata(result);
    } catch (error) {
        console.error(error);
    }
}
function displaydata(result){
    const content = document.getElementById('content');
    content.innerHTML = '';

    result.forEach(item => {
        const itemDev = document.createElement('div');
        itemDev.classList.add('item');

        const img = document.createElement('img');
        img.src = item.image;

        img.alt = item.description || 'image';

        const title = document.createElement('h2');
        title.textContent = item.title;
        title.style.color = "white";

        const description = document.createElement('p');
        description.textContent = item.description;
        description.style.color = "white";

        itemDev.appendChild(img);
        itemDev.appendChild(title);
        itemDev.appendChild(description);

        content.appendChild(itemDev);
    });
}
res();