const changeColorBtn = document.getElementById('change-color');
const main = document.querySelector('.container');

const hexItems = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
];

function genRandomColor(){
    let color = '#';
    for (let i = 0; i < 6; i++){
        color += hexItems[randomNumber()];
    }
    return color;
}

function randomNumber() {
    return Math.floor(Math.random() * 16);
}

changeColorBtn.addEventListener('click', () => {
    let newColor = genRandomColor();
    document.body.style.backgroundColor = newColor;
} );