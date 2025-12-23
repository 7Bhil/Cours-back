<template>
  <div class="cpp-page bg-white">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-b from-blue-50 to-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Bouton de retour en haut à gauche -->
        <div class="mb-8 md:mb-12">
          <router-link 
            to="/langages"
            class="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-200 text-gray-700 font-medium rounded-lg hover:bg-blue-50 hover:border-blue-300 hover:shadow-md transition-all duration-200 group"
          >
            <svg class="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            <span class="text-sm">Retour</span>
          </router-link>
        </div>

        <div class="flex flex-col md:flex-row items-center gap-8">
          <!-- Logo C++ -->
          <div class="flex-shrink-0">
            <div class="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg group hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <span class="text-white text-3xl font-bold font-mono">C++</span>
            </div>
          </div>

          <!-- Texte -->
          <div class="flex-1 text-center md:text-left">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              C++ Masterclass
            </h1>
            <p class="text-xl text-gray-600 mb-6">
              Maîtrisez le langage C++ de A à Z. Performance, contrôle mémoire et programmation système.
            </p>
            
            <!-- Bouton d'accès au cours -->
            <div class="flex flex-col sm:flex-row items-center gap-4 mb-6">
              <router-link 
                to="/cpp/cours"
                class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group cpp-button"
              >
                <svg class="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
                Démarrer le cours interactif
              </router-link>
            </div>

            <!-- Badges -->
            <div class="flex flex-wrap gap-3 justify-center md:justify-start">
              <span class="px-4 py-2 bg-white border border-blue-100 rounded-lg text-sm font-medium text-gray-700 hover:border-blue-300 transition-colors">
                Performance
              </span>
              <span class="px-4 py-2 bg-white border border-blue-100 rounded-lg text-sm font-medium text-gray-700 hover:border-blue-300 transition-colors">
                Système
              </span>
              <span class="px-4 py-2 bg-white border border-blue-100 rounded-lg text-sm font-medium text-gray-700 hover:border-blue-300 transition-colors">
                Jeux vidéo
              </span>
              <span class="px-4 py-2 bg-white border border-blue-100 rounded-lg text-sm font-medium text-gray-700 hover:border-blue-300 transition-colors">
                Embedded
              </span>
            </div>
          </div>
        </div>

        <!-- Statistiques -->
        <div class="mt-12 pt-8 border-t border-blue-100">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div class="text-center p-4 bg-blue-50/50 rounded-xl border border-blue-100">
              <div class="text-2xl font-bold text-gray-900">25</div>
              <div class="text-sm text-blue-700">Chapitres</div>
            </div>
            <div class="text-center p-4 bg-blue-50/50 rounded-xl border border-blue-100">
              <div class="text-2xl font-bold text-gray-900">40+</div>
              <div class="text-sm text-blue-700">Exercices pratiques</div>
            </div>
            <div class="text-center p-4 bg-blue-50/50 rounded-xl border border-blue-100">
              <div class="text-2xl font-bold text-gray-900">18+</div>
              <div class="text-sm text-blue-700">Heures de contenu</div>
            </div>
            <div class="text-center p-4 bg-blue-50/50 rounded-xl border border-blue-100">
              <div class="text-2xl font-bold text-gray-900">4</div>
              <div class="text-sm text-blue-700">Niveaux</div>
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
          <button @click="scrollTo('poo')" class="text-sm font-medium text-gray-600 hover:text-blue-600 whitespace-nowrap transition-colors focus:outline-none">
            POO & Avancé
          </button>
          <button @click="scrollTo('ressources')" class="text-sm font-medium text-gray-600 hover:text-blue-600 whitespace-nowrap transition-colors focus:outline-none">
            Ressources
          </button>
          <button @click="scrollTo('quiz')" class="text-sm font-medium text-gray-600 hover:text-blue-600 whitespace-nowrap transition-colors focus:outline-none">
            Quiz rapide
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
            <h2 class="text-3xl font-bold text-gray-900 mb-6">🏗️ Installation C++</h2>
            
            <div class="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Compilateur C++</h3>
              <p class="text-gray-700 mb-4">
                Choisissez un compilateur moderne (C++17/C++20 recommandé) :
              </p>
              <div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto mb-4">
                <pre># Linux (Ubuntu/Debian)
