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
        setTimeout(() => {
            //resolve(num +1 );
            reject('Error al sumar rapido')
        }, 300);
    });
}

Promise.race([sumarLento(5), sumarRapido(10)])
    .then( resp => {
        console.log(resp);
    }).catch(console.log)