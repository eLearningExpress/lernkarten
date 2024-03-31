
# Lernkarten

## Beschreibung

Lernkarten ist eine webbasierte Lernkarten-Anwendung, die darauf ausgelegt ist, das Lernen durch interaktive Frage-und-Antwort-Sitzungen zu erleichtern. Diese Anwendung wurde mit HTML, CSS und JavaScript entwickelt und nutzt das Bootstrap-Framework, um eine reaktionsfähige und intuitive Benutzeroberfläche zu bieten.

## Funktionen

- **Interaktive Lernkarten:** Engagieren Sie sich mit Lernkarten, die Fragen stellen und die Antworten bei Interaktion enthüllen. Falsch beantwortete Fragen werden am Ende wiederholt, bis eine korrekte Antwort gegeben wird, um das Lernen zu verstärken.
- **Responsive Design:** Genießen Sie ein nahtloses Lernerlebnis auf jedem Gerät dank des responsiven Designs von Bootstrap.
- **Anpassbarer Inhalt:** Aktualisieren und modifizieren Sie Lernkarten einfach mit Ihren eigenen Fragen und Antworten über eine einfache JSON-Datei.
- **Vertikales Menü:** Auf der linken Seite befindet sich ein vertikales Menü für die Desktop- und Tablet-Ansicht, das die Navigation durch die Anwendung erleichtert. Die Links im Menü können in der `index.html` angepasst werden. In der mobilen Darstellung ist dieses vertikale Menü ausgeblendet, um die Benutzerfreundlichkeit zu maximieren.

## Wichtig: Serveranforderung

Zur Darstellung der Fragen ist ein Server oder lokaler Server erforderlich. Dies stellt sicher, dass die Lernkarten-Anwendung ordnungsgemäß funktioniert, insbesondere beim Laden der Fragen und Antworten aus der JSON-Datei.

## Nutzung des ChatGPT-4 Prompts

Nutzen Sie den Prompt in der Datei `lernkarten_Prompt.txt`, um mit ChatGPT-4 zu Ihrem Thema die Fragen und Antworten zu generieren. Sie können anschließend die generierte Datei herunterladen und mit der bereits vorhandenen Datei im Ordner `text` ersetzen, um die Inhalte der Lernkarten zu aktualisieren.

## Installation

1. **Herunterladen und Extrahieren:** Laden Sie die Lernkarten-Zip-Datei herunter und extrahieren Sie deren Inhalte an Ihrem bevorzugten Ort.
2. **Lokalen Server starten:** Um die Anwendung lokal auszuführen, starten Sie einen lokalen Server im Extraktionsverzeichnis und öffnen Sie die `index.html`-Datei über diesen Server in Ihrem Webbrowser.

## Struktur

Die Lernkarten-Anwendung besteht aus den folgenden Hauptkomponenten:

- `index.html` - Der Einstiegspunkt der Anwendung.
- `css/` - Enthält Bootstraps CSS-Datei für das Styling, zusammen mit einer benutzerdefinierten Stildatei.
- `js/` - Enthält Bootstraps JavaScript-Bundle für die Funktionalität, zusammen mit einem benutzerdefinierten Skript für die Logik der Anwendung.
- `text/fragen_und_antworten.json` - Eine JSON-Datei, die die Fragen und Antworten für die Lernkarten enthält.

## Anpassung des Inhalts

Um die von den Lernkarten angezeigten Fragen und Antworten anzupassen, bearbeiten Sie die Datei `fragen_und_antworten.json` im Verzeichnis `text`. Die Datei folgt einem einfachen JSON-Format, was es leicht macht, Einträge hinzuzufügen, zu modifizieren oder zu entfernen.

Die Zeit zwischen den Fragen kann im `script.js` im `js`-Verzeichnis angepasst werden. Suchen Sie dort nach der Einstellung für die Verzögerungszeit und passen Sie sie nach Bedarf an.

## Lizenz

Diese Software ist unter der MIT-Lizenz lizenziert, was bedeutet, dass sie sowohl im privaten als auch im kommerziellen Bereich frei verwendet, modifiziert und weiterverbreitet werden kann.
