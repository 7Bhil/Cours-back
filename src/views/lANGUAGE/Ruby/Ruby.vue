<template>
  <div class="ruby-page bg-white min-h-screen">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-b from-red-50 to-white py-12 md:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <div class="w-20 h-20 md:w-24 md:h-24 bg-red-100 rounded-lg flex items-center justify-center shadow-md">
              <svg class="w-12 h-12 md:w-16 md:h-16 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.156.083c3.033.525 3.893 2.598 3.829 4.77L24 4.822 22.635 22.71 4.89 23.926h.016C3.433 23.864.15 23.729 0 19.139l1.645-3 2.819 6.586.503 1.172 2.805-9.144-.03.007.016-.03 9.255 2.956-1.396-5.431-.99-3.9 8.82-.569-.615-.51L16.5 2.114 20.159.073l-.003.01zM0 19.089zM5.13 5.073c3.561-3.533 8.157-5.621 9.922-3.84 1.762 1.777-.105 6.105-3.673 9.636-3.563 3.532-8.103 5.734-9.864 3.957-1.766-1.777.053-6.22 3.612-9.753h.002z"/>
              </svg>
            </div>
          </div>

          <!-- Texte -->
          <div class="flex-1 text-center md:text-left">
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Ruby
              <span class="text-red-600">Programming Language</span>
            </h1>
            <p class="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
              Langage de programmation dynamique et open source, axé sur la simplicité et la productivité. 
              Syntaxe élégante et naturelle, idéal pour le développement web avec Ruby on Rails.
            </p>
            <div class="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
              <span class="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm">
                Ruby on Rails
              </span>
              <span class="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm">
                Web Development
              </span>
              <span class="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm">
                APIs & Microservices
              </span>
              <span class="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs md:text-sm font-medium text-gray-700 shadow-sm">
                DevOps & Scripting
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Navigation Sticky -->
    <section class="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex space-x-4 md:space-x-8 overflow-x-auto py-3 md:py-4 hide-scrollbar">
          <button 
            v-for="nav in navigation"
            :key="nav.id"
            @click="scrollToSection(nav.id)"
            class="text-xs md:text-sm font-medium text-gray-600 hover:text-red-600 whitespace-nowrap transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded px-2 py-1"
            :class="{ 'text-red-600 font-semibold': activeSection === nav.id }"
          >
            {{ nav.label }}
          </button>
        </nav>
      </div>
    </section>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Left Column - Main Content -->
        <div class="lg:col-span-2 space-y-12 md:space-y-16">
          <!-- Section 1: Installation -->
          <section 
            id="installation" 
            ref="installationRef"
            class="scroll-mt-24 bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm"
          >
            <div class="flex items-center mb-6">
              <div class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h2 class="text-2xl md:text-3xl font-bold text-gray-900">Installation de Ruby</h2>
            </div>
            
            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-3">Méthodes d'installation</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <a href="https://www.ruby-lang.org" target="_blank" class="group">
                    <div class="bg-white border border-gray-200 rounded-lg p-4 hover:border-red-300 hover:shadow-md transition-all duration-200">
                      <div class="flex items-center mb-2">
                        <div class="w-8 h-8 bg-red-50 rounded flex items-center justify-center mr-3">
                          <span class="text-red-600 font-bold text-sm">R</span>
                        </div>
                        <span class="font-medium text-gray-900 group-hover:text-red-600">Site Officiel</span>
                      </div>
                      <p class="text-sm text-gray-600">ruby-lang.org</p>
                    </div>
                  </a>
                  
                  <a href="https://rvm.io" target="_blank" class="group">
                    <div class="bg-white border border-gray-200 rounded-lg p-4 hover:border-red-300 hover:shadow-md transition-all duration-200">
                      <div class="flex items-center mb-2">
                        <div class="w-8 h-8 bg-blue-50 rounded flex items-center justify-center mr-3">
                          <span class="text-blue-600 font-bold text-sm">RVM</span>
                        </div>
                        <span class="font-medium text-gray-900 group-hover:text-blue-600">Ruby Version Manager</span>
                      </div>
                      <p class="text-sm text-gray-600">Linux/macOS</p>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-3">Commandes d'installation</h3>
                <div class="bg-gray-900 text-gray-100 rounded-lg p-4 md:p-6 overflow-x-auto">
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center space-x-2">
                      <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span class="text-sm text-gray-400">Terminal</span>
                  </div>
                  <pre class="text-sm md:text-base font-mono"><code class="text-green-400"># macOS (avec Homebrew)</code>
