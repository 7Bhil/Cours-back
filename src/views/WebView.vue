<template>
  <div class="web-technologies">
    <!-- En-tête -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">
        🌐 Écosystème Web
      </h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Découvrez les principaux langages, frameworks et outils du développement web moderne.
      </p>
    </div>

    <!-- Navigation par catégorie -->
    <div class="mb-12">
      <div class="flex flex-wrap justify-center gap-4 mb-8">
        <button 
          v-for="category in categories"
          :key="category.id"
          @click="activeCategory = category.id"
          :class="[
            'px-6 py-2 rounded-full font-medium transition-all',
            activeCategory === category.id 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          ]"
        >
          {{ category.name }}
        </button>
      </div>
    </div>

    <!-- Contenu par catégorie -->
    <div class="space-y-16">
      <!-- Frontend -->
      <section v-if="activeCategory === 'frontend' || activeCategory === 'all'" class="fade-in">
        <div class="flex items-center mb-8">
          <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
            <span class="text-blue-600">🎨</span>
          </div>
          <h2 class="text-3xl font-bold text-gray-900">Frontend</h2>
        </div>
        
        <p class="text-gray-600 mb-8 max-w-3xl">
          Le frontend est la partie visible d'un site web, celle que l'utilisateur voit et avec laquelle il interagit.
          Il combine design, interactivité et expérience utilisateur.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TechnologyCard 
            v-for="tech in frontendTech"
            :key="tech.name"
            :tech="tech"
          />
        </div>
      </section>

      <!-- Backend -->
      <section v-if="activeCategory === 'backend' || activeCategory === 'all'" class="fade-in">
        <div class="flex items-center mb-8">
          <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
            <span class="text-green-600">⚙️</span>
          </div>
          <h2 class="text-3xl font-bold text-gray-900">Backend</h2>
        </div>
        
        <p class="text-gray-600 mb-8 max-w-3xl">
          Le backend gère la logique métier, les bases de données et l'authentification.
          C'est le moteur invisible qui fait fonctionner les applications web.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TechnologyCard 
            v-for="tech in backendTech"
            :key="tech.name"
            :tech="tech"
          />
        </div>
      </section>

      <!-- Full-Stack & Frameworks -->
      <section v-if="activeCategory === 'fullstack' || activeCategory === 'all'" class="fade-in">
        <div class="flex items-center mb-8">
          <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
            <span class="text-purple-600">🔄</span>
          </div>
          <h2 class="text-3xl font-bold text-gray-900">Frameworks Full-Stack</h2>
        </div>
        
        <p class="text-gray-600 mb-8 max-w-3xl">
          Ces frameworks permettent de développer à la fois le frontend et le backend avec une seule technologie,
          offrant une meilleure cohérence et productivité.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TechnologyCard 
            v-for="tech in fullstackTech"
            :key="tech.name"
            :tech="tech"
          />
        </div>
      </section>

      <!-- Bases de données -->
      <section v-if="activeCategory === 'database' || activeCategory === 'all'" class="fade-in">
        <div class="flex items-center mb-8">
          <div class="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
            <span class="text-yellow-600">🗄️</span>
          </div>
          <h2 class="text-3xl font-bold text-gray-900">Bases de données</h2>
        </div>
        
        <p class="text-gray-600 mb-8 max-w-3xl">
          Le stockage et la gestion des données sont essentiels pour toute application web.
          Chaque type de base de données a ses avantages spécifiques.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TechnologyCard 
            v-for="tech in databaseTech"
            :key="tech.name"
            :tech="tech"
          />
        </div>
      </section>
    </div>

    <!-- Comparaison -->
    <div class="mt-16 bg-gray-50 rounded-2xl p-8">
      <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">📊 Guide de choix</h3>
      
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white rounded-lg overflow-hidden">
          <thead class="bg-gray-100">
            <tr>
              <th class="py-3 px-4 text-left font-semibold text-gray-700">Technologie</th>
              <th class="py-3 px-4 text-left font-semibold text-gray-700">Type</th>
              <th class="py-3 px-4 text-left font-semibold text-gray-700">Cas d'usage</th>
              <th class="py-3 px-4 text-left font-semibold text-gray-700">Courbe d'apprentissage</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in comparisonTable" :key="item.name" class="border-t">
              <td class="py-3 px-4">
                <div class="font-medium text-gray-900">{{ item.name }}</div>
              </td>
              <td class="py-3 px-4">
                <span :class="[
                  'px-3 py-1 rounded-full text-xs font-medium',
                  item.type === 'Frontend' ? 'bg-blue-100 text-blue-800' :
                  item.type === 'Backend' ? 'bg-green-100 text-green-800' :
                  'bg-purple-100 text-purple-800'
                ]">
                  {{ item.type }}
                </span>
              </td>
              <td class="py-3 px-4 text-gray-600 text-sm">{{ item.useCase }}</td>
              <td class="py-3 px-4">
                <div class="flex items-center">
                  <div class="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      :class="[
                        'h-full',
                        item.difficulty === 'Facile' ? 'bg-green-500 w-1/4' :
                        item.difficulty === 'Moyenne' ? 'bg-yellow-500 w-1/2' :
                        'bg-red-500 w-3/4'
                      ]"
                    ></div>
                  </div>
                  <span class="ml-2 text-sm text-gray-600">{{ item.difficulty }}</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Conseils -->
    <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-white p-6 rounded-xl shadow border-l-4 border-blue-500">
        <div class="text-blue-500 text-2xl mb-4">🎯</div>
        <h4 class="font-bold text-gray-900 mb-2">Pour débuter</h4>
        <p class="text-gray-600 text-sm">
          Commencez par HTML/CSS puis JavaScript. Une fois les bases maîtrisées, explorez un framework frontend comme Vue.js ou React.
        </p>
      </div>
      
      <div class="bg-white p-6 rounded-xl shadow border-l-4 border-green-500">
        <div class="text-green-500 text-2xl mb-4">🚀</div>
        <h4 class="font-bold text-gray-900 mb-2">Pour un projet professionnel</h4>
        <p class="text-gray-600 text-sm">
          Considérez l'écosystème complet : React/Next.js pour le front, Node.js/Python pour le back, PostgreSQL/MySQL pour la base.
        </p>
      </div>
      
      <div class="bg-white p-6 rounded-xl shadow border-l-4 border-purple-500">
        <div class="text-purple-500 text-2xl mb-4">⚡</div>
        <h4 class="font-bold text-gray-900 mb-2">Pour les performances</h4>
        <p class="text-gray-600 text-sm">
          Next.js/Nuxt.js pour le SSR, Go/Rust pour les APIs haute performance, Redis pour le cache, PostgreSQL pour les données relationnelles.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import TechnologyCard from './TechnologyCard.vue'

