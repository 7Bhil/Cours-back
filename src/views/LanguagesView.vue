<template>
  <div class="languages">
    <!-- Hero Section -->
    <section class="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg') width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg%3E%3Cg' fill='none' fill-rule='evenodd%3E%3Cg' fill='%236366F1' fill-opacity='0.2%3E%3Cpath' d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z/%3E%3C/g%3E%3C/g%3E%3C/svg%3E'"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span class="block text-gray-900">Langages de</span>
            <span class="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              programmation
            </span>
          </h1>
          
          <p class="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Choisissez un langage pour accéder à des guides complets, exercices pratiques, corrigés détaillés et guides d'installation.
          </p>
          
          <!-- Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
            <div class="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200">
              <div class="text-2xl font-bold text-blue-600 mb-1">5+</div>
              <div class="text-gray-600 text-sm">Langages</div>
            </div>
            <div class="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200">
              <div class="text-2xl font-bold text-green-600 mb-1">15+</div>
              <div class="text-gray-600 text-sm">Ressources PDF</div>
            </div>
            <div class="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200">
              <div class="text-2xl font-bold text-purple-600 mb-1">50+</div>
              <div class="text-gray-600 text-sm">Exercices</div>
            </div>
            <div class="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200">
              <div class="text-2xl font-bold text-yellow-600 mb-1">24/7</div>
              <div class="text-gray-600 text-sm">Accès</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Langages Grid -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- JavaScript -->
          <div class="card card-hover group relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div class="relative">
              <div class="flex items-center mb-6">
                <div class="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <span class="text-2xl text-white">⚡</span>
                </div>
                <h3 class="text-2xl font-bold text-gray-900">JavaScript</h3>
              </div>
              
              <p class="text-gray-600 mb-6 leading-relaxed">
                Langage dynamique pour le web interactif. Essentiel pour le développement frontend et backend avec Node.js.
              </p>
              
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="badge badge-primary">Frontend</span>
                <span class="badge badge-primary">Node.js</span>
                <span class="badge badge-primary">ES6+</span>
              </div>
              
              <div class="space-y-3">
                <router-link 
                  :to="{ name: 'technology', params: { tech: 'javascript' }}"
                  class="btn-primary w-full text-center block"
                >
                  <span class="flex items-center justify-center">
                    <span class="mr-2">📚</span> Voir les ressources
                  </span>
                </router-link>
                
                <div class="flex space-x-2">
                  <a 
                    href="mailto:7bhilal.chitou7@gmail.com?subject=Question sur JavaScript"
                    class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg text-center transition flex items-center justify-center"
                  >
                    <span class="mr-2">📧</span> Email
                  </a>
                  <a 
                    href="https://wa.me/22998874019?text=Bonjour, j'ai une question sur JavaScript"
                    target="_blank"
                    class="flex-1 bg-green-100 hover:bg-green-200 text-green-800 py-2 px-4 rounded-lg text-center transition flex items-center justify-center"
                  >
                    <span class="mr-2">💬</span> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Java -->
          <div class="card card-hover group relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div class="relative">
              <div class="flex items-center mb-6">
                <div class="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <span class="text-2xl text-white">☕</span>
                </div>
                <h3 class="text-2xl font-bold text-gray-900">Java</h3>
              </div>
              
              <p class="text-gray-600 mb-6 leading-relaxed">
                Langage orienté objet multiplateforme, dominant dans les applications d'entreprise et Android.
              </p>
              
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="badge badge-primary">Android</span>
                <span class="badge badge-primary">Spring</span>
                <span class="badge badge-primary">Entreprise</span>
              </div>
              
              <div class="space-y-3">
                <router-link 
                  :to="{ name: 'technology', params: { tech: 'java' }}"
                  class="btn-primary w-full text-center block"
                >
                  <span class="flex items-center justify-center">
                    <span class="mr-2">📚</span> Voir les ressources
                  </span>
                </router-link>
                
                <div class="flex space-x-2">
                  <a 
                    href="mailto:7bhilal.chitou7@gmail.com?subject=Question sur Java"
                    class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg text-center transition flex items-center justify-center"
                  >
                    <span class="mr-2">📧</span> Email
                  </a>
                  <a 
                    href="https://wa.me/22998874019?text=Bonjour, j'ai une question sur Java"
                    target="_blank"
                    class="flex-1 bg-green-100 hover:bg-green-200 text-green-800 py-2 px-4 rounded-lg text-center transition flex items-center justify-center"
                  >
                    <span class="mr-2">💬</span> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- C++ -->
          <div class="card card-hover group relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div class="relative">
              <div class="flex items-center mb-6">
                <div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <span class="text-2xl text-white">➕➕</span>
                </div>
                <h3 class="text-2xl font-bold text-gray-900">C++</h3>
              </div>
              
              <p class="text-gray-600 mb-6 leading-relaxed">
                Langage système orienté objet, idéal pour les jeux vidéo, systèmes embarqués et applications haute performance.
              </p>
              
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="badge badge-primary">Système</span>
                <span class="badge badge-primary">Jeux vidéo</span>
                <span class="badge badge-primary">Performance</span>
              </div>
              
              <div class="space-y-3">
                <router-link 
                  :to="{ name: 'technology', params: { tech: 'cpp' }}"
                  class="btn-primary w-full text-center block"
                >
                  <span class="flex items-center justify-center">
                    <span class="mr-2">📚</span> Voir les ressources
                  </span>
                </router-link>
                
                <div class="flex space-x-2">
                  <a 
                    href="mailto:7bhilal.chitou7@gmail.com?subject=Question sur C++"
                    class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg text-center transition flex items-center justify-center"
                  >
                    <span class="mr-2">📧</span> Email
                  </a>
                  <a 
                    href="https://wa.me/22998874019?text=Bonjour, j'ai une question sur C++"
                    target="_blank"
                    class="flex-1 bg-green-100 hover:bg-green-200 text-green-800 py-2 px-4 rounded-lg text-center transition flex items-center justify-center"
                  >
                    <span class="mr-2">💬</span> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Python -->
          <div class="card card-hover group relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div class="relative">
              <div class="flex items-center mb-6">
                <div class="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <span class="text-2xl text-white">🐍</span>
                </div>
                <h3 class="text-2xl font-bold text-gray-900">Python</h3>
              </div>
              
              <p class="text-gray-600 mb-6 leading-relaxed">
                Langage polyvalent et facile à apprendre, parfait pour le web, la data science, l'automation et l'IA.
              </p>
              
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="badge badge-primary">Data Science</span>
                <span class="badge badge-primary">Web</span>
                <span class="badge badge-primary">IA/ML</span>
              </div>
              
              <div class="space-y-3">
                <router-link 
                  :to="{ name: 'technology', params: { tech: 'python' }}"
                  class="btn-primary w-full text-center block"
                >
                  <span class="flex items-center justify-center">
                    <span class="mr-2">📚</span> Voir les ressources
                  </span>
                </router-link>
                
                <div class="flex space-x-2">
                  <a 
                    href="mailto:7bhilal.chitou7@gmail.com?subject=Question sur Python"
                    class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg text-center transition flex items-center justify-center"
                  >
                    <span class="mr-2">📧</span> Email
                  </a>
                  <a 
                    href="https://wa.me/22998874019?text=Bonjour, j'ai une question sur Python"
                    target="_blank"
                    class="flex-1 bg-green-100 hover:bg-green-200 text-green-800 py-2 px-4 rounded-lg text-center transition flex items-center justify-center"
                  >
                    <span class="mr-2">💬</span> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Ruby -->
          <div class="card card-hover group relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div class="relative">
              <div class="flex items-center mb-6">
                <div class="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <span class="text-2xl text-white">💎</span>
                </div>
                <h3 class="text-2xl font-bold text-gray-900">Ruby</h3>
              </div>
              
              <p class="text-gray-600 mb-6 leading-relaxed">
                Langage dynamique et élégant, célèbre pour Ruby on Rails, un framework web productif et agréable.
              </p>
              
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="badge badge-primary">Rails</span>
                <span class="badge badge-primary">Web</span>
                <span class="badge badge-primary">Startup</span>
              </div>
              
              <div class="space-y-3">
                <router-link 
                  :to="{ name: 'technology', params: { tech: 'ruby' }}"
                  class="btn-primary w-full text-center block"
                >
                  <span class="flex items-center justify-center">
                    <span class="mr-2">📚</span> Voir les ressources
                  </span>
                </router-link>
                
                <div class="flex space-x-2">
                  <a 
                    href="mailto:7bhilal.chitou7@gmail.com?subject=Question sur Ruby"
                    class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg text-center transition flex items-center justify-center"
                  >
                    <span class="mr-2">📧</span> Email
                  </a>
                  <a 
                    href="https://wa.me/22998874019?text=Bonjour, j'ai une question sur Ruby"
                    target="_blank"
                    class="flex-1 bg-green-100 hover:bg-green-200 text-green-800 py-2 px-4 rounded-lg text-center transition flex items-center justify-center"
                  >
                    <span class="mr-2">💬</span> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Prochainement -->
          <div class="card border-dashed border-2 border-gray-300 bg-gradient-to-br from-gray-50 to-gray-100 group hover:border-blue-400 transition-all duration-300">
            <div class="flex items-center mb-6">
              <div class="w-14 h-14 bg-gray-200 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-gray-300 transition-colors">
                <span class="text-2xl text-gray-500 group-hover:text-gray-600">➕</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-500 group-hover:text-gray-600">Prochainement</h3>
            </div>
            
            <p class="text-gray-500 mb-6 leading-relaxed group-hover:text-gray-600">
              D'autres langages passionnants seront ajoutés prochainement. Restez à l'écoute !
            </p>
            
            <div class="space-y-3">
              <button disabled class="w-full bg-gray-200 text-gray-500 py-3 px-4 rounded-lg text-center font-medium">
                <span class="flex items-center justify-center">
                  <span class="mr-2">⏳</span> Bientôt disponible
                </span>
              </button>
              
              <a 
                href="mailto:7bhilal.chitou7@gmail.com?subject=Suggestion de nouveau langage"
                class="block text-center text-blue-600 hover:text-blue-700 font-medium items-center justify-center"
              >
                <span class="mr-2">📝</span> Proposer un langage
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Comment utiliser -->
    <section class="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🎯 Comment tirer le meilleur parti des ressources
            </h2>
            <p class="text-xl text-gray-600">
              Une méthodologie efficace pour progresser rapidement
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="relative mb-6">
                <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <span class="text-2xl text-white">📄</span>
                </div>
                <div class="absolute -top-2 -right-2 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                  1
                </div>
              </div>
              <h4 class="text-xl font-bold text-gray-900 mb-3">Étudier le guide</h4>
              <p class="text-gray-600">
                Lisez attentivement le PDF pour comprendre les concepts fondamentaux et les bonnes pratiques.
              </p>
            </div>
            
            <div class="text-center">
              <div class="relative mb-6">
                <div class="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <span class="text-2xl text-white">💻</span>
                </div>
                <div class="absolute -top-2 -right-2 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                  2
                </div>
              </div>
              <h4 class="text-xl font-bold text-gray-900 mb-3">Pratiquer activement</h4>
              <p class="text-gray-600">
                Réalisez tous les exercices sans consulter les solutions. Le code s'apprend en codant.
              </p>
            </div>
            
            <div class="text-center">
              <div class="relative mb-6">
                <div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <span class="text-2xl text-white">✅</span>
                </div>
                <div class="absolute -top-2 -right-2 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                  3
                </div>
              </div>
              <h4 class="text-xl font-bold text-gray-900 mb-3">Vérifier et améliorer</h4>
              <p class="text-gray-600">
                Comparez vos solutions avec les corrigés détaillés et comprenez les différentes approches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full -translate-y-32 translate-x-32"></div>
          <div class="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full translate-y-32 -translate-x-32"></div>
          
          <div class="relative z-10 max-w-3xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
              Un langage en particulier vous intéresse ?
            </h2>
            <p class="text-xl text-gray-300 mb-10">
              N'hésitez pas à me contacter pour des questions spécifiques ou des demandes particulières.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <router-link to="/contact" class="btn-primary bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 inline-flex items-center justify-center">
                <span class="mr-2">📧</span> Poser une question
              </router-link>
              <a 
                href="https://wa.me/22998874019"
                target="_blank"
                class="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <span class="mr-2">💬</span> WhatsApp direct
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'LanguagesView'
}
</script>