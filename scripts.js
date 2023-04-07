let currentInput = [];
const buttons = [...document.getElementsByClassName('gridItem')];

buttons.forEach((e) => {
e.addEventListener('mousedown', parseInput(e))
});

function parseInput(e){
}
