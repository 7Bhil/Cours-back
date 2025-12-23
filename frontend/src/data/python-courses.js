// data/python-courses.js

export const COURSE_LEVELS = [
  {
    id: 1,
    name: "NIVEAU 1",
    subtitle: "Bases indispensables",
    color: "emerald",
    icon: "🐍",
    chapters: [
      {
        id: "1.1",
        title: "Introduction à Python",
        description: "Histoire, écosystème et premières lignes de code",
        readTime: "15 min",
        unlocked: true,
        completed: false,
        difficulty: "débutant",
        icon: "🚀",
        examplesCount: 3,
        content: `
          <div class="space-y-6">
            <div class="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-2xl border border-blue-100">
              <h3 class="text-xl font-bold text-gray-900 mb-4">🐍 Le Langage de la Simplicité</h3>
              <p class="text-gray-700 leading-relaxed">
                Créé en 1991 par <strong class="text-green-600">Guido van Rossum</strong>, 
                Python est aujourd'hui l'un des langages de programmation les plus populaires et les plus utilisés au monde.
              </p>
            </div>

            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <div class="text-3xl mb-3">💻</div>
                <h4 class="font-bold text-gray-900 mb-2">Web</h4>
                <p class="text-sm text-gray-600">Django, Flask</p>
              </div>
              <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <div class="text-3xl mb-3">📊</div>
                <h4 class="font-bold text-gray-900 mb-2">Data Science</h4>
                <p class="text-sm text-gray-600">Pandas, NumPy</p>
              </div>
              <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <div class="text-3xl mb-3">🤖</div>
                <h4 class="font-bold text-gray-900 mb-2">IA/ML</h4>
                <p class="text-sm text-gray-600">TensorFlow, PyTorch</p>
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
                    <strong class="font-bold">💡 Saviez-vous ?</strong> Le nom Python vient de la série télévisée britannique "Monty Python" que Guido van Rossum appréciait.
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
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" onclick="copyCode('exemple1')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple1">print("🎉 Bonjour le monde !")</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Affiche un message dans la console</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "Créé en 1991 par Guido van Rossum",
          "Syntaxe simple et lisible",
          "Multi-paradigme (objet, fonctionnel)",
          "Grande communauté et bibliothèques"
        ],
        quiz: [
          {
            question: "En quelle année Python a-t-il été créé ?",
            options: ["1989", "1991", "1995", "2000"],
            correct: 1,
            explanation: "Python a été créé en 1991 par Guido van Rossum."
          },
          {
            question: "Qui a créé Python ?",
            options: ["Linus Torvalds", "Guido van Rossum", "Brendan Eich", "James Gosling"],
            correct: 1,
            explanation: "Python a été créé par Guido van Rossum."
          },
          {
            question: "D'où vient le nom 'Python' ?",
            options: ["D'un serpent", "De la série Monty Python", "D'un animal mythologique", "D'un mot latin"],
            correct: 1,
            explanation: "Le nom Python vient de la série télévisée britannique 'Monty Python' que Guido van Rossum appréciait."
          }
        ]
      },
      {
        id: "1.2",
        title: "Installation et premiers pas",
        description: "Comment installer Python et exécuter votre premier script",
        readTime: "12 min",
        unlocked: false,
        completed: false,
        difficulty: "débutant",
        icon: "⚙️",
        examplesCount: 2,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">⚙️ Installation de Python</h3>
            <p class="text-gray-700 leading-relaxed">
              Pour commencer à programmer en Python, vous devez d'abord l'installer sur votre ordinateur.
            </p>
            
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <div class="text-3xl mb-3">1️⃣</div>
                <h4 class="font-bold text-gray-900 mb-2">Télécharger</h4>
                <p class="text-sm text-gray-600 mt-2">python.org</p>
              </div>
              <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <div class="text-3xl mb-3">2️⃣</div>
                <h4 class="font-bold text-gray-900 mb-2">Installer</h4>
                <p class="text-sm text-gray-600 mt-2">Suivre l'assistant</p>
              </div>
              <div class="p-5 rounded-xl border shadow-sm border-green-300 bg-green-50">
                <div class="text-3xl mb-3">✅</div>
                <h4 class="font-bold text-gray-900 mb-2">Vérifier</h4>
                <pre class="text-xs bg-gray-100 p-2 rounded"><code>python --version</code></pre>
                <p class="text-sm text-gray-600 mt-2">Python 3.x.x</p>
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
                    <strong class="font-bold">💡 Bonne pratique :</strong> Utilisez Python 3 (la version actuelle). Python 2 n'est plus maintenue depuis 2020.
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
                <div class="text-sm font-semibold text-gray-300">Exemple : Vérification de l'installation</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" onclick="copyCode('exemple2')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple2"># Dans votre terminal/console :
python --version
# Devrait afficher : Python 3.x.x

# Pour lancer l'interpréteur Python :
python

# Pour exécuter un fichier Python :
python mon_script.py</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Sur certains systèmes, utilisez <code class="bg-gray-800 px-1 rounded">python3</code> au lieu de <code class="bg-gray-800 px-1 rounded">python</code></p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          'Téléchargez depuis python.org',
          'Utilisez Python 3 (pas Python 2)',
          'Vérifiez avec python --version',
          'Testez avec l\'interpréteur interactif'
        ],
        quiz: [
          {
            question: 'Quelle version de Python doit-on utiliser aujourd\'hui ?',
            options: ['Python 2', 'Python 3', 'Les deux sont équivalentes', 'Python 4'],
            correct: 1,
            explanation: 'Il faut utiliser Python 3. Python 2 n\'est plus maintenue depuis 2020.'
          },
          {
            question: 'Comment vérifier la version de Python installée ?',
            options: ['python -v', 'python --version', 'python check', 'python info'],
            correct: 1,
            explanation: 'La commande correcte est python --version'
          },
          {
            question: 'Comment exécuter un script Python nommé "app.py" ?',
            options: ['run app.py', 'python app.py', 'execute app.py', 'start app.py'],
            correct: 1,
            explanation: 'On exécute un script Python avec la commande python nom_du_fichier.py'
          }
        ]
      },
      {
        id: "1.3",
        title: "Variables et types de données",
        description: "Déclarer des variables et comprendre les types de base en Python",
        readTime: "18 min",
        unlocked: false,
        completed: false,
        difficulty: "débutant",
        icon: "🧠",
        examplesCount: 4,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">🧠 Variables et Types en Python</h3>
            <p class="text-gray-700 leading-relaxed">
              En Python, les variables sont créées lorsqu'on leur assigne une valeur. Python est un langage à typage dynamique.
            </p>
            
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <div class="text-3xl mb-3">🔤</div>
                <h4 class="font-bold text-gray-900 mb-2">str</h4>
                <p class="text-sm text-gray-600">Texte (chaîne de caractères)</p>
                <div class="mt-3">
                  <span class="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">"Bonjour"</span>
                </div>
              </div>
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <div class="text-3xl mb-3">🔢</div>
                <h4 class="font-bold text-gray-900 mb-2">int/float</h4>
                <p class="text-sm text-gray-600">Nombres entiers et décimaux</p>
                <div class="mt-3">
                  <span class="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs rounded">42, 3.14</span>
                </div>
              </div>
              <div class="bg-purple-50 p-5 rounded-xl border border-purple-200">
                <div class="text-3xl mb-3">✅</div>
                <h4 class="font-bold text-gray-900 mb-2">bool</h4>
                <p class="text-sm text-gray-600">Booléens (vrai/faux)</p>
                <div class="mt-3">
                  <span class="inline-block px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">True, False</span>
                </div>
              </div>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <h4 class="font-bold text-gray-900 mb-3">✅ Pythonique</h4>
                <pre class="text-sm bg-gray-900 text-gray-100 p-4 rounded-lg"><code># Typage dynamique
nom = "Alice"      # str
age = 25           # int
est_etudiant = True # bool</code></pre>
              </div>
              <div class="bg-yellow-50 p-5 rounded-xl border border-yellow-200">
                <h4 class="font-bold text-gray-900 mb-3">⚠️ Attention</h4>
                <pre class="text-sm bg-gray-900 text-gray-100 p-4 rounded-lg"><code># Pas de déclaration de type
# Pas de mot-clé var/let/const
# Python devine le type !</code></pre>
              </div>
            </div>
          </div>
        `,
        examples: `
          <div class="space-y-6">
            <div class="bg-gray-900 rounded-xl p-5 overflow-hidden">
              <div class="flex items-center justify-between mb-4">
                <div class="text-sm font-semibold text-gray-300">Exemple : Variables et types</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" onclick="copyCode('exemple3')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple3"># Déclaration de variables
nom = "Alice"           # str (chaîne)
age = 25                # int (entier)
taille = 1.75           # float (décimal)
est_etudiant = True     # bool (booléen)

# Affichage et type
print(nom)              # Alice
print(type(nom))        # &lt;class 'str'&gt;
print(type(age))        # &lt;class 'int'&gt;
print(type(taille))     # &lt;class 'float'&gt;
print(type(est_etudiant)) # &lt;class 'bool'&gt;

# Modification
age = 26                # Réassignation
print(age)              # 26

# Noms de variables valides
variable_1 = "valide"
_variable = "valide"
variablePython = "valide"

# Noms de variables invalides
# 1variable = "invalide"  # Ne commence pas par un chiffre
# var-test = "invalide"   # Contient un tiret
# class = "invalide"      # Mot-clé réservé

# Convention de nommage (PEP 8)
variable_snake_case = "recommandé"  # Pour variables/fonctions
CONSTANTE_MAJUSCULES = "constante"  # Pour constantes
ClassePascalCase = "classe"         # Pour classes</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Python utilise le <code class="bg-gray-800 px-1 rounded">snake_case</code> (tiret du bas) pour les noms de variables et fonctions</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          'Typage dynamique (pas de déclaration de type)',
          'Types de base : str, int, float, bool',
          'Convention snake_case pour les noms',
          'Pas de mot-clé var/let/const'
        ],
        quiz: [
          {
            question: 'Quel est le type de la valeur 3.14 en Python ?',
            options: ['int', 'float', 'double', 'decimal'],
            correct: 1,
            explanation: 'En Python, les nombres décimaux sont de type float.'
          },
          {
            question: 'Quelle convention de nommage est recommandée pour les variables en Python ?',
            options: ['camelCase', 'PascalCase', 'snake_case', 'kebab-case'],
            correct: 2,
            explanation: 'Python recommande le snake_case (mots séparés par des underscores) pour les variables et fonctions.'
          },
          {
            question: 'Comment connaître le type d\'une variable en Python ?',
            options: ['typeof(x)', 'type(x)', 'x.type()', 'get_type(x)'],
            correct: 1,
            explanation: 'La fonction type() retourne le type d\'une variable.'
          }
        ]
      },
      {
        id: "1.4",
        title: "Opérateurs",
        description: "Opérateurs arithmétiques, logiques, de comparaison et d'affectation",
        readTime: "20 min",
        unlocked: false,
        completed: false,
        difficulty: "débutant",
        icon: "⚡",
        examplesCount: 5,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">⚡ Opérateurs Python</h3>
            <p class="text-gray-700 leading-relaxed">
              Les opérateurs permettent de manipuler des valeurs. Python propose différents types d'opérateurs.
            </p>
            
            <div class="grid md:grid-cols-4 gap-3">
              <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 class="font-bold text-blue-700 mb-2">Arithmétiques</h4>
                <p class="text-sm text-gray-600">+ - * / // % **</p>
              </div>
              <div class="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 class="font-bold text-green-700 mb-2">Comparaison</h4>
                <p class="text-sm text-gray-600">== != &lt; &gt; &lt;= &gt;=</p>
              </div>
              <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 class="font-bold text-yellow-700 mb-2">Logiques</h4>
                <p class="text-sm text-gray-600">and or not</p>
              </div>
              <div class="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 class="font-bold text-purple-700 mb-2">Affectation</h4>
                <p class="text-sm text-gray-600">= += -= *= /=</p>
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
                    <strong class="font-bold">Attention :</strong> En Python, <code>is</code> et <code>==</code> sont différents. <code>is</code> vérifie l'identité (même objet), <code>==</code> vérifie l'égalité (même valeur).
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
                <div class="text-sm font-semibold text-gray-300">Exemple : Opérateurs en détail</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" onclick="copyCode('exemple4')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple4"># Opérateurs arithmétiques
print(10 + 5)    # 15 (addition)
print(10 - 5)    # 5 (soustraction)
print(10 * 5)    # 50 (multiplication)
print(10 / 3)    # 3.333... (division)
print(10 // 3)   # 3 (division entière)
print(10 % 3)    # 1 (modulo - reste)
print(2 ** 3)    # 8 (exposant - puissance)

# Opérateurs de comparaison
print(5 == 5)    # True (égal)
print(5 != 3)    # True (différent)
print(5 > 3)     # True (supérieur)
print(5 < 3)     # False (inférieur)
print(5 >= 5)    # True (supérieur ou égal)
print(5 <= 3)    # False (inférieur ou égal)

# Opérateurs logiques
age = 25
has_license = True

print(age >= 18 and has_license)  # True (ET)
print(age >= 18 or has_license)   # True (OU)
print(not has_license)            # False (NON)

# Opérateurs d'affectation
x = 10
x += 5      # x = x + 5 → 15
x -= 3      # x = x - 3 → 12
x *= 2      # x = x * 2 → 24
x /= 4      # x = x / 4 → 6.0
x //= 2     # x = x // 2 → 3.0

# is vs ==
a = [1, 2, 3]
b = [1, 2, 3]
c = a

print(a == b)   # True (mêmes valeurs)
print(a is b)   # False (objets différents)
print(a is c)   # True (même objet)

# Opérateur in (appartenance)
liste = [1, 2, 3, 4, 5]
print(3 in liste)     # True
print(6 in liste)     # False
print(3 not in liste) # False

# Chaînage de comparaisons
x = 5
print(1 < x < 10)     # True (équivaut à 1 < x and x < 10)
print(10 <= x <= 20)  # False</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Python permet le chaînage de comparaisons : <code class="bg-gray-800 px-1 rounded">1 < x < 10</code> est valide</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "Division entière (//) vs division normale (/)",
          "Opérateurs logiques : and, or, not",
          "Différence entre is et ==",
          "Chaînage de comparaisons possible"
        ],
        quiz: [
          {
            question: 'Quel opérateur donne le reste d\'une division ?',
            options: ['/', '//', '%', '**'],
            correct: 2,
            explanation: 'L\'opérateur % (modulo) donne le reste de la division.'
          },
          {
            question: 'Quelle est la différence entre == et is ?',
            options: ['Aucune différence', '== compare les valeurs, is compare les objets', 'is compare les valeurs, == compare les objets', 'is est pour les chaînes seulement'],
            correct: 1,
            explanation: '== vérifie si les valeurs sont égales, is vérifie si c\'est le même objet en mémoire.'
          },
          {
            question: 'Comment écrire "x est compris entre 1 et 10" en Python ?',
            options: ['1 < x and x < 10', '1 < x < 10', 'Les deux sont valides', 'Aucune des deux'],
            correct: 2,
            explanation: 'Les deux syntaxes sont valides en Python. 1 < x < 10 est plus concise et lisible.'
          }
        ]
      },
      {
        id: "1.5",
        title: "Structures de contrôle",
        description: "Conditions (if/elif/else) pour contrôler le flux d'exécution",
        readTime: "16 min",
        unlocked: false,
        completed: false,
        difficulty: "débutant",
        icon: "🎯",
        examplesCount: 3,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">🎯 Conditions en Python</h3>
            <p class="text-gray-700 leading-relaxed">
              Les structures conditionnelles permettent d'exécuter du code en fonction de certaines conditions.
            </p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <h4 class="font-bold text-blue-700 mb-3">if/elif/else</h4>
                <pre class="text-sm bg-white p-3 rounded"><code>if condition:
    # code si vrai
elif autre_condition:
    # code si autre vrai
else:
    # code si faux</code></pre>
                <p class="text-sm text-gray-600 mt-2">Structure complète</p>
              </div>
              
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <h4 class="font-bold text-green-700 mb-3">Conditions imbriquées</h4>
                <pre class="text-sm bg-white p-3 rounded"><code>if condition1:
    if condition2:
        # code imbriqué</code></pre>
                <p class="text-sm text-gray-600 mt-2">À utiliser avec modération</p>
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
                    <strong class="font-bold">Important :</strong> En Python, l'indentation (les espaces/tabulations) est obligatoire et détermine la structure du code. Utilisez 4 espaces par niveau.
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
                <div class="text-sm font-semibold text-gray-300">Exemple : Conditions pratiques</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" onclick="copyCode('exemple5')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple5"># Structure if/elif/else
age = 20

if age < 13:
    print("Enfant")
elif age < 18:
    print("Adolescent")
else:
    print("Adulte")

# Conditions multiples
temperature = 25
pluie = False

if temperature > 30 and not pluie:
    print("Idéal pour la plage")
elif temperature > 20 or not pluie:
    print("Bonne journée")
else:
    print("Restez au chaud")

# Conditions imbriquées
note = 85

if note >= 60:
    if note >= 90:
        print("Excellent ! A")
    elif note >= 80:
        print("Très bien ! B")
    elif note >= 70:
        print("Bien ! C")
    else:
        print("Passable ! D")
else:
    print("Échec")

# Opérateur ternaire (expression conditionnelle)
age = 18
statut = "majeur" if age >= 18 else "mineur"
print(statut)  # majeur

# Conditions avec chaînes
jour = "lundi"

if jour in ["lundi", "mardi", "mercredi", "jeudi", "vendredi"]:
    print("Jour de travail")
elif jour in ["samedi", "dimanche"]:
    print("Week-end !")
else:
    print("Jour invalide")

# Vérification de None
valeur = None

if valeur is None:
    print("Valeur non définie")
elif valeur:
    print("Valeur vraie (truthy)")
else:
    print("Valeur fausse (falsy)")</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Les valeurs <code class="bg-gray-800 px-1 rounded">None</code>, <code class="bg-gray-800 px-1 rounded">0</code>, <code class="bg-gray-800 px-1 rounded">""</code>, <code class="bg-gray-800 px-1 rounded">[]</code>, <code class="bg-gray-800 px-1 rounded">{}</code> sont considérées comme "falsy"</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "Indentation obligatoire (4 espaces)",
          "elif au lieu de else if",
          "Opérateur ternaire : x if condition else y",
          "Valeurs truthy/falsy"
        ],
        quiz: [
          {
            question: 'Quel mot-clé utilise Python pour "sinon si" ?',
            options: ['else if', 'elseif', 'elif', 'elsif'],
            correct: 2,
            explanation: 'Python utilise elif pour "else if".'
          },
          {
            question: 'Combien d\'espaces recommande PEP 8 pour l\'indentation ?',
            options: ['2 espaces', '4 espaces', '1 tabulation', '8 espaces'],
            correct: 1,
            explanation: 'PEP 8, le guide de style Python, recommande 4 espaces par niveau d\'indentation.'
          },
          {
            question: 'Comment écrire un opérateur ternaire en Python ?',
            options: ['condition ? vrai : faux', 'if condition then vrai else faux', 'vrai if condition else faux', 'condition if vrai else faux'],
            correct: 2,
            explanation: 'La syntaxe est : valeur_si_vrai if condition else valeur_si_faux'
          }
        ]
      },
      {
        id: "1.6",
        title: "Boucles",
        description: "for et while pour répéter des instructions",
        readTime: "14 min",
        unlocked: false,
        completed: false,
        difficulty: "débutant",
        icon: "🔄",
        examplesCount: 4,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">🔄 Boucles en Python</h3>
            <p class="text-gray-700 leading-relaxed">
              Les boucles permettent de répéter du code. Python propose deux types de boucles principales.
            </p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <h4 class="font-bold text-blue-700 mb-3">for</h4>
                <pre class="text-sm bg-white p-3 rounded"><code>for element in sequence:
    # traiter chaque élément</code></pre>
                <p class="text-sm text-gray-600 mt-2">Itération sur séquences</p>
              </div>
              
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <h4 class="font-bold text-green-700 mb-3">while</h4>
                <pre class="text-sm bg-white p-3 rounded"><code>while condition:
    # répéter tant que vrai</code></pre>
                <p class="text-sm text-gray-600 mt-2">Répétition conditionnelle</p>
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
                    <strong class="font-bold">Astuce :</strong> Utilisez <code>range()</code> avec la boucle <code>for</code> pour itérer un nombre spécifique de fois.
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
                <div class="text-sm font-semibold text-gray-300">Exemple : Boucles détaillées</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" onclick="copyCode('exemple6')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple6"># Boucle for avec range
for i in range(5):          # 0 à 4
    print(f"Itération {i}")

for i in range(1, 6):       # 1 à 5
    print(f"Numéro {i}")

for i in range(0, 10, 2):   # 0, 2, 4, 6, 8
    print(f"Pair: {i}")

# Boucle for sur liste
fruits = ["pomme", "banane", "orange"]
for fruit in fruits:
    print(f"J'aime les {fruits}")

# Avec enumerate (index et valeur)
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")

# Boucle while
compteur = 0
while compteur < 5:
    print(f"Compteur: {compteur}")
    compteur += 1

# break et continue
for i in range(10):
    if i == 3:
        continue  # Saute cette itération
    if i == 7:
        break     # Arrête la boucle
    print(i)

# Boucle while avec condition complexe
mot_de_passe = ""
while mot_de_passe != "python123":
    mot_de_passe = input("Entrez le mot de passe: ")
print("Accès autorisé !")

# Boucles imbriquées
for i in range(3):
    for j in range(3):
        print(f"({i}, {j})", end=" ")
    print()  # Nouvelle ligne

# else avec les boucles
for i in range(5):
    print(i)
else:
    print("Boucle terminée normalement")

for i in range(5):
    if i == 3:
        break
    print(i)
else:
    # Ne s'exécute pas car break interrompt
    print("Ce message n'apparaîtra pas")

# Boucle infinie (avec condition d'arrêt)
while True:
    reponse = input("Tapez 'quit' pour quitter: ")
    if reponse == 'quit':
        break
    print(f"Vous avez tapé: {reponse}")</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Les boucles <code class="bg-gray-800 px-1 rounded">for</code> peuvent avoir une clause <code class="bg-gray-800 px-1 rounded">else</code> qui s'exécute si la boucle se termine normalement (sans break)</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "for pour itérer sur séquences",
          "while pour conditions",
          "range() pour générer des nombres",
          "break et continue pour contrôler"
        ],
        quiz: [
          {
            question: 'Que fait range(5) ?',
            options: ['Génère [0, 1, 2, 3, 4, 5]', 'Génère [0, 1, 2, 3, 4]', 'Génère [1, 2, 3, 4, 5]', 'Génère 5 nombres aléatoires'],
            correct: 1,
            explanation: 'range(5) génère les nombres de 0 à 4 (5 nombres).'
          },
          {
            question: 'Quelle instruction permet de sauter à l\'itération suivante dans une boucle ?',
            options: ['break', 'continue', 'skip', 'next'],
            correct: 1,
            explanation: 'continue passe à l\'itération suivante, break arrête complètement la boucle.'
          },
          {
            question: 'Comment itérer sur une liste avec l\'index et la valeur ?',
            options: ['for i, value in list:', 'for i in enumerate(list):', 'for i, value in enumerate(list):', 'for (i, value) of list:'],
            correct: 2,
            explanation: 'enumerate(list) retourne des paires (index, valeur).'
          }
        ]
      },
      {
        id: "1.7",
        title: "Listes et tuples",
        description: "Collections ordonnées en Python",
        readTime: "18 min",
        unlocked: false,
        completed: false,
        difficulty: "débutant",
        icon: "📋",
        examplesCount: 5,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">📋 Listes et Tuples</h3>
            <p class="text-gray-700 leading-relaxed">
              Les listes et tuples sont des collections ordonnées d'éléments. La différence principale : les listes sont modifiables, les tuples non.
            </p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <h4 class="font-bold text-blue-700 mb-3">Listes []</h4>
                <div class="space-y-2">
                  <div class="flex items-center">
                    <div class="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                    <span class="text-sm">Modifiable (mutable)</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                    <span class="text-sm">Crochets []</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                    <span class="text-sm">Fonctions : append(), remove()</span>
                  </div>
                </div>
              </div>
              
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <h4 class="font-bold text-green-700 mb-3">Tuples ()</h4>
                <div class="space-y-2">
                  <div class="flex items-center">
                    <div class="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                    <span class="text-sm">Non modifiable (immutable)</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                    <span class="text-sm">Parenthèses ()</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                    <span class="text-sm">Pas de modification</span>
                  </div>
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
                    <strong class="font-bold">Règle générale :</strong> Utilisez des listes quand vous avez besoin de modifier la collection, des tuples quand les données sont constantes.
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
                <div class="text-sm font-semibold text-gray-300">Exemple : Listes et tuples</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" onclick="copyCode('exemple7')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple7"># LISTES - Modifiables
fruits = ["pomme", "banane", "orange"]
nombres = [1, 2, 3, 4, 5]
mixte = ["texte", 42, True, 3.14]

# Accès
print(fruits[0])      # pomme
print(fruits[-1])     # orange (dernier élément)

# Modification
fruits[1] = "kiwi"    # Remplace banane
print(fruits)         # ['pomme', 'kiwi', 'orange']

# Ajout/suppression
fruits.append("fraise")       # Ajoute à la fin
fruits.insert(1, "mangue")    # Insère à l'index 1
fruits.remove("pomme")        # Supprime l'élément
popped = fruits.pop()         # Supprime et retourne le dernier
popped_index = fruits.pop(0)  # Supprime à l'index 0

# TUPLE - Non modifiables
coordonnees = (48.8566, 2.3522)  # Paris
jours_semaine = ("lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche")

# Accès (comme les listes)
print(coordonnees[0])   # 48.8566
print(jours_semaine[2]) # mercredi

# Mais pas de modification !
# coordonnees[0] = 49.0  # ERREUR !

# Opérations communes
# Concaténation
liste1 = [1, 2, 3]
liste2 = [4, 5, 6]
liste_complete = liste1 + liste2  # [1, 2, 3, 4, 5, 6]

# Répétition
zeros = [0] * 5  # [0, 0, 0, 0, 0]

# Tranches (slicing)
nombres = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(nombres[2:5])    # [2, 3, 4] (indices 2 à 4)
print(nombres[:3])     # [0, 1, 2] (du début à 2)
print(nombres[5:])     # [5, 6, 7, 8, 9] (de 5 à la fin)
print(nombres[::2])    # [0, 2, 4, 6, 8] (un sur deux)
print(nombres[::-1])   # [9, 8, ... 0] (inverse)

# Méthodes utiles
nombres = [3, 1, 4, 1, 5, 9, 2, 6]
nombres.sort()                 # Trie sur place
nombres_trie = sorted(nombres) # Retourne une nouvelle liste triée
nombres.reverse()              # Inverse sur place
longueur = len(nombres)        # Taille
existe = 5 in nombres          # Vérifie l'appartenance

# Listes imbriquées (matrices)
matrice = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
print(matrice[1][2])  # 6 (ligne 1, colonne 2)

# Compréhension de liste
carres = [x**2 for x in range(10)]  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
pairs = [x for x in range(20) if x % 2 == 0]  # [0, 2, 4, ..., 18]</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Les compréhensions de liste sont une fonctionnalité puissante et pythonique pour créer des listes</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "Listes [] modifiables, tuples () non modifiables",
          "Tranches (slicing) pour extraire des sous-séquences",
          "Méthodes : append(), remove(), pop(), sort()",
          "Compréhensions de liste pour créer des listes"
        ],
        quiz: [
          {
            question: 'Quelle est la principale différence entre liste et tuple ?',
            options: ['Les listes sont plus rapides', 'Les tuples sont modifiables', 'Les listes sont modifiables, les tuples non', 'Les tuples ont plus de méthodes'],
            correct: 2,
            explanation: 'Les listes sont mutables (modifiables), les tuples sont immutables (non modifiables).'
          },
          {
            question: 'Comment obtenir les éléments d\'indices 2 à 4 d\'une liste ?',
            options: ['liste[2:4]', 'liste[2:5]', 'liste[2,5]', 'liste[2..4]'],
            correct: 1,
            explanation: 'liste[2:5] donne les éléments aux indices 2, 3 et 4 (5 exclu).'
          },
          {
            question: 'Quelle méthode ajoute un élément à la fin d\'une liste ?',
            options: ['add()', 'append()', 'insert()', 'push()'],
            correct: 1,
            explanation: 'La méthode append() ajoute un élément à la fin de la liste.'
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
        description: "Créer des fonctions réutilisables en Python",
        readTime: "20 min",
        unlocked: false,
        completed: false,
        difficulty: "intermédiaire",
        icon: "🎯",
        examplesCount: 4,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">🎯 Fonctions en Python</h3>
            <p class="text-gray-700 leading-relaxed">
              Les fonctions permettent de regrouper du code réutilisable. En Python, on utilise le mot-clé <code>def</code> pour définir une fonction.
            </p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <h4 class="font-bold text-blue-700 mb-3">Définition de base</h4>
                <pre class="text-sm bg-white p-3 rounded"><code>def nom_fonction(parametres):
    """Docstring (documentation)"""
    # corps de la fonction
    return valeur</code></pre>
                <p class="text-sm text-gray-600 mt-2">Mot-clé def + nom + paramètres</p>
              </div>
              
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <h4 class="font-bold text-green-700 mb-3">Appel</h4>
                <pre class="text-sm bg-white p-3 rounded"><code>resultat = nom_fonction(arguments)</code></pre>
                <p class="text-sm text-gray-600 mt-2">Nom + parenthèses + arguments</p>
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
                    <strong class="font-bold">Documentation :</strong> La première chaîne de caractères dans une fonction est la docstring. Elle documente la fonction et est accessible avec <code>help(nom_fonction)</code>.
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
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" onclick="copyCode('exemple8')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple8"># Fonction simple
def saluer(nom):
    """Affiche un message de salutation."""
    print(f"Bonjour {nom} !")

saluer("Alice")  # Bonjour Alice !

# Fonction avec retour
def ajouter(a, b):
    """Retourne la somme de deux nombres."""
    return a + b

resultat = ajouter(5, 3)
print(resultat)  # 8

# Fonction avec paramètres par défaut
def saluer_personne(nom, message="Bonjour"):
    """Saluer une personne avec un message personnalisable."""
    return f"{message} {nom} !"

print(saluer_personne("Bob"))              # Bonjour Bob !
print(saluer_personne("Charlie", "Salut")) # Salut Charlie !

# Fonction avec plusieurs retours
def min_max(liste):
    """Retourne le minimum et le maximum d'une liste."""
    return min(liste), max(liste)

minimum, maximum = min_max([3, 1, 4, 1, 5, 9])
print(f"Min: {minimum}, Max: {maximum}")  # Min: 1, Max: 9

# Fonction récursive
def factorielle(n):
    """Calcule la factorielle de n (n!)."""
    if n <= 1:
        return 1
    return n * factorielle(n - 1)

print(factorielle(5))  # 120

# Arguments positionnels et nommés
def decrire_personne(nom, age, ville):
    """Décrit une personne."""
    return f"{nom}, {age} ans, habite à {ville}"

# Arguments positionnels
print(decrire_personne("Alice", 25, "Paris"))

# Arguments nommés (plus clair)
print(decrire_personne(nom="Bob", ville="Lyon", age=30))

# Mélange positionnels + nommés
print(decrire_personne("Charlie", ville="Marseille", age=35))

# Fonction avec nombre variable d'arguments
def somme(*nombres):
    """Retourne la somme de nombres variables."""
    total = 0
    for n in nombres:
        total += n
    return total

print(somme(1, 2, 3))        # 6
print(somme(1, 2, 3, 4, 5))  # 15

# Fonction avec arguments nommés variables
def afficher_info(**infos):
    """Affiche des informations variables."""
    for cle, valeur in infos.items():
        print(f"{cle}: {valeur}")

afficher_info(nom="Alice", age=25, ville="Paris")

# Fonction lambda (anonyme)
carre = lambda x: x ** 2
print(carre(5))  # 25

# Utilisation pratique de lambda avec map/filter
nombres = [1, 2, 3, 4, 5]
carres = list(map(lambda x: x**2, nombres))  # [1, 4, 9, 16, 25]
pairs = list(filter(lambda x: x % 2 == 0, nombres))  # [2, 4]

# Portée des variables
variable_globale = 10

def test_portee():
    variable_locale = 20
    print(variable_globale)  # 10 (accessible)
    print(variable_locale)   # 20
    
test_portee()
# print(variable_locale)  # ERREUR ! Non définie en dehors</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Les fonctions lambda sont des fonctions anonymes utiles pour des opérations simples en une ligne</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "Mot-clé def pour définir",
          "Docstring pour documentation",
          "Paramètres par défaut possibles",
          "return pour retourner une valeur"
        ],
        quiz: [
          {
            question: 'Quel mot-clé utilise-t-on pour définir une fonction en Python ?',
            options: ['function', 'def', 'func', 'fn'],
            correct: 1,
            explanation: 'On utilise le mot-clé def pour définir une fonction.'
          },
          {
            question: 'Que fait return dans une fonction ?',
            options: ['Affiche une valeur', 'Termine la fonction et retourne une valeur', 'Continue l\'exécution', 'Déclare une variable'],
            correct: 1,
            explanation: 'return termine l\'exécution de la fonction et retourne la valeur spécifiée.'
          },
          {
            question: 'Comment documenter une fonction en Python ?',
            options: ['Avec des commentaires #', 'Avec une docstring (triple quotes)', 'Avec /* */', 'Avec //'],
            correct: 1,
            explanation: 'On utilise une docstring (chaîne entre triple quotes) juste après la définition de la fonction.'
          }
        ]
      },
      {
        id: "2.2",
        title: "Dictionnaires",
        description: "Structures clé-valeur en Python",
        readTime: "15 min",
        unlocked: false,
        completed: false,
        difficulty: "intermédiaire",
        icon: "📚",
        examplesCount: 3,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">📚 Dictionnaires (dict)</h3>
            <p class="text-gray-700 leading-relaxed">
              Les dictionnaires sont des collections non ordonnées de paires clé-valeur. Chaque élément est accessible par sa clé.
            </p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <h4 class="font-bold text-blue-700 mb-3">Création</h4>
                <pre class="text-sm bg-white p-3 rounded"><code># Avec accolades
d = {"clé": "valeur"}

# Avec dict()
d = dict(clé="valeur")</code></pre>
                <p class="text-sm text-gray-600 mt-2">Clés uniques, valeurs peuvent se répéter</p>
              </div>
              
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <h4 class="font-bold text-green-700 mb-3">Accès</h4>
                <pre class="text-sm bg-white p-3 rounded"><code># Notation crochets
valeur = d["clé"]

# Méthode get()
valeur = d.get("clé")</code></pre>
                <p class="text-sm text-gray-600 mt-2">get() évite KeyError si clé absente</p>
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
                    <strong class="font-bold">Important :</strong> Les clés d'un dictionnaire doivent être de types "hashables" (immuables). Les listes ne peuvent pas être des clés, mais les tuples oui.
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
                <div class="text-sm font-semibold text-gray-300">Exemple : Dictionnaires détaillés</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" onclick="copyCode('exemple9')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple9"># Création de dictionnaires
personne = {
    "nom": "Alice",
    "age": 25,
    "ville": "Paris"
}

# Autres méthodes
vide = {}
avec_dict = dict(nom="Bob", age=30)
depuis_liste = dict([("nom", "Charlie"), ("age", 35)])

# Accès aux valeurs
print(personne["nom"])      # Alice
print(personne.get("age"))  # 25

# get() avec valeur par défaut
print(personne.get("profession", "Non spécifié"))  # Non spécifié

# Modification
personne["age"] = 26                    # Modification
personne["profession"] = "Ingénieure"   # Ajout
del personne["ville"]                   # Suppression
valeur = personne.pop("age")            # Supprime et retourne

# Méthodes utiles
cles = personne.keys()      # Vues des clés
valeurs = personne.values() # Vues des valeurs
items = personne.items()    # Vues des paires (clé, valeur)

# Parcours
for cle in personne:
    print(f"{cle}: {personne[cle]}")

for cle, valeur in personne.items():
    print(f"{cle}: {valeur}")

# Dictionnaires imbriqués
etudiants = {
    "Alice": {"age": 25, "note": 15},
    "Bob": {"age": 22, "note": 18},
    "Charlie": {"age": 23, "note": 12}
}

print(etudiants["Alice"]["note"])  # 15

# Méthodes avancées
d1 = {"a": 1, "b": 2}
d2 = {"b": 3, "c": 4}

d1.update(d2)  # Fusionne d2 dans d1
# d1 devient {"a": 1, "b": 3, "c": 4}

# Compréhension de dictionnaire
carres = {x: x**2 for x in range(1, 6)}
# {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# Dictionnaire avec valeurs par défaut
from collections import defaultdict

compteur = defaultdict(int)
compteur["a"] += 1  # Pas d'erreur même si "a" n'existe pas
print(compteur)     # defaultdict(&lt;class 'int'&gt;, {'a': 1})

# Dictionnaire ordonné (Python 3.7+ conserve l'ordre)
# Depuis Python 3.7, les dict normaux conservent l'ordre d'insertion
# Pour plus de garanties : from collections import OrderedDict

# Vérifications
if "nom" in personne:
    print("La clé 'nom' existe")

if "Alice" in personne.values():
    print("La valeur 'Alice' existe")

# Copie de dictionnaire
import copy
original = {"a": 1, "b": [1, 2, 3]}
copie_simple = original.copy()           # Copie superficielle
copie_profonde = copy.deepcopy(original) # Copie profonde

# Dictionnaire avec clés de différents types
mixte = {
    "nom": "Alice",      # str
    42: "la réponse",    # int
    (1, 2): "tuple",     # tuple (immuable)
    # [1, 2]: "liste"    # ERREUR : liste mutable
}</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Depuis Python 3.7, les dictionnaires conservent l'ordre d'insertion par défaut</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "Accolades {} pour créer",
          "Clé-valeur séparées par :",
          "Clés uniques et immuables",
          "Méthodes : keys(), values(), items(), get()"
        ],
        quiz: [
          {
            question: 'Comment créer un dictionnaire vide ?',
            options: ['[]', '{}', '()', 'dict()'],
            options: ['[]', '{}', '()', 'dict()'],
            correct: 1,
            explanation: 'Les dictionnaires vides se créent avec {} ou dict().'
          },
          {
            question: 'Quelle méthode utilise-t-on pour éviter une KeyError quand une clé n\'existe pas ?',
            options: ['find()', 'search()', 'get()', 'lookup()'],
            correct: 2,
            explanation: 'La méthode get() retourne None (ou une valeur par défaut) si la clé n\'existe pas.'
          },
          {
            question: 'Lesquelles de ces structures peuvent être des clés de dictionnaire ?',
            options: ['Liste', 'Tuple', 'Dictionnaire', 'Toutes'],
            correct: 1,
            explanation: 'Seuls les types immuables (comme les tuples, les chaînes, les nombres) peuvent être des clés de dictionnaire.'
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "NIVEAU 3",
    subtitle: "Programmation avancée",
    color: "orange",
    icon: "🟠",
    chapters: [
      {
        id: "3.1",
        title: "Modules et packages",
        description: "Organiser et réutiliser du code avec les modules",
        readTime: "22 min",
        unlocked: false,
        completed: false,
        difficulty: "intermédiaire",
        icon: "📦",
        examplesCount: 4,
        content: `
          <div class="space-y-6">
            <h3 class="text-xl font-bold text-gray-900">📦 Modules et Packages</h3>
            <p class="text-gray-700 leading-relaxed">
              Les modules permettent d'organiser le code en fichiers séparés. Les packages sont des collections de modules.
            </p>
            
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <h4 class="font-bold text-blue-700 mb-3">Module</h4>
                <p class="text-sm text-gray-600">Fichier .py</p>
                <div class="mt-3 text-center">
                  <span class="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded">mon_module.py</span>
                </div>
              </div>
              
              <div class="bg-green-50 p-5 rounded-xl border border-green-200">
                <h4 class="font-bold text-green-700 mb-3">Package</h4>
                <p class="text-sm text-gray-600">Dossier avec __init__.py</p>
                <div class="mt-3 text-center">
                  <span class="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm rounded">mon_package/</span>
                </div>
              </div>
              
              <div class="bg-purple-50 p-5 rounded-xl border border-purple-200">
                <h4 class="font-bold text-purple-700 mb-3">Import</h4>
                <p class="text-sm text-gray-600">Utiliser un module</p>
                <div class="mt-3 text-center">
                  <span class="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded">import module</span>
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
                    <strong class="font-bold">PEP 8 :</strong> Les imports doivent être regroupés dans cet ordre : bibliothèques standards, bibliothèques tierces, modules locaux.
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
                <div class="text-sm font-semibold text-gray-300">Exemple : Modules en pratique</div>
                <button class="text-xs text-blue-400 hover:text-blue-300 font-medium" onclick="copyCode('exemple10')">
                  Copier
                </button>
              </div>
              <pre class="text-gray-200 text-sm overflow-x-auto"><code id="exemple10"># DIFFÉRENTES FAÇONS D'IMPORTER

# Import complet
import math
print(math.sqrt(16))  # 4.0

# Import avec alias
import numpy as np
import pandas as pd

# Import spécifique
from math import sqrt, pi
print(sqrt(9))  # 3.0
print(pi)       # 3.141592653589793

# Import de tout (À ÉVITER généralement)
# from math import *

# CRÉER SON PROPRE MODULE

# Fichier : mon_module.py
"""
# Contenu de mon_module.py
def saluer(nom):
    return f"Bonjour {nom} !"

PI = 3.14159

class Personne:
    def __init__(self, nom):
        self.nom = nom
    
    def se_presenter(self):
        return f"Je m'appelle {self.nom}"
"""

# Utilisation du module
import mon_module

print(mon_module.saluer("Alice"))  # Bonjour Alice !
print(mon_module.PI)               # 3.14159

alice = mon_module.Personne("Alice")
print(alice.se_presenter())        # Je m'appelle Alice

# PACKAGES

# Structure :
# mon_package/
# │   __init__.py
# │   module1.py
# │   module2.py
# └── sous_package/
#     │   __init__.py
#     │   module3.py

# Import depuis un package
from mon_package import module1
from mon_package.sous_package import module3

# MODULES DE LA BIBLIOTHÈQUE STANDARD

# math - fonctions mathématiques
import math
print(math.cos(math.pi))    # -1.0
print(math.log(100, 10))    # 2.0

# random - génération aléatoire
import random
print(random.randint(1, 10))      # Nombre entre 1 et 10
print(random.choice(["a", "b", "c"]))  # Choix aléatoire

# datetime - dates et heures
import datetime
maintenant = datetime.datetime.now()
print(maintenant)                 # 2023-12-20 10:30:00.123456
print(maintenant.year)            # 2023

# os - interactions système
import os
print(os.getcwd())                # Dossier courant
print(os.listdir("."))            # Liste des fichiers

# sys - informations système
import sys
print(sys.version)                # Version de Python
print(sys.argv)                   # Arguments de ligne de commande

# json - manipulation JSON
import json
data = {"nom": "Alice", "age": 25}
json_str = json.dumps(data)       # Convertit en JSON
print(json_str)                   # {"nom": "Alice", "age": 25}

# re - expressions régulières
import re
texte = "Mon email est test@example.com"
match = re.search(r'\\w+@\\w+\\.\\w+', texte)
if match:
    print(match.group())          # test@example.com

# __name__ == "__main__"
# Fichier : mon_script.py
"""
def fonction_principale():
    print("Code principal")

if __name__ == "__main__":
    # Ce code ne s'exécute que si le fichier
    # est exécuté directement (pas importé)
    fonction_principale()
"""

# INSTALLER DES PACKAGES TIERCES
# pip install nom_du_package

# Créer requirements.txt
"""
requests==2.28.1
numpy>=1.21.0
pandas
"""

# Installer avec : pip install -r requirements.txt</code></pre>
              <div class="mt-4 pt-4 border-t border-gray-800">
                <p class="text-sm text-gray-400">Utilisez <code class="bg-gray-800 px-1 rounded">if __name__ == "__main__":</code> pour séparer le code exécutable du code importable</p>
              </div>
            </div>
          </div>
        `,
        keyPoints: [
          "import pour utiliser des modules",
          "Package = dossier avec __init__.py",
          "Bibliothèque standard riche",
          "pip pour installer des packages"
        ],
        quiz: [
          {
            question: 'Comment importer uniquement la fonction sqrt du module math ?',
            options: ['import sqrt from math', 'from math import sqrt', 'import math.sqrt', 'math.import(sqrt)'],
            correct: 1,
            explanation: 'La syntaxe correcte est : from math import sqrt'
          },
          {
            question: 'Quel fichier spécial doit contenir un package Python ?',
            options: ['__main__.py', '__init__.py', '__package__.py', 'package.py'],
            correct: 1,
            explanation: 'Un package doit contenir un fichier __init__.py (peut être vide).'
          },
          {
            question: 'Que contient la variable __name__ quand un fichier est exécuté directement ?',
            options: ['__main__', 'main', 'script', 'Le nom du fichier'],
            correct: 0,
            explanation: '__name__ vaut "__main__" quand le fichier est exécuté directement, sinon il vaut le nom du module.'
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