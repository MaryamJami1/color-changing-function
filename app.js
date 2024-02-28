let div = document.querySelector('div');
let btn = document.querySelector('button');
let h1 = document.querySelector('h1');

function gen_clr() {
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let color = `rgb(${red}, ${blue}, ${green})`;
    div.style.backgroundColor = color;
}

btn.onclick = gen_clr;
