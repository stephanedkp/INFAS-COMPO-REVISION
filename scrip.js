/* ==========================================
   DONNÉES DES ÉVALUATIONS
========================================== */


/*
   Les questions sont stockées ici.

   Pour chaque question :

   question : énoncé
   type     : "single" ou "multiple"
   options  : propositions
   answer   : bonne réponse

   Pour une réponse unique :
   answer: 1

   Pour plusieurs réponses :
   answer: [0, 2]
*/


const subject1 = [

    {
        question: "La démographie est l'étude scientifique des populations humaines.",
        type: "single",
        options: [
            "Vrai",
            "Faux"
        ],
        answer: 0
    },

    {
        question: "Quels sont les principaux phénomènes démographiques étudiés ?",
        type: "multiple",
        options: [
            "Natalité",
            "Mortalité",
            "Migrations",
            "Température"
        ],
        answer: [0, 1, 2]
    },

    {
        question: "La natalité désigne le nombre de naissances dans une population pendant une période donnée.",
        type: "single",
        options: [
            "Vrai",
            "Faux"
        ],
        answer: 0
    },

    {
        question: "La mortalité correspond au nombre de décès dans une population pendant une période donnée.",
        type: "single",
        options: [
            "Vrai",
            "Faux"
        ],
        answer: 0
    },

    {
        question: "Quel indicateur mesure le nombre de naissances vivantes pour 1 000 habitants ?",
        type: "single",
        options: [
            "Taux brut de natalité",
            "Taux brut de mortalité",
            "Taux de migration",
            "Espérance de vie"
        ],
        answer: 0
    },

    {
        question: "Quels éléments peuvent influencer la fécondité ?",
        type: "multiple",
        options: [
            "Âge",
            "Niveau d'instruction",
            "Situation matrimoniale",
            "Couleur des vêtements"
        ],
        answer: [0, 1, 2]
    },

    {
        question: "L'espérance de vie correspond au nombre moyen d'années qu'une personne peut espérer vivre.",
        type: "single",
        options: [
            "Vrai",
            "Faux"
        ],
        answer: 0
    },

    {
        question: "Une pyramide des âges représente la structure d'une population selon l'âge et le sexe.",
        type: "single",
        options: [
            "Vrai",
            "Faux"
        ],
        answer: 0
    },

    {
        question: "Quels sont les deux sexes généralement représentés dans une pyramide des âges ?",
        type: "single",
        options: [
            "Hommes et femmes",
            "Enfants et adultes",
            "Urbains et ruraux",
            "Migrants et non-migrants"
        ],
        answer: 0
    },

    {
        question: "L'accroissement naturel dépend principalement de la natalité et de la mortalité.",
        type: "single",
        options: [
            "Vrai",
            "Faux"
        ],
        answer: 0
    },

    {
        question: "L'accroissement naturel est égal à :",
        type: "single",
        options: [
            "Naissances - décès",
            "Décès - naissances",
            "Immigrants - émigrants",
            "Population / superficie"
        ],
        answer: 0
    },

    {
        question: "Une migration internationale implique un déplacement entre deux pays.",
        type: "single",
        options: [
            "Vrai",
            "Faux"
        ],
        answer: 0
    },

    {
        question: "L'immigration désigne l'arrivée de personnes dans un territoire.",
        type: "single",
        options: [
            "Vrai",
            "Faux"
        ],
        answer: 0
    },

    {
        question: "L'émigration désigne le départ de personnes d'un territoire vers un autre.",
        type: "single",
        options: [
            "Vrai",
            "Faux"
        ],
        answer: 0
    },

    {
        question: "La densité de population correspond au rapport entre la population et la superficie.",
        type: "single",
        options: [
            "Vrai",
            "Faux"
        ],
        answer: 0
    },

    {
        question: "La densité de population est généralement exprimée en :",
        type: "single",
        options: [
            "Habitants par km²",
            "Naissances par femme",
            "Décès par enfant",
            "Années par habitant"
        ],
        answer: 0
    },

    {
        question: "Le recensement permet notamment de connaître l'effectif et certaines caractéristiques d'une population.",
        type: "single",
        options: [
            "Vrai",
            "Faux"
        ],
        answer: 0
    },

    {
        question: "Quels éléments peuvent être recueillis lors d'un recensement ?",
        type: "multiple",
        options: [
            "Âge",
            "Sexe",
            "Situation matrimoniale",
            "Couleur préférée"
        ],
        answer: [0, 1, 2]
    },

    {
        question: "La fécondité concerne les naissances effectivement observées chez les femmes.",
        type: "single",
        options: [
            "Vrai",
            "Faux"
        ],
        answer: 0
    },

    {
        question: "Le taux de fécondité peut être étudié selon l'âge des femmes.",
        type: "single",
        options: [
            "Vrai",
            "Faux"
        ],
        answer: 0
    },

    {
        question: "La transition démographique décrit notamment le passage d'un régime de forte mortalité et forte natalité vers un régime de faibles niveaux.",
        type: "single",
        options: [
            "Vrai",
            "Faux"
        ],
        answer: 0
    },

    {
        question: "Une population peut augmenter grâce à :",
        type: "multiple",
        options: [
            "L'excédent des naissances sur les décès",
            "L'immigration",
            "La baisse des décès",
            "La disparition des migrations"
        ],
        answer: [0, 1, 2]
    },

    {
        question: "Le solde migratoire correspond à la différence entre les entrées et les sorties de population.",
        type: "single",
        options: [
            "Vrai",
            "Faux"
        ],
        answer: 0
    },

    {
        question: "Une population stationnaire est une population dont l'effectif reste globalement stable.",
        type: "single",
        options: [
            "Vrai",
            "Faux"
        ],
        answer: 0
    },

    {
        question: "La mortalité infantile concerne les décès des enfants de moins d'un an.",
        type: "single",
        options: [
            "Vrai",
            "Faux"
        ],
        answer: 0
    },

    {
        question: "Quels facteurs peuvent influencer la mortalité ?",
        type: "multiple",
        options: [
            "Accès aux soins",
            "Conditions de vie",
            "Nutrition",
            "Couleur des yeux"
        ],
        answer: [0, 1, 2]
    },

    {
        question: "L'urbanisation correspond à l'augmentation de la population vivant dans les zones urbaines.",
        type: "single",
        options: [
            "Vrai",
            "Faux"
        ],
        answer: 0
    },

    {
        question: "La structure par âge permet notamment d'identifier une population jeune ou vieillissante.",
        type: "single",
        options: [
            "Vrai",
            "Faux"
        ],
        answer: 0
    },

    {
        question: "Une population vieillissante se caractérise notamment par une proportion importante de personnes âgées.",
        type: "single",
        options: [
            "Vrai",
            "Faux"
        ],
        answer: 0
    },

    {
        question: "Les données démographiques peuvent être utilisées pour planifier les besoins sanitaires.",
        type: "single",
        options: [
            "Vrai",
            "Faux"
        ],
        answer: 0
    }

];