export default {
  name: 'WebTechnologiesView',
  components: {
    TechnologyCard
  },
  data() {
    return {
      activeCategory: 'all',
      categories: [
        { id: 'all', name: 'Tout voir' },
        { id: 'frontend', name: 'Frontend' },
        { id: 'backend', name: 'Backend' },
        { id: 'fullstack', name: 'Full-Stack' },
        { id: 'database', name: 'Bases de données' }
      ],
      frontendTech: [
        {
          name: 'HTML/CSS',
          description: 'Les fondations du web. HTML structure le contenu, CSS le style.',
          icon: '📄',
          color: 'orange',
          features: ['Structure sémantique', 'Responsive Design', 'Animations CSS'],
          useCase: 'Tous les sites web',
          difficulty: 'Facile'
        },
        {
          name: 'JavaScript',
          description: 'Le langage de programmation du web pour l\'interactivité.',
          icon: '⚡',
          color: 'yellow',
          features: ['Manipulation DOM', 'Async/Await', 'ES6+ Features'],
          useCase: 'Interactivité, animations, APIs',
          difficulty: 'Moyenne'
        },
        {
          name: 'React',
          description: 'Bibliothèque JavaScript pour construire des interfaces utilisateur.',
          icon: '⚛️',
          color: 'blue',
          features: ['Components', 'Virtual DOM', 'Hooks'],
          useCase: 'SPAs, applications complexes',
          difficulty: 'Moyenne'
        },
        {
          name: 'Vue.js',
          description: 'Framework progressif pour construire des interfaces utilisateur.',
          icon: '🟢',
          color: 'green',
          features: ['Réactivité', 'Single File Components', 'Vue Router'],
          useCase: 'Applications modulables',
          difficulty: 'Facile à moyenne'
        },
        {
          name: 'TypeScript',
          description: 'Superset de JavaScript avec typage statique.',
          icon: '📘',
          color: 'blue',
          features: ['Typage statique', 'Meilleur autocomplétion', 'Moins de bugs'],
          useCase: 'Projets complexes en équipe',
          difficulty: 'Moyenne'
        },
        {
          name: 'Sass/SCSS',
          description: 'Préprocesseur CSS avec des fonctionnalités avancées.',
          icon: '🎨',
          color: 'pink',
          features: ['Variables', 'Mixins', 'Nesting'],
          useCase: 'Styles complexes, maintenabilité',
          difficulty: 'Facile'
        }
      ],
      backendTech: [
        {
          name: 'Node.js',
          description: 'JavaScript côté serveur avec une architecture événementielle.',
          icon: '🟩',
          color: 'green',
          features: ['Non-bloquant', 'NPM ecosystem', 'Fast I/O'],
          useCase: 'APIs, applications temps réel',
          difficulty: 'Moyenne'
        },
        {
          name: 'Python',
          description: 'Langage polyvalent avec une syntaxe claire et de nombreux frameworks web.',
          icon: '🐍',
          color: 'green',
          features: ['Syntaxe claire', 'Large écosystème', 'Data Science'],
          useCase: 'APIs, scripts, IA, automatisation',
          difficulty: 'Facile'
        },
        {
          name: 'PHP',
          description: 'Langage serveur spécialement conçu pour le web.',
          icon: '🐘',
          color: 'purple',
          features: ['Intégration facile', 'WordPress/Drupal', 'Large hébergement'],
          useCase: 'Sites web traditionnels, CMS',
          difficulty: 'Facile'
        },
        {
          name: 'Java',
          description: 'Langage orienté objet robuste pour les applications d\'entreprise.',
          icon: '☕',
          color: 'red',
          features: ['Performance', 'Multi-threading', 'Sécurité'],
          useCase: 'Applications d\'entreprise, bancaires',
          difficulty: 'Difficile'
        },
        {
          name: 'Go',
          description: 'Langage compilé simple et efficace pour le backend.',
          icon: '🐹',
          color: 'blue',
          features: ['Performance', 'Simplicité', 'Concurrence native'],
          useCase: 'APIs haute performance, microservices',
          difficulty: 'Moyenne'
        },
        {
          name: 'Ruby',
          description: 'Langage orienté objet avec une syntaxe élégante.',
          icon: '💎',
          color: 'red',
          features: ['Ruby on Rails', 'Syntaxe élégante', 'Convention over configuration'],
          useCase: 'Prototypage rapide, startups',
          difficulty: 'Moyenne'
        }
      ],
      fullstackTech: [
        {
          name: 'Next.js',
          description: 'Framework React avec rendu côté serveur et génération de sites statiques.',
          icon: '⏭️',
          color: 'gray',
          features: ['SSR/SSG', 'File-based routing', 'API Routes'],
          useCase: 'Applications React performantes',
          difficulty: 'Moyenne'
        },
        {
          name: 'Nuxt.js',
          description: 'Framework Vue.js pour des applications universelles.',
          icon: 'ν',
          color: 'green',
          features: ['SSR/SSG', 'Modular architecture', 'Auto-imports'],
          useCase: 'Applications Vue.js performantes',
          difficulty: 'Moyenne'
        },
        {
          name: 'Laravel',
          description: 'Framework PHP élégant avec une syntaxe expressive.',
          icon: '🔥',
          color: 'red',
          features: ['Eloquent ORM', 'Blade templates', 'Artisan CLI'],
          useCase: 'Applications web complètes en PHP',
          difficulty: 'Moyenne'
        },
        {
          name: 'Django',
          description: 'Framework Python "batteries included" pour le web.',
          icon: '🎸',
          color: 'green',
          features: ['ORM puissant', 'Admin interface', 'Sécurité intégrée'],
          useCase: 'Applications data-driven, startups',
          difficulty: 'Moyenne'
        },
        {
          name: 'Spring Boot',
          description: 'Framework Java pour créer des applications standalone.',
          icon: '🌱',
          color: 'green',
          features: ['Dependency Injection', 'Auto-configuration', 'Microservices ready'],
          useCase: 'Applications d\'entreprise, microservices',
          difficulty: 'Difficile'
        }
      ],
      databaseTech: [
        {
          name: 'PostgreSQL',
          description: 'Base de données relationnelle avancée et open source.',
          icon: '🐘',
          color: 'blue',
          features: ['ACID compliant', 'JSON support', 'Full-text search'],
          useCase: 'Applications complexes, données relationnelles',
          difficulty: 'Moyenne'
        },
        {
          name: 'MySQL',
          description: 'SGBD relationnel populaire et performant.',
          icon: '🐬',
          color: 'orange',
          features: ['Performance', 'Large adoption', 'Replication'],
          useCase: 'Web applications, WordPress',
          difficulty: 'Facile à moyenne'
        },
        {
          name: 'MongoDB',
          description: 'Base de données NoSQL orientée documents.',
          icon: '🍃',
          color: 'green',
          features: ['Documents JSON', 'Scalabilité horizontale', 'Flexible schema'],
          useCase: 'Données non-structurées, applications temps réel',
          difficulty: 'Moyenne'
        },
        {
          name: 'Redis',
          description: 'Base de données clé-valeur en mémoire.',
          icon: '🗃️',
          color: 'red',
          features: ['In-memory', 'Pub/Sub', 'Caching'],
          useCase: 'Cache, sessions, files d\'attente',
          difficulty: 'Facile'
        }
      ],
      comparisonTable: [
        { name: 'Vue.js', type: 'Frontend', useCase: 'Applications modulables', difficulty: 'Moyenne' },
        { name: 'React', type: 'Frontend', useCase: 'Applications complexes', difficulty: 'Moyenne' },
        { name: 'Node.js', type: 'Backend', useCase: 'APIs, temps réel', difficulty: 'Moyenne' },
        { name: 'Python/Django', type: 'Backend', useCase: 'Rapid development', difficulty: 'Moyenne' },
        { name: 'Laravel', type: 'Full-Stack', useCase: 'Applications PHP complètes', difficulty: 'Moyenne' },
        { name: 'PostgreSQL', type: 'Database', useCase: 'Données relationnelles', difficulty: 'Moyenne' }
      ]
    }
  }
}
</script>

<style scoped>
.web-technologies {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.card {
  @apply bg-white rounded-xl shadow p-6 transition-all duration-300;
}

.card:hover {
  @apply shadow-lg transform -translate-y-1;
}

.fade-in {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>