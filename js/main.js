// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


/****************************************
 *                                      *
 *             ON LOAD                  *
 *                                      *
****************************************/

// bottone che permette di iniziare il gioco 
const startGame = document.getElementById("button");
// console.log(startGame);
const numberTabs = 100;
generateGridGame(startGame);
// al click il bottone farà partire il gioco e uscire la griglia
//funzione che permette questo:

/****************************************
 *                                      *
 *          ADDEVENTLISTENER            *
 *                                      *
****************************************/
startGame.addEventListener(
    "click",
    function () {
        for (let i = 0; i < numberTabs; i++) {
            const squareEl = document.createElement("div");
            squareEl.innerHTML = i + 1;
            squareEl.classList.add("square");
            grid.append(squareEl);
            console.log(squareEl + i);

        }
    }
)

squareEl.addEventListener(
    "click",
    function () {
        for (let i = 0; i < numberTabs; i++) {
            this.classList.toggle("active");
        }

    }
)

/****************************************
 *                                      *
 *             FUNCTIONS                *
 *                                      *
****************************************/
function generateGridGame(grid) {
    const whiteList = [];
    for (let i = 0; i < numberTabs; i++) {
        whiteList.push(i + 1);
        // console.log(whiteList);
    }
}