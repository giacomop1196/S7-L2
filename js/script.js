// Esercizio 1

const nameInput = document.getElementById('nameInput');
const saveButton = document.getElementById('saveButton');
const removeButton = document.getElementById('removeButton');
const savedNameDisplay = document.getElementById('savedNameDisplay');
const savedName = document.getElementById('savedName');
const localStorageKey = 'userName';

// Funzione per caricare e visualizzare il nome salvato
function loadSavedName() {
    const storedName = localStorage.getItem(localStorageKey);
    if (storedName) {
        savedName.textContent = storedName;
        savedNameDisplay.style.display = 'block'; // Monstra l'allert
    } else {
        savedName.textContent = '';
        savedNameDisplay.style.display = 'none'; // Nascondi l'allert
    }
}

// Funzione per salvare il nome
saveButton.addEventListener('click', () => {
    const name = nameInput.value;
    if (name) {
        localStorage.setItem(localStorageKey, name); // Salvo il nome in localStorage usando la chiave 'userName'
        alert('Nome salvato con successo!');
        nameInput.value = ''; // Pulisco l'input
        loadSavedName(); // Lancio la funzione per visualizzare il nome
    } else {
        alert('Per favore, inserisci un nome.');
    }
});

// Funzione per rimuovere il nome
removeButton.addEventListener('click', () => {
    if (localStorage.getItem(localStorageKey)) {
        localStorage.removeItem(localStorageKey);
        alert('Nome rimosso con successo!');
        loadSavedName(); // Lancio la funzione per visualizzare il nome
    } else {
        alert('Nessun nome salvato da rimuovere.');
    }
});


// Esercizio 2


const counterDisplay = document.getElementById('counterDisplay');
const sessionStorageKey = 'timeCounter'; // Chiave per sessionStorage

let counter = 0;

// Funzione per inizializzare o recuperare il valore del contatore
function initializeCounter() {
    const storedValue = sessionStorage.getItem(sessionStorageKey);
    if (storedValue) { // Se aggiorno la pagina e ho già avviato il contatore
        counter = parseInt(storedValue, 10); // Prendo il valore e lo converto da stringa in numero intero
    } else {
        counter = 0; // Inizia da 0 se non c'è un valore salvato
    }
    counterDisplay.textContent = counter; // Aggiorna la visualizzazione
}

// Funzione per aggiornare il contatore e salvarlo in sessionStorage
function updateCounter() {
    counter++;
    counterDisplay.textContent = counter;
    sessionStorage.setItem(sessionStorageKey, counter); // Salvo counter nel sessionStorage
}

// Esegui all'avvio della pagina
document.addEventListener('DOMContentLoaded', () => {
    initializeCounter(); // Inizializzo il contatore
    setInterval(updateCounter, 1000); // Ogni secondo lancio updateCounter()
});