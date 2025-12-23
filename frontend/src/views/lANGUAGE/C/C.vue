
	components: {
		C,
	},<template>
  <div class="c-page bg-white">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-b from-indigo-50 to-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Bouton de retour en haut à gauche -->
        <div class="mb-8 md:mb-12">
          <router-link 
            to="/langages"
            class="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-indigo-200 text-gray-700 font-medium rounded-lg hover:bg-indigo-50 hover:border-indigo-300 hover:shadow-md transition-all duration-200 group"
          >
            <svg class="w-4 h-4 text-gray-600 group-hover:text-indigo-600 transition-colors" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            <span class="text-sm">Retour</span>
          </router-link>
        </div>

        <div class="flex flex-col md:flex-row items-center gap-8">
          <!-- Logo C -->
          <div class="flex-shrink-0">
            <div class="w-24 h-24 bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <!-- Logo C élégant -->
              <span class="text-5xl font-bold text-white tracking-tighter">C</span>
            </div>
          </div>

          <!-- Texte amélioré -->
          <div class="flex-1 text-center md:text-left">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              C Masterclass
            </h1>
            <p class="text-xl text-gray-600 mb-6">
              Maîtrisez les fondations de la programmation avec le langage C. Des bases aux systèmes embarqués et bas niveau.
            </p>
            
            <!-- Bouton d'accès au cours -->
            <div class="flex flex-col sm:flex-row items-center gap-4 mb-6">
              <router-link 
                to="/c/cours"
                class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group"
              >
                <svg class="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
                Démarrer le cours interactif
              </router-link>

              <!-- Bouton retour secondaire (mobile seulement) -->
              <router-link 
                to="/"
                class="sm:hidden inline-flex items-center gap-2 px-6 py-3 border border-indigo-300 text-gray-700 font-medium rounded-lg hover:bg-indigo-50 transition-all"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
                Retour
              </router-link>
            </div>

            <!-- Badges améliorés -->
            <div class="flex flex-wrap gap-3 justify-center md:justify-start">
              <span class="px-4 py-2 bg-white border border-indigo-100 rounded-lg text-sm font-medium text-gray-700 hover:border-indigo-300 transition-colors hover:shadow-sm">
                <span class="text-indigo-500 mr-1">⚙️</span> Programmation Système
              </span>
              <span class="px-4 py-2 bg-white border border-purple-100 rounded-lg text-sm font-medium text-gray-700 hover:border-purple-300 transition-colors hover:shadow-sm">
                <span class="text-purple-500 mr-1">🖥️</span> Systèmes Embarqués
              </span>
              <span class="px-4 py-2 bg-white border border-indigo-100 rounded-lg text-sm font-medium text-gray-700 hover:border-indigo-300 transition-colors hover:shadow-sm">
                <span class="text-indigo-500 mr-1">🔧</span> Développement Bas Niveau
              </span>
              <span class="px-4 py-2 bg-white border border-purple-100 rounded-lg text-sm font-medium text-gray-700 hover:border-purple-300 transition-colors hover:shadow-sm">
                <span class="text-purple-500 mr-1">🏗️</span> Fondations Informatiques
              </span>
            </div>
          </div>
        </div>

        <!-- Statistiques -->
        <div class="mt-12 pt-8 border-t border-indigo-100">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div class="text-center p-4 bg-indigo-50/50 rounded-xl border border-indigo-100 hover:border-indigo-200 transition-colors">
              <div class="text-2xl font-bold text-gray-900">35+</div>
              <div class="text-sm text-indigo-600 font-medium">Chapitres</div>
            </div>
            <div class="text-center p-4 bg-purple-50/50 rounded-xl border border-purple-100 hover:border-purple-200 transition-colors">
              <div class="text-2xl font-bold text-gray-900">45+</div>
              <div class="text-sm text-purple-600 font-medium">Exercices pratiques</div>
            </div>
            <div class="text-center p-4 bg-indigo-50/50 rounded-xl border border-indigo-100 hover:border-indigo-200 transition-colors">
              <div class="text-2xl font-bold text-gray-900">25+</div>
              <div class="text-sm text-indigo-600 font-medium">Heures de contenu</div>
            </div>
            <div class="text-center p-4 bg-purple-50/50 rounded-xl border border-purple-100 hover:border-purple-200 transition-colors">
              <div class="text-2xl font-bold text-gray-900">8</div>
              <div class="text-sm text-purple-600 font-medium">Projets concrets</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Navigation rapide -->
    <section class="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex space-x-8 overflow-x-auto py-4">
          <button @click="scrollTo('installation')" class="text-sm font-medium text-gray-600 hover:text-indigo-600 whitespace-nowrap transition-colors focus:outline-none">
            Installation
          </button>
          <button @click="scrollTo('bases')" class="text-sm font-medium text-gray-600 hover:text-indigo-600 whitespace-nowrap transition-colors focus:outline-none">
            Les bases
          </button>
          <button @click="scrollTo('pointeurs')" class="text-sm font-medium text-gray-600 hover:text-indigo-600 whitespace-nowrap transition-colors focus:outline-none">
            Pointeurs
          </button>
          <button @click="scrollTo('domaines')" class="text-sm font-medium text-gray-600 hover:text-indigo-600 whitespace-nowrap transition-colors focus:outline-none">
            Domaines C
          </button>
          <button @click="scrollTo('ressources')" class="text-sm font-medium text-gray-600 hover:text-indigo-600 whitespace-nowrap transition-colors focus:outline-none">
            Ressources
          </button>
          <button @click="scrollTo('quiz')" class="text-sm font-medium text-gray-600 hover:text-indigo-600 whitespace-nowrap transition-colors focus:outline-none">
            Quiz rapide
          </button>
        </nav>
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Contenu principal -->
        <div class="lg:col-span-2 space-y-12">
          <!-- Installation - Version simplifiée -->
          <section id="installation" class="scroll-mt-32">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">🏗️ Installation du compilateur C</h2>
            
            <div class="bg-gradient-to-r from-indigo-50 to-blue-100 border border-indigo-200 rounded-lg p-6 mb-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">GCC (GNU Compiler Collection)</h3>
              <p class="text-gray-700 mb-4">
                Installez GCC pour compiler du code C :
              </p>
              <div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto mb-4">
                <pre># Linux/Debian