$ brew install ruby

<code class="text-green-400"># Ubuntu/Debian</code>
$ sudo apt update
$ sudo apt install ruby-full

<code class="text-green-400"># Avec RVM (recommandé)</code>
$ curl -sSL https://get.rvm.io | bash
$ source ~/.rvm/scripts/rvm
$ rvm install 3.2.2
$ rvm use 3.2.2 --default

<code class="text-green-400"># Vérification</code>
$ ruby -v
<code class="text-gray-400">ruby 3.2.2 (2023-03-30 revision e51014f9c0) [x86_64-linux]</code>
$ gem -v
<code class="text-gray-400">3.4.10</code></pre>
                </div>
              </div>

              <div class="bg-red-50 border border-red-200 rounded-lg p-4">
                <div class="flex">
                  <svg class="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <div>
                    <p class="font-medium text-red-900 mb-1">Conseil d'installation</p>
                    <p class="text-sm text-red-800">
                      Utilisez Ruby 3.2+ pour les nouveaux projets. RVM ou rbenv sont recommandés pour gérer plusieurs versions de Ruby.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Section 2: Syntaxe de base -->
          <section 
            id="bases" 
            ref="basesRef"
            class="scroll-mt-24 bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm"
          >
            <div class="flex items-center mb-6">
              <div class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
              </div>
              <h2 class="text-2xl md:text-3xl font-bold text-gray-900">Syntaxe de Base</h2>
            </div>

            <div class="space-y-8">
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Types de données</h3>
                <div class="bg-gray-50 rounded-lg p-4 md:p-6 overflow-x-auto">
                  <pre class="text-sm md:text-base font-mono"><code class="text-blue-600"># Variables et types</code>
nom = "Ruby"          <code class="text-gray-500"># String</code>
age = 25             <code class="text-gray-500"># Integer</code>
prix = 19.99         <code class="text-gray-500"># Float</code>
actif = true         <code class="text-gray-500"># Boolean</code>
sym = :ruby          <code class="text-gray-500"># Symbol (immuable)</code>

<code class="text-blue-600"># Tableaux</code>
nombres = [1, 2, 3, 4, 5]
fruits = ["Pomme", "Banane", "Orange"]
mixte = [1, "deux", 3.0, :quatre]

<code class="text-blue-600"># Hash (dictionnaire)</code>
personne = {
  nom: "Marie",
  age: 30,
  ville: "Paris",
  actif: true
}

<code class="text-blue-600"># Interpolation</code>
puts "Bonjour #{nom}! Vous avez #{age} ans."</pre>
                </div>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Structures de contrôle</h3>
                <div class="bg-gray-50 rounded-lg p-4 md:p-6 overflow-x-auto">
                  <pre class="text-sm md:text-base font-mono"><code class="text-blue-600"># Conditions</code>
note = 15

<code class="text-green-600">if</code> note >= 16
  puts "Excellent!"
<code class="text-green-600">elsif</code> note >= 10
  puts "Admis"
<code class="text-green-600">else</code>
  puts "Échec"
<code class="text-green-600">end</code>

<code class="text-blue-600"># Boucles avec each</code>
[1, 2, 3, 4, 5].each <code class="text-green-600">do</code> |n|
  puts "Nombre: #{n}"
<code class="text-green-600">end</code>

<code class="text-blue-600"># Boucle times</code>
3.times <code class="text-green-600">do</code> |i|
  puts "Itération #{i + 1}"
<code class="text-green-600">end</code>

<code class="text-blue-600"># Case (switch)</code>
jour = "lundi"
<code class="text-green-600">case</code> jour
<code class="text-green-600">when</code> "lundi", "mardi"
  puts "Début de semaine"
<code class="text-green-600">when</code> "vendredi"
  puts "Week-end approche!"
<code class="text-green-600">else</code>
  puts "Jour normal"
<code class="text-green-600">end</code></pre>
                </div>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Méthodes</h3>
                <div class="bg-gray-50 rounded-lg p-4 md:p-6 overflow-x-auto">
                  <pre class="text-sm md:text-base font-mono"><code class="text-blue-600"># Définition de méthode</code>
<code class="text-green-600">def</code> saluer(nom = "Visiteur")
  "Bonjour, #{nom}!"
<code class="text-green-600">end</code>

puts saluer("Alice")        <code class="text-gray-500"># "Bonjour, Alice!"</code>
puts saluer                 <code class="text-gray-500"># "Bonjour, Visiteur!"</code>

