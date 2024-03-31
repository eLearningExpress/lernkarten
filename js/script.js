let aktuelleFrageIndex = 0;
let falschBeantworteteFragen = [];
let ueberpruefungZaehler = 0;
let fragenUndAntworten = [];

document.addEventListener("DOMContentLoaded", function () {
    fetch('text/fragen_und_antworten.json')
        .then(response => response.json())
        .then(data => {
            fragenUndAntworten = data;
            shuffleArray(fragenUndAntworten);
            frageAnzeigen();
        })
        .catch(error => console.error('Fehler beim Laden der Fragen:', error));
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function frageAnzeigen() {
    if (aktuelleFrageIndex < fragenUndAntworten.length) {
        const frageElement = document.querySelector('.list-group h4');
        const antwortElements = document.querySelectorAll('.list-group .form-check-input');
        const antwortLabels = document.querySelectorAll('.list-group label');
        const aktuelleFrage = fragenUndAntworten[aktuelleFrageIndex];

        frageElement.textContent = aktuelleFrage.frage;
        shuffleArray(aktuelleFrage.antworten);

        antwortElements.forEach((input, index) => {
            if (index < aktuelleFrage.antworten.length) {
                const antwort = aktuelleFrage.antworten[index];
                input.value = antwort;
                input.checked = false;
                antwortLabels[index].textContent = antwort;
                input.closest('.position-relative').style.display = 'block';
            } else {
                input.closest('.position-relative').style.display = 'none';
            }
        });

        antwortElements.forEach(input => {
            input.removeEventListener('change', handleAnswerSelection);
            input.addEventListener('change', handleAnswerSelection);
        });
    } else {
        endAuswertung();
    }
}

// Funktion zum Zurücksetzen des Fokus-/Aktivzustands hinzugefügt
function resetFocusState() {
    const listGroupItems = document.querySelectorAll('.list-group-item');
    listGroupItems.forEach(item => {
        item.classList.add('no-focus');
    });
}

function handleAnswerSelection(event) {
    antwortPruefen(event.target.value);
    resetFocusState(); // Fügen Sie dies hinzu, um den Fokus-/Aktivzustand zurückzusetzen

    const ausgewaehlterRadioButton = document.querySelector('.form-check-input:checked');
    if (ausgewaehlterRadioButton) {
        ausgewaehlterRadioButton.blur();
    }
}

function antwortPruefen(antwort) {
    const feedbackButton = document.querySelector('.btn-group .btn');
    if (antwort === fragenUndAntworten[aktuelleFrageIndex].richtigeAntwort) {
        feedbackButton.textContent = "Richtig!";
        feedbackButton.className = "btn btn-success";
    } else {
        feedbackButton.textContent = "Falsch! Die richtige Antwort war: " + fragenUndAntworten[aktuelleFrageIndex].richtigeAntwort;
        feedbackButton.className = "btn btn-danger";
        falschBeantworteteFragen.push(fragenUndAntworten[aktuelleFrageIndex]);
    }

    aktuelleFrageIndex++;

    setTimeout(() => {
        if (aktuelleFrageIndex < fragenUndAntworten.length) {
            feedbackButton.textContent = "Viel Erfolg!";
            feedbackButton.className = "btn btn-primary";
            frageAnzeigen();
        } else {
            endAuswertung();
        }
    }, 4000);
}

function endAuswertung() {
    const feedbackButton = document.querySelector('.btn-group .btn');
    const antwortElements = document.querySelectorAll('.list-group .form-check-input');
    const antwortLabels = document.querySelectorAll('.list-group label');

    antwortElements.forEach(input => input.checked = false);
    antwortLabels.forEach(label => label.classList.remove('active'));

    if (falschBeantworteteFragen.length > 0) {
        feedbackButton.textContent = "Überprüfe diese Fragen erneut!";
        feedbackButton.className = "btn btn-warning";
        fragenUndAntworten = [...falschBeantworteteFragen];
        falschBeantworteteFragen = [];
        aktuelleFrageIndex = 0;
        ueberpruefungZaehler++;
        frageAnzeigen();
    } else {
        feedbackButton.textContent = "Herzlichen Glückwunsch! Alle Fragen richtig beantwortet.";
        feedbackButton.className = "btn btn-success";
    }
}

const menuIcon = document.getElementById('menuIcon');
const verticalMenu = document.getElementById('verticalMenu');

menuIcon.addEventListener('click', () => {
    verticalMenu.classList.toggle('visible');
    menuIcon.style.visibility = verticalMenu.classList.contains('visible') ? 'hidden' : 'visible';
});

verticalMenu.addEventListener('mouseleave', () => {
    verticalMenu.classList.remove('visible');
    menuIcon.style.visibility = 'visible';
});
