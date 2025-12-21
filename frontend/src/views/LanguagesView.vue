<template>
  <div class="languages">
    <!-- Hero Section -->
    <section class="relative py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Langages de programmation
          </h1>
          
          <p class="text-lg text-gray-600 mb-12 leading-relaxed">
            Découvrez nos ressources complètes pour maîtriser les langages de programmation les plus demandés. Guides détaillés, exercices pratiques et support personnalisé.
          </p>
          
          <!-- Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div class="text-3xl font-bold text-gray-900 mb-1">5+</div>
              <div class="text-sm text-gray-600">Langages</div>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div class="text-3xl font-bold text-gray-900 mb-1">15+</div>
              <div class="text-sm text-gray-600">Guides PDF</div>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div class="text-3xl font-bold text-gray-900 mb-1">50+</div>
              <div class="text-sm text-gray-600">Exercices</div>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div class="text-3xl font-bold text-gray-900 mb-1">100%</div>
              <div class="text-sm text-gray-600">Gratuit</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Langages Grid -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- JavaScript -->
          <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-7 h-7 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900">JavaScript</h3>
            </div>
            
            <p class="text-gray-600 mb-4 text-sm leading-relaxed">
              Langage essentiel pour le développement web moderne, frontend et backend avec Node.js.
            </p>
            
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Frontend</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Node.js</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">ES6+</span>
            </div>
            
            <div class="space-y-2">
              <RouterLink
                to="/javascript"
                class="block w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg text-center font-medium hover:bg-blue-700 transition-colors"
              >
                Voir les ressources
              </RouterLink>
              
              <div class="grid grid-cols-2 gap-2">
                <a 
                  href="mailto:7bhilal.chitou7@gmail.com?subject=Question sur JavaScript"
                  class="bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-center text-sm hover:bg-gray-200 transition-colors"
                >
                  Email
                </a>
                <a 
                  href="https://wa.me/22998874019?text=Question sur JavaScript"
                  target="_blank"
                  class="bg-green-50 text-green-700 py-2 px-3 rounded-lg text-center text-sm hover:bg-green-100 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <!-- Java -->
          <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-7 h-7 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900">Java</h3>
            </div>
            
            <p class="text-gray-600 mb-4 text-sm leading-relaxed">
              Langage orienté objet robuste, standard de l'industrie pour les applications d'entreprise et Android.
            </p>
            
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Enterprise</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Android</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Spring</span>
            </div>
            
            <div class="space-y-2">
              <RouterLink
                to="/java"
                class="block w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg text-center font-medium hover:bg-blue-700 transition-colors"
              >
                Voir les ressources
              </RouterLink>
              
              <div class="grid grid-cols-2 gap-2">
                <a 
                  href="mailto:7bhilal.chitou7@gmail.com?subject=Question sur Java"
                  class="bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-center text-sm hover:bg-gray-200 transition-colors"
                >
                  Email
                </a>
                <a 
                  href="https://wa.me/22998874019?text=Question sur Java"
                  target="_blank"
                  class="bg-green-50 text-green-700 py-2 px-3 rounded-lg text-center text-sm hover:bg-green-100 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <!-- C++ -->
<div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
  <div class="flex items-center mb-4">
    <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
      <svg class="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m5 2v-1a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2h-6a2 2 0 01-2-2v-1"/>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2h-2"/>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h4m-4 4h4M8 17h2"/>
      </svg>
    </div>
    <h3 class="text-xl font-bold text-gray-900">C++</h3>
  </div>
  
  <p class="text-gray-600 mb-4 text-sm leading-relaxed">
    Langage système haute performance pour les jeux, systèmes embarqués et applications critiques.
  </p>
  
  <div class="flex flex-wrap gap-2 mb-6">
    <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Système</span>
    <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Gaming</span>
    <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Performance</span>
  </div>
  
  <div class="space-y-2">
    <router-link 
      :to="{ name: 'technology', params: { tech: 'cpp' }}"
      class="block w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg text-center font-medium hover:bg-blue-700 transition-colors"
    >
      Voir les ressources
    </router-link>
    
    <div class="grid grid-cols-2 gap-2">
      <a 
        href="mailto:7bhilal.chitou7@gmail.com?subject=Question sur C++"
        class="bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-center text-sm hover:bg-gray-200 transition-colors"
      >
        Email
      </a>
      <a 
        href="https://wa.me/22998874019?text=Question sur C++"
        target="_blank"
        class="bg-green-50 text-green-700 py-2 px-3 rounded-lg text-center text-sm hover:bg-green-100 transition-colors"
      >
        WhatsApp
      </a>
    </div>
  </div>
</div>

<!-- C -->
<div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
  <div class="flex items-center mb-4">
    <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
      <svg class="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
        <circle cx="12" cy="12" r="2" stroke-width="1.5"/>
      </svg>
    </div>
    <h3 class="text-xl font-bold text-gray-900">C</h3>
  </div>
  
  <p class="text-gray-600 mb-4 text-sm leading-relaxed">
    Langage de bas niveau pour la programmation système, noyaux d'OS et microcontrôleurs.
  </p>
  
  <div class="flex flex-wrap gap-2 mb-6">
    <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Système</span>
    <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Embedded</span>
    <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Performance</span>
  </div>
  
  <div class="space-y-2">
    <router-link 
      :to="{ name: 'technology', params: { tech: 'c' }}"
      class="block w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg text-center font-medium hover:bg-blue-700 transition-colors"
    >
      Voir les ressources
    </router-link>
    
    <div class="grid grid-cols-2 gap-2">
      <a 
        href="mailto:7bhilal.chitou7@gmail.com?subject=Question sur C"
        class="bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-center text-sm hover:bg-gray-200 transition-colors"
      >
        Email
      </a>
      <a 
        href="https://wa.me/22998874019?text=Question sur C"
        target="_blank"
        class="bg-green-50 text-green-700 py-2 px-3 rounded-lg text-center text-sm hover:bg-green-100 transition-colors"
      >
        WhatsApp
      </a>
    </div>
  </div>