<code class="text-blue-600"># Méthode avec retour multiple</code>
<code class="text-green-600">def</code> operations(a, b)
  [a + b, a - b, a * b, a / b]
<code class="text-green-600">end</code>

somme, diff, prod, quot = operations(10, 2)

<code class="text-blue-600"># Méthode avec bloc</code>
<code class="text-green-600">def</code> repeter(n)
  n.times { |i| <code class="text-green-600">yield</code>(i) }
<code class="text-green-600">end</code>

repeter(3) { |i| puts "Tour #{i}" }</pre>
                </div>
              </div>
            </div>
          </section>

          <!-- Section 3: Programmation Orientée Objet -->
          <section 
            id="poo" 
            ref="pooRef"
            class="scroll-mt-24 bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm"
          >
            <div class="flex items-center mb-6">
              <div class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                </svg>
              </div>
              <h2 class="text-2xl md:text-3xl font-bold text-gray-900">Programmation Orientée Objet</h2>
            </div>

            <div class="space-y-8">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-gray-50 rounded-lg p-5">
                  <h4 class="font-semibold text-gray-900 mb-3">Classes et Objets</h4>
                  <pre class="text-sm font-mono"><code class="text-green-600">class</code> Personne
  <code class="text-green-600">attr_accessor</code> :nom, :age
  
  <code class="text-green-600">def</code> initialize(nom, age)
    @nom = nom
    @age = age
  <code class="text-green-600">end</code>
  
  <code class="text-green-600">def</code> se_presenter
    "Je suis #{@nom}, #{@age} ans"
  <code class="text-green-600">end</code>
<code class="text-green-600">end</code>
<code>
p = Personne.new("Alice", 25)
puts p.se_presenter</code></pre>
                </div>

                <div class="bg-gray-50 rounded-lg p-5">
                  <h4 class="font-semibold text-gray-900 mb-3">Héritage</h4>
                  <pre class="text-sm font-mono"><code class="text-green-600">class</code> Animal
  <code class="text-green-600">attr_accessor</code> :nom
  
  <code class="text-green-600">def</code> parler
    "Je suis un animal"
  <code class="text-green-600">end</code>
<code class="text-green-600">end</code>

<code class="text-green-600">class</code> Chien < Animal
  <code class="text-green-600">def</code> parler
    "Wouaf! Wouaf!"
  <code class="text-green-600">end</code>
<code class="text-green-600">end</code>
<code>

chien = Chien.new
puts chien.parler</code></pre>
                </div>
              </div>

              <div>
                <h4 class="text-lg font-semibold text-gray-900 mb-3">Modules (Mixins)</h4>
                <div class="bg-gray-50 rounded-lg p-5">
                  <pre class="text-sm font-mono"><code class="text-green-600">module</code> Loggeable
  <code class="text-green-600">def</code> log(message)
    puts "[#{Time.now}] #{message}"
  <code class="text-green-600">end</code>
<code class="text-green-600">end</code>

<code class="text-green-600">class</code> User
  <code class="text-green-600">include</code> Loggeable
  
  <code class="text-green-600">def</code> create
    log("Création d'utilisateur")
    <code class="text-gray-500"># ... logique de création</code>
  <code class="text-green-600">end</code>
