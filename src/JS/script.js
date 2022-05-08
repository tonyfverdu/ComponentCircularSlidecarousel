const slider   = document.querySelector('#idSlider');
const myCanvas = document.querySelector('#idmyCanvas');
const ctx = myCanvas.getContext('2d');
console.log('context: ' + ctx );

const canvasWidth  = myCanvas.width;
const canvasHeigth = myCanvas.height;

console.log('Dimensiones del canvas, width: ' + canvasWidth + ' heigth: ' + canvasHeigth);

const arrayImages = [];

slider.addEventListener('change', () => {
    console.log(slider.value);
    cargarImg(slider.value);

    if(slider.value == '0') {
        document.getElementById('idDescription').innerHTML = 'Schema general Voyager';
    } else if (slider.value == '1') {
        document.getElementById('idDescription').innerHTML = 'Right side view Voyager';
    } else if (slider.value == '2') {
        document.getElementById('idDescription').innerHTML = 'Front view Voyager';
    } else if (slider.value == '3') {
        document.getElementById('idDescription').innerHTML = 'Left side view  Voyager';
    } else if (slider.value == '4') {
        document.getElementById('idDescription').innerHTML = 'Back view Voyager';
    } else if (slider.value == '5') {
        document.getElementById('idDescription').innerHTML = 'Bottom view Voyager';
    } else if (slider.value == '6') {
        document.getElementById('idDescription').innerHTML = 'Front view Voyager';
    }
});


for(let i = 0; i <= 6; i++) {
    let num = i;
    const url = `./assets/Img/Slide1ShipVoyager/sliceVoyager-${num}.jpg`;

    const image = new Image();
    image.src = url;

    image.addEventListener('load', () => {
        arrayImages[i] = image;
        if(i === 1) {
            cargarImg(i);
        }
    });
}

function cargarImg(parIndex) {
    ctx.drawImage(arrayImages[parIndex], 0, 0, canvasWidth, canvasHeigth);
}

