<template>
  <div id="app" class="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
    <!-- Navigation élégante -->
    <nav class="bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div class="container mx-auto px-4 py-3">
        <div class="flex justify-between items-center">
          <!-- Logo amélioré -->
          <router-link to="/" class="flex items-center space-x-3 group">
            <div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <span class="text-white text-xl font-bold">B$</span>
            </div>
            <div>
              <h1 class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Bhil$
              </h1>
              <p class="text-xs text-gray-500">Learn • Code • Grow</p>
            </div>
          </router-link>

          <!-- Menu Desktop amélioré -->
          <div class="hidden md:flex items-center space-x-1">
            <router-link 
              to="/" 
              class="nav-link px-4 py-2"
              active-class="active"
            >
              <span class="flex items-center">
                <span class="mr-2">🏠</span> Accueil
              </span>
            </router-link>
            <router-link 
              to="/langages" 
              class="nav-link px-4 py-2"
              active-class="active"
            >
              <span class="flex items-center">
                <span class="mr-2">💻</span> Langages
              </span>
            </router-link>
            <router-link 
              to="/web" 
              class="nav-link px-4 py-2"
              active-class="active"
            >
              <span class="flex items-center">
                <span class="mr-2">🌐</span> Web
              </span>
            </router-link>
            <router-link 
              to="/cybersecurite" 
              class="nav-link px-4 py-2"
              active-class="active"
            >
              <span class="flex items-center">
                <span class="mr-2">🛡️</span> Sécurité
              </span>
            </router-link>
            <router-link 
              to="/contact" 
              class="nav-link px-4 py-2"
              active-class="active"
            >
              <span class="flex items-center">
                <span class="mr-2">📞</span> Contact
              </span>
            </router-link>
          </div>

          <!-- Bouton contact mobile -->
          <div class="md:hidden flex items-center space-x-4">
            <a 
              href="https://wa.me/22998874019"
              target="_blank"
              class="bg-green-500 text-white p-2 rounded-lg shadow hover:shadow-lg transition"
            >
              💬
            </a>
            <button class="text-gray-700 text-xl">
              ☰
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Contenu principal -->
    <main class="flex-grow">
      <router-view />
    </main>

    <!-- Footer professionnel -->
    <footer class="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-12 pb-8">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <!-- Logo et description -->
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <span class="text-white text-xl font-bold">ED</span>
              </div>
              <h3 class="text-2xl font-bold">EduCode</h3>
            </div>
            <p class="text-gray-300 text-sm leading-relaxed">
              Plateforme éducative gratuite dédiée à l'apprentissage de la programmation et des technologies web.
            </p>
          </div>

          <!-- Liens rapides -->
          <div>
            <h4 class="text-lg font-bold mb-4 text-blue-300">Ressources</h4>
            <ul class="space-y-2">
              <li><router-link to="/langages" class="text-gray-300 hover:text-white transition">Langages</router-link></li>
              <li><router-link to="/web" class="text-gray-300 hover:text-white transition">Parcours Web</router-link></li>
              <li><router-link to="/cybersecurite" class="text-gray-300 hover:text-white transition">Cybersécurité</router-link></li>
              <li><a href="#" class="text-gray-300 hover:text-white transition">Téléchargements</a></li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h4 class="text-lg font-bold mb-4 text-blue-300">Contact</h4>
            <ul class="space-y-3">
              <li class="flex items-center space-x-3">
                <span class="text-blue-400">📧</span>
                <a href="mailto:7bhilal.chitou7@gmail.com" class="text-gray-300 hover:text-white transition">
                  7bhilal.chitou7@gmail.com
                </a>
              </li>
              <li class="flex items-center space-x-3">
                <span class="text-green-400">💬</span>
                <a href="https://wa.me/2290198874019" target="_blank" class="text-gray-300 hover:text-white transition">
                  +229 01 98 87 40 19
                </a>
              </li>
            </ul>
          </div>

          <!-- Newsletter -->
          <div>
            <h4 class="text-lg font-bold mb-4 text-blue-300">Newsletter</h4>
            <p class="text-gray-300 text-sm mb-4">
              Recevez les nouvelles ressources directement dans votre boîte mail.
            </p>
            <div class="flex">
              <input 
                type="email" 
                placeholder="Votre email"
                class="flex-grow px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none"
              >
              <button class="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 rounded-r-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition">
                S'inscrire
              </button>
            </div>
          </div>
        </div>

        <!-- Copyright -->
        <div class="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm">
            © 2024 EduCode. Tous droits réservés.
          </p>
          <div class="flex space-x-4 mt-4 md:mt-0">
            <a href="#" class="text-gray-400 hover:text-white transition">Mentions légales</a>
            <a href="#" class="text-gray-400 hover:text-white transition">Confidentialité</a>
            <a href="#" class="text-gray-400 hover:text-white transition">Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>