fetch('https://reqres.in/api/users/24')
    .then(resp => {
        if(resp.ok){
            return resp.json();
        }else{
            throw new Error('No existe el usuario :(')
        }
    }).catch(error => {
        console.log('Opps, ocurrio un error :(');
        console.log(error);
    })
