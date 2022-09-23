let img = document.querySelector('img');

fetch('burger.png')
    .then(resp => resp.blob())
    .then(imgResp => {
        var imgPath = URL.createObjectURL(imgResp);
        img.src = imgPath;
    })