<code class="text-green-600">end</code>
<code>
user = User.new
user.create</code></pre>
                </div>
              </div>
            </div>
          </section>

          <!-- Section 4: Frameworks -->
          <section 
            id="frameworks" 
            ref="frameworksRef"
            class="scroll-mt-24 bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm"
          >
            <div class="flex items-center mb-6">
              <div class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                </svg>
              </div>
              <h2 class="text-2xl md:text-3xl font-bold text-gray-900">Frameworks & Outils</h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <span class="text-red-600 font-bold text-lg">R</span>
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900">Ruby on Rails</h3>
                    <p class="text-sm text-gray-600">Framework web full-stack</p>
                  </div>
                </div>
                <ul class="space-y-2 text-sm text-gray-700 mb-4">
                  <li class="flex items-center">
                    <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    Convention over Configuration
                  </li>
                  <li class="flex items-center">
                    <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    Active Record (ORM)
                  </li>
                  <li class="flex items-center">
                    <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    Scaffolding automatique
                  </li>
                </ul>
                <a href="https://rubyonrails.org" target="_blank" class="inline-flex items-center text-red-600 hover:text-red-700 font-medium text-sm">
                  Documentation
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>

              <div class="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span class="text-blue-600 font-bold text-lg">S</span>
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900">Sinatra</h3>
                    <p class="text-sm text-gray-600">Micro-framework léger</p>
                  </div>
                </div>
                <ul class="space-y-2 text-sm text-gray-700 mb-4">
                  <li class="flex items-center">
                    <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    DSL simple et élégant
                  </li>
                  <li class="flex items-center">
                    <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    Parfait pour APIs REST
                  </li>
                  <li class="flex items-center">
                    <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    Extensible avec middleware
                  </li>
                </ul>
                <a href="http://sinatrarb.com" target="_blank" class="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Documentation
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>
            </div>
          </section>

          <!-- Section 5: Projets pratiques -->
          <section 
            id="pratique" 
            ref="pratiqueRef"
            class="scroll-mt-24 bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm"
          >
            <div class="flex items-center mb-6">
              <div class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
              </div>
              <h2 class="text-2xl md:text-3xl font-bold text-gray-900">Projets Pratiques</h2>
            </div>

            <div class="space-y-6">
              <div class="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center">
                    <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                      <span class="text-green-600 font-bold">1</span>
                    </div>
                    <div>
                      <h3 class="font-bold text-gray-900">Gestionnaire de Tâches</h3>
                      <p class="text-sm text-gray-600">Application console avec CRUD</p>
                    </div>
                  </div>
                  <span class="text-xs font-medium px-2 py-1 bg-green-100 text-green-800 rounded">Débutant</span>
                </div>
                <div class="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
                  <pre class="text-sm font-mono text-gray-200">class TaskManager
  def initialize
    @tasks = []
  end
  
  def add(description)
    task = { id: @tasks.size + 1, description: description }
    @tasks << task
    puts "✓ Tâche ajoutée"
  end
end</pre>
                </div>
                <button @click="copyCode('task')" class="text-red-600 hover:text-red-700 font-medium text-sm flex items-center">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                  </svg>
                  Copier le code
                </button>
              </div>
            </div>
          </section>
          <!-- Section Ressources de formation -->
<section id="ressources" class="scroll-mt-24 bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm">
  <div class="flex items-center mb-6">
    <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
      <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
      </svg>
    </div>
    <h2 class="text-2xl md:text-3xl font-bold text-gray-900">Ressources de formation</h2>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Guide complet ruby -->
    <div class="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div class="flex items-start mb-4">
        <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
          <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
        </div>
        <div>
          <h3 class="font-bold text-gray-900 mb-1">Guide complet ruby</h3>
          <p class="text-sm text-gray-600 mb-2">Cours détaillé de ruby 8 à ruby 17</p>
          <div class="flex items-center">
            <svg class="w-4 h-4 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
            </svg>
            <span class="text-xs text-gray-500">PDF • 4.5 MB</span>
          </div>
        </div>
      </div>
      <ul class="text-sm text-gray-600 space-y-2 mb-4 pl-2">
        <li class="flex items-center">
          <svg class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
          Tous les concepts ruby 8 à 17
        </li>
        <li class="flex items-center">
          <svg class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
          Programmation Orientée Objet avancée
        </li>
        <li class="flex items-center">
          <svg class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
          Nouveautés ruby 11, 14, 17
        </li>
      </ul>
      <button 
        @click="downloadResource('guide-ruby-complet.pdf')"
        class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
        </svg>
        Télécharger le guide
      </button>
    </div>

    <!-- Exercices pratiques -->
    <div class="bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div class="flex items-start mb-4">
        <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
          <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
          </svg>
        </div>
        <div>
          <h3 class="font-bold text-gray-900 mb-1">Exercices pratiques</h3>
          <p class="text-sm text-gray-600 mb-2">100 exercices avec solutions</p>
          <div class="flex items-center">
            <svg class="w-4 h-4 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
            </svg>
            <span class="text-xs text-gray-500">PDF • 2.8 MB</span>
          </div>
        </div>
      </div>
      <ul class="text-sm text-gray-600 space-y-2 mb-4 pl-2">
        <li class="flex items-center">
          <svg class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
          100 exercices progressifs
        </li>
        <li class="flex items-center">
          <svg class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
          Solutions détaillées
        </li>
        <li class="flex items-center">
          <svg class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
          Niveaux débutant à expert
        </li>
      </ul>
      <button 
        @click="downloadResource('exercices-ruby-100.pdf')"
        class="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
        </svg>
        Télécharger les exercices
      </button>
    </div>

    <!-- Spring Boot Projets -->
    <div class="bg-gradient-to-br from-purple-50 to-white border border-purple-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div class="flex items-start mb-4">
        <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
          <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
          </svg>
        </div>
        <div>
          <h3 class="font-bold text-gray-900 mb-1">Spring Boot Projets</h3>
          <p class="text-sm text-gray-600 mb-2">3 projets complets Spring Boot</p>
          <div class="flex items-center">
            <svg class="w-4 h-4 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            <span class="text-xs text-gray-500">ZIP • 5.2 MB</span>
          </div>
        </div>
      </div>
      <ul class="text-sm text-gray-600 space-y-2 mb-4 pl-2">
        <li class="flex items-center">
          <svg class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
          API REST complète
        </li>
        <li class="flex items-center">
          <svg class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
          Base de données avec JPA
        </li>
        <li class="flex items-center">
          <svg class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
          Documentation et tests
        </li>
      </ul>
      <button 
        @click="downloadResource('spring-boot-projets.zip')"
        class="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
        </svg>
        Télécharger les projets
      </button>
    </div>

    <!-- Quiz ruby -->
    <div class="bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      
      <div class="flex items-start mb-4">
        <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
          <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
          </svg>
        </div>
        <div>
          <h3 class="font-bold text-gray-900 mb-1">Quiz ruby</h3>
          <p class="text-sm text-gray-600 mb-2">Évaluez vos connaissances en ruby</p>
          <div class="flex items-center">
            <svg class="w-4 h-4 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span class="text-xs text-gray-500">Test interactif • 15 minutes</span>
          </div>
        </div>
      </div>
      <ul class="text-sm text-gray-600 space-y-2 mb-4 pl-2">
        <li class="flex items-center">
          <svg class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
          50 questions par niveau
        </li>
        <li class="flex items-center">
          <svg class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
          Correction automatique
        </li>
        <li class="flex items-center">
          <svg class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
          Analyse des résultats
        </li>
      </ul>
      <button 
        @click="navigateToQuiz"
        class="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group"
      >
        <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        Passer le test de niveau
      </button>
    </div>
  </div>
