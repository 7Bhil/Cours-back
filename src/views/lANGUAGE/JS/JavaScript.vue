<template>
  <div class="javascript-page bg-white">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-b from-yellow-50 to-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center gap-8">
          <!-- Logo et titre -->
          <div class="flex-shrink-0">
            <div class="w-24 h-24 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-lg">
              <svg class="w-16 h-16 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
              </svg>
            </div>
          </div>

          <!-- Texte -->
          <div class="flex-1 text-center md:text-left">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              JavaScript
            </h1>
            <p class="text-xl text-gray-600 mb-6">
              Le langage incontournable du web moderne. Apprenez à créer des sites interactifs, des applications web et même des serveurs avec Node.js.
            </p>
            <div class="flex flex-wrap gap-3 justify-center md:justify-start">
              <span class="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700">
                Frontend
              </span>
              <span class="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700">
                Backend (Node.js)
              </span>
              <span class="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700">
                Full Stack
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Navigation rapide -->
    <section class="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex space-x-8 overflow-x-auto py-4">
          <button @click="scrollTo('installation')" class="text-sm font-medium text-gray-600 hover:text-blue-600 whitespace-nowrap transition-colors focus:outline-none">
            Installation
          </button>
          <button @click="scrollTo('bases')" class="text-sm font-medium text-gray-600 hover:text-blue-600 whitespace-nowrap transition-colors focus:outline-none">
            Les bases
          </button>
          <button @click="scrollTo('concepts')" class="text-sm font-medium text-gray-600 hover:text-blue-600 whitespace-nowrap transition-colors focus:outline-none">
            Concepts clés
          </button>
          <button @click="scrollTo('ressources')" class="text-sm font-medium text-gray-600 hover:text-blue-600 whitespace-nowrap transition-colors focus:outline-none">
            Ressources
          </button>
          <button @click="scrollTo('pratique')" class="text-sm font-medium text-gray-600 hover:text-blue-600 whitespace-nowrap transition-colors focus:outline-none">
            Exercices
          </button>
          <button @click="scrollTo('explorer')" class="text-sm font-medium text-gray-600 hover:text-blue-600 whitespace-nowrap transition-colors focus:outline-none">
            Explorer plus
          </button>
        </nav>
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Contenu principal -->
        <div class="lg:col-span-2 space-y-12">
          <!-- Installation -->
          <section id="installation" class="scroll-mt-32">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Installation et configuration</h2>
            
            <div class="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Navigateur web (Frontend)</h3>
              <p class="text-gray-600 mb-4">
                JavaScript fonctionne directement dans votre navigateur. Aucune installation nécessaire !
              </p>
              <div class="bg-white border border-gray-200 rounded-lg p-4">
                <p class="text-sm text-gray-600 mb-2">Ouvrez la console de votre navigateur :</p>
                <ul class="space-y-2 text-sm text-gray-700">
                  <li><strong>Chrome/Edge :</strong> F12 ou Ctrl+Shift+J</li>
                  <li><strong>Firefox :</strong> F12 ou Ctrl+Shift+K</li>
                  <li><strong>Safari :</strong> Cmd+Option+C (activer d'abord le menu Développement)</li>
                </ul>
              </div>
            </div>

            <div class="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Node.js (Backend)</h3>
              <p class="text-gray-600 mb-4">
                Pour exécuter JavaScript côté serveur, installez Node.js :
              </p>
              <div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto mb-4">
                <pre># Windows & macOS : Téléchargez depuis
https://nodejs.org

# Ubuntu/Debian
sudo apt update
sudo apt install nodejs npm

# Vérification
node --version
npm --version</pre>
              </div>
              <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <p class="text-sm text-blue-800">
                    <strong>Conseil :</strong> Téléchargez la version LTS (Long Term Support) pour plus de stabilité.
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Éditeur de code recommandé</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 class="font-semibold text-gray-900 mb-2">Visual Studio Code</h4>
                  <p class="text-sm text-gray-600 mb-3">Gratuit, léger et puissant avec de nombreuses extensions.</p>
                  <a href="https://code.visualstudio.com" target="_blank" class="text-sm text-blue-600 hover:text-blue-700 font-medium underline">
                    Télécharger →
                  </a>
                </div>
                <div class="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 class="font-semibold text-gray-900 mb-2">Extensions utiles</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• ESLint (vérification du code)</li>
                    <li>• Prettier (formatage)</li>
                    <li>• Live Server (serveur local)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <!-- Les bases -->
          <section id="bases" class="scroll-mt-32">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Les bases de JavaScript</h2>
            
            <!-- Variables -->
            <div class="mb-8">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">1. Variables et types de données</h3>
              <p class="text-gray-600 mb-4">
                JavaScript utilise trois mots-clés pour déclarer des variables : <code class="bg-gray-100 px-2 py-1 rounded text-sm">let</code>, <code class="bg-gray-100 px-2 py-1 rounded text-sm">const</code> et <code class="bg-gray-100 px-2 py-1 rounded text-sm">var</code>.
              </p>
              <div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre>// Déclaration de variables
let nom = "Marie";           // Peut changer
const age = 25;              // Ne peut pas changer
var ville = "Paris";         // Ancienne méthode (évitez)

// Types de données
let texte = "Bonjour";       // String (texte)
let nombre = 42;             // Number (nombre)
let vrai = true;             // Boolean (vrai/faux)
let liste = [1, 2, 3];       // Array (tableau)
let personne = {             // Object (objet)
  nom: "Jean",
  age: 30
};</pre>
              </div>
              <div class="mt-4 bg-green-50 border border-green-200 rounded-lg p-4">
                <p class="text-sm text-green-800">
                  <strong>Bonne pratique :</strong> Utilisez <code class="bg-green-100 px-2 py-1 rounded">const</code> par défaut, et <code class="bg-green-100 px-2 py-1 rounded">let</code> seulement si la valeur doit changer.
                </p>
              </div>
            </div>

            <!-- Fonctions -->
            <div class="mb-8">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">2. Fonctions</h3>
              <p class="text-gray-600 mb-4">
                Les fonctions permettent de regrouper du code réutilisable.
              </p>
              <div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre>// Fonction classique
function direBonjour(nom) {
  return "Bonjour " + nom + " !";
}

// Fonction fléchée (moderne)
const direAuRevoir = (nom) => {
  return "Au revoir " + nom + " !";
};

// Version courte
const saluer = nom => "Salut " + nom + " !";

// Utilisation
console.log(direBonjour("Marie"));  // "Bonjour Marie !"
console.log(saluer("Jean"));        // "Salut Jean !"</pre>
              </div>
            </div>

            <!-- Conditions -->
            <div class="mb-8">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">3. Conditions</h3>
              <div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre>const age = 18;

// If/else
if (age >= 18) {
  console.log("Vous êtes majeur");
} else {
  console.log("Vous êtes mineur");
}

// Opérateur ternaire (raccourci)
const statut = age >= 18 ? "majeur" : "mineur";

// Switch
const jour = "lundi";
switch (jour) {
  case "lundi":
    console.log("Début de semaine");
    break;
  case "vendredi":
    console.log("Bientôt le weekend !");
    break;
  default:
    console.log("Jour normal");
}</pre>
              </div>
            </div>

            <!-- Boucles -->
            <div class="mb-8">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">4. Boucles</h3>
              <div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre>const fruits = ["pomme", "banane", "orange"];

// Boucle for classique
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// For...of (moderne, recommandé)
for (const fruit of fruits) {
  console.log(fruit);
}

// forEach (méthode de tableau)
fruits.forEach(fruit => {
  console.log(fruit);
});

// While
let compteur = 0;
while (compteur < 5) {
  console.log(compteur);
  compteur++;
}</pre>
              </div>
            </div>
          </section>

          <!-- Concepts clés -->
          <section id="concepts" class="scroll-mt-32">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Concepts clés à maîtriser</h2>
            
            <div class="space-y-6">
              <div class="bg-white border border-gray-200 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-3">DOM (Document Object Model)</h3>
                <p class="text-gray-600 mb-4">
                  Le DOM permet de manipuler les éléments HTML d'une page web.
                </p>
                <div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre>// Sélectionner un élément
const titre = document.querySelector('h1');
const bouton = document.getElementById('monBouton');

// Modifier le contenu
titre.textContent = "Nouveau titre";

// Ajouter un événement
bouton.addEventListener('click', () => {
  alert('Bouton cliqué !');
});</pre>
                </div>
              </div>

              <div class="bg-white border border-gray-200 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-3">Programmation asynchrone</h3>
                <p class="text-gray-600 mb-4">
                  Gérez les opérations qui prennent du temps (requêtes réseau, lecture de fichiers).
                </p>
                <div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre>// Avec async/await (moderne)
async function chargerDonnees() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (erreur) {
    console.error('Erreur:', erreur);
  }
}

