
	components: {
		Python,
	},<template>
  <div class="python-page bg-white">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-b from-green-50 to-green-100 py-16">
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
      <!-- Logo Python amélioré -->
      <div class="flex-shrink-0">
        <div class="w-24 h-24 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg group hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <!-- Logo Python SVG avec vraies couleurs -->
          <svg class="w-16 h-16 text-green-100" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
          </svg>
        </div>
      </div>

      <!-- Texte amélioré -->
      <div class="flex-1 text-center md:text-left">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Python Masterclass
        </h1>
        <p class="text-xl text-gray-600 mb-6">
          Apprenez Python de A à Z avec un parcours structuré et interactif. De la syntaxe de base à l'IA et la Data Science.
        </p>
        
        <!-- Bouton d'accès au cours -->
        <div class="flex flex-col sm:flex-row items-center gap-4 mb-6">
          <router-link 
            to="/python/cours"
            class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-300 to-green-500 text-white font-bold rounded-xl hover:bg-green-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group"
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
            class="sm:hidden inline-flex items-center gap-2 px-6 py-3 border border-blue-300 text-gray-700 font-medium rounded-lg hover:bg-blue-50 transition-all"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            Retour
          </router-link>
        </div>

        <!-- Badges améliorés -->
        <div class="flex flex-wrap gap-3 justify-center md:justify-start">
          <span class="px-4 py-2 bg-white border border-blue-100 rounded-lg text-sm font-medium text-gray-700 hover:border-blue-300 transition-colors hover:shadow-sm">
            <span class="text-blue-500 mr-1">📊</span> Data Science
          </span>
          <span class="px-4 py-2 bg-white border border-green-100 rounded-lg text-sm font-medium text-gray-700 hover:border-green-300 transition-colors hover:shadow-sm">
            <span class="text-green-500 mr-1">🤖</span> Intelligence Artificielle
          </span>
          <span class="px-4 py-2 bg-white border border-blue-100 rounded-lg text-sm font-medium text-gray-700 hover:border-blue-300 transition-colors hover:shadow-sm">
            <span class="text-blue-500 mr-1">🌐</span> Web (Django/Flask)
          </span>
          <span class="px-4 py-2 bg-white border border-green-100 rounded-lg text-sm font-medium text-gray-700 hover:border-green-300 transition-colors hover:shadow-sm">
            <span class="text-green-500 mr-1">⚙️</span> Automatisation
          </span>
        </div>
      </div>
    </div>

    <!-- Statistiques -->
    <div class="mt-12 pt-8 border-t border-blue-100">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="text-center p-4 bg-blue-50/50 rounded-xl border border-blue-100 hover:border-blue-200 transition-colors">
          <div class="text-2xl font-bold text-gray-900">45+</div>
          <div class="text-sm text-blue-600 font-medium">Chapitres</div>
        </div>
        <div class="text-center p-4 bg-green-50/50 rounded-xl border border-green-100 hover:border-green-200 transition-colors">
          <div class="text-2xl font-bold text-gray-900">60+</div>
          <div class="text-sm text-green-600 font-medium">Exercices pratiques</div>
        </div>
        <div class="text-center p-4 bg-blue-50/50 rounded-xl border border-blue-100 hover:border-blue-200 transition-colors">
          <div class="text-2xl font-bold text-gray-900">25+</div>
          <div class="text-sm text-blue-600 font-medium">Heures de contenu</div>
        </div>
        <div class="text-center p-4 bg-green-50/50 rounded-xl border border-green-100 hover:border-green-200 transition-colors">
          <div class="text-2xl font-bold text-gray-900">100%</div>
          <div class="text-sm text-green-600 font-medium">Pratique</div>
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
          <button @click="scrollTo('domaines')" class="text-sm font-medium text-gray-600 hover:text-blue-600 whitespace-nowrap transition-colors focus:outline-none">
            Domaines Python
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
          <!-- Installation - Version simplifiée -->
          <section id="installation" class="scroll-mt-32">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">🏗️ Installation de Python</h2>
            
            <div class="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Installation standard</h3>
              <p class="text-gray-700 mb-4">
                Python est multiplateforme et facile à installer :
              </p>
              <div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto mb-4">
                <pre># Téléchargez depuis https://python.org
# Version 3.10+ recommandée

# Vérification
python --version
# Doit afficher : Python 3.x.x

