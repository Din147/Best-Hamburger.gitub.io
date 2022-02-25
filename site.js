let currentPrice   = 5;
let tomatoCounter  = 0;
let lettuceCounter = 0;
let cheeseCounter  = 0;
let BeyondCounter  = 0;


document.getElementById("tomatoMinus").disabled= true;
document.getElementById("CheeseMinus").disabled= true;
document.getElementById("lettuceMinus").disabled= true;
document.getElementById("BeyondMinus").disabled= true;

updatePrice();

function addTomato(){

    const tomatos = document.getElementById('tomatos');
    if(tomatoCounter>=3){
        const button =   document.getElementById("tomatoPluse");
        button.disabled = true;
    }
    if(tomatoCounter<=1){
        const button = document.getElementById("tomatoMinus");
        button.disabled = false;
    }
    const addTomato = document.createElement('div');
    addTomato.classList.add('tomato');
    tomatos.appendChild(addTomato);
    currentPrice++;
    tomatoCounter++;

    updatePrice();
}

function removeTomato(){
    const tomatos = document.getElementById('tomatos');
    const removeTomato = document.getElementsByClassName('tomato')[0];
    tomatos.removeChild(removeTomato);
   
    if(tomatoCounter>=3){
        const button =   document.getElementById("tomatoPluse");
        button.disabled = false;;
    }
    if(tomatoCounter<=1){
        const button =   document.getElementById("tomatoMinus");
        button.disabled = true;
    }
    currentPrice--;
    tomatoCounter--;
    updatePrice();
}

function addCheese(){

    if(cheeseCounter>=3){
        const button =  document.getElementById("cheesePluse");
        button.disabled = true;
    }
    if(cheeseCounter<=1){
        const button = document.getElementById("CheeseMinus");
        button.disabled = false;
    }

    const manyCheese = document.getElementById('manyCheese');
    const addCheese = document.createElement('div');
    addCheese.classList.add('cheese');
    manyCheese.appendChild(addCheese);
    currentPrice+=2;
    cheeseCounter++;
    updatePrice();
}

function removeCheese(){

    if(cheeseCounter>=3){
        const button = document.getElementById("cheesePluse");
        button.disabled = false;
    }
    if(cheeseCounter<=1){
        const button1 = document.getElementById("CheeseMinus");
        button1.disabled = true;
    }

    const manyCheese = document.getElementById('manyCheese');
    const removeCheese = document.getElementsByClassName('cheese')[0];
    manyCheese.removeChild(removeCheese);
    currentPrice-=2;
    cheeseCounter--;
    updatePrice();
}

function addLettuce(){

    if(lettuceCounter>=3){
        const button =  document.getElementById("lettucePluse");
        button.disabled = true;
    }
    if(lettuceCounter<=1){
        const button = document.getElementById("lettuceMinus");
        button.disabled = false;
    }


    const manyLettuce = document.getElementById('manyLettuce');
    const addLettuce = document.createElement('div');
    addLettuce.classList.add('lettuce');
    manyLettuce.appendChild(addLettuce);
    currentPrice+=0.5;
    lettuceCounter++;
    updatePrice();
}

function removeLettuce(){

    if(lettuceCounter>=3){
        const button = document.getElementById("lettucePluse");
        button.disabled = false;
    }
    if(lettuceCounter<=1){
        const button1 = document.getElementById("lettuceMinus");
        button1.disabled = true;
    }
    const manyLettuce = document.getElementById('manyLettuce');
    const removeLettuce = document.getElementsByClassName('lettuce')[0];
    manyLettuce.removeChild(removeLettuce);
    currentPrice-=0.5;
    lettuceCounter--;
    updatePrice();
}




function addBeyondBurger(){

    if(BeyondCounter>=3){
        const button =  document.getElementById("BeyondPluse");
        button.disabled = true;
    }
    if(BeyondCounter<=1){
        const button = document.getElementById("BeyondMinus");
        button.disabled = false;
    }

    const beyondBurgers = document.getElementById('beyondBurgers');
    const addBeyondBurger = document.createElement('div');
    addBeyondBurger.classList.add('beyondBurger');
    beyondBurgers.appendChild(addBeyondBurger);
    currentPrice+=4.75;
    BeyondCounter++;
    updatePrice();
}


function removeBeyondBurgers(){
   
    if(BeyondCounter>=3){
        const button = document.getElementById("BeyondPluse");
        button.disabled = false;
    }
    if(BeyondCounter<=1){
        const button1 = document.getElementById("BeyondMinus");
        button1.disabled = true;
    }
   
    const BeyondBurgers = document.getElementById('beyondBurgers');
    const removeBeyondBurger = document.getElementsByClassName('beyondBurger')[0];
    BeyondBurgers.removeChild(removeBeyondBurger);

    currentPrice-=4.75;
    BeyondCounter--;
    updatePrice();
}


function updatePrice(){
    const price = document.getElementById('price');
    price.textContent = currentPrice;
}