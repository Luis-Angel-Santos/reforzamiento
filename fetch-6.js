fetch('no-encontrado.html')
    .then(resp => resp.text())
    .then(html => {
        let body = document.querySelector('body');
        body.innerHTML = html;
    }).catch(error => {
        console.log('Opps, a ocurrido un erro: ' +error);
    });