# Sur certains systèmes :
python3 --version</pre>
              </div>
              
              <div class="bg-gradient-to-r from-green-100 to-green-50 border border-green-300 rounded-lg p-4">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                  <div>
                    <p class="text-sm font-medium text-green-800 mb-1">Conseil Pro</p>
                    <p class="text-sm text-green-700">
                      Cochez "Add Python to PATH" pendant l'installation pour pouvoir l'utiliser facilement en ligne de commande.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Environnements virtuels (venv)</h3>
              <p class="text-gray-700 mb-4">
                Pour isoler les dépendances de vos projets :
              </p>
              <div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre># Créer un environnement
python -m venv mon_env

# Activer (Windows)
mon_env\Scripts\activate

# Activer (Mac/Linux)
source mon_env/bin/activate

# Vérifier
python --version
pip --version</pre>
              </div>
            </div>
          </section>

          <!-- Les bases - Version concise -->
          <section id="bases" class="scroll-mt-32">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">📚 Les bases essentielles</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Variables -->
              <div class="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-900 mb-3">Variables & Types</h3>
                <div class="bg-gray-900 text-gray-100 rounded-lg p-3 font-mono text-sm overflow-x-auto mb-3">
                  <pre>nom = "Alice"      # str
age = 25          # int
taille = 1.75     # float
est_etudiant = True  # bool</pre>
                </div>
                <p class="text-sm text-gray-600">
                  Typage dynamique : Python devine le type automatiquement.
                </p>
              </div>

              <!-- Listes & Dictionnaires -->
              <div class="bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-900 mb-3">Structures de données</h3>
                <div class="bg-gray-900 text-gray-100 rounded-lg p-3 font-mono text-sm overflow-x-auto mb-3">
                  <pre># Liste (modifiable)
nombres = [1, 2, 3]

# Dictionnaire (clé-valeur)
personne = {
    "nom": "Alice",
    "age": 25
}</pre>
                </div>
                <p class="text-sm text-gray-600">
                  Listes [], Tuples (), Dictionnaires {}, Sets {}.
                </p>
              </div>

              <!-- Fonctions -->
              <div class="bg-gradient-to-br from-yellow-50 to-white border border-yellow-200 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-900 mb-3">Fonctions</h3>
                <div class="bg-gray-900 text-gray-100 rounded-lg p-3 font-mono text-sm overflow-x-auto mb-3">
                  <pre>def saluer(nom):
    """Docstring"""
    return f"Bonjour {nom}"

# Appel
saluer("Alice")</pre>
                </div>
                <p class="text-sm text-gray-600">
                  Mot-clé <code class="bg-yellow-100 px-1.5 py-0.5 rounded">def</code> pour définir, docstring pour documenter.
                </p>
              </div>

              <!-- Boucles -->
              <div class="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-900 mb-3">Boucles & Conditions</h3>
                <div class="bg-gray-900 text-gray-100 rounded-lg p-3 font-mono text-sm overflow-x-auto mb-3">
                  <pre># For loop
for i in range(5):
    print(i)

# Condition
if age >= 18:
    print("Majeur")
else:
    print("Mineur")</pre>
                </div>
                <p class="text-sm text-gray-600">
                  Indentation obligatoire, <code>range()</code> pour générer des séquences.
                </p>
              </div>
            </div>
          </section>

          <!-- Domaines d'application -->
          <section id="domaines" class="scroll-mt-32">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">🎯 Domaines d'application Python</h2>
            
            <div class="space-y-4">
              <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 pl-6 pr-4 py-4">
                <h3 class="text-lg font-bold text-gray-900 mb-2">Data Science & ML</h3>
                <p class="text-gray-700 mb-2">Analyser des données et créer des modèles IA</p>
                <div class="bg-gray-800 text-gray-100 rounded-lg p-3 font-mono text-sm overflow-x-auto">
                  <pre>import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression

# Analyse de données
df = pd.read_csv('data.csv')
model = LinearRegression()</pre>
                </div>
              </div>

              <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 pl-6 pr-4 py-4">
                <h3 class="text-lg font-bold text-gray-900 mb-2">Développement Web</h3>
                <p class="text-gray-700 mb-2">Créer des applications web robustes</p>
                <div class="bg-gray-800 text-gray-100 rounded-lg p-3 font-mono text-sm overflow-x-auto">
                  <pre># Flask (micro-framework)
from flask import Flask
app = Flask(__name__)