sudo apt-get install gcc

# MacOS
xcode-select --install

# Windows (MinGW)
https://mingw-w64.org

# Vérification
gcc --version
# Doit afficher : gcc (version)</pre>
              </div>
              
              <div class="bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-300 rounded-lg p-4">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                  <div>
                    <p class="text-sm font-medium text-blue-800 mb-1">Conseil Pro</p>
                    <p class="text-sm text-blue-700">
                      Sous Linux, installez aussi make et gdb (debugger). Sous Windows, préférez WSL2 pour une meilleure expérience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-r from-purple-50 to-indigo-100 border border-purple-200 rounded-lg p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Premier programme en C</h3>
              <p class="text-gray-700 mb-4">
                Créez et compilez votre premier programme :
              </p>
              <div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre>// hello.c
#include &lt;stdio.h&gt;

int main() {
    printf("Hello, World!\\n");
    return 0;
}

// Compilation
gcc hello.c -o hello

// Exécution
./hello
// Affiche : Hello, World!</pre>
              </div>
            </div>
          </section>

          <!-- Les bases - Version concise -->
          <section id="bases" class="scroll-mt-32">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">📚 Les bases essentielles</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Variables et types -->
              <div class="bg-gradient-to-br from-indigo-50 to-white border border-indigo-200 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-900 mb-3">Variables & Types</h3>
                <div class="bg-gray-900 text-gray-100 rounded-lg p-3 font-mono text-sm overflow-x-auto mb-3">
                  <pre>int age = 25;           // Entier
