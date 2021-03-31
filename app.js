let events = document.querySelector('#events');

fetch ('./events.json')
    .then(reponse => reponse.json())
    .then(data => {
        Object.entries(data).reverse().forEach((element, index) => {
            let li = document.createElement('li')
            let article = document.createElement('article');

            let title = document.createElement('h2');
            title.textContent = element[1]['name']
            article.appendChild(title);

            let date = document.createElement('p');
            date.textContent = `Le ${element[1]['date']}`;

            let underline = document.createElement('i');
            underline.appendChild(date);
            article.appendChild(underline);

            let description = document.createElement('p');
            description.textContent = element[1]['description']
            article.appendChild(description);

            li.appendChild(article);
            events.appendChild(li);

            if (index === 2) {
                throw 'End';
            }
        });
    });