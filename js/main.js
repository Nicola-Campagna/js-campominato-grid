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

// al click il bottone farà partire il gioco e uscire la griglia
// richiamo della funzione che permette questo:
generateGridGame(startGame);


/****************************************
 *                                      *
 *          ADDEVENTLISTENER            *
 *                                      *
****************************************/
// evento che genera le tabs
startGame.addEventListener(
    "click",
    function () {
        for (let i = 0; i < numberTabs; i++) {
            const squareEl = document.createElement("div");
            squareEl.innerHTML = i + 1;
            squareEl.classList.add("square");
            grid.append(squareEl);
            // console.log(squareEl + i);

            // evento che permette di selezionarle in rosso e deselezionarle
            squareEl.addEventListener(
                "click",
                function () {
                    this.classList.toggle("active");
                    console.log("cella selezionata" + [i + 1]);
                }
            )
        }
    }
)

/****************************************
 *                                      *
 *             FUNCTIONS                *
 *                                      *
****************************************/

// funzione che genera la griglia di gioco
function generateGridGame(grid) {
    const whiteList = [];
    for (let i = 0; i < numberTabs; i++) {
        whiteList.push(i + 1);
        // console.log(whiteList);
    }
}