float taille = 1.75f;   // Flottant
char lettre = 'A';      // Caractère
double pi = 3.14159;    // Double précision</pre>
                </div>
                <p class="text-sm text-gray-600">
                  Typage statique : déclaration explicite des types.
                </p>
              </div>

              <!-- Structures de contrôle -->
              <div class="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-900 mb-3">Structures de contrôle</h3>
                <div class="bg-gray-900 text-gray-100 rounded-lg p-3 font-mono text-sm overflow-x-auto mb-3">
                  <pre>// Condition
if (age >= 18) {
    printf("Majeur\\n");
} else {
    printf("Mineur\\n");
}

// Boucle for
for (int i = 0; i < 10; i++) {
    printf("%d\\n", i);
}</pre>
                </div>
                <p class="text-sm text-gray-600">
                  Conditions et boucles avec parenthèses obligatoires.
                </p>
              </div>

              <!-- Fonctions -->
              <div class="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-900 mb-3">Fonctions</h3>
                <div class="bg-gray-900 text-gray-100 rounded-lg p-3 font-mono text-sm overflow-x-auto mb-3">
                  <pre>// Déclaration
int addition(int a, int b) {
    return a + b;
}

// Prototype (header)
int addition(int, int);

// Appel
int resultat = addition(5, 3);</pre>
                </div>
                <p class="text-sm text-gray-600">
                  Prototypes nécessaires pour les fonctions utilisées avant leur définition.
                </p>
              </div>

              <!-- Tableaux -->
              <div class="bg-gradient-to-br from-indigo-100 to-white border border-indigo-300 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-900 mb-3">Tableaux</h3>
                <div class="bg-gray-900 text-gray-100 rounded-lg p-3 font-mono text-sm overflow-x-auto mb-3">
                  <pre>// Déclaration
int nombres[5] = {1, 2, 3, 4, 5};

// Accès
printf("%d\\n", nombres[0]); // 1

// Boucle sur tableau
for (int i = 0; i < 5; i++) {
    printf("%d ", nombres[i]);
}</pre>
                </div>
                <p class="text-sm text-gray-600">
                  Taille fixe, index à partir de 0.
                </p>
              </div>
            </div>
          </section>

          <!-- Pointeurs -->
          <section id="pointeurs" class="scroll-mt-32">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">🎯 Les pointeurs (concept fondamental)</h2>
            
            <div class="space-y-4">
              <div class="bg-gradient-to-r from-indigo-50 to-blue-50 border-l-4 border-indigo-500 pl-6 pr-4 py-4">
                <h3 class="text-lg font-bold text-gray-900 mb-2">Pointeurs basiques</h3>
                <p class="text-gray-700 mb-2">Comprendre les adresses mémoire</p>
                <div class="bg-gray-800 text-gray-100 rounded-lg p-3 font-mono text-sm overflow-x-auto">
                  <pre>int x = 10;
int *ptr = &x;  // ptr pointe vers x

printf("Valeur de x: %d\\n", x);       // 10
printf("Adresse de x: %p\\n", &x);     // Adresse
printf("Valeur via ptr: %d\\n", *ptr); // 10

*ptr = 20;  // Modifie x via ptr
printf("Nouvelle valeur: %d\\n", x);  // 20</pre>
                </div>
              </div>

              <div class="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-500 pl-6 pr-4 py-4">
                <h3 class="text-lg font-bold text-gray-900 mb-2">Pointeurs et tableaux</h3>
                <p class="text-gray-700 mb-2">Relation étroite en C</p>
                <div class="bg-gray-800 text-gray-100 rounded-lg p-3 font-mono text-sm overflow-x-auto">
                  <pre>int tab[3] = {10, 20, 30};
int *p = tab;  // p pointe vers tab[0]

printf("tab[0] = %d\\n", *p);      // 10
printf("tab[1] = %d\\n", *(p+1));  // 20
printf("tab[2] = %d\\n", *(p+2));  // 30

// Arithmétique des pointeurs
p++;  // p pointe maintenant vers tab[1]
printf("Nouvelle valeur: %d\\n", *p);  // 20</pre>
                </div>
              </div>

              <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 pl-6 pr-4 py-4">
                <h3 class="text-lg font-bold text-gray-900 mb-2">Allocation dynamique</h3>
                <p class="text-gray-700 mb-2">malloc, calloc, free</p>
                <div class="bg-gray-800 text-gray-100 rounded-lg p-3 font-mono text-sm overflow-x-auto">
                  <pre>#include &lt;stdlib.h&gt;

