<template>
  <div id="app" class="min-h-screen flex flex-col bg-gray-50">
    <!-- En-tête Navigation -->
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <router-link to="/" class="flex items-center space-x-3 group">
            <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-200">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
            </div>
            <div class="flex flex-col">
              <span class="text-xl font-bold text-gray-900">Bhil<span class="text-blue-600 text-xl">$</span></span>
              <span class="text-3xs text-gray-500">Bhil$ && Jjboy</span>
            </div>
          </router-link>

          <!-- Navigation Desktop -->
          <nav class="hidden md:flex items-center space-x-8">
            <router-link 
              to="/" 
              class="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              active-class="text-blue-600"
            >
              Accueil
            </router-link>
            <router-link 
              to="/langages" 
              class="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              active-class="text-blue-600"
            >
              Langages
            </router-link>
            <router-link 
              to="/web" 
              class="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              active-class="text-blue-600"
            >
              Développement Web
            </router-link>
            <router-link 
              to="/cybersecurite" 
              class="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              active-class="text-blue-600"
            >
              Cybersécurité
            </router-link>
            <router-link 
              to="/contact" 
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Contact
            </router-link>
          </nav>

          <!-- Mobile Menu Button -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
          >
            <svg v-if="!mobileMenuOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Menu Mobile Sliding -->
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="transform translate-x-full opacity-0"
        enter-to-class="transform translate-x-0 opacity-100"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="transform translate-x-0 opacity-100"
        leave-to-class="transform translate-x-full opacity-0"
      >
        <div v-if="mobileMenuOpen" class="md:hidden fixed inset-y-0 right-0 w-64 bg-white shadow-2xl z-50">
          <div class="flex flex-col h-full">
            <!-- En-tête du menu mobile -->
            <div class="flex items-center justify-between p-4 border-b border-gray-200">
              <span class="text-lg font-bold text-gray-900">Menu</span>
              <button 
                @click="mobileMenuOpen = false"
                class="p-2 rounded-md text-gray-700 hover:bg-gray-100"
              >
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            <!-- Navigation mobile -->
            <nav class="flex-1 overflow-y-auto p-4">
              <div class="space-y-2">
                <router-link 
                  to="/" 
                  @click="mobileMenuOpen = false"
                  class="block px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  active-class="bg-blue-50 text-blue-600"
                >
                  Accueil
                </router-link>
                <router-link 
                  to="/langages" 
                  @click="mobileMenuOpen = false"
                  class="block px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  active-class="bg-blue-50 text-blue-600"
                >
                  Langages
                </router-link>
                <router-link 
                  to="/web" 
                  @click="mobileMenuOpen = false"
                  class="block px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  active-class="bg-blue-50 text-blue-600"
                >
                  Développement Web
                </router-link>
                <router-link 
                  to="/cybersecurite" 
                  @click="mobileMenuOpen = false"
                  class="block px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  active-class="bg-blue-50 text-blue-600"
                >
                  Cybersécurité
                </router-link>
                <router-link 
                  to="/contact" 
                  @click="mobileMenuOpen = false"
                  class="block px-4 py-3 rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors text-center"
                >
                  Contact
                </router-link>
              </div>
            </nav>

            <!-- Footer du menu mobile -->
            <div class="p-4 border-t border-gray-200">
              <a 
                href="https://wa.me/2290198874019" 
                target="_blank"
                class="flex items-center justify-center px-4 py-3 rounded-lg bg-green-50 text-green-700 hover:bg-green-100 transition-colors"
              >
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </transition>

      <!-- Overlay pour fermer le menu -->
      <transition
        enter-active-class="transition-opacity duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div 
          v-if="mobileMenuOpen" 
          @click="mobileMenuOpen = false"
          class="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      </transition>
    </header>

    <!-- Contenu Principal -->
    <main class="flex-1">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- Grille principale -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-gray-800">
          <!-- Colonne 1: À propos -->
          <div class="space-y-4">
            <div class="flex items-center space-x-2">
              <div class="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
              </div>
              <span class="text-lg font-bold text-white">Bhil$</span>
            </div>
            <p class="text-sm text-gray-400 leading-relaxed">
              Plateforme de formation en ligne spécialisée dans l'enseignement de la programmation et des technologies numériques.
            </p>
          </div>

          <!-- Colonne 2: Formations -->
          <div>
            <h3 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Formations</h3>
            <ul class="space-y-3">
              <li>
                <router-link to="/langages" class="text-sm text-gray-400 hover:text-white transition-colors">
                  Langages de programmation
                </router-link>
              </li>
              <li>
                <router-link to="/web" class="text-sm text-gray-400 hover:text-white transition-colors">
                  Développement Web
                </router-link>
              </li>
              <li>
                <router-link to="/cybersecurite" class="text-sm text-gray-400 hover:text-white transition-colors">
                  Cybersécurité
                </router-link>
              </li>
              <li>
                <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors">
                  Parcours certifiants
                </a>
              </li>
            </ul>
          </div>

          <!-- Colonne 3: Ressources -->
          <div>
            <h3 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Ressources</h3>
            <ul class="space-y-3">
              <li>
                <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors">
                  Tutoriels
                </a>
              </li>
              <li>
                <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors">
                  Exercices pratiques
                </a>
              </li>
              <li>
                <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors">
                  Centre d'aide
                </a>
              </li>
            </ul>
          </div>

          <!-- Colonne 4: Contact -->
          <div>
            <h3 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h3>
            <ul class="space-y-3">
              <li>
                <a href="mailto:7bhilal.chitou7@gmail.com" class="text-sm text-gray-400 hover:text-white transition-colors flex items-start">
                  <svg class="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span class="break-all">7bhilal.chitou7@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/2290198874019" target="_blank" class="text-sm text-gray-400 hover:text-white transition-colors flex items-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  +229 01 98 87 40 19
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Bas de page -->
        <div class="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="text-sm text-gray-400">
            © 2024 Bhil$. Tous droits réservés.
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors">
              Mentions légales
            </a>
            <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors">
              Confidentialité
            </a>
            <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors">
              CGU
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      mobileMenuOpen: false
    }
  },
  watch: {
    mobileMenuOpen(isOpen) {
      // Empêcher le scroll du body quand le menu est ouvert
      if (isOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    }
  },
  beforeUnmount() {
    // Nettoyer le style au démontage du composant
    document.body.style.overflow = ''
  }
}
</script>