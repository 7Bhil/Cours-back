// data/javascript-courses.js

export const COURSE_LEVELS = [
  {
    id: 1,
    name: "NIVEAU 1",
    subtitle: "Bases indispensables",
    color: "emerald",
    icon: "🟢",
    chapters: [
      {
        id: "1.1",
        title: "Introduction à JavaScript",
        description: "Histoire, écosystème et premières lignes de code",
        readTime: "15 min",
        unlocked: true,
        completed: false,
        difficulty: "débutant",
        icon: "🚀",
        examplesCount: 3,
        content: `
          <div class="space-y-6">
            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
              <h3 class="text-xl font-bold text-gray-900 mb-4">🌍 Le Langage du Web Moderne</h3>
              <p class="text-gray-700 leading-relaxed">
                Conçu en 1995 par <strong class="text-blue-600">Brendan Eich</strong> chez Netscape, 
                JavaScript est aujourd'hui le langage de programmation le plus utilisé au monde.
              </p>
            </div>

            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <div class="text-3xl mb-3">💻</div>
                <h4 class="font-bold text-gray-900 mb-2">Frontend</h4>
                <p class="text-sm text-gray-600">Interfaces interactives</p>
              </div>
              <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <div class="text-3xl mb-3">⚙️</div>
                <h4 class="font-bold text-gray-900 mb-2">Backend</h4>
                <p class="text-sm text-gray-600">Node.js pour serveurs</p>
              </div>
              <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <div class="text-3xl mb-3">📱</div>
                <h4 class="font-bold text-gray-900 mb-2">Mobile</h4>
                <p class="text-sm text-gray-600">React Native</p>
              </div>
            </div>
            
            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-blue-700">
                    <strong class="font-bold">💡 Saviez-vous ?</strong> JavaScript a été créé en seulement 10 jours !
                  </p>
                </div>
              </div>
            </div>
          </div>
        `,
        examples: `
          <div class="space-y-6">
            <div class="bg-gray-900 rounded-xl p-5 overflow-hidden">
              <div class="flex items-center justify-between mb-4">
                <div class="text-sm font-semibold text-gray-300">Exemple 1 : Premier programme</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple1')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple1">console.log("🎉 Bonjour le monde !");</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Affiche un message dans la console du navigateur</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "Créé en 1995 par Brendan Eich",
          "Exécution client ET serveur",
          "Écosystème le plus riche (npm)"
        ],
        quiz: [
          {
            question: "En quelle année JavaScript a-t-il été créé ?",
            options: ["1990", "1995", "2000", "2005"],
            correct: 1,
            explanation: "JavaScript a été créé en 1995 par Brendan Eich chez Netscape."
          },
          {
            question: "Qui a créé JavaScript ?",
            options: ["Linus Torvalds", "Brendan Eich", "Guido van Rossum", "James Gosling"],
            correct: 1,
            explanation: "JavaScript a été créé par Brendan Eich alors qu'il travaillait chez Netscape."
          },
          {
            question: "JavaScript peut-il s'exécuter côté serveur ?",
            options: ["Non, seulement côté navigateur", "Oui, avec Node.js", "Seulement avec PHP", "Uniquement sur mobile"],
            correct: 1,
            explanation: "Oui, avec Node.js, JavaScript peut s'exécuter côté serveur."
          }
        ]
      },
      {
        id: "1.2",
        title: "Comment inclure JavaScript",
        description: "Les différentes méthodes pour intégrer du code JavaScript dans vos pages HTML",
        readTime: "12 min",
        unlocked: false,
        completed: false,
        difficulty: "débutant",
        icon: "📝",
        examplesCount: 2,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">📝 Intégration de JavaScript</h3>
            <p class="text-gray-700 leading-relaxed">
              Il existe trois méthodes principales pour ajouter du JavaScript à une page HTML :
            </p>
            
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <div class="text-3xl mb-3">1️⃣</div>
                <h4 class="font-bold text-gray-900 mb-2">Inline</h4>
                <pre class="text-xs bg-gray-100 p-2 rounded"><code>&lt;button onclick="alert('Hello!')"&gt;</code></pre>
                <p class="text-sm text-gray-600 mt-2">À éviter</p>
              </div>
              <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <div class="text-3xl mb-3">2️⃣</div>
                <h4 class="font-bold text-gray-900 mb-2">Internal</h4>
                <pre class="text-xs bg-gray-100 p-2 rounded"><code>&lt;script&gt;code ici&lt;/script&gt;</code></pre>
                <p class="text-sm text-gray-600 mt-2">Pour petits scripts</p>
              </div>
              <div class="p-5 rounded-xl border shadow-sm border-green-300 bg-green-50">
                <div class="text-3xl mb-3">✅</div>
                <h4 class="font-bold text-gray-900 mb-2">External</h4>
                <pre class="text-xs bg-gray-100 p-2 rounded"><code>&lt;script src="app.js"&gt;&lt;/script&gt;</code></pre>
                <p class="text-sm text-gray-600 mt-2">Recommandé</p>
              </div>
            </div>
            
            <div class="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-green-700">
                    <strong class="font-bold">💡 Bonne pratique :</strong> Utilisez des fichiers externes (.js) pour séparer le code du contenu et améliorer la maintenabilité.
                  </p>
                </div>
              </div>
            </div>
          </div>
        `,
        examples: `
          <div class="space-y-6">
            <div class="bg-gray-900 rounded-xl p-5 overflow-hidden">
              <div class="flex items-center justify-between mb-4">
                <div class="text-sm font-semibold text-gray-300">Exemple : Fichier externe</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple2')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple2">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Mon App&lt;/title&gt;
    &lt;script src="script.js" defer&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;!-- Contenu --&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">L'attribut <code class="bg-gray-800 px-1 rounded">defer</code> optimise le chargement</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          'Utilisez des fichiers externes .js',
          'L\'attribut defer optimise le chargement',
          'Placez les scripts avant &lt;/body&gt;',
          'Évitez le code inline'
        ],
        quiz: [
          {
            question: 'Quelle balise HTML utilise-t-on pour inclure JavaScript ?',
            options: ['<js>', '<javascript>', '<script>', '<code>'],
            correct: 2,
            explanation: 'La balise <script> est utilisée pour inclure ou écrire du code JavaScript dans une page HTML.'
          },
          {
            question: 'Quel attribut permet d\'exécuter un script après le chargement du DOM ?',
            options: ['async', 'defer', 'delay', 'wait'],
            correct: 1,
            explanation: 'L\'attribut defer indique que le script doit s\'exécuter après que le document a été analysé.'
          },
          {
            question: 'Où est-il recommandé de placer les balises script ?',
            options: ['Dans <head>', 'Avant </body>', 'N\'importe où', 'Dans un fichier CSS'],
            correct: 1,
            explanation: 'Il est recommandé de placer les scripts avant la balise </body> pour optimiser le chargement de la page.'
          }
        ]
      },
      {
        id: "1.3",
        title: "Variables (var, let, const)",
        description: "Déclarer et manipuler des variables avec les bonnes pratiques modernes",
        readTime: "18 min",
        unlocked: false,
        completed: false,
        difficulty: "débutant",
        icon: "🧠",
        examplesCount: 4,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">🧠 Les Variables en JavaScript</h3>
            <p class="text-gray-700 leading-relaxed">
              Les variables sont des conteneurs qui stockent des valeurs. Trois mots-clés existent :
            </p>
            
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm border-red-200">
                <div class="text-3xl mb-3 text-red-500">❌</div>
                <h4 class="font-bold text-gray-900 mb-2">var</h4>
                <p class="text-sm text-gray-600">Ancienne syntaxe, portée fonction</p>
                <div class="mt-3">
                  <span class="inline-block px-2 py-1 bg-red-100 text-red-800 text-xs rounded">Déprécié</span>
                </div>
              </div>
              <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm border-blue-200">
                <div class="text-3xl mb-3 text-blue-500">🔄</div>
                <h4 class="font-bold text-gray-900 mb-2">let</h4>
                <p class="text-sm text-gray-600">Portée bloc, réassignable</p>
                <div class="mt-3">
                  <span class="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Modifiable</span>
                </div>
              </div>
              <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm border-green-300 bg-green-50">
                <div class="text-3xl mb-3 text-green-500">✅</div>
                <h4 class="font-bold text-gray-900 mb-2">const</h4>
                <p class="text-sm text-gray-600">Portée bloc, constante</p>
                <div class="mt-3">
                  <span class="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Recommandé</span>
                </div>
              </div>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <h4 class="font-bold text-gray-900 mb-3">✅ Bonne pratique</h4>
                <pre class="text-sm bg-gray-900 text-gray-100 p-4 rounded-lg"><code>const nom = "Alice"; // par défaut
let age = 25; // si modification nécessaire</code></pre>
              </div>
              <div class="bg-red-50 p-5 rounded-xl border border-red-200">
                <h4 class="font-bold text-gray-900 mb-3">❌ À éviter</h4>
                <pre class="text-sm bg-gray-900 text-gray-100 p-4 rounded-lg"><code>var ville = "Paris"; // ancienne syntaxe</code></pre>
              </div>
            </div>
          </div>
        `,
        examples: `
          <div class="space-y-6">
            <div class="bg-gray-900 rounded-xl p-5 overflow-hidden">
              <div class="flex items-center justify-between mb-4">
                <div class="text-sm font-semibold text-gray-300">Exemple : Bonnes pratiques</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple3')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple3">// const par défaut
const PI = 3.14159;
const config = { apiUrl: '...' };

// let si modification nécessaire
let compteur = 0;
compteur = 1; // OK

// Jamais var
// var ancien = 'déprécié';</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400"><code class="bg-gray-800 px-1 rounded">const</code> empêche la réassignation, pas la mutation d'objets</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          'const par défaut, let si modification nécessaire',
          'Jamais var (obsolète)',
          'const empêche la réassignation, pas la mutation',
          'Portée bloc pour let/const'
        ],
        quiz: [
          {
            question: 'Quel mot-clé devrait être utilisé par défaut pour déclarer une variable ?',
            options: ['var', 'let', 'const', 'static'],
            correct: 2,
            explanation: 'const est recommandé par défaut car il rend l\'intention claire et évite les erreurs accidentelles.'
          },
          {
            question: 'Peut-on modifier un objet déclaré avec const ?',
            options: ['Non, c\'est interdit', 'Oui, car on modifie le contenu, pas la variable', 'Seulement avec Object.freeze()', 'Uniquement dans le même fichier'],
            correct: 1,
            explanation: 'Oui ! const empêche la réassignation de la variable elle-même, mais permet la mutation du contenu des objets.'
          },
          {
            question: 'Quelle est la différence principale entre let et var ?',
            options: ['Aucune différence', 'let a une portée bloc, var a une portée fonction', 'var est plus moderne', 'let ne peut pas être réassigné'],
            correct: 1,
            explanation: 'let a une portée de bloc (entre {}), alors que var a une portée de fonction.'
          }
        ]
      },
      {
        id: "1.4",
        title: "Types de données",
        description: "Number, String, Boolean, null, undefined et leurs particularités",
        readTime: "20 min",
        unlocked: false,
        completed: false,
        difficulty: "débutant",
        icon: "🔢",
        examplesCount: 5,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">🔢 Les 7 Types Primitifs</h3>
            <p class="text-gray-700 leading-relaxed">
              JavaScript possède 7 types primitifs + le type Object. Comprendre ces types est essentiel.
            </p>
            
            <div class="grid md:grid-cols-4 gap-3">
              <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 class="font-bold text-blue-700 mb-2">Number</h4>
                <p class="text-sm text-gray-600">42, 3.14, -10</p>
              </div>
              <div class="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 class="font-bold text-green-700 mb-2">String</h4>
                <p class="text-sm text-gray-600">"Bonjour", 'texte'</p>
              </div>
              <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 class="font-bold text-yellow-700 mb-2">Boolean</h4>
                <p class="text-sm text-gray-600">true, false</p>
              </div>
              <div class="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 class="font-bold text-purple-700 mb-2">Undefined</h4>
                <p class="text-sm text-gray-600">Variable non initialisée</p>
              </div>
              <div class="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 class="font-bold text-red-700 mb-2">Null</h4>
                <p class="text-sm text-gray-600">Valeur intentionnellement vide</p>
              </div>
              <div class="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                <h4 class="font-bold text-indigo-700 mb-2">Symbol</h4>
                <p class="text-sm text-gray-600">(ES6) Valeur unique</p>
              </div>
              <div class="bg-pink-50 p-4 rounded-lg border border-pink-200">
                <h4 class="font-bold text-pink-700 mb-2">BigInt</h4>
                <p class="text-sm text-gray-600">(ES2020) Grands nombres</p>
              </div>
            </div>
            
            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-yellow-700">
                    <strong class="font-bold">Attention :</strong> <code>typeof null</code> retourne "object" - c'est un bug historique de JavaScript !
                  </p>
                </div>
              </div>
            </div>
          </div>
        `,
        examples: `
          <div class="space-y-6">
            <div class="bg-gray-900 rounded-xl p-5 overflow-hidden">
              <div class="flex items-center justify-between mb-4">
                <div class="text-sm font-semibold text-gray-300">Exemple : Vérification des types</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple4')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple4">// Utilisation de typeof
console.log(typeof 42);           // "number"
console.log(typeof "Bonjour");    // "string"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" (bug historique!)
console.log(typeof {});           // "object"
console.log(typeof []);           // "object"
console.log(typeof function(){}); // "function"

// Vérification stricte
console.log(Array.isArray([]));   // true
console.log([] instanceof Array); // true</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Utilisez <code class="bg-gray-800 px-1 rounded">Array.isArray()</code> pour vérifier les tableaux</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "7 types primitifs + Object",
          "typeof pour identifier le type",
          "Conversion implicite et explicite",
          "Truthy et falsy values"
        ],
        quiz: [
          {
            question: 'Quel est le type de null en JavaScript ?',
            options: ['null', 'undefined', 'object', 'string'],
            correct: 2,
            explanation: 'Étonnamment, typeof null retourne "object" - c\'est un bug historique de JavaScript.'
          },
          {
            question: 'Quelle méthode utiliser pour vérifier si une variable est un tableau ?',
            options: ['typeof', 'instanceof', 'Array.isArray()', 'isArray()'],
            correct: 2,
            explanation: 'Array.isArray() est la méthode recommandée pour vérifier si une valeur est un tableau.'
          },
          {
            question: 'Quelle valeur est considérée comme "falsy" en JavaScript ?',
            options: ['0', '1', '"false"', '[]'],
            correct: 0,
            explanation: '0 est falsy en JavaScript. Les autres valeurs falsy sont : false, "", null, undefined, NaN.'
          }
        ]
      },
      {
        id: "1.5",
        title: "Opérateurs",
        description: "Arithmétiques, logiques, de comparaison et leurs subtilités",
        readTime: "16 min",
        unlocked: false,
        completed: false,
        difficulty: "débutant",
        icon: "⚡",
        examplesCount: 3,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">⚡ Opérateurs JavaScript</h3>
            <p class="text-gray-700 leading-relaxed">
              Les opérateurs permettent de manipuler des valeurs. JavaScript en possède plusieurs types.
            </p>
            
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <h4 class="font-bold text-blue-700 mb-3">Arithmétiques</h4>
                <div class="space-y-2">
                  <code class="block text-sm bg-white p-2 rounded">+ - * / % **</code>
                  <p class="text-sm text-gray-600">Addition, soustraction, multiplication...</p>
                </div>
              </div>
              
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <h4 class="font-bold text-green-700 mb-3">Comparaison</h4>
                <div class="space-y-2">
                  <code class="block text-sm bg-white p-2 rounded">== != === !==</code>
                  <p class="text-sm text-gray-600">Toujours utiliser === et !==</p>
                </div>
              </div>
              
              <div class="bg-purple-50 p-5 rounded-xl border border-purple-200">
                <h4 class="font-bold text-purple-700 mb-3">Logiques</h4>
                <div class="space-y-2">
                  <code class="block text-sm bg-white p-2 rounded">&& || ! ??</code>
                  <p class="text-sm text-gray-600">ET, OU, NON, coalescence nulle</p>
                </div>
              </div>
            </div>
            
            <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-red-700">
                    <strong class="font-bold">Important :</strong> Utilisez <code>===</code> et <code>!==</code> plutôt que <code>==</code> et <code>!=</code> pour éviter les conversions de type implicites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        `,
        examples: `
          <div class="space-y-6">
            <div class="bg-gray-900 rounded-xl p-5 overflow-hidden">
              <div class="flex items-center justify-between mb-4">
                <div class="text-sm font-semibold text-gray-300">Exemple : Opérateurs en action</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple5')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple5">// Opérateurs arithmétiques
console.log(10 + 5);   // 15
console.log(10 - 5);   // 5
console.log(10 * 5);   // 50
console.log(10 / 5);   // 2
console.log(10 % 3);   // 1 (reste)
console.log(2 ** 3);   // 8 (puissance)

// Comparaison stricte vs lâche
console.log(5 == "5");   // true (conversion)
console.log(5 === "5");  // false (types différents)

// Opérateurs logiques
const age = 25;
const hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("Peut conduire");
}

// Opérateur ternaire
const status = age >= 18 ? "majeur" : "mineur";

// Coalescence nulle (??)
const username = null ?? "Invité"; // "Invité"</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">L'opérateur <code class="bg-gray-800 px-1 rounded">??</code> (coalescence nulle) est disponible depuis ES2020</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "=== plutôt que ==",
          "Opérateurs courts-circuits",
          "Opérateur ternaire",
          "Opérateur de coalescence nulle"
        ],
        quiz: [
          {
            question: 'Quel opérateur utiliser pour la comparaison stricte (type et valeur) ?',
            options: ['==', '===', '=', '!='],
            correct: 1,
            explanation: '=== compare à la fois le type et la valeur, alors que == fait une conversion de type d\'abord.'
          },
          {
            question: 'Que retourne 5 + "5" en JavaScript ?',
            options: ['10', '55', 'Error', 'undefined'],
            correct: 1,
            explanation: 'JavaScript convertit le nombre en chaîne : 5 + "5" = "55" (concaténation).'
          },
          {
            question: 'Quel est le résultat de true && false ?',
            options: ['true', 'false', 'undefined', 'null'],
            correct: 1,
            explanation: 'L\'opérateur && (ET) retourne true seulement si les deux opérandes sont true.'
          }
        ]
      },
      {
        id: "1.6",
        title: "Conditions",
        description: "if/else, switch et opérateur ternaire pour contrôler le flux",
        readTime: "14 min",
        unlocked: false,
        completed: false,
        difficulty: "débutant",
        icon: "🎯",
        examplesCount: 3,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">🎯 Structures Conditionnelles</h3>
            <p class="text-gray-700 leading-relaxed">
              Les conditions permettent d'exécuter du code en fonction de certaines conditions.
            </p>
            
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <h4 class="font-bold text-blue-700 mb-3">if/else</h4>
                <pre class="text-xs bg-white p-3 rounded"><code>if (condition) {
  // code si vrai
} else {
  // code si faux
}</code></pre>
                <p class="text-sm text-gray-600 mt-2">Pour conditions simples</p>
              </div>
              
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <h4 class="font-bold text-green-700 mb-3">switch</h4>
                <pre class="text-xs bg-white p-3 rounded"><code>switch(valeur) {
  case 1:
    // code
    break;
  default:
    // autre
}</code></pre>
                <p class="text-sm text-gray-600 mt-2">Pour multiples cas</p>
              </div>
              
              <div class="bg-yellow-50 p-5 rounded-xl border border-yellow-200">
                <h4 class="font-bold text-yellow-700 mb-3">Ternaire</h4>
                <pre class="text-xs bg-white p-3 rounded"><code>condition ? vrai : faux</code></pre>
                <p class="text-sm text-gray-600 mt-2">Pour conditions courtes</p>
              </div>
            </div>
            
            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-blue-700">
                    <strong class="font-bold">Astuce :</strong> Les ternaires sont parfaits pour les affectations conditionnelles simples, mais évitez-les pour des logiques complexes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        `,
        examples: `
          <div class="space-y-6">
            <div class="bg-gray-900 rounded-xl p-5 overflow-hidden">
              <div class="flex items-center justify-between mb-4">
                <div class="text-sm font-semibold text-gray-300">Exemple : Conditions en pratique</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple6')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple6">// if/else/else if
const age = 20;

if (age < 13) {
  console.log("Enfant");
} else if (age < 18) {
  console.log("Adolescent");
} else {
  console.log("Adulte");
}

// Switch statement
const day = "lundi";
let message;

switch(day) {
  case "lundi":
  case "mardi":
  case "mercredi":
  case "jeudi":
  case "vendredi":
    message = "Jour de travail";
    break;
  case "samedi":
  case "dimanche":
    message = "Weekend !";
    break;
  default:
    message = "Jour invalide";
}

// Opérateur ternaire
const canVote = age >= 18 ? "Peut voter" : "Ne peut pas voter";

// Conditions imbriquées (à éviter si trop complexe)
const score = 85;
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "D";
}</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">N'oubliez pas <code class="bg-gray-800 px-1 rounded">break</code> dans les switch pour éviter le "fallthrough"</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "if/else pour conditions simples",
          "switch pour multiples cas",
          "Opérateur ternaire pour conditions courtes",
          "Éviter les conditions trop complexes"
        ],
        quiz: [
          {
            question: 'Quel mot-clé est essentiel dans une structure switch pour éviter le "fallthrough" ?',
            options: ['stop', 'break', 'exit', 'return'],
            correct: 1,
            explanation: 'Le mot-clé break est essentiel dans un switch pour sortir du bloc et éviter l\'exécution des cas suivants.'
          },
          {
            question: 'Quelle est la syntaxe correcte de l\'opérateur ternaire ?',
            options: ['if ? then : else', 'condition ? true : false', 'test ? yes : no', 'check ? ok : not'],
            correct: 1,
            explanation: 'La syntaxe correcte est : condition ? valeurSiVrai : valeurSiFaux'
          },
          {
            question: 'Quand utiliser switch plutôt que if/else ?',
            options: ['Pour tester une seule condition', 'Pour comparer une valeur avec plusieurs cas spécifiques', 'Pour tester des conditions complexes', 'Pour les boucles'],
            correct: 1,
            explanation: 'Switch est idéal quand vous devez comparer une même valeur avec plusieurs cas spécifiques et distincts.'
          }
        ]
      },
      {
        id: "1.7",
        title: "Boucles",
        description: "for, while, do...while et itération sur collections",
        readTime: "18 min",
        unlocked: false,
        completed: false,
        difficulty: "débutant",
        icon: "🔄",
        examplesCount: 4,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">🔄 Boucles en JavaScript</h3>
            <p class="text-gray-700 leading-relaxed">
              Les boucles permettent de répéter du code. Chaque type a son utilité spécifique.
            </p>
            
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <h4 class="font-bold text-blue-700 mb-3">for</h4>
                <pre class="text-xs bg-white p-3 rounded"><code>for (let i = 0; i < 5; i++) {
  // répéter 5 fois
}</code></pre>
                <p class="text-sm text-gray-600 mt-2">Itérations comptées</p>
              </div>
              
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <h4 class="font-bold text-green-700 mb-3">while</h4>
                <pre class="text-xs bg-white p-3 rounded"><code>while (condition) {
  // tant que vrai
}</code></pre>
                <p class="text-sm text-gray-600 mt-2">Conditions complexes</p>
              </div>
              
              <div class="bg-purple-50 p-5 rounded-xl border border-purple-200">
                <h4 class="font-bold text-purple-700 mb-3">for...of</h4>
                <pre class="text-xs bg-white p-3 rounded"><code>for (const item of array) {
  // itérer tableau
}</code></pre>
                <p class="text-sm text-gray-600 mt-2">Itération sur collections</p>
              </div>
            </div>
            
            <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-red-700">
                    <strong class="font-bold">Attention :</strong> Assurez-vous que votre condition de boucle finisse par devenir fausse, sinon vous créerez une boucle infinie !
                  </p>
                </div>
              </div>
            </div>
          </div>
        `,
        examples: `
          <div class="space-y-6">
            <div class="bg-gray-900 rounded-xl p-5 overflow-hidden">
              <div class="flex items-center justify-between mb-4">
                <div class="text-sm font-semibold text-gray-300">Exemple : Différents types de boucles</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple7')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple7">// Boucle for classique
for (let i = 0; i < 5; i++) {
  console.log("Itération " + i);
}

// Boucle for...of (pour les tableaux)
const fruits = ["pomme", "banane", "orange"];
for (const fruit of fruits) {
  console.log(fruit);
}

// Boucle for...in (pour les objets - attention !)
const personne = { nom: "Alice", age: 25 };
for (const key in personne) {
  console.log(key + ": " + personne[key]);
}

// Boucle while
let compteur = 0;
while (compteur < 3) {
  console.log("Compteur: " + compteur);
  compteur++;
}

// Boucle do...while (exécute au moins une fois)
let x = 0;
do {
  console.log("x = " + x);
  x++;
} while (x < 3);

// Méthodes de tableau (alternatives aux boucles)
fruits.forEach((fruit, index) => {
  console.log(index + ": " + fruit);
});

// Boucle infinie (À ÉVITER !)
// while (true) {
//   // Code qui ne s'arrête jamais
// }</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400"><code class="bg-gray-800 px-1 rounded">forEach</code> est une méthode des tableaux, pas une boucle traditionnelle</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "for pour itérations comptées",
          "while pour conditions complexes",
          "for...of pour itérer sur tableaux",
          "Éviter les boucles infinies"
        ],
        quiz: [
          {
            question: 'Quelle boucle est idéale pour itérer sur les éléments d\'un tableau ?',
            options: ['for...in', 'for...of', 'while', 'do...while'],
            correct: 1,
            explanation: 'for...of est idéal pour itérer sur les valeurs d\'un tableau. for...in itère sur les clés/propriétés.'
          },
          {
            question: 'Combien de fois cette boucle s\'exécute-t-elle : for(let i = 0; i <= 5; i++) ?',
            options: ['4 fois', '5 fois', '6 fois', 'Infini'],
            correct: 2,
            explanation: 'Elle s\'exécute 6 fois : i = 0, 1, 2, 3, 4, 5 (i <= 5 inclus)'
          },
          {
            question: 'Quelle est la différence entre while et do...while ?',
            options: ['Aucune différence', 'do...while vérifie la condition après exécution', 'while est plus rapide', 'do...while ne vérifie jamais la condition'],
            correct: 1,
            explanation: 'do...while exécute le bloc au moins une fois, puis vérifie la condition pour continuer.'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "NIVEAU 2",
    subtitle: "Fonctions & Structures",
    color: "blue",
    icon: "🔵",
    chapters: [
      {
        id: "2.1",
        title: "Fonctions",
        description: "Créer du code réutilisable avec fonctions et paramètres",
        readTime: "20 min",
        unlocked: false,
        completed: false,
        difficulty: "intermédiaire",
        icon: "🎯",
        examplesCount: 4,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">🎯 Les Fonctions en JavaScript</h3>
            <p class="text-gray-700 leading-relaxed">
              Les fonctions sont des blocs de code réutilisables qui peuvent recevoir des paramètres et retourner des valeurs.
            </p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <h4 class="font-bold text-blue-700 mb-3">Déclaration</h4>
                <pre class="text-sm bg-white p-3 rounded"><code>function nomFonction(param) {
  // code
  return valeur;
}</code></pre>
                <p class="text-sm text-gray-600 mt-2">Hoistée (disponible avant déclaration)</p>
              </div>
              
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <h4 class="font-bold text-green-700 mb-3">Expression</h4>
                <pre class="text-sm bg-white p-3 rounded"><code>const nomFonction = function(param) {
  // code
  return valeur;
};</code></pre>
                <p class="text-sm text-gray-600 mt-2">Non hoistée</p>
              </div>
            </div>
            
            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-yellow-700">
                    <strong class="font-bold">Astuce :</strong> En JavaScript, les fonctions sont des "citoyens de première classe" : elles peuvent être stockées dans des variables, passées en arguments, et retournées par d'autres fonctions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        `,
        examples: `
          <div class="space-y-6">
            <div class="bg-gray-900 rounded-xl p-5 overflow-hidden">
              <div class="flex items-center justify-between mb-4">
                <div class="text-sm font-semibold text-gray-300">Exemple : Fonctions détaillées</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple8')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple8">// Déclaration de fonction (hoistée)
function saluer(nom) {
  return "Bonjour " + nom + " !";
}

// Appel
console.log(saluer("Alice")); // "Bonjour Alice !"

// Expression de fonction
const multiplier = function(a, b) {
  return a * b;
};

// Fonction avec paramètres par défaut
function calculerPrix(prix, taxe = 0.2) {
  return prix * (1 + taxe);
}

// Fonction retournant une fonction
function creerMultiplicateur(facteur) {
  return function(nombre) {
    return nombre * facteur;
  };
}

const doubler = creerMultiplicateur(2);
console.log(doubler(5)); // 10

// Fonctions récursives
function factorielle(n) {
  if (n <= 1) return 1;
  return n * factorielle(n - 1);
}

console.log(factorielle(5)); // 120

// Arguments et paramètres
function somme(...nombres) {
  let total = 0;
  for (const n of nombres) {
    total += n;
  }
  return total;
}

console.log(somme(1, 2, 3, 4)); // 10</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Les fonctions récursives doivent avoir une condition d'arrêt pour éviter les boucles infinies</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "Déclaration vs expression",
          "Paramètres et arguments",
          "return et valeur de retour",
          "Fonctions comme citoyens de première classe"
        ],
        quiz: [
          {
            question: 'Quelle est la différence entre une déclaration de fonction et une expression de fonction ?',
            options: ['Aucune différence', 'Les déclarations sont hoistées, les expressions non', 'Les expressions sont plus rapides', 'Les déclarations ne peuvent pas avoir de paramètres'],
            correct: 1,
            explanation: 'Les déclarations de fonction sont hoistées (disponibles avant leur définition), contrairement aux expressions de fonction.'
          },
          {
            question: 'Que retourne une fonction sans instruction return ?',
            options: ['null', 'undefined', '0', '"" (chaîne vide)'],
            correct: 1,
            explanation: 'Une fonction sans instruction return retourne undefined.'
          },
          {
            question: 'Que signifie "fonctions comme citoyens de première classe" ?',
            options: ['Les fonctions sont prioritaires', 'Les fonctions peuvent être stockées dans des variables', 'Les fonctions doivent être déclarées en premier', 'Les fonctions ne peuvent pas être anonymes'],
            correct: 1,
            explanation: 'Cela signifie que les fonctions peuvent être traitées comme n\'importe quelle autre valeur : stockées dans des variables, passées en arguments, retournées par d\'autres fonctions.'
          }
        ]
      },
      {
        id: "2.2",
        title: "Fonctions fléchées",
        description: "Syntaxe concise et comportement du this",
        readTime: "15 min",
        unlocked: false,
        completed: false,
        difficulty: "intermédiaire",
        icon: "🏹",
        examplesCount: 3,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">🏹 Fonctions Fléchées (Arrow Functions)</h3>
            <p class="text-gray-700 leading-relaxed">
              Introduites dans ES6, les fonctions fléchées offrent une syntaxe plus concise et un comportement différent du mot-clé <code>this</code>.
            </p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <h4 class="font-bold text-green-700 mb-3">Syntaxe courte</h4>
                <pre class="text-sm bg-white p-3 rounded"><code>// Fonction normale
const doubler = function(x) {
  return x * 2;
};

// Fonction fléchée
const doubler = x => x * 2;</code></pre>
                <p class="text-sm text-gray-600 mt-2">Plus concise, pas de mot-clé function</p>
              </div>
              
              <div class="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <h4 class="font-bold text-blue-700 mb-3">This lexical</h4>
                <pre class="text-sm bg-white p-3 rounded"><code>// Fonction normale
const obj = {
  valeur: 42,
  getValeur: function() {
    return this.valeur; // this = obj
  }
};

// Fonction fléchée
const obj2 = {
  valeur: 42,
  getValeur: () => {
    return this.valeur; // this = contexte parent
  }
};</code></pre>
                <p class="text-sm text-gray-600 mt-2">Hérite this du contexte parent</p>
              </div>
            </div>
            
            <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-red-700">
                    <strong class="font-bold">Attention :</strong> Les fonctions fléchées n'ont pas leur propre <code>this</code>, <code>arguments</code>, <code>super</code> ou <code>new.target</code>. Elles ne peuvent pas être utilisées comme constructeurs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        `,
        examples: `
          <div class="space-y-6">
            <div class="bg-gray-900 rounded-xl p-5 overflow-hidden">
              <div class="flex items-center justify-between mb-4">
                <div class="text-sm font-semibold text-gray-300">Exemple : Fonctions fléchées en détail</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple9')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple9">// Différentes syntaxes
const addition = (a, b) => {
  return a + b;
};

// Return implicite (une seule expression)
const carre = x => x * x;

// Sans paramètres
const direBonjour = () => "Bonjour !";

// Avec un seul paramètre (parenthèses optionnelles)
const saluer = nom => \`Bonjour \${nom}\`;

// Retour d'objet (nécessite parenthèses)
const creerPersonne = (nom, age) => ({ nom, age });

// Utilisation avec les méthodes de tableau
const nombres = [1, 2, 3, 4, 5];
const carres = nombres.map(n => n * n);
const pairs = nombres.filter(n => n % 2 === 0);
const somme = nombres.reduce((acc, n) => acc + n, 0);

// Différence de this
const timer = {
  seconds: 0,
  start: function() {
    // Fonction normale - this = timer
    setInterval(function() {
      this.seconds++; // ERREUR : this = window/undefined
    }, 1000);
  },
  startCorrect: function() {
    // Fonction fléchée - this = timer (contexte parent)
    setInterval(() => {
      this.seconds++; // CORRECT : this = timer
    }, 1000);
  }
};

// Pas de arguments object
const fonctionNormale = function() {
  console.log(arguments); // Fonctionne
};

const fonctionFleche = () => {
  console.log(arguments); // ERREUR : arguments non défini
};</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Pour capturer les arguments dans une fonction fléchée, utilisez le paramètre rest : <code class="bg-gray-800 px-1 rounded">(...args) => { }</code></p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "Syntaxe courte sans function",
          "this lexical (pas de propre this)",
          "Pas d'arguments object",
          "Implicit return pour une ligne"
        ],
        quiz: [
          {
            question: 'Quelle est la principale différence de comportement de this dans les fonctions fléchées ?',
            options: ['this est toujours undefined', 'this est toujours null', 'this est lexical (hérité du contexte parent)', 'this pointe toujours vers window'],
            correct: 2,
            explanation: 'Dans les fonctions fléchées, this est lexical : il hérite la valeur de this du contexte parent.'
          },
          {
            question: 'Quelle syntaxe est correcte pour une fonction fléchée avec return implicite ?',
            options: ['x => { return x * 2 }', 'x => return x * 2', 'x => x * 2', 'function(x) => x * 2'],
            correct: 2,
            explanation: 'Pour un return implicite, omettez les accolades et le mot-clé return : x => x * 2'
          },
          {
            question: 'Peut-on utiliser une fonction fléchée comme constructeur avec new ?',
            options: ['Oui, toujours', 'Non, jamais', 'Seulement avec des classes', 'Uniquement en mode strict'],
            correct: 1,
            explanation: 'Non, les fonctions fléchées ne peuvent pas être utilisées comme constructeurs et déclenchent une erreur si on tente de les utiliser avec new.'
          }
        ]
      },
      {
        id: "2.3",
        title: "Portée des variables",
        description: "Scope, closure et hoisting expliqués simplement",
        readTime: "18 min",
        unlocked: false,
        completed: false,
        difficulty: "intermédiaire",
        icon: "🎪",
        examplesCount: 3,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">🎪 Portée et Hoisting en JavaScript</h3>
            <p class="text-gray-700 leading-relaxed">
              Comprendre la portée des variables et le hoisting est essentiel pour éviter les bugs.
            </p>
            
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <h4 class="font-bold text-blue-700 mb-3">Portée Globale</h4>
                <pre class="text-xs bg-white p-3 rounded"><code>var global = "accessible partout";</code></pre>
                <p class="text-sm text-gray-600 mt-2">Déclarée en dehors de toute fonction</p>
              </div>
              
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <h4 class="font-bold text-green-700 mb-3">Portée Fonction</h4>
                <pre class="text-xs bg-white p-3 rounded"><code>function test() {
  var local = "locale";
}</code></pre>
                <p class="text-sm text-gray-600 mt-2">var a une portée de fonction</p>
              </div>
              
              <div class="bg-purple-50 p-5 rounded-xl border border-purple-200">
                <h4 class="font-bold text-purple-700 mb-3">Portée Bloc</h4>
                <pre class="text-xs bg-white p-3 rounded"><code>if (true) {
  let bloc = "dans bloc";
  const PI = 3.14;
}</code></pre>
                <p class="text-sm text-gray-600 mt-2">let/const ont une portée de bloc</p>
              </div>
            </div>
            
            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-yellow-700">
                    <strong class="font-bold">Hoisting :</strong> Les déclarations (mais pas les initialisations) sont "hissées" en haut de leur portée. <code>var</code> est hoisté avec la valeur <code>undefined</code>, alors que <code>let</code>/<code>const</code> sont dans la "Temporal Dead Zone" jusqu'à leur déclaration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        `,
        examples: `
          <div class="space-y-6">
            <div class="bg-gray-900 rounded-xl p-5 overflow-hidden">
              <div class="flex items-center justify-between mb-4">
                <div class="text-sm font-semibold text-gray-300">Exemple : Portée et hoisting détaillés</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple10')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple10">// HOISTING avec var
console.log(x); // undefined (hoisting)
var x = 5;
console.log(x); // 5

// Ce qui se passe réellement :
// var x; // Déclaration hoistée
// console.log(x); // undefined
// x = 5; // Initialisation
// console.log(x); // 5

// HOISTING avec let/const
// console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;

// TEMPORAL DEAD ZONE (TDZ)
{
  // Début de la TDZ pour z
  // console.log(z); // ReferenceError
  const z = 15; // Fin de la TDZ
  console.log(z); // 15
}

// DIFFÉRENCES DE PORTÉE
function testPortee() {
  if (true) {
    var fonctionScope = "var - portée fonction";
    let blocScope = "let - portée bloc";
    const constScope = "const - portée bloc";
  }
  
  console.log(fonctionScope); // "var - portée fonction"
  // console.log(blocScope); // ReferenceError
  // console.log(constScope); // ReferenceError
}

// CLOSURES (Fermetures)
function createCounter() {
  let count = 0; // Variable privée
  
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
// count n'est pas accessible de l'extérieur

// CLOSURE pratique
function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// IIFE (Immediately Invoked Function Expression)
(function() {
  var privateVar = "privée";
  console.log(privateVar); // "privée"
})();

// console.log(privateVar); // ReferenceError</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Les closures permettent de créer des variables privées et de préserver l'état entre les appels de fonction</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "Portée globale, fonction, bloc",
          "Closures pour accès privé",
          "Hoisting des déclarations",
          "Temporal Dead Zone (TDZ)"
        ],
        quiz: [
          {
            question: 'Quelle variable déclenche une ReferenceError si on y accède avant sa déclaration ?',
            options: ['var', 'let', 'let et const', 'Aucune, toutes sont hoistées'],
            correct: 2,
            explanation: 'let et const sont dans la Temporal Dead Zone (TDZ) avant leur déclaration. Y accès provoque une ReferenceError.'
          },
          {
            question: 'Qu\'est-ce qu\'une closure (fermeture) en JavaScript ?',
            options: ['Une fonction qui se termine rapidement', 'Une fonction qui a accès à son contexte lexical parent même après que ce contexte se soit terminé', 'Une fonction qui ne peut pas être appelée', 'Une fonction anonyme'],
            correct: 1,
            explanation: 'Une closure est une fonction qui "se souvient" de son contexte lexical même après que ce contexte se soit terminé.'
          },
          {
            question: 'Quelle est la portée d\'une variable déclarée avec var à l\'intérieur d\'un bloc if ?',
            options: ['Portée bloc', 'Portée fonction', 'Portée globale', 'Portée conditionnelle'],
            correct: 1,
            explanation: 'var a une portée de fonction (ou globale), pas de bloc. Même déclarée dans un bloc, elle est accessible dans toute la fonction.'
          }
        ]
      },
      {
        id: "2.4",
        title: "Tableaux (Arrays)",
        description: "Création et méthodes avancées pour manipuler des collections",
        readTime: "22 min",
        unlocked: false,
        completed: false,
        difficulty: "intermédiaire",
        icon: "📊",
        examplesCount: 5,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">📊 Les Tableaux (Arrays) en JavaScript</h3>
            <p class="text-gray-700 leading-relaxed">
              Les tableaux sont des collections ordonnées d'éléments. JavaScript fournit de nombreuses méthodes puissantes pour les manipuler.
            </p>
            
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <h4 class="font-bold text-blue-700 mb-3">Création</h4>
                <div class="space-y-2">
                  <code class="block text-xs bg-white p-2 rounded">[] // littéral</code>
                  <code class="block text-xs bg-white p-2 rounded">new Array()</code>
                  <code class="block text-xs bg-white p-2 rounded">Array.of()</code>
                </div>
              </div>
              
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <h4 class="font-bold text-green-700 mb-3">Manipulation</h4>
                <div class="space-y-2">
                  <code class="block text-xs bg-white p-2 rounded">push/pop</code>
                  <code class="block text-xs bg-white p-2 rounded">shift/unshift</code>
                  <code class="block text-xs bg-white p-2 rounded">slice/splice</code>
                </div>
              </div>
              
              <div class="bg-purple-50 p-5 rounded-xl border border-purple-200">
                <h4 class="font-bold text-purple-700 mb-3">Fonctionnelles</h4>
                <div class="space-y-2">
                  <code class="block text-xs bg-white p-2 rounded">map/filter</code>
                  <code class="block text-xs bg-white p-2 rounded">reduce/find</code>
                  <code class="block text-xs bg-white p-2 rounded">forEach/some</code>
                </div>
              </div>
            </div>
            
            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-yellow-700">
                    <strong class="font-bold">Conseil :</strong> Préférez les méthodes fonctionnelles (<code>map</code>, <code>filter</code>, <code>reduce</code>) aux boucles traditionnelles pour plus de lisibilité et moins de bugs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        `,
        examples: `
          <div class="space-y-6">
            <div class="bg-gray-900 rounded-xl p-5 overflow-hidden">
              <div class="flex items-center justify-between mb-4">
                <div class="text-sm font-semibold text-gray-300">Exemple : Manipulation avancée des tableaux</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple11')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple11">// CRÉATION DE TABLEAUX
const fruits = ["pomme", "banane", "orange"];
const nombres = new Array(1, 2, 3);
const vide = [];
const avecTaille = new Array(5); // 5 éléments vides
const from = Array.from("hello"); // ['h','e','l','l','o']
const of = Array.of(1, 2, 3); // [1, 2, 3]

// MÉTHODES DE MANIPULATION
fruits.push("kiwi"); // Ajoute à la fin
fruits.pop(); // Supprime le dernier
fruits.unshift("fraise"); // Ajoute au début
fruits.shift(); // Supprime le premier

// SLICE vs SPLICE
const arr = [1, 2, 3, 4, 5];
const slice = arr.slice(1, 3); // [2, 3] (n'affecte pas l'original)
const splice = arr.splice(1, 2, "a", "b"); // [2, 3]
// arr devient [1, "a", "b", 4, 5]

// MÉTHODES FONCTIONNELLES
const nombres = [1, 2, 3, 4, 5];

// map - transforme chaque élément
const carres = nombres.map(n => n * n); // [1, 4, 9, 16, 25]

// filter - filtre selon condition
const pairs = nombres.filter(n => n % 2 === 0); // [2, 4]

// reduce - réduit à une valeur
const somme = nombres.reduce((acc, n) => acc + n, 0); // 15

// find - trouve le premier qui correspond
const premierPair = nombres.find(n => n % 2 === 0); // 2

// some - au moins un élément correspond
const contientPair = nombres.some(n => n % 2 === 0); // true

// every - tous les éléments correspondent
const tousPairs = nombres.every(n => n % 2 === 0); // false

// forEach - exécute pour chaque élément
nombres.forEach(n => console.log(n));

// TABLEAUX MULTIDIMENSIONNELS
const matrice = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrice[1][2]); // 6

// DESTRUCTURING DE TABLEAUX
const [premier, deuxieme, ...reste] = nombres;
// premier = 1, deuxieme = 2, reste = [3, 4, 5]

// SPREAD OPERATOR
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combine = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// MÉTHODES UTILES
const index = fruits.indexOf("banane"); // 1
const lastIndex = fruits.lastIndexOf("pomme");
const includes = fruits.includes("orange"); // true
const join = fruits.join(", "); // "pomme, banane, orange"
const reverse = [...fruits].reverse(); // Nouveau tableau inversé
const sort = [...fruits].sort(); // Tri alphabétique</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Note : <code class="bg-gray-800 px-1 rounded">splice</code> modifie le tableau original, contrairement à <code class="bg-gray-800 px-1 rounded">slice</code></p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "Méthodes fonctionnelles (map, filter, reduce)",
          "Manipulation (push, pop, slice, splice)",
          "Itération (forEach, for...of)",
          "Tableaux multidimensionnels"
        ],
        quiz: [
          {
            question: 'Quelle méthode crée un nouveau tableau avec les résultats de l\'appel d\'une fonction sur chaque élément ?',
            options: ['filter', 'forEach', 'map', 'reduce'],
            correct: 2,
            explanation: 'map crée un nouveau tableau en appliquant une fonction à chaque élément du tableau d\'origine.'
          },
          {
            question: 'Quelle est la différence entre slice et splice ?',
            options: ['Aucune différence', 'slice modifie l\'original, splice non', 'splice modifie l\'original, slice non', 'Les deux créent un nouveau tableau'],
            correct: 2,
            explanation: 'splice modifie le tableau original (ajoute/supprime des éléments), alors que slice retourne une copie superficielle.'
          },
          {
            question: 'Que fait la méthode reduce ?',
            options: ['Filtre les éléments', 'Transforme chaque élément', 'Combine tous les éléments en une seule valeur', 'Trie le tableau'],
            correct: 2,
            explanation: 'reduce applique une fonction sur un accumulateur et chaque élément pour réduire le tableau à une seule valeur.'
          }
        ]
      },
      {
        id: "2.5",
        title: "Objets",
        description: "Propriétés, méthodes et manipulation d'objets en JavaScript",
        readTime: "20 min",
        unlocked: false,
        completed: false,
        difficulty: "intermédiaire",
        icon: "📦",
        examplesCount: 4,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">📦 Les Objets en JavaScript</h3>
            <p class="text-gray-700 leading-relaxed">
              Les objets sont des collections de paires clé-valeur. C'est la structure de données fondamentale en JavaScript.
            </p>
            
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <h4 class="font-bold text-blue-700 mb-3">Création</h4>
                <pre class="text-xs bg-white p-3 rounded"><code>// Littéral
const obj = {
  nom: "Alice",
  age: 25
};

// Constructeur
const obj2 = new Object();</code></pre>
              </div>
              
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <h4 class="font-bold text-green-700 mb-3">Accès</h4>
                <pre class="text-xs bg-white p-3 rounded"><code>// Notation point
obj.nom;

// Notation bracket
obj["age"];</code></pre>
              </div>
              
              <div class="bg-purple-50 p-5 rounded-xl border border-purple-200">
                <h4 class="font-bold text-purple-700 mb-3">Méthodes</h4>
                <pre class="text-xs bg-white p-3 rounded"><code>const personne = {
  nom: "Alice",
  saluer() {
    return "Bonjour!";
  }
};</code></pre>
              </div>
            </div>
            
            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-yellow-700">
                    <strong class="font-bold">Important :</strong> En JavaScript, presque tout est un objet (sauf les types primitifs). Les tableaux, fonctions, dates, etc. sont tous des objets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        `,
        examples: `
          <div class="space-y-6">
            <div class="bg-gray-900 rounded-xl p-5 overflow-hidden">
              <div class="flex items-center justify-between mb-4">
                <div class="text-sm font-semibold text-gray-300">Exemple : Manipulation d'objets avancée</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple12')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple12">// CRÉATION D'OBJETS
// 1. Littéral (le plus commun)
const personne = {
  nom: "Alice",
  age: 25,
  ville: "Paris",
  saluer: function() {
    return "Bonjour, je m'appelle " + this.nom;
  },
  // Méthode raccourcie (ES6)
  direAge() {
    return "J'ai " + this.age + " ans";
  }
};

// 2. Constructeur
const voiture = new Object();
voiture.marque = "Toyota";
voiture.modele = "Corolla";

// 3. Object.create()
const prototype = { type: "animal" };
const chien = Object.create(prototype);
chien.nom = "Rex";

// ACCÈS AUX PROPRIÉTÉS
console.log(personne.nom); // "Alice" - notation point
console.log(personne["age"]); // 25 - notation bracket

const propriete = "ville";
console.log(personne[propriete]); // "Paris"

// MODIFICATION
personne.age = 26; // Modification
personne.profession = "Développeuse"; // Ajout
delete personne.ville; // Suppression

// MÉTHODE THIS
const objet = {
  valeur: 42,
  getValeur: function() {
    return this.valeur; // this = objet
  },
  getValeurFleche: () => {
    return this.valeur; // this = contexte parent (window/undefined)
  }
};

// ITÉRATION SUR LES PROPRIÉTÉS
for (const cle in personne) {
  console.log(cle + ": " + personne[cle]);
}

// Méthodes statiques d'Object
const cles = Object.keys(personne); // ["nom", "age", "saluer", "direAge"]
const valeurs = Object.values(personne); // ["Alice", 26, function, function]
const entrees = Object.entries(personne); // [["nom", "Alice"], ["age", 26], ...]

// FUSION D'OBJETS
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const fusionne = { ...obj1, ...obj2 }; // { a: 1, b: 3, c: 4 }

// COPIE D'OBJETS
const original = { x: 1, y: { z: 2 } };
const copieSuperficielle = { ...original }; // Copie superficielle
const copieProfonde = JSON.parse(JSON.stringify(original)); // Copie profonde (limitations)

// GETTERS ET SETTERS
const compte = {
  solde: 1000,
  get soldeFormate() {
    return this.solde + " €";
  },
  set ajouter(montant) {
    this.solde += montant;
  }
};

console.log(compte.soldeFormate); // "1000 €"
compte.ajouter = 500;
console.log(compte.solde); // 1500

// OBJET LITTÉRAL AMÉLIORÉ (ES6)
const nom = "Alice";
const age = 25;

// Propriété calculée
const objES6 = {
  nom, // équivalent à nom: nom
  age,
  ["prop" + "Calc"]: "calculée", // propriété calculée
  methode() { // méthode raccourcie
    return this.nom;
  }
};</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Note : <code class="bg-gray-800 px-1 rounded">JSON.parse(JSON.stringify(obj))</code> ne copie pas les fonctions, dates, undefined, etc.</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "Notation point vs bracket",
          "Méthodes et this",
          "Object.keys(), values(), entries()",
          "Copie profonde vs superficielle"
        ],
        quiz: [
          {
            question: 'Quelle notation utiliser pour accéder à une propriété avec un nom dynamique ?',
            options: ['Notation point (.)', 'Notation bracket ([])', 'Les deux fonctionnent', 'Aucune des deux'],
            correct: 1,
            explanation: 'La notation bracket [] est nécessaire quand le nom de la propriété est stocké dans une variable ou contient des caractères spéciaux.'
          },
          {
            question: 'Que retourne Object.keys(obj) ?',
            options: ['Les valeurs de l\'objet', 'Les clés de l\'objet sous forme de tableau', 'Les paires clé-valeur', 'Le nombre de propriétés'],
            correct: 1,
            explanation: 'Object.keys(obj) retourne un tableau contenant les noms des propriétés propres et énumérables de l\'objet.'
          },
          {
            question: 'Quelle est la différence entre une copie superficielle et une copie profonde ?',
            options: ['Aucune différence', 'La copie superficielle copie aussi les objets imbriqués', 'La copie profonde copie récursivement tous les objets imbriqués', 'La copie profonde est plus rapide'],
            correct: 2,
            explanation: 'Une copie profonde crée une nouvelle copie de l\'objet et de tous les objets imbriqués, alors qu\'une copie superficielle ne copie que le premier niveau.'
          }
        ]
      },
      {
        id: "2.6",
        title: "Destructuring",
        description: "Extraire des valeurs d'objets et tableaux facilement",
        readTime: "14 min",
        unlocked: false,
        completed: false,
        difficulty: "intermédiaire",
        icon: "🎁",
        examplesCount: 3,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">🎁 Destructuring (Déstructuration)</h3>
            <p class="text-gray-700 leading-relaxed">
              La déstructuration, introduite dans ES6, permet d'extraire des valeurs d'objets ou de tableaux dans des variables distinctes, de manière concise et lisible.
            </p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <h4 class="font-bold text-blue-700 mb-3">Destructuring d'objets</h4>
                <pre class="text-sm bg-white p-3 rounded"><code>const personne = {
  nom: "Alice",
  age: 25
};

const { nom, age } = personne;
// nom = "Alice", age = 25</code></pre>
                <p class="text-sm text-gray-600 mt-2">Extraction par nom de propriété</p>
              </div>
              
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <h4 class="font-bold text-green-700 mb-3">Destructuring de tableaux</h4>
                <pre class="text-sm bg-white p-3 rounded"><code>const fruits = ["🍎", "🍌", "🍊"];

const [pomme, banane] = fruits;
// pomme = "🍎", banane = "🍌"</code></pre>
                <p class="text-sm text-gray-600 mt-2">Extraction par position</p>
              </div>
            </div>
            
            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-yellow-700">
                    <strong class="font-bold">Astuce :</strong> La déstructuration est particulièrement utile dans les paramètres de fonction, pour extraire seulement les propriétés nécessaires d'un objet passé en argument.
                  </p>
                </div>
              </div>
            </div>
          </div>
        `,
        examples: `
          <div class="space-y-6">
            <div class="bg-gray-900 rounded-xl p-5 overflow-hidden">
              <div class="flex items-center justify-between mb-4">
                <div class="text-sm font-semibold text-gray-300">Exemple : Destructuring avancé</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple13')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple13">// DESTRUCTURING D'OBJETS
const utilisateur = {
  nom: "Alice",
  age: 25,
  email: "alice@email.com",
  adresse: {
    ville: "Paris",
    codePostal: "75000"
  }
};

// Extraction basique
const { nom, age } = utilisateur;

// Alias (renommer)
const { nom: userName, age: userAge } = utilisateur;

// Valeurs par défaut
const { nom, ville = "Inconnue" } = utilisateur;

// Nested destructuring
const { adresse: { ville, codePostal } } = utilisateur;

// Extraction de plusieurs niveaux
const { nom, adresse: { ville } } = utilisateur;

// Rest operator
const { nom, ...autres } = utilisateur;
// autres = { age: 25, email: "...", adresse: {...} }

// DESTRUCTURING DE TABLEAUX
const nombres = [1, 2, 3, 4, 5];

// Extraction basique
const [premier, deuxieme] = nombres;

// Ignorer des éléments
const [premier, , troisieme] = nombres;

// Rest operator
const [premier, ...reste] = nombres;

// Valeurs par défaut
const [a = 0, b = 0] = []; // a=0, b=0

// Échanger des variables (sans variable temporaire)
let x = 1, y = 2;
[x, y] = [y, x]; // x=2, y=1

// DESTRUCTURING DANS LES PARAMÈTRES DE FONCTION
function afficherUtilisateur({ nom, age, ville = "Inconnue" }) {
  console.log(\`\${nom}, \${age} ans, \${ville}\`);
}

afficherUtilisateur(utilisateur); // "Alice, 25 ans, Paris"

// Avec tableau
function getPremierEtDernier([premier, ...reste]) {
  const dernier = reste.pop();
  return [premier, dernier];
}

// DESTRUCTURING D'OBJETS IMBRIQUÉS COMPLEXES
const data = {
  user: {
    info: {
      name: "Bob",
      details: {
        age: 30,
        job: "Dev"
      }
    }
  },
  settings: {
    theme: "dark"
  }
};

const {
  user: {
    info: {
      name,
      details: { age, job }
    }
  },
  settings: { theme }
} = data;

// DESTRUCTURING AVEC FONCTIONS QUI RETOURNENT DES TABLEAUX/OBJETS
function getCoordonnees() {
  return [10, 20, 30];
}

const [x, y, z] = getCoordonnees();

function getUser() {
  return { nom: "Charlie", age: 35 };
}

const { nom, age } = getUser();</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Astuce : Utilisez le destructuring pour rendre votre code plus lisible et éviter les répétitions comme <code>obj.prop</code></p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "Destructuring d'objets",
          "Destructuring de tableaux",
          "Valeurs par défaut",
          "Alias et nested destructuring"
        ],
        quiz: [
          {
            question: 'Comment extraire la propriété "nom" d\'un objet en la renommant en "userName" ?',
            options: ['const { nom: userName } = obj', 'const { userName = nom } = obj', 'const { nom as userName } = obj', 'const userName = obj.nom'],
            correct: 0,
            explanation: 'La syntaxe correcte est : const { nom: userName } = obj'
          },
          {
            question: 'Comment ignorer le deuxième élément d\'un tableau lors du destructuring ?',
            options: ['const [a, skip, c] = arr', 'const [a, , c] = arr', 'const [a, null, c] = arr', 'const [a, _ , c] = arr'],
            correct: 1,
            explanation: 'Utilisez une virgule vide : const [a, , c] = arr'
          },
          {
            question: 'Quel opérateur utiliser pour collecter le reste des propriétés lors du destructuring d\'objet ?',
            options: ['...rest', '...others', '...remaining', 'Toutes ces syntaxes fonctionnent avec ...'],
            correct: 3,
            explanation: 'L\'opérateur rest (...) peut être utilisé avec n\'importe quel nom de variable : ...rest, ...autres, etc.'
          }
        ]
      },
      {
        id: "2.7",
        title: "Spread operator",
        description: "... pour copier, fusionner et passer des arguments",
        readTime: "12 min",
        unlocked: false,
        completed: false,
        difficulty: "intermédiaire",
        icon: "📤",
        examplesCount: 3,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">📤 Spread Operator (...) & Rest Parameters</h3>
            <p class="text-gray-700 leading-relaxed">
              L'opérateur spread (...) permet d'étendre les éléments d'un itérable (tableau, objet) dans des endroits où des éléments ou des paires clé-valeur sont attendus.
            </p>
            
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <h4 class="font-bold text-blue-700 mb-3">Copie</h4>
                <pre class="text-xs bg-white p-3 rounded"><code>const arr2 = [...arr1];
const obj2 = {...obj1};</code></pre>
                <p class="text-sm text-gray-600 mt-2">Copie superficielle</p>
              </div>
              
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <h4 class="font-bold text-green-700 mb-3">Fusion</h4>
                <pre class="text-xs bg-white p-3 rounded"><code>const fusion = [...a, ...b];
const obj = {...a, ...b};</code></pre>
                <p class="text-sm text-gray-600 mt-2">Combine plusieurs</p>
              </div>
              
              <div class="bg-purple-50 p-5 rounded-xl border border-purple-200">
                <h4 class="font-bold text-purple-700 mb-3">Arguments</h4>
                <pre class="text-xs bg-white p-3 rounded"><code>function sum(...args) {
  // args est un tableau
}</code></pre>
                <p class="text-sm text-gray-600 mt-2">Rest parameters</p>
              </div>
            </div>
            
            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-yellow-700">
                    <strong class="font-bold">Important :</strong> Le spread operator crée des copies superficielles. Pour les objets imbriqués, utilisez des techniques de copie profonde.
                  </p>
                </div>
              </div>
            </div>
          </div>
        `,
        examples: `
          <div class="space-y-6">
            <div class="bg-gray-900 rounded-xl p-5 overflow-hidden">
              <div class="flex items-center justify-between mb-4">
                <div class="text-sm font-semibold text-gray-300">Exemple : Spread operator en action</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple14')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple14">// SPREAD AVEC LES TABLEAUX
const fruits = ["🍎", "🍌"];
const legumes = ["🥕", "🥦"];

// Copie d'un tableau
const fruitsCopy = [...fruits]; // ["🍎", "🍌"]

// Fusion de tableaux
const nourriture = [...fruits, ...legumes]; // ["🍎", "🍌", "🥕", "🥦"]

// Ajout d'éléments
const plusDeFruits = ["🍊", ...fruits, "🍇"]; // ["🍊", "🍎", "🍌", "🍇"]

// Convertir une chaîne en tableau
const lettres = [..."hello"]; // ["h", "e", "l", "l", "o"]

// SPREAD AVEC LES OBJETS
const utilisateur = {
  nom: "Alice",
  age: 25
};

const preferences = {
  theme: "dark",
  lang: "fr"
};

// Copie d'objet
const utilisateurCopy = { ...utilisateur };

// Fusion d'objets
const profil = { ...utilisateur, ...preferences };
// { nom: "Alice", age: 25, theme: "dark", lang: "fr" }

// Surcharge de propriétés
const maj = { ...utilisateur, age: 26 };
// { nom: "Alice", age: 26 } (age est écrasé)

// Ajout de propriétés
const avecEmail = { ...utilisateur, email: "test@email.com" };

// REST PARAMETERS DANS LES FONCTIONS
function somme(...nombres) {
  return nombres.reduce((acc, n) => acc + n, 0);
}

console.log(somme(1, 2, 3, 4)); // 10

function logNoms(premier, deuxieme, ...autres) {
  console.log("Premier:", premier);
  console.log("Deuxieme:", deuxieme);
  console.log("Autres:", autres);
}

logNoms("Alice", "Bob", "Charlie", "David");
// Premier: Alice
// Deuxieme: Bob
// Autres: ["Charlie", "David"]

// SPREAD POUR PASSER DES ARGUMENTS
const nombres = [1, 2, 3, 4];
console.log(Math.max(...nombres)); // 4

function saluer(nom, age) {
  return \`Bonjour \${nom}, vous avez \${age} ans\`;
}

const data = ["Alice", 25];
console.log(saluer(...data)); // "Bonjour Alice, vous avez 25 ans"

// CAS PRATIQUES
// 1. Cloner un tableau pour éviter les mutations
const original = [1, 2, 3];
const clone = [...original];
clone.push(4); // n'affecte pas original

// 2. Créer un nouvel objet avec mise à jour
const personne = { nom: "Bob", age: 30 };
const personneMaj = { ...personne, age: 31 };

// 3. Fusionner plusieurs objets
const defaults = { theme: "light", lang: "en" };
const userPrefs = { theme: "dark" };
const config = { ...defaults, ...userPrefs }; // { theme: "dark", lang: "en" }

// 4. Convertir NodeList/arguments en tableau
function convertirEnTableau(...args) {
  return args;
}

// 5. Créer des tableaux à partir d'itérables
const set = new Set([1, 2, 3]);
const arrFromSet = [...set]; // [1, 2, 3]

// LIMITATIONS
const objA = { x: { y: 1 } };
const objB = { ...objA };
objB.x.y = 2; // Modifie aussi objA.x.y ! (copie superficielle)</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Pour les copies profondes d'objets imbriqués, utilisez : <code class="bg-gray-800 px-1 rounded">JSON.parse(JSON.stringify(obj))</code> ou une librairie comme Lodash</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "Copie de tableaux/objets",
          "Fusion d'objets",
          "Passage d'arguments",
          "Rest parameters"
        ],
        quiz: [
          {
            question: 'Que fait l\'opérateur spread (...) avec un tableau ?',
            options: ['Le transforme en objet', 'Étend ses éléments individuellement', 'Le convertit en chaîne', 'Le trie'],
            correct: 1,
            explanation: 'L\'opérateur spread étend les éléments d\'un tableau (ou propriétés d\'un objet) individuellement.'
          },
          {
            question: 'Quelle est la différence entre spread operator et rest parameters ?',
            options: ['Aucune différence', 'Spread étend, rest collecte', 'Rest étend, spread collecte', 'Ils sont interchangeables'],
            correct: 1,
            explanation: 'Spread étend les éléments d\'un itérable, alors que rest collecte plusieurs éléments dans un tableau.'
          },
          {
            question: 'Que se passe-t-il quand on fusionne deux objets avec des propriétés du même nom ?',
            options: ['Erreur', 'La première est conservée', 'La dernière est conservée', 'Les deux sont conservées dans un tableau'],
            correct: 2,
            explanation: 'Quand des propriétés ont le même nom, la dernière valeur (l\'objet le plus à droite) écrase les précédentes.'
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "NIVEAU 3",
    subtitle: "DOM & Navigateur",
    color: "orange",
    icon: "🟠",
    chapters: [
      {
        id: "3.1",
        title: "Le DOM",
        description: "Document Object Model et manipulation d'éléments HTML",
        readTime: "22 min",
        unlocked: false,
        completed: false,
        difficulty: "intermédiaire",
        icon: "🌳",
        examplesCount: 4,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">🌳 Le DOM (Document Object Model)</h3>
            <p class="text-gray-700 leading-relaxed">
              Le DOM est une interface de programmation pour les documents HTML et XML. Il représente la page sous forme d'arbre de nœuds que JavaScript peut manipuler.
            </p>
            
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 class="font-bold text-blue-700 mb-3">Structure en arbre du DOM</h4>
              <div class="text-center">
                <div class="inline-block bg-white p-4 rounded-lg border border-gray-300">
                  <div class="font-bold text-gray-800 mb-2">document (racine)</div>
                  <div class="text-gray-600 mb-1">↓</div>
                  <div class="font-bold text-gray-800 mb-2">html</div>
                  <div class="flex justify-center gap-8">
                    <div class="text-center">
                      <div class="font-bold text-gray-800 mb-1">head</div>
                      <div class="text-sm text-gray-600">title, meta, link</div>
                    </div>
                    <div class="text-center">
                      <div class="font-bold text-gray-800 mb-1">body</div>
                      <div class="text-sm text-gray-600">div, p, h1, etc.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <h4 class="font-bold text-green-700 mb-3">Types de nœuds</h4>
                <ul class="text-sm text-gray-700 space-y-2">
                  <li>• Element (balises)</li>
                  <li>• Text (texte)</li>
                  <li>• Comment (commentaires)</li>
                  <li>• Document (racine)</li>
                </ul>
              </div>
              
              <div class="bg-yellow-50 p-5 rounded-xl border border-yellow-200">
                <h4 class="font-bold text-yellow-700 mb-3">Relation entre nœuds</h4>
                <ul class="text-sm text-gray-700 space-y-2">
                  <li>• parentNode</li>
                  <li>• childNodes</li>
                  <li>• firstChild/lastChild</li>
                  <li>• nextSibling/previousSibling</li>
                </ul>
              </div>
              
              <div class="bg-purple-50 p-5 rounded-xl border border-purple-200">
                <h4 class="font-bold text-purple-700 mb-3">Propriétés communes</h4>
                <ul class="text-sm text-gray-700 space-y-2">
                  <li>• nodeType</li>
                  <li>• nodeName</li>
                  <li>• nodeValue</li>
                  <li>• textContent</li>
                </ul>
              </div>
            </div>
            
            <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-red-700">
                    <strong class="font-bold">Performance :</strong> Les manipulations fréquentes du DOM sont coûteuses. Regroupez les modifications ou utilisez DocumentFragment pour les changements multiples.
                  </p>
                </div>
              </div>
            </div>
          </div>
        `,
        examples: `
          <div class="space-y-6">
            <div class="bg-gray-900 rounded-xl p-5 overflow-hidden">
              <div class="flex items-center justify-between mb-4">
                <div class="text-sm font-semibold text-gray-300">Exemple : Navigation dans l'arbre DOM</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" @click="copyCode('exemple15')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple15">// HTML de référence :
// &lt;div id="container"&gt;
//   &lt;h1&gt;Titre&lt;/h1&gt;
//   &lt;p&gt;Paragraphe &lt;span&gt;important&lt;/span&gt;&lt;/p&gt;
//   &lt;ul&gt;
//     &lt;li&gt;Item 1&lt;/li&gt;
//     &lt;li&gt;Item 2&lt;/li&gt;
//   &lt;/ul&gt;
// &lt;/div&gt;

const container = document.getElementById('container');

// NAVIGATION VERS LE HAUT (parents)
console.log(container.parentNode); // body
console.log(container.parentElement); // body

// NAVIGATION VERS LE BAS (enfants)
console.log(container.childNodes); // NodeList [text, h1, text, p, text, ul, text]
console.log(container.children); // HTMLCollection [h1, p, ul]
console.log(container.firstChild); // #text (espace)
console.log(container.firstElementChild); // h1
console.log(container.lastElementChild); // ul

// NAVIGATION LATÉRALE (frères et sœurs)
const titre = container.querySelector('h1');
console.log(titre.nextSibling); // #text (espace)
console.log(titre.nextElementSibling); // p
console.log(titre.previousElementSibling); // null

// PROPRIÉTÉS DES NŒUDS
const paragraphe = container.querySelector('p');
console.log(paragraphe.nodeType); // 1 (ELEMENT_NODE)
console.log(paragraphe.nodeName); // "P"
console.log(paragraphe.textContent); // "Paragraphe important"

const texte = paragraphe.firstChild;
console.log(texte.nodeType); // 3 (TEXT_NODE)
console.log(texte.nodeValue); // "Paragraphe "

// NAVIGATION DANS LES DESCENDANTS
const liste = container.querySelector('ul');
const items = liste.querySelectorAll('li');
console.log(items.length); // 2

// PARCOURS DE L'ARBRE
function parcourirDOM(node, niveau = 0) {
  const indent = '  '.repeat(niveau);
  console.log(indent + node.nodeName);
  
  for (const child of node.childNodes) {
    parcourirDOM(child, niveau + 1);
  }
}

// parcourirDOM(container);

// DOCUMENTFRAGMENT POUR PERFORMANCE
const fragment = document.createDocumentFragment();

for (let i = 0; i < 100; i++) {
  const div = document.createElement('div');
  div.textContent = \`Item \${i}\`;
  fragment.appendChild(div);
}

// Une seule manipulation DOM
container.appendChild(fragment);

// VÉRIFICATION DES TYPES DE NŒUDS
console.log(Node.ELEMENT_NODE); // 1
console.log(Node.TEXT_NODE); // 3
console.log(Node.COMMENT_NODE); // 8
console.log(Node.DOCUMENT_NODE); // 9

function afficherInfoNoeud(node) {
  const types = {
    1: 'Element',
    3: 'Text',
    8: 'Comment',
    9: 'Document'
  };
  
  console.log(\`\${node.nodeName} - \${types[node.nodeType] || 'Autre'}\`);
}</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Utilisez <code class="bg-gray-800 px-1 rounded">Element</code> (firstElementChild, children) plutôt que <code class="bg-gray-800 px-1 rounded">Node</code> pour ignorer les nœuds texte et commentaires</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "Arborescence du DOM",
          "Sélection d'éléments",
          "Navigation entre nodes",
          "Performance des manipulations"
        ],
        quiz: [
          {
            question: 'Quelle propriété retourne uniquement les éléments enfants (sans les nœuds texte) ?',
            options: ['childNodes', 'children', 'firstChild', 'descendants'],
            correct: 1,
            explanation: 'children retourne une HTMLCollection des éléments enfants, alors que childNodes inclut tous les types de nœuds.'
          },
          {
            question: 'Quel est le type de nœud (nodeType) d\'un élément HTML ?',
            options: ['1', '3', '8', '9'],
            correct: 0,
            explanation: 'Les éléments ont un nodeType de 1 (Node.ELEMENT_NODE).'
          },
          {
            question: 'Pourquoi utiliser DocumentFragment pour des insertions multiples ?',
            options: ['Pour meilleure lisibilité', 'Pour améliorer les performances', 'Pour éviter les erreurs', 'Pour supporter les anciens navigateurs'],
            correct: 1,
            explanation: 'DocumentFragment permet de regrouper plusieurs manipulations DOM en une seule, améliorant ainsi les performances.'
          }
        ]
      }
    ]
  }
];

export const getChapterById = (chapterId) => {
  for (const level of COURSE_LEVELS) {
    const chapter = level.chapters.find(ch => ch.id === chapterId);
    if (chapter) return { ...chapter, level };
  }
  return null;
};

export const getProgress = (levels) => {
  const totalChapters = levels.reduce((sum, level) => sum + level.chapters.length, 0);
  const completedChapters = levels.reduce((sum, level) => 
    sum + level.chapters.filter(ch => ch.completed).length, 0
  );
  
  return {
    total: totalChapters,
    completed: completedChapters,
    percentage: totalChapters > 0 ? Math.round((completedChapters / totalChapters) * 100) : 0
  };
};