</section>

          <!-- Section 6: Contact -->
          <section 
            id="contact" 
            ref="contactRef"
            class="scroll-mt-24 bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm"
          >
            <div class="flex items-center mb-6">
              <div class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <h2 class="text-2xl md:text-3xl font-bold text-gray-900">Contact & Support</h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-4">
                <div class="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">Email</p>
                    <a href="mailto:7bhilal.chitou7@gmail.com" class="text-red-600 hover:text-red-700 font-medium">
                      7bhilal.chitou7@gmail.com
                    </a>
                  </div>
                </div>

                <div class="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">WhatsApp</p>
                    <a href="https://wa.me/22998874019" target="_blank" class="text-green-600 hover:text-green-700 font-medium">
                      +229 98 874 019
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <form @submit.prevent="sendContact" class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Votre email</label>
                    <input
                      v-model="contact.email"
                      type="email"
                      required
                      placeholder="votre@email.com"
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
                    >
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      v-model="contact.message"
                      rows="4"
                      required
                      placeholder="Votre question ou demande..."
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    class="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 rounded-lg transition-colors duration-200"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>

        <!-- Right Column - Sidebar -->
        <div class="lg:col-span-1">
          <div class="sticky top-24 space-y-6">
            <!-- Quick Tips -->
            <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 class="font-bold text-gray-900 mb-4 flex items-center">
                <svg class="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Conseils Ruby
              </h3>
              <ul class="space-y-3">
                <li class="flex items-start text-sm text-gray-600">
                  <svg class="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Utilisez <code class="font-mono text-red-600 bg-red-50 px-1 rounded">irb</code> pour tester du code rapidement</span>
                </li>
                <li class="flex items-start text-sm text-gray-600">
                  <svg class="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Les symboles sont plus efficaces que les strings</span>
                </li>
                <li class="flex items-start text-sm text-gray-600">
                  <svg class="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Privilégiez <code class="font-mono text-red-600 bg-red-50 px-1 rounded">each</code> aux boucles <code class="font-mono text-red-600 bg-red-50 px-1 rounded">for</code></span>
                </li>
                <li class="flex items-start text-sm text-gray-600">
                  <svg class="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Toujours utiliser Bundler pour les gems</span>
                </li>
              </ul>
            </div>

            <!-- Useful Links -->
            <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 class="font-bold text-gray-900 mb-4 flex items-center">
                <svg class="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
                </svg>
                Liens Utiles
              </h3>
              <div class="space-y-2">
                <a href="https://ruby-lang.org" target="_blank" class="flex items-center text-sm text-red-600 hover:text-red-700 group">
                  <span class="flex-1">Documentation Officielle</span>
                  <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
                <a href="https://rubygems.org" target="_blank" class="flex items-center text-sm text-red-600 hover:text-red-700 group">
                  <span class="flex-1">RubyGems (Packages)</span>
                  <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
                <a href="https://guides.rubyonrails.org" target="_blank" class="flex items-center text-sm text-red-600 hover:text-red-700 group">
                  <span class="flex-1">Guides Rails</span>
                  <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: 'RubyPage',
  data() {
    return {
      navigation: [
        { id: 'installation', label: 'Installation' },
        { id: 'bases', label: 'Syntaxe' },
        { id: 'poo', label: 'POO' },
        { id: 'frameworks', label: 'Frameworks' },
        { id: 'pratique', label: 'Projets' },
        { id: 'contact', label: 'Contact' }
      ],
      activeSection: 'installation',
      contact: {
        email: '',
        message: ''
      }
    }
  },
  mounted() {
    // Setup intersection observer for active section
    this.setupIntersectionObserver()
    
    // Handle initial hash
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      setTimeout(() => this.scrollToSection(id), 100)
    }
  },
 methods: {
  navigateToQuiz() {
    // Code à exécuter avant navigation (optionnel)
    // Par exemple: sauvegarder des données, analytics, etc.
    
    // Navigation programmatique
    this.$router.push('/rubytest');
  },

  downloadResource(filename) {
    const resources = {
      'guide-ruby-complet.pdf': 'Guide complet ruby 8-17',
      'exercices-ruby-100.pdf': '100 exercices ruby avec solutions',
      'spring-boot-projets.zip': '3 projets Spring Boot complets'
    };
    
    const resourceName = resources[filename] || filename;
    
    // Afficher une notification
    alert(`Téléchargement de "${resourceName}" en cours...`);
    
    // Simuler un délai de téléchargement
    setTimeout(() => {
      alert(`"${resourceName}" téléchargé avec succès!`);
    }, 1500);
  },

  setupIntersectionObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
            window.history.replaceState(null, null, `#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0.1
      }
    );

    // Observe all sections
    this.navigation.forEach(nav => {
      const element = document.getElementById(nav.id);
      if (element) observer.observe(element);
    });
  },
  
  scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update URL hash
      window.history.pushState(null, null, `#${sectionId}`);
      this.activeSection = sectionId;
    }
  },
  
  copyCode(type) {
    const codeSnippets = {
      task: `class TaskManager
  def initialize
    @tasks = []
  end
  
  def add(description)
    task = { 
      id: @tasks.size + 1, 
      description: description, 
      completed: false 
    }
    @tasks << task
    puts "✓ Tâche ajoutée: #{description}"
  end
  
  def list
    puts "\\n📋 Liste des tâches:"
    @tasks.each do |task|
      status = task[:completed] ? "✅" : "⭕"
      puts "\#{status} \#{task[:id]}. \#{task[:description]}"
    end
  end
  
  def complete(id)
    task = @tasks.find { |t| t[:id] == id }
    if task
      task[:completed] = true
      puts "✓ Tâche \#{id} terminée"
    end
  end
end

# Utilisation
manager = TaskManager.new
manager.add("Apprendre Ruby")
manager.list()`
    };
    
    const code = codeSnippets[type];
    if (code) {
      navigator.clipboard.writeText(code)
        .then(() => {
          alert('Code copié dans le presse-papier !');
        })
        .catch(() => {
          alert('Impossible de copier le code');
        });
    }
  },
  
  sendContact() {
    if (!this.contact.email || !this.contact.message) {
      alert('Veuillez remplir tous les champs');
      return;
    }
    
    const subject = encodeURIComponent('Question Ruby - Formation');
    const body = encodeURIComponent(
      `Email: ${this.contact.email}\n\n` +
      `Message:\n${this.contact.message}`
    );
    
    window.open(`mailto:7bhilal.chitou7@gmail.com?subject=${subject}&body=${body}`);
    
    // Reset form
    this.contact = {
      email: '',
      message: ''
    };
  }
}
}

</script>

<style scoped>
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.scroll-mt-24 {
  scroll-margin-top: 6rem;
}

/* Smooth transitions */
.transition {
  transition: all 0.2s ease;
}

/* Code highlighting */
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}

code {
  font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', monospace;
}
</style>