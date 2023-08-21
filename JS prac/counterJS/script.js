const x = document.querySelector('#counter');

const decrement = () => {
    let value = parseInt(x.innerText);
    value = value - 1;
    x.innerText = value;
};

const increment = () => {
    let value = parseInt(x.innerText);
    value = value + 1;
    x.innerText = value;
};