@app.route('/')
def home():
    return "Hello World!"</pre>
                </div>
              </div>

              <div class="bg-gradient-to-r from-purple-50 to-violet-50 border-l-4 border-purple-500 pl-6 pr-4 py-4">
                <h3 class="text-lg font-bold text-gray-900 mb-2">Automatisation & Scripting</h3>
                <p class="text-gray-700 mb-2">Automatiser des tâches répétitives</p>
                <div class="bg-gray-800 text-gray-100 rounded-lg p-3 font-mono text-sm overflow-x-auto">
                  <pre>import os
import shutil

# Automatisation
for file in os.listdir('.'):
    if file.endswith('.txt'):
        shutil.copy(file, 'backup/')</pre>
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
                    <h3 class="font-bold text-gray-900 text-lg mb-1">Guide Complet Python</h3>
                    <p class="text-sm text-gray-600 mb-2">De la syntaxe aux concepts avancés</p>
                    <div class="flex items-center text-xs">
                      <span class="text-gray-500 mr-3">📄 50 pages</span>
                      <span class="text-gray-500">⚡ 3.5 MB</span>
                    </div>
                  </div>
                </div>
                <button 
                  @click="downloadPDF('guide-python.pdf')"
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

              <!-- Data Science -->
              <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div class="flex items-start mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 text-lg mb-1">Python Data Science</h3>
                    <p class="text-sm text-gray-600 mb-2">Pandas, NumPy, Matplotlib, Scikit-learn</p>
                    <div class="flex items-center text-xs">
                      <span class="text-gray-500 mr-3">📄 65 pages</span>
                      <span class="text-gray-500">⚡ 4.2 MB</span>
                    </div>
                  </div>
                </div>
                <button 
                  @click="downloadPDF('data-science-python.pdf')"
                  class="w-full bg-gradient-to-r from-green-600 to-emerald-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-800 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span class="flex items-center justify-center">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                    </svg>
                    Télécharger Data Science
                  </span>
                </button>
              </div>

              <!-- Projets -->
              <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div class="flex items-start mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 text-lg mb-1">10 Projets Python</h3>
                    <p class="text-sm text-gray-600 mb-2">Web scraping, bots, APIs, visualisation</p>
                    <div class="flex items-center text-xs">
                      <span class="text-gray-500 mr-3">📄 72 pages</span>
                      <span class="text-gray-500">⚡ 5.1 MB</span>
                    </div>
                  </div>
                </div>
                <button 
                  @click="downloadPDF('projets-python.pdf')"
                  class="w-full bg-gradient-to-r from-yellow-600 to-amber-700 text-white py-3 rounded-lg font-semibold hover:from-yellow-700 hover:to-amber-800 transition-all duration-300 shadow-md hover:shadow-lg"
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
                  <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 text-lg mb-1">Mémo Python</h3>
                    <p class="text-sm text-gray-600 mb-2">Syntaxe, fonctions, bibliothèques</p>
                    <div class="flex items-center text-xs">
                      <span class="text-gray-500 mr-3">📄 35 pages</span>
                      <span class="text-gray-500">⚡ 2.1 MB</span>
                    </div>
                  </div>
                </div>
                <button 
                  @click="downloadPDF('memo-python.pdf')"
                  class="w-full bg-gradient-to-r from-purple-600 to-violet-700 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-violet-800 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span class="flex items-center justify-center">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                    </svg>
                    Télécharger le mémo
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
                Quelle est la différence entre <code class="bg-blue-100 px-2 py-1 rounded">list</code> et <code class="bg-blue-100 px-2 py-1 rounded">tuple</code> en Python ?
              </h3>
              
              <div class="space-y-3 mb-6">
                <label class="flex items-center p-3 bg-white border border-gray-300 rounded-lg hover:border-blue-400 cursor-pointer transition-colors">
                  <input type="radio" name="quiz1" value="1" class="mr-3" v-model="quizAnswer">
                  <span class="text-gray-700">Aucune différence, ce sont des synonymes</span>
                </label>
                <label class="flex items-center p-3 bg-white border border-gray-300 rounded-lg hover:border-blue-400 cursor-pointer transition-colors">
                  <input type="radio" name="quiz1" value="2" class="mr-3" v-model="quizAnswer">
                  <span class="text-gray-700">Les tuples sont modifiables, les listes non</span>
                </label>
                <label class="flex items-center p-3 bg-white border border-gray-300 rounded-lg hover:border-blue-400 cursor-pointer transition-colors">
                  <input type="radio" name="quiz1" value="3" class="mr-3" v-model="quizAnswer">
                  <span class="text-gray-700">Les listes sont modifiables, les tuples non</span>
                </label>
              </div>
              
              <button 
                @click="checkQuiz"
                class="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold py-3 rounded-lg hover:from-blue-600 hover:to-green-600 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Vérifier ma réponse
              </button>
            </div>
          </section>

          <!-- CTA Final -->
          <section class="bg-gradient-to-r from-green-500 to-green-700 rounded-2xl p-8 text-white text-center">
            <h3 class="text-2xl md:text-3xl font-bold mb-4">🚀 Prêt pour l'aventure interactive ?</h3>
            <p class="text-blue-100 mb-6 text-lg">
              Rejoignez notre cours interactif avec progression, quiz et apprentissage personnalisé !
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <router-link 
                to="/python/cours"
                class="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-blue-400 to-green-400 text-white font-bold rounded-xl hover:from-blue-500 hover:to-green-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group"
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
                <div class="text-2xl font-bold">30</div>
                <div class="text-xs text-blue-200">Chapitres</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold">120+</div>
                <div class="text-xs text-blue-200">Exercices</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold">3</div>
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
                  to="/python/cours"
                  class="flex items-center justify-between bg-gradient-to-r from-blue-50 to-green-100 border border-blue-200 text-blue-700 py-3 px-4 rounded-lg font-medium hover:from-blue-100 hover:to-green-200 transition-all group"
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

            <!-- Pourquoi Python ? -->
            <div class="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
              <h3 class="text-lg font-bold text-gray-900 mb-3">🐍 Pourquoi Python ?</h3>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-sm text-gray-700">Syntaxe simple et lisible</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-sm text-gray-700">Grande communauté</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-sm text-gray-700">Multi-domaines (Web, Data, IA...)</span>
                </li>
              </ul>
            </div>

            <!-- Conseils -->
            <div class="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6">
              <div class="flex items-start">
                <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-sm font-bold text-gray-900 mb-1">Astuce Pro</p>
                  <p class="text-xs text-gray-700">
                    Maîtrisez les bases avant de vous spécialiser dans un domaine.
                  </p>
                </div>
              </div>
            </div>

            <!-- Bibliothèques populaires -->
            <div class="bg-white border border-gray-200 rounded-xl p-6">
              <h3 class="text-lg font-bold text-gray-900 mb-3">📚 Bibliothèques populaires</h3>
              <div class="space-y-2">
                <div class="flex items-center text-sm">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span class="text-gray-700">NumPy - Calcul scientifique</span>
                </div>
                <div class="flex items-center text-sm">
                  <div class="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span class="text-gray-700">Pandas - Analyse de données</span>
                </div>
                <div class="flex items-center text-sm">
                  <div class="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                  <span class="text-gray-700">Django - Framework web</span>
                </div>
                <div class="flex items-center text-sm">
                  <div class="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  <span class="text-gray-700">TensorFlow - IA/ML</span>
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
import Python from '@/views/lANGUAGE/Python/Python.vue'

