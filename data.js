let questions = [
  {
    HTML: [
      {
        question: "Was ist die Bedeutung der Abkürzung HTML?",
        answer_1: "Hyper Text Markup Language",
        answer_2: "Hypertext Modeling Language",
        answer_3: "High Text Markup Language",
        answer_4: "High Tech Modeling Language",
        right_answer: 1,
      },
      {
        question:
          "Welches HTML-Element wird verwendet, um einen Absatz zu kennzeichnen?",
        answer_1: "&lt;div&gt;",
        answer_2: "&lt;section&gt;",
        answer_3: "&lt;p&gt;",
        answer_4: "&lt;span&gt;",
        right_answer: 3,
      },
      {
        question:
          "Was ist die Bedeutung des Attributs 'href' im HTML-Element 'a'?",
        answer_1: "Es gibt den Inhalt des Links an",
        answer_2: "Es gibt die Größe des Links an",
        answer_3: "Es gibt die Farbe des Links an",
        answer_4: "Es gibt die Adresse des Links an",
        right_answer: 4,
      },
      {
        question:
          "Welches HTML-Element wird verwendet, um eine Liste mit Punkten zu erstellen?",
        answer_1: "&lt;ul&gt;",
        answer_2: "&lt;li&gt;",
        answer_3: "&lt;ol&gt;",
        answer_4: "&lt;dl&gt;",
        right_answer: 1,
      },
      {
        question:
          "Welches HTML-Element wird verwendet, um ein Bild anzuzeigen?",
        answer_1: "&lt;img&gt;",
        answer_2: "&lt;picture&gt;",
        answer_3: "&lt;figure&gt;",
        answer_4: "&lt;figcaption&gt;",
        right_answer: 1,
      },
      {
        question:
          "Was ist die Bedeutung des Attributs 'alt' im HTML-Element 'img'?",
        answer_1: "Es gibt die Breite des Bildes an",
        answer_2: "Es gibt die Höhe des Bildes an",
        answer_3: "Es gibt den Alternativtext für das Bild an",
        answer_4: "Es gibt die Ausrichtung des Bildes an",
        right_answer: 3,
      },
    ],

    CSS: [
      {
        question: "Was ist die Bedeutung der Abkürzung CSS?",
        answer_1: "Cascading Style Sheets",
        answer_2: "Cascading Script Sheets",
        answer_3: "Cascading Sheet Styles",
        answer_4: "Cascading Style Scripts",
        right_answer: 1,
      },
      {
        question:
          "Welches CSS-Selektorelement wird verwendet, um auf ein Element zuzugreifen, das eine bestimmte ID hat?",
        answer_1: "class",
        answer_2: "element",
        answer_3: "id",
        answer_4: "name",
        right_answer: 3,
      },
      {
        question:
          "Welches CSS-Selektorelement wird verwendet, um auf alle Elemente eines bestimmten Typs zuzugreifen?",
        answer_1: "id",
        answer_2: "class",
        answer_3: "name",
        answer_4: "element",
        right_answer: 4,
      },
      {
        question: "Was ist der Zweck der Eigenschaft 'display' in CSS?",
        answer_1: "Es gibt die Größe des Elements an",
        answer_2: "Es gibt die Position des Elements an",
        answer_3: "Es gibt die Hintergrundfarbe des Elements an",
        answer_4: "Es gibt an, wie das Element angezeigt werden soll",
        right_answer: 4,
      },
      {
        question: "Was ist der Zweck der Eigenschaft 'margin' in CSS?",
        answer_1: "Es gibt die Größe des Elements an",
        answer_2: "Es gibt die Position des Elements an",
        answer_3: "Es gibt die Hintergrundfarbe des Elements an",
        answer_4: "Es gibt den Abstand um das Element herum an",
        right_answer: 4,
      },
      {
        question:
          "Welches CSS-Selektorelement wird verwendet, um auf alle Elemente zuzugreifen, die in einem anderen Element enthalten sind?",
        answer_1: "class",
        answer_2: "element",
        answer_3: "id",
        answer_4: "item below",
        right_answer: 2,
      },
    ],

    JavaScript: [
      {
        question: "Was ist die Bedeutung der Abkürzung JavaScript?",
        answer_1: "Java Syntax and Execution Language",
        answer_2: "Java Source and Execution Language",
        answer_3: "JavaScript Syntax and Execution Language",
        answer_4: "JavaScript Source and Execution Language",
        right_answer: 4,
      },
      {
        question:
          "Welches Schlüsselwort wird in JavaScript verwendet, um eine Variable zu deklarieren?",
        answer_1: "variable",
        answer_2: "var",
        answer_3: "let",
        answer_4: "const",
        right_answer: 2,
      },
      {
        question:
          "Welches Schlüsselwort wird in JavaScript verwendet, um eine Funktion zu definieren?",
        answer_1: "function",
        answer_2: "func",
        answer_3: "def",
        answer_4: "define",
        right_answer: 1,
      },
      {
        question:
          "Welches Schlüsselwort wird in JavaScript verwendet, um eine Bedingung zu prüfen?",
        answer_1: "for",
        answer_2: "while",
        answer_3: "if",
        answer_4: "switch",
        right_answer: 3,
      },
      {
        question:
          "Was ist das Ergebnis der folgenden JavaScript-Operation: 5 + '3'?",
        answer_1: "8",
        answer_2: "53",
        answer_3: "NaN",
        answer_4: "Syntaxfehler",
        right_answer: 2,
      },
      {
        question:
          "Was ist der Zweck des 'return'-Schlüsselworts in JavaScript?",
        answer_1: "Es gibt an, dass eine Schleife beendet werden soll",
        answer_2: "Es gibt an, dass eine Funktion beendet werden soll",
        answer_3: "Es gibt den Wert einer Variablen zurück",
        answer_4: "Es gibt an, dass eine Bedingung erfüllt ist",
        right_answer: 2,
      },
      {
        question:
          "Welches JavaScript-Objekt wird verwendet, um auf das aktuelle Dokument zuzugreifen?",
        answer_1: "window",
        answer_2: "document",
        answer_3: "location",
        answer_4: "navigator",
        right_answer: 2,
      },
      {
        question:
          "Welches JavaScript-Objekt wird verwendet, um auf die Konsole des Browsers zuzugreifen?",
        answer_1: "window",
        answer_2: "console",
        answer_3: "document",
        answer_4: "navigator",
        right_answer: 2,
      },
    ],

    Allgemein: [
      {
        question: "Was ist der tiefste bekannte Punkt auf der Erde?",
        answer_1: "Tiefsee-Challenger-Graben",
        answer_2: "Marianengraben",
        answer_3: "Puerto-Rico-Graben",
        answer_4: "Philippinengraben",
        right_answer: 2,
      },
      {
        question: "Wer war der erste Mensch im Weltall?",
        answer_1: "Neil Armstrong",
        answer_2: "Yuri Gagarin",
        answer_3: "Buzz Aldrin",
        answer_4: "Alan Shepard",
        right_answer: 2,
      },
      {
        question:
          "Wie wird die chemische Verbindung H2O2 im Volksmund genannt?",
        answer_1: "Salpetersäure",
        answer_2: "Essigsäure",
        answer_3: "Wasserstoffperoxid",
        answer_4: "Salzsäure",
        right_answer: 3,
      },
      {
        question: "Wer hat das Gemälde 'Die Schrei' (The Scream) gemalt?",
        answer_1: "Pablo Picasso",
        answer_2: "Vincent van Gogh",
        answer_3: "Edvard Munch",
        answer_4: "Claude Monet",
        right_answer: 3,
      },
      {
        question: "Wie heißt der höchste Berg in Afrika?",
        answer_1: "Kilimandscharo",
        answer_2: "Mount Kenya",
        answer_3: "Mount Stanley",
        answer_4: "Ruwenzori",
        right_answer: 1,
      },
      {
        question: "Wie heißt der längste Fluss in Asien?",
        answer_1: "Jangtsekiang",
        answer_2: "Hwangho",
        answer_3: "Mekong",
        answer_4: "Irrawaddy",
        right_answer: 1,
      },
      {
        question:
          "In welchem Jahr wurde der Berliner Fernsehturm fertiggestellt?",
        answer_1: "1961",
        answer_2: "1969",
        answer_3: "1974",
        answer_4: "1981",
        right_answer: 2,
      },
      {
        question: "Wie heißt der größte See in Afrika?",
        answer_1: "Tanganjikasee",
        answer_2: "Victoria-See",
        answer_3: "Malawisee",
        answer_4: "Chadsee",
        right_answer: 2,
      },
    ],
  },
];
