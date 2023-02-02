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

// bottone che permetterà di iniziare il gioco 
const startGame = document.getElementById("button");
// console.log(startGame);

// numero tabelle presente nella griglia
const numberTabs = 100;

/****************************************
 *                                      *
 *          ADDEVENTLISTENER            *
 *                                      *
****************************************/

// al click il bottone farà crea la griglia di gioco con le caselle
startGame.addEventListener(
    "click",
    function () {
        const gridEl = document.getElementById("grid");
        gridEl.classList.add("grid");
        generateGridGame(gridEl);
    }
)

/****************************************
 *                                      *
 *             FUNCTIONS                *
 *                                      *
****************************************/

/**
 * @param {HTMLElement} grid 
*/

// funzione che genera la griglia di gioco
function generateGridGame(grid) {
    // const gridEl = document.getElementById("grid");
    grid.innerHTML = "";
    for (let i = 0; i < 100; i++) {
        const testoCella = i + 1;
        const cella = generaCasella(testoCella);
        grid.append(cella);
        // console.log(gridEl);
    }
}

/**
 * @param { string } testo
 * @return {HTMLElement}
 */

// funzione che genera le caselle di gioco all'interno della griglia
function generaCasella(testo) {
    const cellaEl = document.createElement("div");
    cellaEl.classList.add("square");
    cellaEl.innerHTML = testo;

    cellaEl.addEventListener(
        "click",
        function () {
            this.classList.toggle("active");
            console.log(this.innerHTML);
        }
    )
    return cellaEl;
}