export default {
  name: 'PythonLandingPage',
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
      // En production :
      // const filePath = `/pdf/python/${filename}`;
      // const link = document.createElement('a');
      // link.href = filePath;
      // link.download = filename;
      // link.click();
      
      // Pour l'instant, simulation
      alert(`✅ Téléchargement de "${filename}" démarré !`);
    },
    
    checkQuiz() {
      if (this.quizAnswer === '3') {
        alert('🎉 Bravo ! Les listes sont modifiables (mutable), les tuples ne le sont pas (immutable).');
      } else if (this.quizAnswer) {
        alert('❌ Presque ! La bonne réponse est : Les listes sont modifiables, les tuples non.');
      } else {
        alert('⚠️ Sélectionnez une réponse avant de vérifier.');
      }
    },
    
    showDemo() {
      alert("🎬 Découvrez notre cours interactif Python avec :\n\n✅ 30 chapitres progressifs\n✅ Quiz après chaque chapitre\n✅ Progression sauvegardée\n✅ Interface moderne et intuitive\n✅ Support complet\n✅ Projets réels\n\nCliquez sur 'Démarrer le cours interactif' pour commencer !");
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

.python-page {
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

/* Gradient spécifique Python */
.bg-gradient-python {
  background: linear-gradient(135deg, #3776AB 0%, #306998 50%, #FFD43B 100%);
}
</style>