sudo apt install g++

# macOS avec Homebrew
brew install gcc

# Windows avec MSYS2
pacman -S mingw-w64-x86_64-gcc</pre>
              </div>
              
              <div class="bg-gradient-to-r from-blue-100 to-blue-50 border border-blue-300 rounded-lg p-4">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                  <div>
                    <p class="text-sm font-medium text-blue-800 mb-1">Conseil Pro</p>
                    <p class="text-sm text-blue-700">
                      Utilisez GCC 11+ ou Clang 12+ pour un meilleur support du C++20.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-r from-indigo-50 to-indigo-100 border border-indigo-200 rounded-lg p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">IDE (Environnement de développement)</h3>
              <p class="text-gray-700 mb-4">
                Choisissez un IDE adapté au C++ :
              </p>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-blue-300 transition-colors">
                  <div class="text-2xl mb-2">💻</div>
                  <h4 class="font-bold text-gray-900 mb-1">Visual Studio</h4>
                  <p class="text-sm text-gray-600">Windows, excellent débuggeur</p>
                </div>
                <div class="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-blue-300 transition-colors">
                  <div class="text-2xl mb-2">🧠</div>
                  <h4 class="font-bold text-gray-900 mb-1">CLion</h4>
                  <p class="text-sm text-gray-600">JetBrains, multiplateforme</p>
                </div>
                <div class="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-blue-300 transition-colors">
                  <div class="text-2xl mb-2">⚡</div>
                  <h4 class="font-bold text-gray-900 mb-1">VS Code</h4>
                  <p class="text-sm text-gray-600">Léger avec extensions C++</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Les bases -->
          <section id="bases" class="scroll-mt-32">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">📚 Les bases essentielles</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Variables -->
              <div class="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-900 mb-3">Variables et types</h3>
                <div class="bg-gray-900 text-gray-100 rounded-lg p-3 font-mono text-sm overflow-x-auto mb-3">
                  <pre>int age = 25;           // Entier
double prix = 19.99;    // Décimal
char lettre = 'A';      // Caractère
bool majeur = true;     // Booléen
string nom = "Alice";   // Chaîne</pre>
                </div>
                <p class="text-sm text-gray-600">
                  C++ est fortement typé avec plus de contrôle que C.
                </p>
              </div>

              <!-- Pointeurs -->
              <div class="bg-gradient-to-br from-indigo-50 to-white border border-indigo-200 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-900 mb-3">Pointeurs et références</h3>
                <div class="bg-gray-900 text-gray-100 rounded-lg p-3 font-mono text-sm overflow-x-auto mb-3">
                  <pre>int x = 42;
int* ptr = &x;   // Pointeur
int& ref = x;    // Référence

*ptr = 100;      // Dé-référencement
ref = 200;       // Modification via référence</pre>
                </div>
                <p class="text-sm text-gray-600">
                  Concepts uniques au C++ pour la gestion mémoire.
                </p>
              </div>

              <!-- Conditions -->
              <div class="bg-gradient-to-br from-cyan-50 to-white border border-cyan-200 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-900 mb-3">Conditions</h3>
                <div class="bg-gray-900 text-gray-100 rounded-lg p-3 font-mono text-sm overflow-x-auto mb-3">
                  <pre>if (age >= 18) {
    cout << "Majeur";
} else {
    cout << "Mineur";
}

// Ternaire
string statut = (age >= 18) ? "majeur" : "mineur";</pre>
                </div>
                <p class="text-sm text-gray-600">
                  Structures de contrôle similaires à C mais avec C++.
                </p>
              </div>

              <!-- Boucles -->
              <div class="bg-gradient-to-br from-violet-50 to-white border border-violet-200 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-900 mb-3">Boucles</h3>
                <div class="bg-gray-900 text-gray-100 rounded-lg p-3 font-mono text-sm overflow-x-auto mb-3">
                  <pre>for (int i = 0; i < 5; i++) {
    cout << i << endl;
}