/* ==========================================
   SUJET 2
========================================== */

/*
   Pour l'instant, le sujet 2 reprend des questions
   de démonstration.

   Tu pourras remplacer ces questions par tes
   34 véritables questions.
*/


const subject2 = [

    ...subject1,

    {
        question: "La population totale d'un territoire peut être étudiée à partir des données du recensement.",
        type: "single",
        options: [
            "Vrai",
            "Faux"
        ],
        answer: 0
    },

    {
        question: "Le rapport de masculinité compare généralement le nombre d'hommes au nombre de femmes.",
        type: "single",
        options: [
            "Vrai",
            "Faux"
        ],
        answer: 0
    },

    {
        question: "Les migrations peuvent modifier la structure et la répartition spatiale d'une population.",
        type: "single",
        options: [
            "Vrai",
            "Faux"
        ],
        answer: 0
    },

    {
        question: "Quels événements sont généralement enregistrés dans l'état civil ?",
        type: "multiple",
        options: [
            "Naissances",
            "Décès",
            "Mariages",
            "Préférences musicales"
        ],
        answer: [0, 1, 2]
    }

];


/* ==========================================
   VARIABLES
========================================== */

let currentExam = null;

let currentSubjectNumber = null;


/* ==========================================
   CONNEXION
========================================== */