</div>

          <!-- Python -->
          <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-7 h-7 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900">Python</h3>
            </div>
            
            <p class="text-gray-600 mb-4 text-sm leading-relaxed">
              Langage polyvalent et accessible, leader en data science, intelligence artificielle et automatisation.
            </p>
            
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Data Science</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">IA/ML</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Web</span>
            </div>
            
            <div class="space-y-2">
              <router-link 
                :to="{ name: 'technology', params: { tech: 'python' }}"
                class="block w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg text-center font-medium hover:bg-blue-700 transition-colors"
              >
                Voir les ressources
              </router-link>
              
              <div class="grid grid-cols-2 gap-2">
                <a 
                  href="mailto:7bhilal.chitou7@gmail.com?subject=Question sur Python"
                  class="bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-center text-sm hover:bg-gray-200 transition-colors"
                >
                  Email
                </a>
                <a 
                  href="https://wa.me/22998874019?text=Question sur Python"
                  target="_blank"
                  class="bg-green-50 text-green-700 py-2 px-3 rounded-lg text-center text-sm hover:bg-green-100 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <!-- Ruby -->
          <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-7 h-7 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.156.083c3.033.525 3.893 2.598 3.829 4.77L24 4.822 22.635 22.71 4.89 23.926h.016C3.433 23.864.15 23.729 0 19.139l1.645-3 2.819 6.586.503 1.172 2.805-9.144-.03.007.016-.03 9.255 2.956-1.396-5.431-.99-3.9 8.82-.569-.615-.51L16.5 2.114 20.159.073l-.003.01zM0 19.089zM5.13 5.073c3.561-3.533 8.157-5.621 9.922-3.84 1.762 1.777-.105 6.105-3.673 9.636-3.563 3.532-8.103 5.734-9.864 3.957-1.766-1.777.045-6.217 3.612-9.75l.003-.003z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900">Ruby</h3>
            </div>
            
            <p class="text-gray-600 mb-4 text-sm leading-relaxed">
              Langage élégant et productif, réputé pour Ruby on Rails et le développement web rapide.
            </p>
            
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Rails</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Web</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Backend</span>
            </div>
            
            <div class="space-y-2">
              <RouterLink
                to="/ruby"
                class="block w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg text-center font-medium hover:bg-blue-700 transition-colors"
              >
                Voir les ressources
              </RouterLink>
              
              <div class="grid grid-cols-2 gap-2">
                <a 
                  href="mailto:7bhilal.chitou7@gmail.com?subject=Question sur Ruby"
                  class="bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-center text-sm hover:bg-gray-200 transition-colors"
                >
                  Email
                </a>
                <a 
                  href="https://wa.me/22998874019?text=Question sur Ruby"
                  target="_blank"
                  class="bg-green-50 text-green-700 py-2 px-3 rounded-lg text-center text-sm hover:bg-green-100 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <!-- Prochainement -->
          <div class="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-gray-400 transition-colors">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-500">Prochainement</h3>
            </div>
            
            <p class="text-gray-500 mb-4 text-sm leading-relaxed">
              De nouveaux langages seront ajoutés régulièrement. Restez informé des prochaines mises à jour.
            </p>
            
            <div class="space-y-2">
              <button disabled class="w-full bg-gray-200 text-gray-500 py-2.5 px-4 rounded-lg text-center font-medium cursor-not-allowed">
                Bientôt disponible
              </button>
              
              <a 
                href="mailto:7bhilal.chitou7@gmail.com?subject=Suggestion de langage"
                class="block text-center text-blue-600 hover:text-blue-700 text-sm font-medium py-2"
              >
                Suggérer un langage
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Méthodologie -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Méthodologie d'apprentissage
          </h2>
          <p class="text-lg text-gray-600">
            Une approche structurée pour progresser efficacement
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div class="bg-white p-6 rounded-lg border border-gray-200">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
            </div>
            <div class="text-sm font-semibold text-blue-600 mb-2">Étape 1</div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">Étudier la théorie</h3>
            <p class="text-sm text-gray-600">
              Parcourez les guides PDF pour comprendre les concepts fondamentaux et la syntaxe du langage.
            </p>
          </div>
          
          <div class="bg-white p-6 rounded-lg border border-gray-200">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
            </div>
            <div class="text-sm font-semibold text-green-600 mb-2">Étape 2</div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">Pratiquer activement</h3>
            <p class="text-sm text-gray-600">
              Réalisez les exercices proposés sans consulter les solutions. L'apprentissage se fait par la pratique.
            </p>
          </div>
          
          <div class="bg-white p-6 rounded-lg border border-gray-200">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="text-sm font-semibold text-purple-600 mb-2">Étape 3</div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">Analyser les solutions</h3>
            <p class="text-sm text-gray-600">
              Comparez vos réponses avec les corrigés détaillés pour identifier les points d'amélioration.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gray-900 rounded-2xl p-8 md:p-12 text-center">
          <h2 class="text-3xl font-bold text-white mb-4">
            Besoin d'aide avec un langage ?
          </h2>
          <p class="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Notre équipe est disponible pour répondre à vos questions et vous accompagner dans votre apprentissage.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link 
              to="/contact" 
              class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Nous contacter
            </router-link>
            <a 
              href="https://wa.me/22998874019"
              target="_blank"
              class="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-base font-medium rounded-lg text-white hover:bg-gray-800 transition-colors"
            >
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'LanguagesView'
}
</script>