// Allocation
int *arr = (int*)malloc(5 * sizeof(int));
if (arr == NULL) {
    printf("Erreur d'allocation\\n");
    return 1;
}

// Utilisation
for (int i = 0; i < 5; i++) {
    arr[i] = i * 10;
}

// Libération mémoire
free(arr);
arr = NULL;  // Bonne pratique</pre>
                </div>
              </div>
            </div>
          </section>

          <!-- Domaines d'application -->
          <section id="domaines" class="scroll-mt-32">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">🔧 Domaines d'application du C</h2>
            
            <div class="space-y-4">
              <div class="bg-gradient-to-r from-indigo-50 to-blue-50 border-l-4 border-indigo-500 pl-6 pr-4 py-4">
                <h3 class="text-lg font-bold text-gray-900 mb-2">Systèmes d'exploitation</h3>
                <p class="text-gray-700 mb-2">Noyaux, pilotes, systèmes embarqués</p>
                <div class="bg-gray-800 text-gray-100 rounded-lg p-3 font-mono text-sm overflow-x-auto">
                  <pre>// Exemple de structure pour un driver
struct device {
    char name[32];
    int (*init)(void);
    int (*read)(void*, size_t);
    int (*write)(const void*, size_t);
    void (*cleanup)(void);
};

// Gestion d'interruptions
void interrupt_handler(int irq) {
    // Traitement de l'interruption
    acknowledge_irq(irq);
}</pre>
                </div>
              </div>

              <div class="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-500 pl-6 pr-4 py-4">
                <h3 class="text-lg font-bold text-gray-900 mb-2">Développement de jeux</h3>
                <p class="text-gray-700 mb-2">Moteurs de jeu, traitement temps réel</p>
                <div class="bg-gray-800 text-gray-100 rounded-lg p-3 font-mono text-sm overflow-x-auto">
                  <pre>// Structure pour un sprite
typedef struct {
    float x, y;          // Position
    float vx, vy;        // Vitesse
    int width, height;   // Dimensions
    unsigned int texture_id;
} Sprite;

// Fonction de mise à jour
void update_sprite(Sprite *sprite, float dt) {
    sprite->x += sprite->vx * dt;
    sprite->y += sprite->vy * dt;
    
    // Collisions avec les bords
    if (sprite->x < 0 || sprite->x > SCREEN_WIDTH) {
        sprite->vx = -sprite->vx;
    }
}</pre>
                </div>
              </div>

              <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 pl-6 pr-4 py-4">
                <h3 class="text-lg font-bold text-gray-900 mb-2">Embarqué & IoT</h3>
                <p class="text-gray-700 mb-2">Microcontrôleurs, capteurs, automation</p>
                <div class="bg-gray-800 text-gray-100 rounded-lg p-3 font-mono text-sm overflow-x-auto">
                  <pre>// Contrôle GPIO sur Raspberry Pi
#include &lt;wiringPi.h&gt;

#define LED_PIN 17