// Range-based for (C++11)
for (auto item : items) {
    cout << item << endl;
}</pre>
                </div>
                <p class="text-sm text-gray-600">
                  Boucles classiques et range-based pour modernité.
                </p>
              </div>
            </div>
          </section>

          <!-- POO & Avancé -->
          <section id="poo" class="scroll-mt-32">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">🎯 POO & Concepts avancés</h2>
            
            <div class="space-y-4">
              <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 pl-6 pr-4 py-4">
                <h3 class="text-lg font-bold text-gray-900 mb-2">Classes et objets</h3>
                <p class="text-gray-700 mb-2">Programmation orientée objet en C++</p>
                <div class="bg-gray-800 text-gray-100 rounded-lg p-3 font-mono text-sm overflow-x-auto">
                  <pre>class Personne {
private:
    string nom;
    int age;
    
public:
    Personne(string n, int a) : nom(n), age(a) {}
    
    void afficher() {
        cout << nom << " - " << age << " ans" << endl;
    }
};</pre>
                </div>
              </div>

              <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 pl-6 pr-4 py-4">
                <h3 class="text-lg font-bold text-gray-900 mb-2">Templates</h3>
                <p class="text-gray-700 mb-2">Programmation générique</p>
                <div class="bg-gray-800 text-gray-100 rounded-lg p-3 font-mono text-sm overflow-x-auto">
                  <pre>template&lt;typename T&gt;
T max(T a, T b) {
    return (a > b) ? a : b;
}

// Utilisation
int m1 = max(10, 20);
double m2 = max(3.14, 2.71);</pre>
                </div>
              </div>

              <div class="bg-gradient-to-r from-purple-50 to-violet-50 border-l-4 border-purple-500 pl-6 pr-4 py-4">
                <h3 class="text-lg font-bold text-gray-900 mb-2">Smart Pointers</h3>
                <p class="text-gray-700 mb-2">Gestion mémoire automatique (C++11+)</p>
                <div class="bg-gray-800 text-gray-100 rounded-lg p-3 font-mono text-sm overflow-x-auto">
                  <pre>#include &lt;memory&gt;

unique_ptr&lt;int&gt; ptr = make_unique&lt;int&gt;(42);
shared_ptr&lt;int&gt; ptr2 = make_shared&lt;int&gt;(100);

