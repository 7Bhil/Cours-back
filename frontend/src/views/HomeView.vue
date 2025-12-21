<template>
  <div class="home">
    <!-- Hero Section améliorée -->
    <section class="h-screen relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
      <!-- Background pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg') width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg%3E%3Cg' fill='none' fill-rule='evenodd%3E%3Cg' fill='%239C92AC' fill-opacity='0.4%3E%3Cpath' d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z);"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span class="block">Maîtrisez la</span>
            <span class="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              programmation moderne
            </span>
          </h1>
          
          <p class="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Accédez à des ressources pédagogiques de qualité, des exercices pratiques et des corrigés détaillés pour devenir un développeur compétent.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/langages" class="btn-primary inline-flex items-center justify-center">
              <span class="mr-2">🚀</span> Commencer maintenant
            </router-link>
            <router-link to="/web" class="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 px-8 py-3 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center">
              <span class="mr-2">🎯</span> Explorer le parcours
            </router-link>
          </div>
        </div>
      </div>
      
      <!-- Stats -->
      <div class="container mx-auto px-4 mt-20 relative z-10">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="text-center bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
            <div class="text-3xl md:text-4xl font-bold text-blue-400 mb-2">50+</div>
            <div class="text-gray-300">Ressources PDF</div>
          </div>
          <div class="text-center bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
            <div class="text-3xl md:text-4xl font-bold text-green-400 mb-2">200+</div>
            <div class="text-gray-300">Exercices pratiques</div>
          </div>
          <div class="text-center bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
            <div class="text-3xl md:text-4xl font-bold text-purple-400 mb-2">100%</div>
            <div class="text-gray-300">Gratuit</div>
          </div>
          <div class="text-center bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
            <div class="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">24/7</div>
            <div class="text-gray-300">Accès permanent</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Catégories améliorées -->
    <section class="section">
      <div class="container mx-auto px-4">
        <div class="section-header">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Domaines d'apprentissage
          </h2>
          <p class="text-xl text-gray-600">
            Choisissez votre parcours parmi nos catégories spécialisées
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Langages -->
          <router-link 
            to="/langages" 
            class="card card-hover group relative overflow-hidden"
          >
            <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div class="relative">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                <span class="text-3xl text-white">💻</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Langages</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Maîtrisez les langages fondamentaux et modernes avec nos guides complets, exercices pratiques et corrigés détaillés.
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="badge badge-primary">Python</span>
                <span class="badge badge-primary">JavaScript</span>
                <span class="badge badge-primary">Java</span>
                <span class="badge badge-primary">C++</span>
              </div>
              <div class="flex items-center text-blue-600 font-semibold">
                <span>Explorer les langages</span>
                <span class="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </div>
          </router-link>

          <!-- Web -->
          <router-link 
            to="/web" 
            class="card card-hover group relative overflow-hidden"
          >
            <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div class="relative">
              <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                <span class="text-3xl text-white">🌐</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Développement Web</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Parcours complet du frontend au backend, incluant les frameworks modernes et les bonnes pratiques.
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="badge badge-success">React</span>
                <span class="badge badge-success">Vue.js</span>
                <span class="badge badge-success">Node.js</span>
                <span class="badge badge-success">Laravel</span>
              </div>
              <div class="flex items-center text-green-600 font-semibold">
                <span>Découvrir le parcours</span>
                <span class="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </div>
          </router-link>

          <!-- Cybersécurité -->
          <router-link 
            to="/cybersecurite" 
            class="card card-hover group relative overflow-hidden"
          >
            <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div class="relative">
              <div class="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                <span class="text-3xl text-white">🛡️</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Cybersécurité</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Apprenez à sécuriser applications et réseaux avec nos ressources pratiques et études de cas réels.
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="badge badge-warning">Pentesting</span>
                <span class="badge badge-warning">Réseaux</span>
                <span class="badge badge-warning">Cryptographie</span>
                <span class="badge badge-warning">OWASP</span>
              </div>
              <div class="flex items-center text-red-600 font-semibold">
                <span>Se former à la sécurité</span>
                <span class="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Téléchargements populaires -->
    <section class="section bg-gradient-to-br from-gray-50 to-blue-50">
      <div class="container mx-auto px-4">
        <div class="section-header">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Ressources populaires
          </h2>
          <p class="text-xl text-gray-600">
            Les ressources les plus téléchargées par notre communauté
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card group hover:shadow-2xl transition-all duration-500">
            <div class="flex items-start mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <span class="text-2xl text-white">🐍</span>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 text-lg">Python avancé</h4>
                <p class="text-gray-500 text-sm">POO, design patterns, async</p>
              </div>
            </div>
            <p class="text-gray-600 mb-6 text-sm leading-relaxed">
              Guide complet sur la programmation orientée objet en Python avec des exemples concrets et des exercices avancés.
            </p>
            <div class="flex justify-between items-center">
              <div>
                <span class="text-blue-600 font-semibold">PDF • 3.2MB</span>
                <span class="text-gray-400 text-sm ml-3">👥 458</span>
              </div>
              <button class="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow hover:shadow-lg">
                Télécharger
              </button>
            </div>
          </div>
          
          <div class="card group hover:shadow-2xl transition-all duration-500">
            <div class="flex items-start mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <span class="text-2xl text-white">⚛️</span>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 text-lg">React moderne</h4>
                <p class="text-gray-500 text-sm">Hooks, Context, Redux</p>
              </div>
            </div>
            <p class="text-gray-600 mb-6 text-sm leading-relaxed">
              Apprenez React avec les hooks, le Context API et Redux pour créer des applications web performantes et maintenables.
            </p>
            <div class="flex justify-between items-center">
              <div>
                <span class="text-blue-600 font-semibold">ZIP • 4.1MB</span>
                <span class="text-gray-400 text-sm ml-3">👥 392</span>
              </div>
              <button class="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow hover:shadow-lg">
                Télécharger
              </button>
            </div>
          </div>
          
          <div class="card group hover:shadow-2xl transition-all duration-500">
            <div class="flex items-start mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <span class="text-2xl text-white">🔐</span>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 text-lg">Sécurité Web</h4>
                <p class="text-gray-500 text-sm">OWASP Top 10 2023</p>
              </div>
            </div>
            <p class="text-gray-600 mb-6 text-sm leading-relaxed">
              Comprenez et protégez-vous contre les 10 vulnérabilités web les plus critiques selon l'OWASP.
            </p>
            <div class="flex justify-between items-center">
              <div>
                <span class="text-blue-600 font-semibold">PDF • 2.8MB</span>
                <span class="text-gray-400 text-sm ml-3">👥 521</span>
              </div>
              <button class="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow hover:shadow-lg">
                Télécharger
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="section">
      <div class="container mx-auto px-4">
        <div class="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full -translate-y-32 translate-x-32"></div>
          <div class="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full translate-y-32 -translate-x-32"></div>
          
          <div class="relative z-10 max-w-3xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à développer vos compétences ?
            </h2>
            <p class="text-xl text-gray-300 mb-10">
              Rejoignez des milliers d'apprenants qui utilisent déjà Bhil$ pour progresser en programmation.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <router-link to="/langages" class="btn-primary bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 inline-flex items-center justify-center">
                <span class="mr-2">🎯</span> Explorer toutes les ressources
              </router-link>
              <router-link to="/contact" class="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 px-8 py-3 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center">
                <span class="mr-2">💬</span> Poser une question
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>