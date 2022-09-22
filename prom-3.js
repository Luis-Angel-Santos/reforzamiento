function sumarLento(num) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(num + 1);
            //reject('Sumar lento fallo')
        }, 800);
    });
}

let sumarRapido = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num +1 ), 300);
    });
}

let cosas = [sumarLento(5), sumarRapido(10), true, 'hola mundo'];

Promise.all(cosas)
    .then(resp => {
        console.log(resp);
    }).catch(console.log)