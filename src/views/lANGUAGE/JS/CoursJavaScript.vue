<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo et titre -->
          <div class="flex items-center space-x-4">
            <div class="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
              </svg>
            </div>
            <div>
              <h1 class="text-xl font-bold text-gray-900">Cours JavaScript Complet</h1>
              <p class="text-sm text-gray-600">{{ selectedCourseTitle }}</p>
            </div>
          </div>

          <!-- Navigation -->
          <nav class="flex items-center space-x-4">
            <button @click="resetCourse" class="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium">
              Réinitialiser
            </button>
          </nav>
        </div>
      </div>
    </header>

    <!-- Contenu principal -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Sélection des niveaux -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Choisissez votre niveau</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button 
            v-for="course in courses" 
            :key="course.id"
            @click="selectCourse(course.id)"
            :class="[
              'p-6 rounded-xl border-2 transition-all text-left',
              selectedCourse === course.id 
                ? 'bg-yellow-50 border-yellow-400 shadow-lg transform scale-105' 
                : 'bg-white border-gray-200 hover:border-yellow-300 hover:shadow-md'
            ]"
          >
            <div class="text-4xl mb-3">{{ course.icon }}</div>
            <h3 class="text-lg font-bold text-gray-900 mb-1">{{ course.title }}</h3>
            <p class="text-sm text-gray-600 mb-3">{{ course.description }}</p>
            <div class="flex items-center text-sm text-gray-500">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
              {{ course.chapters.length }} chapitres
            </div>
          </button>
        </div>
      </div>

      <!-- Contenu du cours sélectionné -->
      <div v-if="selectedCourse" class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Sidebar des chapitres -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-xl border border-gray-200 p-6 sticky top-24 shadow-sm">
            <h3 class="font-semibold text-gray-900 mb-4 text-lg">📚 Chapitres</h3>
            <nav class="space-y-2">
              <button 
                v-for="chapter in currentCourse.chapters" 
                :key="chapter.id"
                @click="selectChapter(chapter.id)"
                :class="[
                  'w-full text-left px-4 py-3 rounded-lg transition-all text-sm',
                  selectedChapter === chapter.id 
                    ? 'bg-yellow-50 text-yellow-700 border-2 border-yellow-300 font-medium shadow-sm' 
                    : 'text-gray-600 hover:bg-gray-50 border border-transparent'
                ]"
              >
                <div class="flex items-center">
                  <div class="w-6 h-6 flex items-center justify-center mr-3">
                    <span v-if="isChapterCompleted(chapter.id)" class="text-green-500 text-lg">✓</span>
                    <span v-else class="text-gray-400 font-medium">{{ chapter.order }}</span>
                  </div>
                  <span class="flex-1">{{ chapter.title }}</span>
                </div>
                <div v-if="chapter.duration" class="text-xs text-gray-500 mt-1 ml-9">
                  ⏱️ {{ chapter.duration }}
                </div>
              </button>
            </nav>

            <!-- Progression -->
            <div class="mt-8 pt-6 border-t border-gray-200">
              <div class="mb-4">
                <div class="flex justify-between text-sm text-gray-600 mb-2">
                  <span class="font-medium">Progression</span>
                  <span class="font-bold text-green-600">{{ progress }}%</span>
                </div>
                <div class="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div class="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-500" 
                       :style="{ width: progress + '%' }"></div>
                </div>
              </div>
              <button 
                v-if="selectedChapter && !isChapterCompleted(selectedChapter)"
                @click="markAsCompleted"
                class="w-full bg-green-500 text-white py-2.5 rounded-lg font-medium hover:bg-green-600 transition-colors shadow-sm"
              >
                ✓ Marquer comme terminé
              </button>
              <div v-else-if="selectedChapter" class="w-full bg-green-100 text-green-700 py-2.5 rounded-lg font-medium text-center">
                ✓ Chapitre terminé
              </div>
            </div>
          </div>
        </div>

        <!-- Contenu du chapitre -->
        <div class="lg:col-span-3">
          <div class="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            <div v-if="currentChapter">
              <!-- En-tête du chapitre -->
              <div class="mb-8">
                <div class="flex items-center justify-between mb-4">
                  <div>
                    <span class="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-2">
                      📖 Chapitre {{ currentChapter.order }}
                    </span>
                    <h2 class="text-3xl font-bold text-gray-900 mb-2">{{ currentChapter.title }}</h2>
                    <p class="text-gray-600">{{ currentChapter.description }}</p>
                  </div>
                  <span class="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">⏱️ {{ currentChapter.duration }}</span>
                </div>
              </div>

              <!-- Contenu des sections -->
              <div class="space-y-10">
                <div v-for="section in currentChapter.sections" :key="section.id" class="border-b border-gray-100 pb-10 last:border-0">
                  <h3 class="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span class="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-3 text-sm">
                      {{ currentChapter.sections.indexOf(section) + 1 }}
                    </span>
                    {{ section.title }}
                  </h3>
                  
                  <!-- Texte explicatif -->
                  <div v-if="section.content" class="mb-6">
                    <p class="text-gray-700 leading-relaxed text-lg">{{ section.content }}</p>
                  </div>

                  <!-- Points clés -->
                  <div v-if="section.points" class="mb-6 bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                    <h4 class="font-semibold text-blue-900 mb-3 flex items-center">
                      <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                      </svg>
                      Points clés
                    </h4>
                    <ul class="space-y-2">
                      <li v-for="(point, index) in section.points" :key="index" class="text-blue-800 flex items-start">
                        <span class="text-blue-500 mr-2">•</span>
                        <span>{{ point }}</span>
                      </li>
                    </ul>
                  </div>

                  <!-- Exemple de code -->
                  <div v-if="section.code" class="mb-6">
                    <div class="flex items-center justify-between bg-gray-900 text-gray-100 px-4 py-3 rounded-t-lg">
                      <span class="text-sm font-medium flex items-center">
                        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                        </svg>
                        Exemple de code
                      </span>
                      <button 
                        @click="copyCode(section.code, section.id)" 
                        class="text-sm hover:text-white transition-colors flex items-center bg-gray-800 px-3 py-1 rounded"
                      >
                        <svg v-if="copiedCode !== section.id" class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                        </svg>
                        <svg v-else class="w-4 h-4 mr-1 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        {{ copiedCode === section.id ? 'Copié !' : 'Copier' }}
                      </button>
                    </div>
                    <pre class="bg-gray-900 text-gray-100 rounded-b-lg p-5 overflow-x-auto text-sm leading-relaxed"><code>{{ section.code }}</code></pre>
                  </div>

                  <!-- Exercice pratique -->
                  <div v-if="section.exercise" class="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-6 mb-6">
                    <h4 class="font-semibold text-purple-900 mb-3 text-lg flex items-center">
                      <span class="text-2xl mr-2">💡</span>
                      Exercice pratique
                    </h4>
                    <p class="text-purple-800 mb-4 font-medium">{{ section.exercise.question }}</p>
                    
                    <div v-if="section.exercise.hint" class="mb-4">
                      <button 
                        @click="toggleHint(section.id)" 
                        class="text-sm text-purple-600 hover:text-purple-700 font-medium bg-white px-4 py-2 rounded-lg border border-purple-200 transition-colors"
                      >
                        {{ showHints[section.id] ? '🙈 Cacher' : '💭 Afficher' }} l'indice
                      </button>
                      <transition name="fade">
                        <div v-if="showHints[section.id]" class="mt-3 p-4 bg-purple-100 rounded-lg text-sm text-purple-900 border border-purple-200">
                          <strong>💡 Indice :</strong> {{ section.exercise.hint }}
                        </div>
                      </transition>
                    </div>

                    <div v-if="section.exercise.solution" class="mt-4">
                      <button 
                        @click="toggleSolution(section.id)" 
                        class="text-sm text-green-600 hover:text-green-700 font-medium bg-white px-4 py-2 rounded-lg border border-green-200 transition-colors"
                      >
                        {{ showSolutions[section.id] ? '🙈 Cacher' : '✅ Afficher' }} la solution
                      </button>
                      <transition name="fade">
                        <div v-if="showSolutions[section.id]" class="mt-3 p-4 bg-green-100 rounded-lg text-sm text-green-900 border border-green-200">
                          <strong>✅ Solution :</strong>
                          <pre class="mt-2 whitespace-pre-wrap font-mono bg-green-50 p-3 rounded border border-green-200">{{ section.exercise.solution }}</pre>
                        </div>
                      </transition>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Navigation entre chapitres -->
              <div class="flex justify-between pt-8 mt-8 border-t-2 border-gray-200">
                <button 
                  v-if="previousChapter"
                  @click="selectChapter(previousChapter.id)"
                  class="flex items-center text-gray-600 hover:text-gray-900 bg-gray-100 px-5 py-3 rounded-lg hover:bg-gray-200 transition-all font-medium"
                >
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                  </svg>
                  {{ previousChapter.title }}
                </button>
                <button 
                  v-if="nextChapter"
                  @click="selectChapter(nextChapter.id)"
                  class="flex items-center ml-auto bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-md font-medium"
                >
                  {{ nextChapter.title }}
                  <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Message si aucun chapitre sélectionné -->
            <div v-else class="text-center py-16">
              <svg class="w-20 h-20 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
              <h3 class="text-xl font-medium text-gray-900 mb-2">Sélectionnez un chapitre</h3>
              <p class="text-gray-600">Cliquez sur un chapitre dans la barre latérale pour commencer.</p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-gray-200 mt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="text-center text-gray-600">
          <p class="font-medium">🚀 Plateforme de cours JavaScript complète</p>
          <p class="text-sm mt-2">Apprenez JavaScript de zéro à expert</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'CoursJavaScriptComplet',
  data() {
    return {
      selectedCourse: null,
      selectedChapter: null,
      showHints: {},
      showSolutions: {},
      completedChapters: [],
      copiedCode: null,
     
      courses: [
        {
          id: 'debutant',
          title: 'Débutant',
          description: 'Les bases essentielles',
          icon: '🟢',
          chapters: [
            {
              id: 'intro',
              order: 1,
              title: 'Introduction à JavaScript',
              duration: '30 min',
              description: 'Découvrez JavaScript et son rôle dans le développement web moderne.',
              sections: [
                {
                  id: 'what-is-js',
                  title: 'Qu\'est-ce que JavaScript ?',
                  content: 'JavaScript est un langage de programmation de haut niveau, interprété et orienté objet. Créé en 1995 par Brendan Eich, il permet de créer des pages web interactives et dynamiques.',
                  points: [
                    'Langage interprété (exécuté par le navigateur)',
                    'À l\'origine uniquement côté client, maintenant aussi côté serveur (Node.js)',
                    'Standardisé sous le nom ECMAScript',
                    'Un des trois piliers du web avec HTML et CSS'
                  ]
                },
                {
                  id: 'where-js',
                  title: 'Où s\'exécute JavaScript ?',
                  content: 'JavaScript peut s\'exécuter dans différents environnements : navigateur web, serveur (Node.js), applications mobiles, etc.',
                  code: `// Dans le navigateur
document.getElementById('titre').textContent = 'Bonjour !';

// Avec Node.js (côté serveur)
const fs = require('fs');
fs.readFile('fichier.txt', 'utf8', (err, data) => {
  console.log(data);
});

// Applications mobiles (React Native)
import React from 'react';
import { View, Text } from 'react-native';`,
                  points: [
                    'Navigateurs : Chrome, Firefox, Safari, Edge',
                    'Serveurs : Node.js, Deno, Bun',
                    'Mobile : React Native, Ionic, NativeScript',
                    'Desktop : Electron, NW.js'
                  ]
                },
                {
                  id: 'console',
                  title: 'La console JavaScript',
                  content: 'La console est votre meilleur outil pour déboguer et tester du code JavaScript.',
                  code: `// Messages simples
console.log('Message normal');
console.warn('Attention !');
console.error('Erreur !');
console.info('Information');

// Affichage de variables
const nom = 'Alice';
const age = 25;
console.log('Nom:', nom, 'Âge:', age);

// Tableaux et objets
const liste = [1, 2, 3];
const personne = { nom: 'Bob', age: 30 };
console.table(liste);
console.table([personne]);

// Mesure de temps
console.time('timer');
for (let i = 0; i < 1000000; i++) {}
console.timeEnd('timer');`,
                  exercise: {
                    question: 'Utilisez console.log() pour afficher "Bonjour JavaScript !" et votre prénom.',
                    solution: `console.log('Bonjour JavaScript !');
console.log('Mon prénom est : Jean');`
                  }
                }
              ]
            },
            {
              id: 'variables',
              order: 2,
              title: 'Variables et types de données',
              duration: '45 min',
              description: 'Apprenez à stocker et manipuler des données en JavaScript.',
              sections: [
                {
                  id: 'declaration',
                  title: 'Déclarer des variables',
                  content: 'JavaScript propose 3 mots-clés pour déclarer des variables : var (ancien), let et const (modernes).',
                  code: `// Ancienne méthode (évitez)
var ancien = "déconseillé";

// Variables modifiables
let nom = "Marie";
nom = "Jean"; // ✅ Peut changer

// Variables constantes
const age = 25;
// age = 26; // ❌ Erreur ! Ne peut pas changer

// Bonnes pratiques
const PI = 3.14;        // Constantes en MAJUSCULES
let compteur = 0;       // Variables changeantes
const user = {          // L'objet est constant, pas ses propriétés
  nom: "Alice",
  age: 30
};
user.age = 31; // ✅`,
                  points: [
                    'Utilisez const par défaut',
                    'Utilisez let seulement si la valeur change',
                    'Évitez var (portée fonction, pas bloc)'
                  ],
                  exercise: {
                    question: 'Déclarez une constante pour votre ville et une variable pour votre âge.',
                    solution: `const MA_VILLE = "Paris";
let monAge = 30;
console.log("Je vis à " + MA_VILLE + " et j'ai " + monAge + " ans.");`
                  }
                },
                {
                  id: 'types',
                  title: 'Types de données primitifs',
                  content: 'JavaScript a plusieurs types de données : number, string, boolean, null, undefined, symbol, et bigint.',
                  code: `// Number - nombres (entiers et décimaux)
const nombre = 42;
const decimal = 3.14;
const negatif = -10;
const infini = Infinity;

// String - chaînes de caractères
const texte = "Bonjour";
const phrase = 'JavaScript est génial !';
const template = \`J'ai \${25} ans\`; // Template literal

// Boolean - vrai ou faux
const estMajeur = true;
const estMineur = false;

// Null et Undefined
const vide = null; // Absence volontaire de valeur
let nonDefini; // undefined par défaut

// Symbol (unique et immuable)
const id = Symbol("id");

// BigInt (très grands nombres)
const tresgrand = 9007199254740991n;

// Vérifier le type
console.log(typeof nombre); // "number"
console.log(typeof texte); // "string"
console.log(typeof estMajeur); // "boolean"
console.log(typeof vide); // "object" (bug historique!)
console.log(typeof nonDefini); // "undefined"`,
                  points: [
                    'Number : tous les nombres (pas de distinction entier/décimal)',
                    'String : texte entre "" ou \'\' ou `` (template)',
                    'Boolean : true ou false',
                    'Null : valeur vide intentionnelle',
                    'Undefined : variable non initialisée'
                  ],
                  exercise: {
                    question: 'Créez trois variables : votre nom (string), votre âge (number), et si vous aimez coder (boolean). Affichez leur type.',
                    hint: 'Utilisez typeof pour vérifier le type de chaque variable',
                    solution: `const monNom = "Jean";
const monAge = 30;
const jaimeCoder = true;

console.log("Nom :", typeof monNom);        // string
console.log("Âge :", typeof monAge);        // number
console.log("Aime coder :", typeof jaimeCoder); // boolean`
                  }
                },
                {
                  id: 'conversion',
                  title: 'Conversion de types',
                  content: 'JavaScript convertit automatiquement les types dans certains cas (coercition), mais il est souvent préférable de convertir explicitement.',
                  code: `// Coercition implicite
console.log("5" + 3);     // "53" (string)
console.log("5" - 3);     // 2 (number)
console.log(true + 1);    // 2

// Conversion explicite
const str = "123";
const num = Number(str);      // 123
const bool = Boolean("");     // false
const str2 = String(456);     // "456"
const parsed = parseInt("42px"); // 42
const float = parseFloat("3.14"); // 3.14

// Falsy values
console.log(Boolean(0));        // false
console.log(Boolean(""));       // false
console.log(Boolean(null));     // false
console.log(Boolean(undefined));// false
console.log(Boolean(NaN));      // false
console.log(Boolean(false));    // false`,
                  points: [
                    'La coercition peut causer des bugs inattendus',
                    'Préférez les conversions explicites',
                    'Il existe 6 valeurs "falsy" en JavaScript'
                  ],
                  exercise: {
                    question: 'Convertissez la chaîne "100" en nombre, puis ajoutez-lui 50. Affichez le résultat.',
                    hint: 'Utilisez Number() ou parseInt()',
                    solution: `const texte = "100";
const nombre = Number(texte);
const resultat = nombre + 50;
console.log("Résultat :", resultat); // 150`
                  }
                }
              ]
            },
            {
              id: 'operateurs',
              order: 3,
              title: 'Opérateurs et expressions',
              duration: '40 min',
              description: 'Maîtrisez les opérations arithmétiques, de comparaison et logiques.',
              sections: [
                {
                  id: 'arithmetiques',
                  title: 'Opérateurs arithmétiques',
                  content: 'Les opérations de base pour manipuler des nombres.',
                  code: `let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1 (reste)
console.log(a ** b); // 1000 (puissance)

a++; // incrémentation
b--; // décrémentation

a += 5; // équivalent à a = a + 5
a *= 2; // a = a * 2`,
                  points: [
                    '+ - * / % pour les calculs classiques',
                    '** pour la puissance',
                    '++ et -- pour incrémenter/décrémenter',
                    'Opérateurs composés : += -= *= /='
                  ],
                  exercise: {
                    question: 'Calculez l\'aire d\'un rectangle de longueur 8 et largeur 5.',
                    solution: `const longueur = 8;
const largeur = 5;
const aire = longueur * largeur;
console.log("Aire du rectangle :", aire); // 40`
                  }
                },
                {
                  id: 'comparaison',
                  title: 'Opérateurs de comparaison',
                  content: 'Comparez des valeurs pour prendre des décisions.',
                  code: `console.log(10 > 5);    // true
console.log(10 < 5);    // false
console.log(10 >= 10);  // true
console.log(10 <= 5);   // false
console.log(10 == "10"); // true (coercition)
console.log(10 === "10"); // false (strict)

console.log(10 != "10");  // false
console.log(10 !== "10"); // true`,
                  points: [
                    '== compare avec coercition (à éviter)',
                    '=== compare type et valeur (recommandé)',
                    'Utilisez toujours === et !=='
                  ],
                  exercise: {
                    question: 'Testez si une variable age = 18 est strictement égale à la chaîne "18".',
                    solution: `const age = 18;
console.log(age === "18"); // false`
                  }
                },
                {
                  id: 'logiques',
                  title: 'Opérateurs logiques',
                  content: 'AND (&&), OR (||), NOT (!) pour combiner des conditions.',
                  code: `const age = 25;
const permis = true;

console.log(age >= 18 && permis); // true
console.log(age < 18 || permis);  // true
console.log(!permis);             // false

// Court-circuit
console.log(false && anything); // false (ne regarde pas anything)
console.log(true || anything);  // true

// Valeurs truthy/falsy
console.log("Hello" && "World"); // "World"
console.log(0 || "Valeur par défaut"); // "Valeur par défaut"`,
                  points: [
                    '&& (ET) : les deux doivent être true',
                    '|| (OU) : au moins un doit être true',
                    '! (NON) : inverse la valeur'
                  ],
                  exercise: {
                    question: 'Écrivez une condition qui vérifie qu\'une personne a entre 18 et 65 ans inclus.',
                    solution: `const age = 30;
console.log(age >= 18 && age <= 65); // true`
                  }
                }
              ]
            },
            {
              id: 'conditions',
              order: 4,
              title: 'Structures conditionnelles',
              duration: '50 min',
              description: 'Prenez des décisions dans votre code avec if, else et switch.',
              sections: [
                {
                  id: 'if-else',
                  title: 'if / else if / else',
                  content: 'Exécutez du code selon certaines conditions.',
                  code: `const age = 20;

if (age < 13) {
  console.log("Enfant");
} else if (age < 18) {
  console.log("Adolescent");
} else if (age < 65) {
  console.log("Adulte");
} else {
  console.log("Senior");
}

// Opérateur ternaire (raccourci)
const message = age >= 18 ? "Majeur" : "Mineur";
console.log(message);

// Ternaire imbriqué
const note = 75;
const mention = note >= 90 ? "Excellent" :
                note >= 70 ? "Bien" :
                note >= 50 ? "Passable" : "Échec";`,
                  points: [
                    'if pour une condition simple',
                    'else if pour plusieurs conditions alternatives',
                    'ternaire pour des conditions courtes'
                  ],
                  exercise: {
                    question: 'Affichez "pair" ou "impair" selon une variable nombre.',
                    solution: `const nombre = 7;
if (nombre % 2 === 0) {
  console.log("pair");
} else {
  console.log("impair");
}`
                  }
                },
                {
                  id: 'switch',
                  title: 'switch',
                  content: 'Idéal pour comparer une variable à plusieurs valeurs possibles.',
                  code: `const jour = "lundi";

switch (jour) {
  case "lundi":
  case "mardi":
  case "mercredi":
  case "jeudi":
  case "vendredi":
    console.log("Jour de semaine");
    break;
  case "samedi":
  case "dimanche":
    console.log("Week-end !");
    break;
  default:
    console.log("Jour inconnu");
}

// Switch avec return
function getSaison(mois) {
  switch(mois) {
    case 12: case 1: case 2: return "Hiver";
    case 3: case 4: case 5: return "Printemps";
    case 6: case 7: case 8: return "Été";
    case 9: case 10: case 11: return "Automne";
    default: return "Mois invalide";
  }
}`,
                  points: [
                    'switch est utile pour de nombreux cas égaux',
                    'N\'oubliez pas break pour éviter le fall-through',
                    'case peut regrouper plusieurs valeurs'
                  ],
                  exercise: {
                    question: 'Utilisez switch pour afficher le nombre de jours dans un mois.',
                    hint: 'Février a 28 jours, avril/juin/septembre/novembre ont 30 jours',
                    solution: `const mois = "février";
switch (mois) {
  case "février":
    console.log("28 ou 29 jours");
    break;
  case "avril": case "juin": case "septembre": case "novembre":
    console.log("30 jours");
    break;
  default:
    console.log("31 jours");
}`
                  }
                }
              ]
            },
            {
              id: 'boucles',
              order: 5,
              title: 'Boucles et itérations',
              duration: '45 min',
              description: 'Répétez des actions avec while, for et for...of.',
              sections: [
                {
                  id: 'while',
                  title: 'Boucle while et do...while',
                  content: 'Exécute du code tant qu\'une condition est vraie.',
                  code: `let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// do...while (exécute au moins une fois)
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 0); // S'exécute une fois même si condition fausse

// Boucle infinie (attention!)
// while (true) {
//   console.log("Jamais fini!");
// }`,
                  points: [
                    'while : vérifie d\'abord, exécute ensuite',
                    'do...while : exécute d\'abord, vérifie ensuite',
                    'Attention aux boucles infinies!'
                  ],
                  exercise: {
                    question: 'Affichez les nombres de 10 à 1 avec une boucle while.',
                    solution: `let nombre = 10;
while (nombre >= 1) {
  console.log(nombre);
  nombre--;
}`
                  }
                },
                {
                  id: 'for',
                  title: 'Boucle for classique',
                  content: 'Parfaite pour les itérations avec un compteur.',
                  code: `for (let k = 0; k < 10; k++) {
  if (k === 5) continue; // passe à l'itération suivante
  if (k === 8) break;    // sort de la boucle
  console.log(k);
}

// Boucle inversée
for (let i = 10; i > 0; i--) {
  console.log(i);
}

// Plusieurs variables
for (let i = 0, j = 10; i < 10; i++, j--) {
  console.log(i, j);
}`,
                  points: [
                    'Structure : initialisation; condition; incrémentation',
                    'continue : saute une itération',
                    'break : sort de la boucle'
                  ],
                  exercise: {
                    question: 'Calculez la somme des nombres de 1 à 100 avec une boucle for.',
                    solution: `let somme = 0;
for (let i = 1; i <= 100; i++) {
  somme += i;
}
console.log("Somme :", somme); // 5050`
                  }
                },
                {
                  id: 'for-of',
                  title: 'for...of et for...in',
                  content: 'Parcourez les éléments d\'un tableau ou les propriétés d\'un objet.',
                  code: `// for...of pour les tableaux
const fruits = ["pomme", "banane", "orange"];
for (const fruit of fruits) {
  console.log(fruit);
}

// for...in pour les objets
const personne = {nom: "Luc", age: 30, ville: "Paris"};
for (const cle in personne) {
  console.log(cle, ":", personne[cle]);
}

// Avec index pour les tableaux
for (const [index, fruit] of fruits.entries()) {
  console.log(index, fruit);
}`,
                  points: [
                    'for...of : valeurs des tableaux',
                    'for...in : clés des objets',
                    'entries() pour avoir index et valeur'
                  ],
                  exercise: {
                    question: 'Parcourez un tableau de notes et calculez la moyenne.',
                    solution: `const notes = [15, 18, 12, 20, 14];
let total = 0;
for (const note of notes) {
  total += note;
}
const moyenne = total / notes.length;
console.log("Moyenne :", moyenne);`
                  }
                }
              ]
            },
            {
              id: 'fonctions',
              order: 6,
              title: 'Fonctions',
              duration: '55 min',
              description: 'Réutilisez du code avec les fonctions classiques et fléchées.',
              sections: [
                {
                  id: 'declaration',
                  title: 'Déclaration et expression',
                  content: 'Plusieurs façons de créer des fonctions en JavaScript.',
                  code: `// Déclaration (hoisted)
function saluer(nom) {
  return "Bonjour " + nom;
}

// Expression (non hoisted)
const addition = function(a, b) {
  return a + b;
};

// Fonction fléchée (arrow function)
const multiplier = (a, b) => a * b;

const direBonjour = nom => console.log("Salut " + nom);

// Fonction immédiatement invoquée (IIFE)
(function() {
  console.log("Exécution immédiate!");
})();`,
                  points: [
                    'Les déclarations sont hoisted (disponibles partout)',
                    'Les arrow functions n\'ont pas leur propre this',
                    'Return implicite si une seule expression'
                  ],
                  exercise: {
                    question: 'Créez une fonction fléchée carre qui retourne le carré d\'un nombre.',
                    solution: `const carre = x => x * x;
console.log(carre(5)); // 25`
                  }
                },
                {
                  id: 'parametres',
                  title: 'Paramètres et arguments',
                  content: 'Passez des données aux fonctions et utilisez des valeurs par défaut.',
                  code: `// Paramètres par défaut
function saluer(nom = "Visiteur") {
  return "Bonjour " + nom;
}

// Arguments multiples
function somme(...nombres) {
  let total = 0;
  for (const n of nombres) {
    total += n;
  }
  return total;
}

// Destructuring dans les paramètres
function afficherPersonne({nom, age, ville = "Inconnue"}) {
  console.log(\`\${nom}, \${age} ans, \${ville}\`);
}

// Utilisation
console.log(saluer()); // "Bonjour Visiteur"
console.log(somme(1, 2, 3, 4)); // 10
afficherPersonne({nom: "Alice", age: 30});`,
                  points: [
                    'Paramètres par défaut avec =',
                    'Rest parameters ... pour accepter plusieurs arguments',
                    'Destructuring pour extraire des valeurs d\'objets'
                  ],
                  exercise: {
                    question: 'Créez une fonction qui accepte un nombre variable d\'arguments et retourne leur somme.',
                    solution: `function somme(...nombres) {
  let total = 0;
  for (const n of nombres) {
    total += n;
  }
  return total;
}
console.log(somme(1, 2, 3)); // 6
console.log(somme(10, 20)); // 30`
                  }
                },
                {
                  id: 'scope',
                  title: 'Portée et closure',
                  content: 'Comprenez où vos variables sont accessibles.',
                  code: `// Portée globale
const global = "Je suis global";

function testScope() {
  // Portée fonction
  const fonction = "Je suis dans la fonction";
  
  if (true) {
    // Portée bloc (let/const seulement)
    let bloc = "Je suis dans le bloc";
    console.log(bloc); // ✅
  }
  // console.log(bloc); // ❌ Error
  
  // Closure
  function compteur() {
    let count = 0;
    return function() {
      count++;
      return count;
    };
  }
  
  const incrementer = compteur();
  console.log(incrementer()); // 1
  console.log(incrementer()); // 2
}

testScope();`,
                  points: [
                    'var : portée fonction',
                    'let/const : portée bloc',
                    'Closure : fonction qui "se souvient" de son environnement'
                  ]
                }
              ]
            },
            {
              id: 'tableaux',
              order: 7,
              title: 'Tableaux (Arrays)',
              duration: '60 min',
              description: 'Manipulez des collections de données avec les tableaux.',
              sections: [
                {
                  id: 'basics',
                  title: 'Création et manipulation',
                  content: 'Les tableaux sont des collections ordonnées d\'éléments.',
                  code: `// Création
const vide = [];
const nombres = [1, 2, 3, 4, 5];
const mixte = [1, "texte", true, null];

// Accès et modification
console.log(nombres[0]); // 1
nombres[1] = 20; // Modification
console.log(nombres.length); // 5

// Méthodes de base
nombres.push(6); // Ajoute à la fin
nombres.pop();   // Retire le dernier
nombres.unshift(0); // Ajoute au début
nombres.shift(); // Retire le premier

// Découpage
const partie = nombres.slice(1, 3); // [20, 3]
const sansFin = nombres.slice(1);   // [20, 3, 4, 5]

// Spread operator
const copie = [...nombres]; // Copie superficielle`,
                  points: [
                    'Tableaux : collections ordonnées indexées',
                    'length : nombre d\'éléments',
                    'push/pop : fin du tableau',
                    'unshift/shift : début du tableau'
                  ]
                },
                {
                  id: 'methods',
                  title: 'Méthodes avancées',
                  content: 'Les tableaux ont de nombreuses méthodes utiles.',
                  code: `const nombres = [1, 2, 3, 4, 5];

// forEach - exécute une fonction sur chaque élément
nombres.forEach(n => console.log(n));

// map - transforme chaque élément
const carres = nombres.map(n => n * n);

// filter - filtre les éléments
const pairs = nombres.filter(n => n % 2 === 0);

// reduce - réduit à une valeur unique
const somme = nombres.reduce((acc, n) => acc + n, 0);

// find - trouve un élément
const premierPair = nombres.find(n => n % 2 === 0);

// some / every - vérifie des conditions
const contientPair = nombres.some(n => n % 2 === 0);
const tousPairs = nombres.every(n => n % 2 === 0);`,
                  exercise: {
                    question: 'Transformez un tableau de températures en Celsius en Fahrenheit (F = C × 9/5 + 32).',
                    solution: `const celsius = [0, 20, 30, 40];
const fahrenheit = celsius.map(c => (c * 9/5) + 32);
console.log(fahrenheit); // [32, 68, 86, 104]`
                  }
                }
              ]
            },
            {
              id: 'objets',
              order: 8,
              title: 'Objets',
              duration: '50 min',
              description: 'Organisez des données complexes avec des objets.',
              sections: [
                {
                  id: 'creation',
                  title: 'Création et accès',
                  content: 'Les objets sont des collections de paires clé-valeur.',
                  code: `// Création littérale
const personne = {
  nom: "Alice",
  age: 30,
  ville: "Paris",
  saluer() {
    console.log("Bonjour, je suis " + this.nom);
  }
};

// Accès
console.log(personne.nom); // "Alice"
console.log(personne["age"]); // 30

// Modification
personne.age = 31;
personne["ville"] = "Lyon";

// Ajout
personne.metier = "Développeur";

// Suppression
delete personne.ville;

// Vérification
console.log("nom" in personne); // true

// Méthode
personne.saluer(); // "Bonjour, je suis Alice"`,
                  points: [
                    'Objets : collections non ordonnées',
                    'Accès par point . ou crochets []',
                    'Méthodes : fonctions dans les objets'
                  ]
                },
                {
                  id: 'manipulation',
                  title: 'Manipulation avancée',
                  content: 'Techniques modernes pour manipuler les objets.',
                  code: `// Destructuring
const { nom, age } = personne;
console.log(nom, age);

// Spread operator
const copiePersonne = { ...personne, age: 32 };

// Méthodes Object
const cles = Object.keys(personne);
const valeurs = Object.values(personne);
const entrees = Object.entries(personne);

// Optional chaining
const adresse = personne?.adresse?.ville; // undefined (pas d'erreur)

// Nullish coalescing
const ville = personne.ville ?? "Inconnue"; // Utilise "Inconnue" si null/undefined

// Getters et setters
const compte = {
  solde: 1000,
  get formatte() {
    return \`\${this.solde} €\`;
  },
  set ajout(montant) {
    if (montant > 0) this.solde += montant;
  }
};`,
                  exercise: {
                    question: 'Créez un objet "livre" avec titre, auteur, année, et une méthode afficherInfos().',
                    solution: `const livre = {
  titre: "JavaScript pour les nuls",
  auteur: "Jean Dupont",
  annee: 2023,
  afficherInfos() {
    console.log(\`\${this.titre} par \${this.auteur} (\${this.annee})\`);
  }
};
livre.afficherInfos();`
                  }
                }
              ]
            }
          ]
        },
        {
          id: 'intermediaire',
          title: 'Intermédiaire',
          description: 'Concepts avancés',
          icon: '🟡',
          chapters: [
            {
              id: 'dom',
              order: 1,
              title: 'Manipulation du DOM',
              duration: '65 min',
              description: 'Interagissez avec les éléments HTML de la page.',
              sections: [
                {
                  id: 'selection',
                  title: 'Sélection d\'éléments',
                  content: 'Plusieurs méthodes pour sélectionner des éléments dans le DOM.',
                  code: `// Sélection unique
const titre = document.getElementById('monTitre');
const bouton = document.querySelector('.btn-primary');

// Sélections multiples
const paragraphes = document.getElementsByTagName('p');
const elements = document.getElementsByClassName('item');
const tousBoutons = document.querySelectorAll('button');

// Navigation
const parent = titre.parentElement;
const enfants = titre.children;
const suivant = titre.nextElementSibling;
const precedent = titre.previousElementSibling;`,
                  exercise: {
                    question: 'Sélectionnez tous les liens (<a>) d\'une page et affichez leur nombre.',
                    solution: `const liens = document.querySelectorAll('a');
console.log(\`Nombre de liens : \${liens.length}\`);`
                  }
                },
                {
                  id: 'manipulation',
                  title: 'Manipulation du contenu',
                  content: 'Modifiez le contenu, les attributs et les styles des éléments.',
                  code: `// Contenu
titre.textContent = 'Nouveau titre';
titre.innerHTML = '<em>Texte</em> avec HTML';

// Attributs
const image = document.querySelector('img');
image.setAttribute('src', 'nouvelle-image.jpg');
const alt = image.getAttribute('alt');
image.classList.add('active');
image.classList.remove('inactive');
image.classList.toggle('visible');

// Styles
titre.style.color = 'blue';
titre.style.fontSize = '24px';
titre.style.display = 'none'; // Masque l'élément

// Création d'éléments
const nouveauDiv = document.createElement('div');
nouveauDiv.textContent = 'Nouvel élément';
document.body.appendChild(nouveauDiv);`,
                  exercise: {
                    question: 'Créez un bouton qui change la couleur de fond de la page.',
                    solution: `const bouton = document.createElement('button');
bouton.textContent = 'Changer couleur';
bouton.onclick = () => {
  document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
};
document.body.appendChild(bouton);`
                  }
                }
              ]
            },
            {
              id: 'evenements',
              order: 2,
              title: 'Événements',
              duration: '55 min',
              description: 'Réagissez aux actions des utilisateurs.',
              sections: [
                {
                  id: 'listeners',
                  title: 'Écouteurs d\'événements',
                  content: 'Différentes façons d\'écouter les événements.',
                  code: `// Méthode 1 : attribut HTML (à éviter)
// <button onclick="alert('Click!')">Bouton</button>

// Méthode 2 : propriété
bouton.onclick = function() {
  console.log('Premier handler');
};

// Méthode 3 : addEventListener (recommandée)
bouton.addEventListener('click', function(e) {
  console.log('Click avec addEventListener');
  console.log('Cible:', e.target);
  console.log('Type:', e.type);
});

// Événements courants
bouton.addEventListener('mouseenter', () => console.log('Souris dessus'));
bouton.addEventListener('mouseleave', () => console.log('Souris sortie'));
bouton.addEventListener('focus', () => console.log('Focus'));
bouton.addEventListener('blur', () => console.log('Perdu le focus'));`,
                  exercise: {
                    question: 'Créez un champ texte qui affiche sa valeur en temps réel.',
                    solution: `const input = document.createElement('input');
const output = document.createElement('div');

input.addEventListener('input', (e) => {
  output.textContent = \`Vous avez écrit : \${e.target.value}\`;
});

document.body.append(input, output);`
                  }
                }
              ]
            },
            {
              id: 'async',
              order: 3,
              title: 'Asynchrone',
              duration: '70 min',
              description: 'Gérez les opérations longues avec Promises et async/await.',
              sections: [
                {
                  id: 'promises',
                  title: 'Promesses (Promises)',
                  content: 'Gérez des opérations asynchrones de manière lisible.',
                  code: `// Création d'une promesse
const maPromesse = new Promise((resolve, reject) => {
  setTimeout(() => {
    const succes = Math.random() > 0.5;
    if (succes) {
      resolve('Opération réussie!');
    } else {
      reject('Échec de l\'opération');
    }
  }, 1000);
});

// Utilisation
maPromesse
  .then(resultat => console.log(resultat))
  .catch(erreur => console.error(erreur))
  .finally(() => console.log('Terminé!'));

// Méthodes statiques
Promise.all([promesse1, promesse2])
  .then(results => console.log('Toutes terminées:', results));

Promise.race([promesse1, promesse2])
  .then(result => console.log('Première terminée:', result));`,
                  exercise: {
                    question: 'Créez une promesse qui se résout après 2 secondes avec le message "Temps écoulé".',
                    solution: `const attente = new Promise((resolve) => {
  setTimeout(() => resolve('Temps écoulé'), 2000);
});
attente.then(msg => console.log(msg));`
                  }
                },
                {
                  id: 'async-await',
                  title: 'async/await',
                  content: 'Syntaxe moderne pour écrire du code asynchrone de manière synchrone.',
                  code: `// Fonction asynchrone
async function fetchData() {
  try {
    const response = await fetch('https://api.exemple.com/data');
    if (!response.ok) throw new Error('Erreur HTTP');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur:', error);
    throw error;
  }
}

// Utilisation
async function main() {
  try {
    const data = await fetchData();
    console.log('Données reçues:', data);
  } catch (err) {
    console.log('Erreur dans main:', err);
  }
}

// Parallélisme
async function toutRecuperer() {
  const [data1, data2] = await Promise.all([
    fetch('url1').then(r => r.json()),
    fetch('url2').then(r => r.json())
  ]);
  return { data1, data2 };
}`,
                  exercise: {
                    question: 'Créez une fonction qui attend 1 seconde puis retourne "Bonjour".',
                    solution: `async function direBonjour() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return 'Bonjour';
}

direBonjour().then(msg => console.log(msg));`
                  }
                }
              ]
            }
          ]
        },
        {
          id: 'avance',
          title: 'Avancé',
          description: 'Concepts experts',
          icon: '🔴',
          chapters: [
            {
              id: 'es6',
              order: 1,
              title: 'ES6+ Modernes',
              duration: '60 min',
              description: 'Fonctionnalités modernes du JavaScript.',
              sections: [
                {
                  id: 'destructuring',
                  title: 'Destructuring',
                  code: `// Tableaux
const [premier, deuxieme] = [1, 2, 3];
const [a, , c] = [1, 2, 3]; // Skip un élément

// Objets
const { nom, age } = personne;
const { nom: prenom, ville = "Paris" } = personne; // Renommage + default

// Paramètres de fonction
function afficher({ titre, auteur }) {
  console.log(titre, auteur);
}

// Nested destructuring
const {
  adresse: { rue, codePostal }
} = utilisateur;`,
                  exercise: {
                    question: 'Extrayez le titre et l\'année d\'un objet film, avec une année par défaut de 2020.',
                    solution: `const film = { titre: "Inception", realisateur: "Nolan" };
const { titre, annee = 2020 } = film;
console.log(titre, annee); // "Inception", 2020`
                  }
                },
                {
                  id: 'modules',
                  title: 'Modules ES6',
                  content: 'Organisez votre code en modules.',
                  code: `// module.js
export const PI = 3.14;
export function carre(x) { return x * x; }
export default class Personne { ... }

// main.js
import Personne, { PI, carre } from './module.js';
import * as math from './math.js'; // Import tout

// Import dynamique
const module = await import('./module.js');`,
                  points: [
                    'export : rend disponible',
                    'import : utilise depuis un autre fichier',
                    'modules : isolation et réutilisabilité'
                  ]
                }
              ]
            },
            {
              id: 'classes',
              order: 2,
              title: 'Classes et POO',
              duration: '75 min',
              description: 'Programmation Orientée Objet avec JavaScript.',
              sections: [
                {
                  id: 'basics',
                  title: 'Classes de base',
                  content: 'Syntaxe moderne pour créer des classes.',
                  code: `class Personne {
  constructor(nom, age) {
    this.nom = nom;
    this.age = age;
  }
  
  saluer() {
    return \`Bonjour, je suis \${this.nom}\`;
  }
  
  // Getter/Setter
  get description() {
    return \`\${this.nom} (\${this.age} ans)\`;
  }
  
  set nouvelAge(age) {
    if (age > 0) this.age = age;
  }
  
  // Méthode statique
  static comparer(a, b) {
    return a.age - b.age;
  }
}

// Héritage
class Etudiant extends Personne {
  constructor(nom, age, matiere) {
    super(nom, age);
    this.matiere = matiere;
  }
  
  etudier() {
    return \`\${this.nom} étudie \${this.matiere}\`;
  }
}

// Utilisation
const alice = new Personne('Alice', 30);
const bob = new Etudiant('Bob', 20, 'JavaScript');
console.log(bob.etudier());`,
                  exercise: {
                    question: 'Créez une classe Rectangle avec largeur, hauteur et une méthode pour calculer l\'aire.',
                    solution: `class Rectangle {
  constructor(largeur, hauteur) {
    this.largeur = largeur;
    this.hauteur = hauteur;
  }
  
  aire() {
    return this.largeur * this.hauteur;
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.aire()); // 50`
                  }
                }
              ]
            },
            {
              id: 'patterns',
              order: 3,
              title: 'Design Patterns',
              duration: '80 min',
              description: 'Patterns de conception courants en JavaScript.',
              sections: [
                {
                  id: 'singleton',
                  title: 'Singleton',
                  code: `class Configuration {
  constructor() {
    if (Configuration.instance) {
      return Configuration.instance;
    }
    this.settings = {};
    Configuration.instance = this;
    return this;
  }
  
  set(key, value) {
    this.settings[key] = value;
  }
  
  get(key) {
    return this.settings[key];
  }
}

const config1 = new Configuration();
const config2 = new Configuration();
console.log(config1 === config2); // true`,
                  points: [
                    'Singleton : une seule instance',
                    'Module pattern : encapsulation',
                    'Factory : création d\'objets',
                    'Observer : notifications'
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 'projets',
          title: 'Projets',
          description: 'Applications complètes',
          icon: '🚀',
          chapters: [
            {
              id: 'todo-app',
              order: 1,
              title: 'Application To-Do List',
              duration: '90 min',
              description: 'Créez une application de gestion de tâches complète.',
              sections: [
                {
                  id: 'structure',
                  title: 'Structure HTML/CSS',
                  content: 'Créez l\'interface utilisateur de base.',
                  code: `${`<!`+`DOCTYPE html>`}
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <style>
        body { font-family: Arial; max-width: 600px; margin: 0 auto; padding: 20px; }
        .todo-container { background: #f5f5f5; padding: 20px; border-radius: 10px; }
        .todo-input { display: flex; gap: 10px; margin-bottom: 20px; }
        input { flex: 1; padding: 10px; font-size: 16px; }
        button { padding: 10px 20px; background: #007bff; color: white; border: none; cursor: pointer; }
        .todo-item { background: white; padding: 10px; margin: 5px 0; border-radius: 5px; display: flex; justify-content: space-between; }
        .completed { text-decoration: line-through; opacity: 0.7; }
    </style>
</head>
<body>
    <div class="todo-container">
        <h1>📝 Ma To-Do List</h1>
        <div class="todo-input">
            <input type="text" id="todoInput" placeholder="Nouvelle tâche...">
            <button id="addButton">Ajouter</button>
        </div>
        <div id="todoList"></div>
        <div class="stats">
            <p>Tâches: <span id="totalCount">0</span> | 
               Terminées: <span id="completedCount">0</span>
            </p>
        </div>
    </div>
    <script src="app.js">${`</`+`script>`}
${'</' + 'body>'}
${'</' + 'html>'}`,
                  points: [
                    'HTML : structure de la page',
                    'CSS : styles de base',
                    'Structure responsive'
                  ]
                },
                {
                  id: 'javascript',
                  title: 'Logique JavaScript',
                  content: 'Implémentez les fonctionnalités principales.',
                  code: `// app.js
class TodoApp {
  constructor() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    this.input = document.getElementById('todoInput');
    this.addButton = document.getElementById('addButton');
    this.list = document.getElementById('todoList');
    this.totalCount = document.getElementById('totalCount');
    this.completedCount = document.getElementById('completedCount');
    
    this.init();
  }
  
  init() {
    this.addButton.addEventListener('click', () => this.addTodo());
    this.input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.addTodo();
    });
    
    this.render();
  }
  
  addTodo() {
    const text = this.input.value.trim();
    if (text) {
      this.todos.push({
        id: Date.now(),
        text,
        completed: false,
        createdAt: new Date().toISOString()
      });
      this.input.value = '';
      this.save();
      this.render();
    }
  }
  
  toggleTodo(id) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.save();
      this.render();
    }
  }
  
  deleteTodo(id) {
    this.todos = this.todos.filter(t => t.id !== id);
    this.save();
    this.render();
  }
  
  save() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  
  render() {
    this.list.innerHTML = '';
    this.todos.forEach(todo => {
      const div = document.createElement('div');
      div.className = \`todo-item \${todo.completed ? 'completed' : ''}\`;
      div.innerHTML = \`
        <span onclick="app.toggleTodo(\${todo.id})">\${todo.text}</span>
        <button onclick="app.deleteTodo(\${todo.id})">🗑️</button>
      \`;
      this.list.appendChild(div);
    });
    
    this.totalCount.textContent = this.todos.length;
    this.completedCount.textContent = this.todos.filter(t => t.completed).length;
  }
}

// Initialisation
const app = new TodoApp();`,
                  points: [
                    'Classe pour organiser le code',
                    'LocalStorage pour persistance',
                    'Événements pour interactions',
                    'Rendu dynamique'
                  ]
                }
              ]
            },
            {
              id: 'meteo',
              order: 2,
              title: 'Application Météo',
              duration: '120 min',
              description: 'Créez une application météo avec API externe.',
              sections: [
                {
                  id: 'api',
                  title: 'Utilisation d\'API',
                  content: 'Récupérez des données météo depuis une API publique.',
                  code: `// Clé API (inscrivez-vous sur openweathermap.org)
const API_KEY = 'votre_cle_api';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

class WeatherApp {
  constructor() {
    this.cityInput = document.getElementById('cityInput');
    this.searchButton = document.getElementById('searchButton');
    this.weatherDisplay = document.getElementById('weatherDisplay');
    
    this.init();
  }
  
  async getWeather(city) {
    try {
      const response = await fetch(\`\${API_URL}?q=\${city}&appid=\${API_KEY}&units=metric&lang=fr\`);
      if (!response.ok) throw new Error('Ville non trouvée');
      const data = await response.json();
      this.displayWeather(data);
    } catch (error) {
      this.displayError(error.message);
    }
  }
  
  displayWeather(data) {
    const { name, main, weather, wind } = data;
    this.weatherDisplay.innerHTML = \`
      <div class="weather-card">
        <h2>\${name}</h2>
        <div class="temp">\${Math.round(main.temp)}°C</div>
        <div class="description">\${weather[0].description}</div>
        <div class="details">
          <p>Ressenti: \${Math.round(main.feels_like)}°C</p>
          <p>Humidité: \${main.humidity}%</p>
          <p>Vent: \${Math.round(wind.speed * 3.6)} km/h</p>
        </div>
      ${'</' + 'div>'}
    \`;
  }
  
  init() {
    this.searchButton.addEventListener('click', () => {
      const city = this.cityInput.value.trim();
      if (city) this.getWeather(city);
    });
  }
}

const weatherApp = new WeatherApp();`,
                  points: [
                    'Fetch API pour récupérer des données',
                    'Async/await pour gérer l\'asynchrone',
                    'Gestion des erreurs',
                    'Affichage des données'
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  },
  computed: {
    selectedCourseTitle() {
      if (!this.selectedCourse) return '';
      const course = this.courses.find(c => c.id === this.selectedCourse);
      return course ? course.title : '';
    },
    currentCourse() {
      return this.courses.find(c => c.id === this.selectedCourse) || { chapters: [] };
    },
    currentChapter() {
      return this.currentCourse.chapters.find(ch => ch.id === this.selectedChapter) || null;
    },
    progress() {
      if (!this.currentCourse.chapters.length) return 0;
      const completed = this.currentCourse.chapters.filter(ch => 
        this.completedChapters.includes(ch.id)
      ).length;
      return Math.round((completed / this.currentCourse.chapters.length) * 100);
    },
    previousChapter() {
      if (!this.currentChapter) return null;
      const index = this.currentCourse.chapters.findIndex(ch => ch.id === this.selectedChapter);
      return index > 0 ? this.currentCourse.chapters[index - 1] : null;
    },
    nextChapter() {
      if (!this.currentChapter) return null;
      const index = this.currentCourse.chapters.findIndex(ch => ch.id === this.selectedChapter);
      return index < this.currentCourse.chapters.length - 1 ? this.currentCourse.chapters[index + 1] : null;
    }
  },
  methods: {
    selectCourse(courseId) {
      this.selectedCourse = courseId;
      this.selectedChapter = null;
      this.completedChapters = this.completedChapters.filter(id => 
        !this.currentCourse.chapters.find(ch => ch.id === id)
      );
      // Auto-select first chapter
      setTimeout(() => {
        if (this.currentCourse.chapters[0]) {
          this.selectChapter(this.currentCourse.chapters[0].id);
        }
      }, 100);
    },
    selectChapter(chapterId) {
      this.selectedChapter = chapterId;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    isChapterCompleted(chapterId) {
      return this.completedChapters.includes(chapterId);
    },
    markAsCompleted() {
      if (this.selectedChapter && !this.isChapterCompleted(this.selectedChapter)) {
        this.completedChapters.push(this.selectedChapter);
      }
    },
    resetCourse() {
      this.selectedCourse = null;
      this.selectedChapter = null;
      this.completedChapters = [];
      this.showHints = {};
      this.showSolutions = {};
      this.copiedCode = null;
    },
    toggleHint(sectionId) {
      this.$set(this.showHints, sectionId, !this.showHints[sectionId]);
    },
    toggleSolution(sectionId) {
      this.$set(this.showSolutions, sectionId, !this.showSolutions[sectionId]);
    },
    async copyCode(code, sectionId) {
      try {
        await navigator.clipboard.writeText(code);
        this.copiedCode = sectionId;
        setTimeout(() => {
          this.copiedCode = null;
        }, 2000);
      } catch (err) {
        console.error('Erreur de copie:', err);
      }
    },
     saveProgress() {
    const progress = {
      completedChapters: this.completedChapters,
      selectedCourse: this.selectedCourse,
      selectedChapter: this.selectedChapter
    };
    localStorage.setItem('jsCourseProgress', JSON.stringify(progress));
  },
  },
  mounted() {
    // Charge la progression depuis localStorage
    const savedProgress = localStorage.getItem('jsCourseProgress');
    if (savedProgress) {
      try {
        const { completedChapters, selectedCourse, selectedChapter } = JSON.parse(savedProgress);
        this.completedChapters = completedChapters || [];
        if (selectedCourse) {
          this.selectedCourse = selectedCourse;
          if (selectedChapter) {
            setTimeout(() => {
              this.selectedChapter = selectedChapter;
            }, 100);
          }
        }
      } catch (e) {
        console.log('Aucune progression sauvegardée');
      }
    }
  },
  watch: {
    selectedCourse(newCourse) {
      this.saveProgress();
    },
    selectedChapter(newChapter) {
      this.saveProgress();
    },
    completedChapters: {
      handler() {
        this.saveProgress();
      },
      deep: true
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* Améliorations de style */
.todo-item {
  transition: all 0.3s ease;
}

.todo-item:hover {
  transform: translateX(5px);
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.weather-card {
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: white;
  padding: 20px;
  border-radius: 15px;
  text-align: center;
}
</style>