function login() {

    const input =
        document.getElementById("studentName");

    const name =
        input.value.trim();


    if (name === "") {

        alert(
            "Veuillez saisir votre nom et vos prénoms."
        );

        input.focus();

        return;
    }


    localStorage.setItem(
        "studentName",
        name
    );


    showApplication();

}


/* ==========================================
   AFFICHER L'APPLICATION
========================================== */

function showApplication() {

    const name =
        localStorage.getItem("studentName");


    if (!name) {

        document
            .getElementById("loginPage")
            .classList.remove("hidden");

        document
            .getElementById("app")
            .classList.add("hidden");

        return;
    }


    document
        .getElementById("loginPage")
        .classList.add("hidden");


    document
        .getElementById("app")
        .classList.remove("hidden");


    updateStudentName();

    loadHistory();

    showHome();

}


/* ==========================================
   NOM DE L'ÉTUDIANT
========================================== */

function updateStudentName() {

    const name =
        localStorage.getItem("studentName")
        || "Étudiant";


    document
        .getElementById("navStudentName")
        .textContent = name;


    document
        .getElementById("welcomeName")
        .textContent = name;


    document
        .getElementById("displayName")
        .textContent = name;


    document
        .getElementById("settingsName")
        .value = name;
}


/* ==========================================
   DÉCONNEXION
========================================== */

function logout() {

    localStorage.removeItem(
        "studentName"
    );

    location.reload();
}


/* ==========================================
   NAVIGATION
========================================== */

function hideAllPages() {

    document
        .getElementById("homePage")
        .classList.add("hidden");

    document
        .getElementById("examPage")
        .classList.add("hidden");

    document
        .getElementById("resultPage")
        .classList.add("hidden");

    document
        .getElementById("settingsPage")
        .classList.add("hidden");
}


function showHome() {

    hideAllPages();

    document
        .getElementById("homePage")
        .classList.remove("hidden");

    window.scrollTo(0, 0);
}


function backHome() {

    showHome();

    loadHistory();
}