// Avec Promises
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(erreur => console.error(erreur));</pre>
                </div>
              </div>

              <div class="bg-white border border-gray-200 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-3">ES6+ (JavaScript moderne)</h3>
                <p class="text-gray-600 mb-4">
                  Fonctionnalités modernes qui simplifient le code.
                </p>
                <div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre>// Destructuration
const personne = { nom: "Marie", age: 25 };
const { nom, age } = personne;

// Spread operator
const tab1 = [1, 2, 3];
const tab2 = [...tab1, 4, 5];  // [1, 2, 3, 4, 5]

// Template literals
const message = `Bonjour ${nom}, vous avez ${age} ans`;

// Optional chaining
const ville = personne?.adresse?.ville;</pre>
                </div>
              </div>
            </div>
          </section>

          <!-- Ressources -->
          <section id="ressources" class="scroll-mt-32">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Ressources de formation</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div class="flex items-start mb-4">
                  <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">Guide complet JavaScript</h3>
                    <p class="text-sm text-gray-600 mb-2">Cours détaillé couvrant tous les fondamentaux</p>
                    <span class="text-xs text-gray-500">PDF • 3.2 MB</span>
                  </div>
                </div>
                <button 
                  @click="downloadPDF('01-javascript-bases.pdf')"
                  class="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none"
                >
                  Télécharger le guide
                </button>
              </div>

              <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div class="flex items-start mb-4">
                  <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">50 exercices pratiques</h3>
                    <p class="text-sm text-gray-600 mb-2">Entraînez-vous avec des exercices progressifs</p>
                    <span class="text-xs text-gray-500">PDF • 1.8 MB</span>
                  </div>
                </div>
                <button 
                  @click="downloadPDF('02-javascript-exercices.pdf')"
                  class="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none"
                >
                  Télécharger les exercices
                </button>
              </div>

              <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div class="flex items-start mb-4">
                  <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">Corrigés détaillés</h3>
                    <p class="text-sm text-gray-600 mb-2">Solutions commentées de tous les exercices</p>
                    <span class="text-xs text-gray-500">PDF • 2.1 MB</span>
                  </div>
                </div>
                <button 
                  @click="downloadPDF('03-javascript-corriges.pdf')"
                  class="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none"
                >
                  Télécharger les corrigés
                </button>
              </div>

              <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div class="flex items-start mb-4">
                  <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">Projets pratiques</h3>
                    <p class="text-sm text-gray-600 mb-2">5 projets complets pour mettre en pratique</p>
                    <span class="text-xs text-gray-500">PDF • 2.5 MB</span>
                  </div>
                </div>
                <button 
                  @click="downloadPDF('04-javascript-projets.pdf')"
                  class="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none"
                >
                  Télécharger les projets
                </button>
              </div>
            </div>
          </section>

          <!-- Exercices pratiques -->
          <section id="pratique" class="scroll-mt-32">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Exercices pratiques</h2>
            
            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-3">Testez vos connaissances</h3>
              <p class="text-gray-600 mb-4">
                Commencez par les exercices de base, puis progressez vers des défis plus complexes. Chaque exercice inclut une solution détaillée.
              </p>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="bg-white rounded-lg p-4 border border-gray-200">
                  <div class="text-green-600 font-semibold mb-2">Débutant</div>
                  <div class="text-2xl font-bold text-gray-900">15 exercices</div>
                </div>
                <div class="bg-white rounded-lg p-4 border border-gray-200">
                  <div class="text-yellow-600 font-semibold mb-2">Intermédiaire</div>
                  <div class="text-2xl font-bold text-gray-900">20 exercices</div>
                </div>
                <div class="bg-white rounded-lg p-4 border border-gray-200">
                  <div class="text-red-600 font-semibold mb-2">Avancé</div>
                  <div class="text-2xl font-bold text-gray-900">15 exercices</div>
                </div>
              </div>
            </div>
          </section>

          <!-- Explorer plus -->
          <section id="explorer" class="scroll-mt-32">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Prêt à aller plus loin ?</h2>
            
            <div class="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-8">
              <div class="text-center">
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Découvrez notre formation complète</h3>
                <p class="text-gray-600 mb-6">
                  Apprenez JavaScript de A à Z avec un parcours structuré, des projets concrets et un accompagnement personnalisé.
                </p>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div class="bg-white rounded-lg p-4 border border-gray-200">
                    <div class="text-blue-600 font-semibold mb-2">🎯</div>
                    <h4 class="font-semibold text-gray-900 mb-2">Parcours guidé</h4>
                    <p class="text-sm text-gray-600">20 chapitres progressifs avec exercices</p>
                  </div>
                  <div class="bg-white rounded-lg p-4 border border-gray-200">
                    <div class="text-green-600 font-semibold mb-2">🚀</div>
                    <h4 class="font-semibold text-gray-900 mb-2">Projets réels</h4>
                    <p class="text-sm text-gray-600">10 applications complètes à réaliser</p>
                  </div>
                  <div class="bg-white rounded-lg p-4 border border-gray-200">
                    <div class="text-purple-600 font-semibold mb-2">👨‍🏫</div>
                    <h4 class="font-semibold text-gray-900 mb-2">Support expert</h4>
                    <p class="text-sm text-gray-600">Réponses à vos questions en 24h</p>
                  </div>
                </div>
                
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    @click="showInfo('formation')"
                    class="bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
                  >
                    Découvrir la formation
                  </button>
                  <button 
                    @click="showInfo('contact')"
                    class="bg-white text-gray-700 border border-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Poser une question
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <div class="sticky top-32 space-y-6">
            <!-- Explorer plus -->
            <div class="bg-white border border-gray-200 rounded-lg p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">À découvrir</h3>
              <p class="text-sm text-gray-600 mb-4">
                Des ressources pour approfondir vos connaissances :
              </p>
              <div class="space-y-3">
                <button 
                  @click="showInfo('cours')"
                  class="w-full flex items-center justify-between bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 text-blue-700 py-3 px-4 rounded-lg font-medium hover:from-blue-100 hover:to-blue-200 transition-all group"
                >
                  <div class="flex items-center">
                    <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                    <span>Cours complet</span>
                  </div>
                  <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
                
                <button 
                  @click="showInfo('projets')"
                  class="w-full flex items-center justify-between bg-gradient-to-r from-green-50 to-green-100 border border-green-200 text-green-700 py-3 px-4 rounded-lg font-medium hover:from-green-100 hover:to-green-200 transition-all group"
                >
                  <div class="flex items-center">
                    <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                    </svg>
                    <span>Projets avancés</span>
                  </div>
                  <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
                
                <button 
                  @click="showInfo('exercices')"
                  class="w-full flex items-center justify-between bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 text-purple-700 py-3 px-4 rounded-lg font-medium hover:from-purple-100 hover:to-purple-200 transition-all group"
                >
                  <div class="flex items-center">
                    <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                    </svg>
                    <span>Exercices interactifs</span>
                  </div>
                  <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
              
              <div class="mt-4 pt-4 border-t border-gray-200">
                <p class="text-xs text-gray-500 text-center">
                  Cliquez pour découvrir ce que nous proposons
                </p>
              </div>
            </div>

            <!-- Progression -->
            <div class="bg-white border border-gray-200 rounded-lg p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Votre progression</h3>
              <div class="space-y-4">
                <div>
                  <div class="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Les bases</span>
                    <span>25%</span>
                  </div>
                  <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div class="h-full bg-blue-600 rounded-full" style="width: 25%"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between text-sm text-gray-600 mb-1">
                    <span>DOM & Événements</span>
                    <span>10%</span>
                  </div>
                  <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div class="h-full bg-blue-600 rounded-full" style="width: 10%"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Asynchrone</span>
                    <span>0%</span>
                  </div>
                  <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div class="h-full bg-gray-300 rounded-full" style="width: 0%"></div>
                  </div>
                </div>
              </div>
              <button @click="scrollTo('bases')" class="w-full mt-6 bg-gray-100 text-gray-700 py-2.5 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm focus:outline-none">
                Reprendre mon apprentissage
              </button>
            </div>

            <!-- Quiz rapide -->
            <div class="bg-white border border-gray-200 rounded-lg p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Quiz rapide</h3>
              <div class="bg-gray-50 rounded-lg p-4 mb-4">
                <p class="text-sm font-medium text-gray-900 mb-3">
                  Quelle est la différence entre <code class="bg-gray-200 px-1 rounded">let</code> et <code class="bg-gray-200 px-1 rounded">const</code> ?
                </p>
                <div class="space-y-2">
                  <label class="flex items-center text-sm text-gray-700 cursor-pointer">
                    <input type="radio" name="quiz" value="1" v-model="quizAnswer" class="mr-2">
                    <span>Aucune différence</span>
                  </label>
                  <label class="flex items-center text-sm text-gray-700 cursor-pointer">
                    <input type="radio" name="quiz" value="2" v-model="quizAnswer" class="mr-2">
                    <span><code>let</code> ne peut pas être réassigné</span>
                  </label>
                  <label class="flex items-center text-sm text-gray-700 cursor-pointer">
                    <input type="radio" name="quiz" value="3" v-model="quizAnswer" class="mr-2">
                    <span><code>const</code> ne peut pas être réassigné</span>
                  </label>
                </div>
              </div>
              <button @click="checkQuiz" class="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm focus:outline-none">
                Vérifier la réponse
              </button>
            </div>

            <!-- Conseils -->
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div class="flex items-start">
                <svg class="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
                <div>
                  <p class="text-sm font-medium text-blue-800 mb-1">Conseil Pro</p>
                  <p class="text-xs text-blue-700">
                    Maîtrisez ES6+ (const/let, arrow functions, destructuring) avant de passer aux frameworks comme React ou Vue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JavaScriptPage',
  data() {
    return {
      showModal: false,
      quizAnswer: null
    }
  },
  methods: {
    // Méthode pour le défilement fluide
    scrollTo(id) {
      const element = document.getElementById(id);
      if (element) {
        const offset = 100; // Ajustement pour le header fixe
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Mettre à jour l'URL sans recharger la page
        history.pushState(null, null, `#${id}`);
      }
    },
    
    // Méthode pour télécharger les fichiers PDF
    downloadPDF(filename) {
      // Chemin vers les fichiers dans le dossier public
      const filePath = `/pdf/langages/javascript/${filename}`;
      
      // Créer un lien temporaire pour le téléchargement
      const link = document.createElement('a');
      link.href = filePath;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Afficher une notification
      this.showNotification(`Téléchargement de ${filename} commencé`);
    },
    
    // Méthode pour vérifier le quiz
    checkQuiz() {
      if (this.quizAnswer === '3') {
        this.showNotification('✅ Bonne réponse ! const ne peut pas être réassigné, alors que let peut l\'être.', 'success');
      } else if (this.quizAnswer) {
        this.showNotification('❌ Réponse incorrecte. La bonne réponse est: const ne peut pas être réassigné.', 'error');
      } else {
        this.showNotification('⚠️ Veuillez sélectionner une réponse.', 'warning');
      }
    },
    
    // Méthode pour afficher des notifications
    showNotification(message, type = 'info') {
      alert(message);
    },
    
    // Méthode pour montrer des infos sur les options
    showInfo(type) {
      const messages = {
        cours: "📚 Notre cours complet JavaScript comprend :\n• 20 chapitres progressifs\n• 100+ exercices pratiques\n• 5 projets concrets\n• Accès à une communauté d'entraide\n• Certificat de fin de formation\n\nIntéressé(e) ? Contactez-nous pour en savoir plus !",
        projets: "🚀 Projets avancés à réaliser :\n• Application météo en temps réel\n• To-Do List avec stockage local\n• Calculateur d'IMC interactif\n• Jeu du pendu en JavaScript\n• Générateur de citations aléatoires\n• Portfolio personnel dynamique\n\nParfait pour mettre en pratique vos connaissances !",
        exercices: "🧠 Exercices interactifs :\n• Quiz avec correction immédiate\n• Challenges de code en ligne\n• Exercices corrigés étape par étape\n• Tests de niveau personnalisés\n• Mini-projets guidés\n\nIdéal pour renforcer votre apprentissage !",
        formation: "🎓 Formation complète JavaScript :\n\n✅ Parcours structuré de A à Z\n✅ 50+ heures de contenu\n✅ 10 projets pratiques\n✅ Support expert illimité\n✅ Accès à vie\n✅ Certificat de réussite\n\nContactez-nous pour les modalités et tarifs !",
        contact: "💬 Vous avez une question ?\n\nNous sommes là pour vous aider :\n• Choix de la formation adaptée\n• Difficultés techniques\n• Questions sur JavaScript\n• Projets personnels\n\nEnvoyez-nous un message :\n📧 7bhilal.chitou7@gmail.com\n📱 WhatsApp : +229 98 87 40 19"
      };
      
      if (messages[type]) {
        alert(messages[type]);
      }
    },
    
    // Initialiser le défilement depuis l'URL
    initScrollFromUrl() {
      if (window.location.hash) {
        const hash = window.location.hash.replace('#', '');
        setTimeout(() => {
          this.scrollTo(hash);
        }, 100);
      }
    }
  },
  mounted() {
    // Initialiser le défilement depuis l'URL au chargement
    this.initScrollFromUrl();
    
    // Écouter les changements d'URL
    window.addEventListener('hashchange', () => {
      this.initScrollFromUrl();
    });
  }
}
</script>

<style scoped>
.scroll-mt-32 {
  scroll-margin-top: 8rem;
}

.javascript-page {
  min-height: 100vh;
}

/* Styles pour la navigation */
nav button {
  cursor: pointer;
}

/* Amélioration du focus pour l'accessibilité */
button:focus, a:focus {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}

/* Styles pour les boutons radio */
input[type="radio"] {
  cursor: pointer;
}

/* Styles pour les liens */
a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Styles pour le code */
code {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.875em;
}
</style>