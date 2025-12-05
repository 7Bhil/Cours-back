<template>
  <div class="technology">
    <!-- En-tête dynamique -->
    <div class="text-center mb-12 pt-8">
      <div class="flex items-center justify-center mb-6">
        <div class="w-16 h-16 rounded-2xl flex items-center justify-center mr-4 shadow-lg"
             :class="technology.iconClass">
          <span class="text-3xl">{{ technology.icon }}</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900">
          {{ technology.name }}
        </h1>
      </div>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        {{ technology.description }}
      </p>
    </div>

    <!-- Deux colonnes : Guide + Téléchargements -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
      <!-- Guide d'installation -->
      <div class="lg:col-span-2">
        <div class="card">
          <h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span class="mr-3">⚙️</span> Installation & Configuration
          </h2>
          
          <div class="bg-gray-900 text-gray-100 rounded-xl p-6 font-mono text-sm mb-6">
            <pre class="whitespace-pre-wrap">{{ technology.installation }}</pre>
          </div>
          
          <div class="space-y-4">
            <h3 class="text-xl font-bold text-gray-900">📖 Pour commencer</h3>
            <p class="text-gray-600">
              {{ technology.gettingStarted }}
            </p>
            
            <h3 class="text-xl font-bold text-gray-900 mt-6">🎯 Cas d'utilisation</h3>
            <ul class="list-disc pl-5 text-gray-600 space-y-2">
              <li v-for="useCase in technology.useCases" :key="useCase">
                {{ useCase }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Contact rapide -->
      <div>
        <div class="card mb-6">
          <h3 class="text-xl font-bold text-gray-900 mb-4">📞 Contact rapide</h3>
          <div class="space-y-3">
            <a 
              :href="`mailto:7bhilal.chitou7@gmail.com?subject=Question sur ${technology.name}`"
              class="flex items-center justify-center bg-blue-50 hover:bg-blue-100 text-blue-700 py-3 px-4 rounded-lg font-medium transition"
            >
              <span class="mr-2">📧</span> Question par email
            </a>
            <a 
              :href="`https://wa.me/22998874019?text=Bonjour, j'ai une question sur ${technology.name}`"
              target="_blank"
              class="flex items-center justify-center bg-green-50 hover:bg-green-100 text-green-700 py-3 px-4 rounded-lg font-medium transition"
            >
              <span class="mr-2">💬</span> WhatsApp
            </a>
          </div>
        </div>

        <!-- Infos -->
        <div class="card">
          <h3 class="text-xl font-bold text-gray-900 mb-4">ℹ️ Informations</h3>
          <div class="space-y-3">
            <div class="flex justify-between">
              <span class="text-gray-600">Type :</span>
              <span class="font-medium">{{ technology.type }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Niveau :</span>
              <span class="font-medium">{{ technology.level }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Paradigme :</span>
              <span class="font-medium">{{ technology.paradigm }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Popularité :</span>
              <span class="font-medium">{{ technology.popularity }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Ressources disponibles -->
    <div class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">
        📚 Ressources disponibles
      </h2>
      
      <div v-if="technology.resources.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="resource in technology.resources" 
          :key="resource.id"
          class="card hover:shadow-xl transition-all duration-300 group"
        >
          <div class="flex items-start mb-4">
            <div class="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center mr-4"
                 :class="resource.type === 'pdf' ? 'bg-blue-100 text-blue-600' : 
                         resource.type === 'exercise' ? 'bg-green-100 text-green-600' : 
                         'bg-purple-100 text-purple-600'">
              <span class="text-xl">
                {{ resource.type === 'pdf' ? '📄' : 
                   resource.type === 'exercise' ? '💪' : '✅' }}
              </span>
            </div>
            <div class="flex-grow">
              <h4 class="font-bold text-gray-900">{{ resource.title }}</h4>
              <p class="text-gray-600 text-sm">{{ resource.description }}</p>
              <div class="mt-2 text-gray-500 text-sm">
                {{ resource.format }} • {{ resource.size }}
              </div>
            </div>
          </div>
          
          <a 
            :href="resource.path"
            :download="resource.filename"
            class="block w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-4 rounded-lg text-center font-semibold transition-all shadow hover:shadow-lg"
          >
            📥 Télécharger
          </a>
        </div>
      </div>
      
      <!-- Message si pas de ressources -->
      <div v-else class="text-center py-12">
        <div class="text-6xl mb-4">📚</div>
        <h3 class="text-2xl font-bold text-gray-900 mb-2">Ressources en préparation</h3>
        <p class="text-gray-600">Les ressources pour {{ technology.name }} seront bientôt disponibles !</p>
      </div>
    </div>

    <!-- Recommandations -->
    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
      <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">
        🚀 Prochaines étapes recommandées
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div 
          v-for="nextStep in technology.nextSteps" 
          :key="nextStep"
          class="bg-white p-6 rounded-xl shadow text-center"
        >
          <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
            <span class="text-blue-600">✓</span>
          </div>
          <p class="text-gray-800 font-medium">{{ nextStep }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Données des technologies
const technologies = {
  javascript: {
    name: 'JavaScript',
    icon: '⚡',
    iconClass: 'bg-yellow-100 text-yellow-600',
    description: 'Langage de programmation dynamique pour le web interactif.',
    type: 'Langage de script',
    level: 'Débutant à Expert',
    paradigm: 'Multi-paradigme',
    popularity: 'Très populaire',
    installation: `# Installation via Node.js (npm)
npm install -g javascript

# Vérification
node --version
javascript --version

# Environnement de développement recommandé
- VS Code avec extensions JavaScript
- Navigateur moderne (Chrome, Firefox)
- Node.js pour l\'exécution côté serveur`,
    gettingStarted: 'JavaScript permet d\'ajouter de l\'interactivité aux pages web. Commencez par apprendre les bases de la syntaxe, puis explorez le DOM et les API modernes.',
    useCases: [
      'Développement web frontend',
      'Applications web interactives',
      'Développement backend avec Node.js',
      'Applications mobiles (React Native)'
    ],
    resources: [
      {
        id: 1,
        title: 'JavaScript - Les bases',
        description: 'Introduction complète à JavaScript moderne',
        path: '/pdf/langages/javascript/01-javascript-bases.pdf',
        filename: 'javascript-bases.pdf',
        type: 'pdf',
        format: 'PDF',
        size: '2.4MB'
      }
    ],
    nextSteps: [
      'Maîtriser ES6+',
      'Apprendre un framework (React, Vue)',
      'Explorer Node.js',
      'Pratiquer avec des projets'
    ]
  },
  java: {
    name: 'Java',
    icon: '☕',
    iconClass: 'bg-orange-100 text-orange-600',
    description: 'Langage orienté objet multiplateforme très utilisé en entreprise.',
    type: 'Langage compilé',
    level: 'Intermédiaire à Expert',
    paradigm: 'Orienté objet',
    popularity: 'Très populaire (entreprise)',
    installation: `# Installation sur Ubuntu/Debian
sudo apt update
sudo apt install default-jdk

# Vérification
java --version
javac --version

# Configuration de l\'environnement
export JAVA_HOME=/usr/lib/jvm/default-java
export PATH=$PATH:$JAVA_HOME/bin

# IDE recommandé : IntelliJ IDEA ou Eclipse`,
    gettingStarted: 'Java est un langage robuste et portable. Commencez par comprendre les concepts de la POO, puis explorez les collections, les exceptions et les streams.',
    useCases: [
      'Applications d\'entreprise',
      'Applications Android',
      'Systèmes bancaires',
      'Big Data (Hadoop)'
    ],
    resources: [
      {
        id: 1,
        title: 'Java - Les bases',
        description: 'Introduction à Java et la programmation orientée objet',
        path: '/pdf/langages/java/01-java-bases.pdf',
        filename: 'java-bases.pdf',
        type: 'pdf',
        format: 'PDF',
        size: '3.1MB'
      }
    ],
    nextSteps: [
      'Maîtriser la POO',
      'Apprendre Spring Framework',
      'Découvrir les design patterns',
      'Pratiquer les tests unitaires'
    ]
  },
  cpp: {
    name: 'C++',
    icon: '➕➕',
    iconClass: 'bg-purple-100 text-purple-600',
    description: 'Langage de programmation système orienté objet, extension de C.',
    type: 'Langage compilé',
    level: 'Intermédiaire à Expert',
    paradigm: 'Multi-paradigme',
    popularity: 'Populaire (systèmes, jeux)',
    installation: `# Installation sur Ubuntu/Debian
sudo apt update
sudo apt install g++ build-essential

# Vérification
g++ --version

# Compilation d\'un programme
g++ -o programme programme.cpp
./programme

# IDE recommandés
- Visual Studio (Windows)
- CLion (cross-platform)
- VS Code avec extensions C++`,
    gettingStarted: 'C++ combine programmation de bas niveau et fonctionnalités orientées objet. Commencez par les bases du langage, puis explorez la gestion mémoire et les templates.',
    useCases: [
      'Développement de jeux vidéo',
      'Systèmes embarqués',
      'Logiciels système',
      'Applications haute performance'
    ],
    resources: [
      {
        id: 1,
        title: 'C++ - Les bases',
        description: 'Introduction à C++ moderne (C++11/14/17)',
        path: '/pdf/langages/cpp/01-cpp-bases.pdf',
        filename: 'cpp-bases.pdf',
        type: 'pdf',
        format: 'PDF',
        size: '2.8MB'
      }
    ],
    nextSteps: [
      'Comprendre les pointeurs',
      'Maîtriser la STL',
      'Apprendre les templates',
      'Explorer le multithreading'
    ]
  }
}

export default {
  name: 'TechnologyView',
  props: {
    tech: {
      type: String,
      required: true
    }
  },
  computed: {
    technology() {
      // Retourne les données de la technologie ou une technologie par défaut
      return technologies[this.tech] || {
        name: this.tech.charAt(0).toUpperCase() + this.tech.slice(1),
        icon: '💻',
        iconClass: 'bg-gray-100 text-gray-600',
        description: 'Ressources pour ce langage de programmation.',
        resources: []
      }
    }
  },
  created() {
    console.log('Page technologie chargée pour:', this.tech)
  }
}
</script>