// Pas besoin de delete, libération automatique</pre>
                </div>
              </div>
            </div>
          </section>

          <!-- Ressources -->
          <section id="ressources" class="scroll-mt-32">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-3xl font-bold text-gray-900">📁 Ressources de formation</h2>
              <span class="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">PDF • Gratuit</span>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Guide -->
              <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div class="flex items-start mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 text-lg mb-1">Guide Complet C++</h3>
                    <p class="text-sm text-gray-600 mb-2">Du C++98 au C++20 moderne</p>
                    <div class="flex items-center text-xs">
                      <span class="text-gray-500 mr-3">📄 60 pages</span>
                      <span class="text-gray-500">⚡ 4.8 MB</span>
                    </div>
                  </div>
                </div>
                <button 
                  @click="downloadPDF('guide-cpp.pdf')"
                  class="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span class="flex items-center justify-center">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                    </svg>
                    Télécharger le guide
                  </span>
                </button>
              </div>

              <!-- Exercices -->
              <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div class="flex items-start mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 text-lg mb-1">35 Exercices Pratiques</h3>
                    <p class="text-sm text-gray-600 mb-2">Algorithmes et structures de données</p>
                    <div class="flex items-center text-xs">
                      <span class="text-gray-500 mr-3">📄 42 pages</span>
                      <span class="text-gray-500">⚡ 3.5 MB</span>
                    </div>
                  </div>
                </div>
                <button 
                  @click="downloadPDF('exercices-cpp.pdf')"
                  class="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span class="flex items-center justify-center">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                    </svg>
                    Télécharger les exercices
                  </span>
                </button>
              </div>

              <!-- Projets -->
              <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div class="flex items-start mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 text-lg mb-1">4 Projets Complets</h3>
                    <p class="text-sm text-gray-600 mb-2">Applications système et jeux simples</p>
                    <div class="flex items-center text-xs">
                      <span class="text-gray-500 mr-3">📄 55 pages</span>
                      <span class="text-gray-500">⚡ 4.2 MB</span>
                    </div>
                  </div>
                </div>
                <button 
                  @click="downloadPDF('projets-cpp.pdf')"
                  class="w-full bg-gradient-to-r from-cyan-600 to-cyan-700 text-white py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-cyan-800 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span class="flex items-center justify-center">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                    </svg>
                    Télécharger les projets
                  </span>
                </button>
              </div>

              <!-- Référence -->
              <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div class="flex items-start mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-violet-500 to-violet-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 text-lg mb-1">Référence Rapide STL</h3>
                    <p class="text-sm text-gray-600 mb-2">Containers, algorithmes et utilitaires</p>
                    <div class="flex items-center text-xs">
                      <span class="text-gray-500 mr-3">📄 40 pages</span>
                      <span class="text-gray-500">⚡ 3.1 MB</span>
                    </div>
                  </div>
                </div>
                <button 
                  @click="downloadPDF('reference-cpp.pdf')"
                  class="w-full bg-gradient-to-r from-violet-600 to-violet-700 text-white py-3 rounded-lg font-semibold hover:from-violet-700 hover:to-violet-800 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span class="flex items-center justify-center">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                    </svg>
                    Télécharger la référence
                  </span>
                </button>
              </div>
            </div>
          </section>

          <!-- Quiz rapide -->
          <section id="quiz" class="scroll-mt-32">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">🧠 Quiz rapide</h2>
            
            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
              <div class="mb-4">
                <span class="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Question 1/3
                </span>
              </div>
              
              <h3 class="text-lg font-bold text-gray-900 mb-4">
                Quelle est la différence principale entre <code class="bg-blue-100 px-2 py-1 rounded">new</code> et <code class="bg-blue-100 px-2 py-1 rounded">malloc()</code> en C++ ?
              </h3>
              
              <div class="space-y-3 mb-6">
                <label class="flex items-center p-3 bg-white border border-gray-300 rounded-lg hover:border-blue-400 cursor-pointer transition-colors">
                  <input type="radio" name="quiz1" value="1" class="mr-3" v-model="quizAnswer">
                  <span class="text-gray-700">new appelle le constructeur, malloc() non</span>
                </label>
                <label class="flex items-center p-3 bg-white border border-gray-300 rounded-lg hover:border-blue-400 cursor-pointer transition-colors">
                  <input type="radio" name="quiz1" value="2" class="mr-3" v-model="quizAnswer">
                  <span class="text-gray-700">malloc() est plus rapide que new</span>
                </label>
                <label class="flex items-center p-3 bg-white border border-gray-300 rounded-lg hover:border-blue-400 cursor-pointer transition-colors">
                  <input type="radio" name="quiz1" value="3" class="mr-3" v-model="quizAnswer">
                  <span class="text-gray-700">Il n'y a pas de différence</span>
                </label>
              </div>
              
              <button 
                @click="checkQuiz"
                class="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Vérifier ma réponse
              </button>
            </div>
          </section>

          <!-- CTA Final -->
          <section class="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
            <h3 class="text-2xl md:text-3xl font-bold mb-4">🚀 Prêt pour l'aventure C++ ?</h3>
            <p class="text-blue-100 mb-6 text-lg">
              Rejoignez notre cours interactif avec progression, quiz et apprentissage structuré !
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <router-link 
                to="/cpp/cours"
                class="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-blue-400 to-blue-500 text-white font-bold rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group"
              >
                <svg class="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
                Démarrer le cours interactif
              </router-link>
              
              <button 
                @click="showDemo"
                class="px-8 py-3.5 bg-white/20 backdrop-blur-sm text-white font-medium rounded-xl hover:bg-white/30 transition-colors border border-white/30"
              >
                Voir une démo
              </button>
            </div>
            
            <div class="grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div class="text-center">
                <div class="text-2xl font-bold">25</div>
                <div class="text-xs text-blue-200">Chapitres</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold">40+</div>
                <div class="text-xs text-blue-200">Exercices</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold">4</div>
                <div class="text-xs text-blue-200">Niveaux</div>
              </div>
            </div>
          </section>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <div class="sticky top-32 space-y-6">
            <!-- Explorer plus -->
            <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 class="text-lg font-bold text-gray-900 mb-4">📌 Explorer plus</h3>
              <div class="space-y-3">
                <router-link 
                  to="/cpp/cours"
                  class="flex items-center justify-between bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 text-blue-700 py-3 px-4 rounded-lg font-medium hover:from-blue-100 hover:to-blue-200 transition-all group"
                >
                  <div class="flex items-center">
                    <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                    <span>Cours interactif C++</span>
                  </div>
                  <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </router-link>
              </div>
              
              <div class="mt-4 pt-4 border-t border-gray-200">
                <p class="text-xs text-gray-500 text-center">
                  Cliquez pour découvrir le cours interactif
                </p>
              </div>
            </div>

            <!-- Conseils -->
            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
              <div class="flex items-start">
                <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-sm font-bold text-gray-900 mb-1">Astuce Pro</p>
                  <p class="text-xs text-gray-700">
                    Utilisez les smart pointers (C++11+) pour éviter les fuites mémoire.
                  </p>
                </div>
              </div>
            </div>

            <!-- Pourquoi C++ -->
            <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-6">
              <h4 class="text-sm font-bold text-gray-900 mb-3">💡 Pourquoi C++ ?</h4>
              <ul class="space-y-2 text-xs text-gray-700">
                <li class="flex items-start">
                  <svg class="w-3 h-3 text-green-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span>Performance maximale</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-3 h-3 text-green-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span>Contrôle total sur la mémoire</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-3 h-3 text-green-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span>Idéal pour jeux vidéo et systèmes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CppLandingPage',
  data() {
    return {
      quizAnswer: null
    }
  },
  methods: {
    scrollTo(id) {
      const element = document.getElementById(id);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        history.pushState(null, null, `#${id}`);
      }
    },
    
    downloadPDF(filename) {
      alert(`✅ Téléchargement de "${filename}" démarré !`);
    },
    
    checkQuiz() {
      if (this.quizAnswer === '1') {
        alert('🎉 Bravo ! new appelle le constructeur de l\'objet, alors que malloc() alloue seulement de la mémoire brute.');
      } else if (this.quizAnswer) {
        alert('❌ Presque ! La bonne réponse est : new appelle le constructeur, malloc() non.');
      } else {
        alert('⚠️ Sélectionnez une réponse avant de vérifier.');
      }
    },
    
    showDemo() {
      alert("🎬 Découvrez notre cours interactif C++ :\n\n✅ 25 chapitres progressifs\n✅ 4 niveaux : débutant à expert\n✅ Quiz après chaque chapitre\n✅ Projets pratiques\n✅ Interface moderne et intuitive\n\nCliquez sur 'Démarrer le cours interactif' pour commencer !");
    },
    
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
    this.initScrollFromUrl();
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

.cpp-page {
  min-height: 100vh;
}

/* Styles pour le code */
code {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.875em;
}

/* Effets d'ombre et transitions */
.hover\:shadow-xl:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.transition-all {
  transition: all 0.3s ease;
}

/* Styling des inputs radio */
input[type="radio"] {
  accent-color: #3B82F6;
}

/* Animation pour les cartes */
.hover\:-translate-y-1:hover {
  transform: translateY(-4px);
}

/* Bouton C++ spécifique */
.cpp-button {
  background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%);
}

.cpp-button:hover {
  background: linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%);
}
</style>