function scrollToSubjects() {

    document
        .querySelector(".subjects-card")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* ==========================================
   COMMENCER UNE ÉVALUATION
========================================== */

function startExam(number) {

    currentSubjectNumber = number;


    if (number === 1) {

        currentExam = subject1;

        document
            .getElementById("examTitle")
            .textContent =
            "Sujet 1 – Évaluation de démographie 2023";

    } else {

        currentExam = subject2;

        document
            .getElementById("examTitle")
            .textContent =
            "Sujet 2 – Évaluation de démographie 2021–2022";
    }


    renderQuestions();


    hideAllPages();


    document
        .getElementById("examPage")
        .classList.remove("hidden");


    window.scrollTo(0, 0);
}


/* ==========================================
   AFFICHER LES QUESTIONS
========================================== */

function renderQuestions() {

    const container =
        document.getElementById(
            "questionsContainer"
        );


    container.innerHTML = "";


    currentExam.forEach(
        (question, index) => {

            const card =
                document.createElement("div");


            card.className =
                "question-card";


            const number =
                document.createElement("div");


            number.className =
                "question-number";


            number.textContent =
                "Question " + (index + 1);


            card.appendChild(number);


            const text =
                document.createElement("div");


            text.className =
                "question-text";


            text.textContent =
                question.question;


            card.appendChild(text);


            question.options.forEach(
                (option, optionIndex) => {

                    const label =
                        document.createElement("label");


                    label.className =
                        "option";


                    const input =
                        document.createElement("input");


                    input.type =
                        question.type === "multiple"
                        ? "checkbox"
                        : "radio";


                    input.name =
                        "question_" + index;


                    input.value =
                        optionIndex;


                    const span =
                        document.createElement("span");


                    span.textContent =
                        option;


                    label.appendChild(input);

                    label.appendChild(span);

                    card.appendChild(label);

                }
            );


            container.appendChild(card);

        }
    );
}


/* ==========================================
   RÉCUPÉRER LES RÉPONSES
========================================== */

function getUserAnswer(questionIndex) {

    const inputs =
        document.querySelectorAll(
            `input[name="question_${questionIndex}"]:checked`
        );


    return Array.from(inputs)
        .map(
            input =>
                Number(input.value)
        );
}


/* ==========================================
   COMPARER LES RÉPONSES
========================================== */

function arraysEqual(a, b) {

    if (a.length !== b.length) {

        return false;
    }


    const sortedA =
        [...a].sort(
            (x, y) => x - y
        );


    const sortedB =
        [...b].sort(
            (x, y) => x - y
        );


    return sortedA.every(
        (value, index) =>
            value === sortedB[index]
    );
}


/* ==========================================
   TERMINER L'ÉVALUATION
========================================== */

function finishExam() {

    const confirmation =
        confirm(
            "Voulez-vous vraiment terminer l'évaluation ?"
        );


    if (!confirmation) {

        return;
    }


    let correct = 0;


    currentExam.forEach(
        (question, index) => {

            const userAnswer =
                getUserAnswer(index);


            const correctAnswer =
                Array.isArray(question.answer)
                ? question.answer
                : [question.answer];


            if (
                arraysEqual(
                    userAnswer,
                    correctAnswer
                )
            ) {

                correct++;
            }

        }
    );


    const total =
        currentExam.length;


    const percentage =
        Math.round(
            (correct / total) * 100
        );


    const wrong =
        total - correct;


    /* Affichage */

    document
        .getElementById("score")
        .textContent =
        correct + " / " + total;


    document
        .getElementById("percentage")
        .textContent =
        percentage + " %";


    document
        .getElementById("correctAnswers")
        .textContent =
        correct;


    document
        .getElementById("wrongAnswers")
        .textContent =
        wrong;


    document
        .getElementById("totalAnswers")
        .textContent =
        total;


    /* Sauvegarde */

    const history =
        JSON.parse(
            localStorage.getItem(
                "examHistory"
            ) || "[]"
        );


    const title =
        currentSubjectNumber === 1
        ? "Sujet 1 – Évaluation de démographie 2023"
        : "Sujet 2 – Évaluation de démographie 2021–2022";


    history.push({

        title: title,

        date:
            new Date().toLocaleString(
                "fr-FR"
            ),

        score: correct,

        total: total,

        percentage: percentage

    });


    localStorage.setItem(
        "examHistory",
        JSON.stringify(history)
    );


    /* Afficher résultats */

    hideAllPages();


    document
        .getElementById("resultPage")
        .classList.remove("hidden");


    window.scrollTo(0, 0);
}


/* ==========================================
   HISTORIQUE
========================================== */

function loadHistory() {

    const container =
        document.getElementById(
            "history"
        );


    if (!container) {

        return;
    }


    const history =
        JSON.parse(
            localStorage.getItem(
                "examHistory"
            ) || "[]"
        );


    if (history.length === 0) {

        container.innerHTML = `
            <div class="empty-history">
                Aucune évaluation effectuée pour le moment.
            </div>
        `;

        return;
    }


    container.innerHTML = "";


    history
        .slice()
        .reverse()
        .forEach(
            (item, index) => {

                const div =
                    document.createElement("div");


                div.className =
                    "history-item";


                div.innerHTML = `

                    <h3>
                        ${item.title}
                    </h3>

                    <p>
                        Date :
                        ${item.date}
                    </p>

                    <p class="history-result">
                        Résultat :
                        ${item.score}
                        /
                        ${item.total}
                        (${item.percentage}%)
                    </p>

                `;


                container.appendChild(div);

            }
        );
}


/* ==========================================
   PARAMÈTRES
========================================== */

function showSettings() {

    hideAllPages();


    document
        .getElementById("s