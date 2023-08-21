const pwdDisplay = document.querySelector("[data-passDisplay]");
const copyBtn = document.querySelector("[data-copybtn]");
const copyMsg = document.querySelector("[data-copymsg]");
const lengthDisplay = document.querySelector("[data-length]");
const inputSlider = document.querySelector("[data-slider]");
const indicator = document.querySelector("[data-indicator]");
const upperCheck = document.querySelector("#uppercase");
const lowerCheck = document.querySelector("#lowercase");
const numberCheck = document.querySelector("#numbers");
const symbolCheck = document.querySelector("#symbols");
const generateBtn = document.querySelector(".generate-btn");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");

let password = "";
let length = 10;
let checkCount = 0;
setIndicator("#ccc");
handleSlider();

function handleSlider(){
    inputSlider.value = length;
    lengthDisplay.innerText = length;
    console.log(inputSlider.value);
    console.log(lengthDisplay.innerText);
    console.log(length);
    console.log("hello");
}

function setIndicator(color){
    // indicator.style.backgroundColor(color);
}
function getRandomInteger(min,max){
    return Math.floor(Math.random() * (max-min))+min;
}

function generateNumber(){
    return getRandomInteger(0,9);
}

function generateLowerCase(){
    return String.fromCharCode(getRandomInteger(97,123));
}

function generateUpperCase(){
    return String.fromCharCode(getRandomInteger(65,91));
}

function generateSymbol(){
    let s = "~!@#$%^&*()_+-={}[]|:;<>,./?";
    return s.charAt(getRandomInteger(0,s.length));
}

function strength(){
    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSymbol = false;

    if(upperCheck.checked)
        hasUpper = true;
    if(lowerCheck.checked)
        hasLower = true;
    if(numberCheck.checked)
        hasNumber = true;
    if(symbolCheck.checked)
        hasSymbol = true;

    if(hasUpper && hasLower && (hasNumber || hasSymbol) && length>=8)
        setIndicator("0f0");
    else if((hasLower || hasUpper) && (hasNumber || hasSymbol) && password>=6)
        setIndicator("ff0");
    else
        setIndicator("f00");
}

async function copyPwd() {
    try{
        await navigator.clipboard.writeText(pwdDisplay.value);
    }
    catch(e){
        copyMsg.innerText = "Failed";
    }
    copyMsg.classList.add("active");
    setTimeout(() => {
        copyMsg.classList.remove("active");
    }, 2000);
}

inputSlider.addEventListener('input',(e) => {
    length = e.target.value;
    handleSlider();
})

copyBtn.addEventListener('click',() => {
    if(pwdDisplay.value)
        copyPwd();
})

function checkboxChange(){
    checkCount = 1;
    allCheckBox.forEach((checkbox) => {
        if(checkbox.checked)
            checkCount++;
    });

    if(length<checkCount){
        length = checkCount;
        handleSlider();
    }
}

allCheckBox.forEach((checkbox) => {
    checkbox.addEventListener('change',checkboxChange())
})

generateBtn.addEventListener('click', () => {
    console.log(checkCount);
    console.log("no checkbox check");

    if(checkCount==0){
        return;
    }
    if(length<checkCount){
        length=checkCount;
        handleSlider();
    }

    console.log("starting");
    password="";
    let arr = [];

    if(upperCheck.checked)
        arr.push(generateUpperCase);
    if(lowerCheck.checked)
        arr.push(generateLowerCase);
    if(numberCheck.checked)
        arr.push(generateNumber);
    if(symbolCheck.checked)
        arr.push(generateSymbol);
    
    console.log("starting indexed done");

    for(let i=0;i<arr.length;i++){
        password+=arr[i]();
    }

    console.log("adding letters");

    for(let i=0; i<length-arr.length;i++){
        let randomIndex = getRandomInteger(0,arr.length);
        password+=arr[randomIndex]();
    }

    console.log("shuffling");

    password = shuffle(Array.from(password));
    pwdDisplay.value = password;
    strength();
})

function shuffle(arr){
    for(let i = arr.length -1;i>0; i--){
        const j = Math.floor(Math.random()*(i+1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    let str = "";
    arr.forEach((el) => (str += el))
    return str;
}