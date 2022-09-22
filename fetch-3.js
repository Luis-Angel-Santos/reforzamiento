//https://reqres.in/api/users

let usuario = {
    nombre: 'angel',
    edad: 21,
    equipo: 'cruz azul'
};

fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: JSON.stringify(usuario),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(resp => resp.json())
.then(console.log)
.catch(error => {
    console.log('Error: '+ error);
});