int main(void) {
    wiringPiSetupGpio();
    pinMode(LED_PIN, OUTPUT);
    
    while (1) {
        digitalWrite(LED_PIN, HIGH);
        delay(500);  // 500ms
        digitalWrite(LED_PIN, LOW);
        delay(500);
    }
    
    return 0;
}</pre>
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
                  <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 text-lg mb-1">Guide Complet C</h3>
                    <p class="text-sm text-gray-600 mb-2">Des bases aux concepts avancés</p>
                    <div class="flex items-center text-xs">
                      <span class="text-gray-500 mr-3">📄 60 pages</span>
                      <span class="text-gray-500">⚡ 4.5 MB</span>
                    </div>
                  </div>
                </div>
                <button 
                  @click="downloadPDF('guide-c.pdf')"
                  class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span class="flex items-center justify-center">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                    </svg>
                    Télécharger le guide
                  </span>
                </button>
              </div>

              <!-- Pointeurs -->
              <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div class="flex items-start mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 text-lg mb-1">Maîtrise des Pointeurs</h3>
                    <p class="text-sm text-gray-600 mb-2">Exercices et explications détaillées</p>
                    <div class="flex items-center text-xs">
                      <span class="text-gray-500 mr-3">📄 45 pages</span>
                      <span class="text-gray-500">⚡ 3.8 MB</span>
                    </div>
                  </div>
                </div>
                <button 
                  @click="downloadPDF('pointeurs-c.pdf')"
                  class="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span class="flex items-center justify-center">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                    </svg>
                    Télécharger Pointeurs
                  </span>
                </button>
              </div>

              <!-- Projets système -->
              <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div class="flex items-start mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 text-lg mb-1">8 Projets Système</h3>
                    <p class="text-sm text-gray-600 mb-2">Shell, allocateur mémoire, etc.</p>
                    <div class="flex items-center text-xs">
                      <span class="text-gray-500 mr-3">📄 75 pages</span>
                      <span class="text-gray-500">⚡ 5.5 MB</span>
                    </div>
                  </div>
                </div>
                <button 
                  @click="downloadPDF('projets-systeme-c.pdf')"
                  class="w-full bg-gradient-to-r from-purple-600 to-pink-700 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-800 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span class="flex items-center justify-center">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                    </svg>
                    Télécharger les projets
                  </span>
                </button>
              </div>

              <!-- Embarqué -->
              <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div class="flex items-start mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 text-lg mb-1">C pour l'Embarqué</h3>
                    <p class="text-sm text-gray-600 mb-2">Microcontrôleurs, drivers, RTOS</p>
                    <div class="flex items-center text-xs">
                      <span class="text-gray-500 mr-3">📄 65 pages</span>
                      <span class="text-gray-500">⚡ 4.8 MB</span>
                    </div>
                  </div>
                </div>
                <button 
                  @click="downloadPDF('embarque-c.pdf')"
                  class="w-full bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span class="flex items-center justify-center">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                    </svg>
                    Télécharger Embarqué
                  </span>
                </button>
              </div>
            </div>
          </section>

          <!-- Quiz rapide -->
          <section id="quiz" class="scroll-mt-32">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">🧠 Quiz rapide</h2>
            
            <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-6">
              <div class="mb-4">
                <span class="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                  Question 1/3
                </span>
              </div>
              
              <h3 class="text-lg font-bold text-gray-900 mb-4">
                Quelle est la différence entre <code class="bg-indigo-100 px-2 py-1 rounded">int *ptr</code> et <code class="bg-indigo-100 px-2 py-1 rounded">int **ptr</code> en C ?
              </h3>
              
              <div class="space-y-3 mb-6">
                <label class="flex items-center p-3 bg-white border border-gray-300 rounded-lg hover:border-indigo-400 cursor-pointer transition-colors">
                  <input type="radio" name="quiz1" value="1" class="mr-3" v-model="quizAnswer">
                  <span class="text-gray-700">Aucune différence, juste des notations différentes</span>
                </label>
                <label class="flex items-center p-3 bg-white border border-gray-300 rounded-lg hover:border-indigo-400 cursor-pointer transition-colors">
                  <input type="radio" name="quiz1" value="2" class="mr-3" v-model="quizAnswer">
                  <span class="text-gray-700">Le premier est un pointeur vers int, le second un pointeur vers pointeur vers int</span>
                </label>
                <label class="flex items-center p-3 bg-white border border-gray-300 rounded-lg hover:border-indigo-400 cursor-pointer transition-colors">
                  <input type="radio" name="quiz1" value="3" class="mr-3" v-model="quizAnswer">
                  <span class="text-gray-700">Le premier est pour les entiers, le second pour les tableaux</span>
                </label>
              </div>
              
              <button 
                @click="checkQuiz"
                class="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold py-3 rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Vérifier ma réponse
              </button>
            </div>
          </section>

          <!-- CTA Final -->
          <section class="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 class="text-2xl md:text-3xl font-bold mb-4">🚀 Prêt à maîtriser les fondations ?</h3>
            <p class="text-indigo-100 mb-6 text-lg">
              Rejoignez notre cours interactif avec progression, projets système et apprentissage personnalisé !
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <router-link 
                to="/c/cours"
                class="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-indigo-400 to-purple-400 text-white font-bold rounded-xl hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group"
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
                <div class="text-2xl font-bold">35</div>
                <div class="text-xs text-indigo-200">Chapitres</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold">45+</div>
                <div class="text-xs text-indigo-200">Exercices</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold">8</div>
                <div class="text-xs text-indigo-200">Projets systèmes</div>
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
                  to="/c/cours"
                  class="flex items-center justify-between bg-gradient-to-r from-indigo-50 to-purple-100 border border-indigo-200 text-indigo-700 py-3 px-4 rounded-lg font-medium hover:from-indigo-100 hover:to-purple-200 transition-all group"
                >
                  <div class="flex items-center">
                    <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                    <span>Cours interactif</span>
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

            <!-- Pourquoi C ? -->
            <div class="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-6">
              <h3 class="text-lg font-bold text-gray-900 mb-3">⚡ Pourquoi C ?</h3>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-purple-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-sm text-gray-700">Langage proche de la machine</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-purple-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-sm text-gray-700">Contrôle total de la mémoire</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-purple-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-sm text-gray-700">Base de nombreux langages modernes</span>
                </li>
              </ul>
            </div>

            <!-- Conseils -->
            <div class="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-xl p-6">
              <div class="flex items-start">
                <div class="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-sm font-bold text-gray-900 mb-1">Astuce Pro</p>
                  <p class="text-xs text-gray-700">
                    Maîtrisez bien les pointeurs avant d'aborder les concepts avancés comme l'allocation dynamique.
                  </p>
                </div>
              </div>
            </div>

            <!-- Bibliothèques populaires -->
            <div class="bg-white border border-gray-200 rounded-xl p-6">
              <h3 class="text-lg font-bold text-gray-900 mb-3">📚 Bibliothèques populaires</h3>
              <div class="space-y-2">
                <div class="flex items-center text-sm">
                  <div class="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  <span class="text-gray-700">Standard Library - Fonctions de base</span>
                </div>
                <div class="flex items-center text-sm">
                  <div class="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  <span class="text-gray-700">POSIX - API système Unix/Linux</span>
                </div>
                <div class="flex items-center text-sm">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span class="text-gray-700">SDL - Développement de jeux</span>
                </div>
                <div class="flex items-center text-sm">
                  <div class="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span class="text-gray-700">OpenSSL - Cryptographie</span>
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
import C from '@/views/lANGUAGE/C/C.vue'

export default {
  name: 'CLandingPage',
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
      if (this.quizAnswer === '2') {
        alert('🎉 Bravo ! "int *ptr" est un pointeur vers int, "int **ptr" est un pointeur vers pointeur vers int (double pointeur).');
      } else if (this.quizAnswer) {
        alert('❌ Presque ! La bonne réponse est : "int *ptr" pointe vers int, "int **ptr" pointe vers pointeur vers int.');
      } else {
        alert('⚠️ Sélectionnez une réponse avant de vérifier.');
      }
    },
    
    showDemo() {
      alert("🎬 Découvrez notre cours interactif C avec :\n\n✅ 35 chapitres progressifs\n✅ 8 projets systèmes réels\n✅ Focus sur les pointeurs et mémoire\n✅ Progression sauvegardée\n✅ Interface moderne et intuitive\n✅ Support complet\n\nCliquez sur 'Démarrer le cours interactif' pour commencer !");
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

.c-page {
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
  accent-color: #6366F1;
}

/* Animation pour les cartes */
.hover\:-translate-y-1:hover {
  transform: translateY(-4px);
}

/* Gradient spécifique C */
.bg-gradient-c {
  background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #3B82F6 100%);
}
</style>