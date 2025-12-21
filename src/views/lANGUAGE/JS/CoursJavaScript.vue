<template>
  <div class="min-h-screen bg-[#f5f1e8] py-12 px-4">
    <div class="max-w-7xl mx-auto">
      <!-- En-tête -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center justify-center w-20 h-20 bg-[#ffd12e] rounded-2xl mb-4">
          <span class="text-4xl font-bold text-slate-900">JS</span>
        </div>
        <h1 class="text-5xl font-bold text-slate-900 mb-4">
          JavaScript
        </h1>
        <p class="text-xl text-slate-700">
          Le langage incontournable du web moderne. Apprenez à créer des sites interactifs, des applications web et même des serveurs avec Node.js.
        </p>
        
        <!-- Tags -->
        <div class="flex gap-3 justify-center mt-6">
          <span class="px-4 py-2 bg-white border border-slate-300 rounded-full text-slate-700 text-sm">Frontend</span>
          <span class="px-4 py-2 bg-white border border-slate-300 rounded-full text-slate-700 text-sm">Backend (Node.js)</span>
          <span class="px-4 py-2 bg-white border border-slate-300 rounded-full text-slate-700 text-sm">Full Stack</span>
        </div>
      </div>

      <!-- Navigation des sections -->
      <div class="flex gap-4 mb-8 overflow-x-auto pb-2">
        <button 
          v-for="(section, index) in sections" 
          :key="index"
          @click="currentSection = index"
          class="px-6 py-3 rounded-lg whitespace-nowrap transition-all border-2"
          :class="currentSection === index 
            ? 'bg-slate-900 text-white border-slate-900' 
            : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400'"
        >
          {{ section }}
        </button>
      </div>

      <!-- Barre de progression globale -->
      <div class="bg-white rounded-2xl p-6 mb-8 border-2 border-slate-200 shadow-sm">
        <div class="flex items-center justify-between mb-3">
          <span class="text-slate-900 font-semibold text-lg">Votre progression</span>
          <span class="text-slate-600 font-bold">{{ completedChapters }} / {{ chapters.length }} chapitres</span>
        </div>
        <div class="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
          <div 
            class="bg-gradient-to-r from-blue-500 to-blue-600 h-full transition-all duration-500 rounded-full"
            :style="{ width: progressPercentage + '%' }"
          ></div>
        </div>
        <p class="text-sm text-slate-600 mt-2">{{ Math.round(progressPercentage) }}% complété</p>
      </div>

      <!-- Liste des chapitres -->
      <div class="grid gap-6 mb-8">
        <div 
          v-for="(chapter, index) in chapters" 
          :key="index"
          class="bg-white rounded-2xl border-2 overflow-hidden transition-all shadow-sm"
          :class="{
            'border-slate-200 hover:border-slate-300 hover:shadow-md': chapter.unlocked && !chapter.completed,
            'border-slate-200 opacity-60': !chapter.unlocked,
            'border-green-500 bg-green-50': chapter.completed
          }"
        >
          <div 
            class="p-6 cursor-pointer"
            :class="{'cursor-not-allowed': !chapter.unlocked}"
            @click="selectChapter(index)"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4 flex-1">
                <div 
                  class="w-14 h-14 rounded-xl flex items-center justify-center text-xl font-bold border-2"
                  :class="chapter.completed 
                    ? 'bg-green-500 text-white border-green-500' 
                    : chapter.unlocked 
                      ? 'bg-blue-500 text-white border-blue-500' 
                      : 'bg-slate-200 text-slate-500 border-slate-300'"
                >
                  {{ chapter.completed ? '✓' : index + 1 }}
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl font-bold text-slate-900 mb-1">
                    {{ chapter.title }}
                  </h3>
                  <p class="text-slate-600">
                    {{ chapter.description }}
                  </p>
                  <div class="flex items-center gap-4 mt-2 text-sm text-slate-500">
                    <span>📖 {{ chapter.readTime }}</span>
                    <span>❓ {{ chapter.quiz.length }} questions</span>
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span 
                  v-if="!chapter.unlocked"
                  class="px-4 py-2 bg-slate-200 text-slate-600 rounded-lg flex items-center gap-2 font-medium"
                >
                  🔒 Verrouillé
                </span>
                <span 
                  v-else-if="chapter.completed"
                  class="px-4 py-2 bg-green-500 text-white rounded-lg flex items-center gap-2 font-medium"
                >
                  ✓ Terminé
                </span>
                <span 
                  v-else
                  class="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2 font-medium"
                >
                  → Commencer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal du chapitre -->
      <div 
        v-if="selectedChapter !== null"
        class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
        @click.self="closeChapter"
      >
        <div class="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border-2 border-slate-200 shadow-2xl">
          <!-- En-tête du chapitre -->
          <div class="bg-slate-900 p-6 sticky top-0 z-10">
            <div class="flex items-center justify-between">
              <div>
                <div class="text-sm text-slate-400 mb-1">Chapitre {{ selectedChapter + 1 }}</div>
                <h2 class="text-3xl font-bold text-white">
                  {{ chapters[selectedChapter].title }}
                </h2>
              </div>
              <button 
                @click="closeChapter"
                class="text-white hover:bg-white/10 rounded-full w-10 h-10 flex items-center justify-center transition-all text-xl"
              >
                ✕
              </button>
            </div>
          </div>

          <!-- Contenu du cours -->
          <div v-if="!showQuiz" class="p-8">
            <!-- Barre de progression du chapitre -->
            <div class="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 mb-8">
              <div class="flex items-center justify-between mb-2">
                <span class="text-slate-700 font-semibold">📚 Temps de lecture estimé</span>
                <span class="text-blue-600 font-bold">{{ chapters[selectedChapter].readTime }}</span>
              </div>
            </div>

            <!-- Contenu pédagogique -->
            <div class="prose prose-lg max-w-none">
              <div v-html="chapters[selectedChapter].content"></div>
            </div>

            <!-- Section d'exemples pratiques -->
            <div v-if="chapters[selectedChapter].examples" class="mt-8 bg-slate-50 border-2 border-slate-200 rounded-xl p-6">
              <h3 class="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                💡 Exemples pratiques
              </h3>
              <div v-html="chapters[selectedChapter].examples"></div>
            </div>

            <!-- Points clés à retenir -->
            <div v-if="chapters[selectedChapter].keyPoints" class="mt-8 bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
              <h3 class="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                ⭐ Points clés à retenir
              </h3>
              <ul class="space-y-2">
                <li v-for="(point, idx) in chapters[selectedChapter].keyPoints" :key="idx" class="flex items-start gap-3">
                  <span class="text-amber-600 font-bold mt-1">→</span>
                  <span class="text-slate-700">{{ point }}</span>
                </li>
              </ul>
            </div>

            <!-- Bouton pour passer au quiz -->
            <div class="mt-10 pt-6 border-t-2 border-slate-200">
              <div class="bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-200 rounded-xl p-6 mb-4">
                <h3 class="text-xl font-bold text-slate-900 mb-2">✅ Prêt pour le quiz ?</h3>
                <p class="text-slate-700">Testez vos connaissances avec {{ chapters[selectedChapter].quiz.length }} questions. Vous devez obtenir au moins 70% pour débloquer le chapitre suivant.</p>
              </div>
              <button 
                @click="startQuiz"
                class="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-4 px-8 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-[1.02] shadow-lg text-lg"
              >
                Commencer le Quiz 🎯
              </button>
            </div>
          </div>

          <!-- Quiz -->
          <div v-else class="p-8">
            <div class="mb-8 bg-slate-50 border-2 border-slate-200 rounded-xl p-4">
              <div class="flex items-center justify-between mb-3">
                <span class="text-slate-700 font-semibold">Question {{ currentQuestion + 1 }} / {{ chapters[selectedChapter].quiz.length }}</span>
                <span class="text-blue-600 font-bold">Score: {{ quizScore }} / {{ chapters[selectedChapter].quiz.length }}</span>
              </div>
              <div class="w-full bg-slate-200 rounded-full h-2">
                <div 
                  class="bg-gradient-to-r from-blue-500 to-blue-600 h-full transition-all duration-300 rounded-full"
                  :style="{ width: ((currentQuestion + 1) / chapters[selectedChapter].quiz.length * 100) + '%' }"
                ></div>
              </div>
            </div>

            <div v-if="!quizCompleted">
              <h3 class="text-2xl font-bold text-slate-900 mb-6">
                {{ chapters[selectedChapter].quiz[currentQuestion].question }}
              </h3>

              <div class="space-y-4">
                <button
                  v-for="(option, optIndex) in chapters[selectedChapter].quiz[currentQuestion].options"
                  :key="optIndex"
                  @click="selectAnswer(optIndex)"
                  :disabled="selectedAnswer !== null"
                  class="w-full text-left p-5 rounded-xl border-2 transition-all font-medium"
                  :class="{
                    'border-slate-300 bg-white hover:bg-slate-50 text-slate-900': selectedAnswer === null,
                    'border-green-500 bg-green-50 text-green-900': selectedAnswer !== null && optIndex === chapters[selectedChapter].quiz[currentQuestion].correct,
                    'border-red-500 bg-red-50 text-red-900': selectedAnswer === optIndex && optIndex !== chapters[selectedChapter].quiz[currentQuestion].correct,
                    'border-slate-200 bg-slate-50 text-slate-500': selectedAnswer !== null && optIndex !== chapters[selectedChapter].quiz[currentQuestion].correct && selectedAnswer !== optIndex
                  }"
                >
                  <span class="font-bold mr-2">{{ String.fromCharCode(65 + optIndex) }}.</span> {{ option }}
                </button>
              </div>

              <div v-if="selectedAnswer !== null" class="mt-6">
                <div v-if="selectedAnswer === chapters[selectedChapter].quiz[currentQuestion].correct" class="bg-green-50 border-2 border-green-500 rounded-xl p-5">
                  <div class="flex items-start gap-3">
                    <span class="text-2xl">✓</span>
                    <div>
                      <div class="font-bold text-green-900 mb-1">Bonne réponse !</div>
                      <div class="text-green-800">{{ chapters[selectedChapter].quiz[currentQuestion].explanation }}</div>
                    </div>
                  </div>
                </div>
                <div v-else class="bg-red-50 border-2 border-red-500 rounded-xl p-5">
                  <div class="flex items-start gap-3">
                    <span class="text-2xl">✗</span>
                    <div>
                      <div class="font-bold text-red-900 mb-1">Incorrect</div>
                      <div class="text-red-800">{{ chapters[selectedChapter].quiz[currentQuestion].explanation }}</div>
                    </div>
                  </div>
                </div>

                <button 
                  @click="nextQuestion"
                  class="mt-4 w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all text-lg"
                >
                  {{ currentQuestion < chapters[selectedChapter].quiz.length - 1 ? 'Question suivante →' : 'Voir les résultats 🎉' }}
                </button>
              </div>
            </div>

            <!-- Résultats du quiz -->
            <div v-else class="text-center">
              <div class="text-7xl mb-6">
                {{ quizScore >= chapters[selectedChapter].quiz.length * 0.7 ? '🎉' : '📚' }}
              </div>
              <h3 class="text-4xl font-bold text-slate-900 mb-4">
                {{ quizScore >= chapters[selectedChapter].quiz.length * 0.7 ? 'Félicitations !' : 'Continuez vos efforts !' }}
              </h3>
              <p class="text-2xl text-slate-700 mb-2">
                Votre score : <span class="font-bold text-blue-600">{{ quizScore }} / {{ chapters[selectedChapter].quiz.length }}</span>
              </p>
              <p class="text-xl text-slate-600 mb-8">
                {{ Math.round((quizScore / chapters[selectedChapter].quiz.length) * 100) }}% de réussite
              </p>

              <div v-if="quizScore >= chapters[selectedChapter].quiz.length * 0.7" class="bg-green-50 border-2 border-green-500 rounded-xl p-6 mb-6">
                <p class="text-green-800 text-lg font-medium flex items-center justify-center gap-2">
                  <span class="text-2xl">✓</span>
                  Vous avez débloqué le chapitre suivant !
                </p>
              </div>
              <div v-else class="bg-amber-50 border-2 border-amber-400 rounded-xl p-6 mb-6">
                <p class="text-amber-900 text-lg font-medium">
                  Vous devez obtenir au moins 70% pour débloquer le chapitre suivant. Réessayez !
                </p>
              </div>

              <div class="flex gap-4">
                <button 
                  @click="retryQuiz"
                  class="flex-1 bg-white border-2 border-slate-300 text-slate-700 font-bold py-4 px-6 rounded-xl hover:bg-slate-50 transition-all"
                >
                  🔄 Réessayer le quiz
                </button>
                <button 
                  @click="completeChapter"
                  :disabled="quizScore < chapters[selectedChapter].quiz.length * 0.7"
                  class="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:from-slate-400 disabled:to-slate-400"
                >
                  {{ quizScore >= chapters[selectedChapter].quiz.length * 0.7 ? '✓ Continuer' : '🔒 Continuer (verrouillé)' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JavaScriptLearning',
  data() {
    return {
      currentSection: 0,
      sections: ['Installation', 'Les bases', 'Concepts clés', 'Ressources', 'Exercices', 'Explorer plus'],
      selectedChapter: null,
      showQuiz: false,
      currentQuestion: 0,
      selectedAnswer: null,
      quizScore: 0,
      quizCompleted: false,
      chapters: [
        {
          title: 'Introduction à JavaScript',
          description: 'Découvrez les fondamentaux du langage JavaScript',
          readTime: '10 min',
          unlocked: true,
          completed: false,
          content: `
            <h3 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin-bottom: 1rem;">Qu'est-ce que JavaScript ?</h3>
            <p style="color: #475569; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1.5rem;">
              JavaScript est un langage de programmation créé en 1995 par Brendan Eich. C'est aujourd'hui le langage incontournable du développement web. Il permet de rendre les pages web interactives et dynamiques.
            </p>

            <h4 style="color: #1e293b; font-size: 1.5rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">À quoi sert JavaScript ?</h4>
            <p style="color: #475569; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1rem;">
              JavaScript permet de :
            </p>
            <ul style="color: #475569; font-size: 1.125rem; line-height: 1.75; margin-left: 1.5rem; margin-bottom: 1.5rem;">
              <li style="margin-bottom: 0.5rem;">✨ Rendre les pages web dynamiques et interactives</li>
              <li style="margin-bottom: 0.5rem;">🎮 Créer des jeux vidéo dans le navigateur</li>
              <li style="margin-bottom: 0.5rem;">📱 Développer des applications mobiles (React Native)</li>
              <li style="margin-bottom: 0.5rem;">🖥️ Créer des applications de bureau (Electron)</li>
              <li style="margin-bottom: 0.5rem;">⚙️ Développer des serveurs avec Node.js</li>
            </ul>

            <h4 style="color: #1e293b; font-size: 1.5rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">Votre premier code JavaScript</h4>
            <p style="color: #475569; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1rem;">
              Commençons par le classique "Hello World". Ouvrez la console de votre navigateur (F12) et tapez :
            </p>
            <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.75rem; margin-bottom: 1.5rem; overflow-x: auto;"><code>console.log("Bonjour le monde !");</code></pre>
            <p style="color: #475569; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1.5rem;">
              Cette ligne affiche "Bonjour le monde !" dans la console. C'est votre premier programme JavaScript ! 🎉
            </p>

            <h4 style="color: #1e293b; font-size: 1.5rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">Comment JavaScript fonctionne-t-il ?</h4>
            <p style="color: #475569; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1.5rem;">
              JavaScript s'exécute directement dans votre navigateur. Lorsque vous visitez une page web, le navigateur télécharge le code JavaScript et l'exécute. C'est ce qui rend les sites web modernes si interactifs !
            </p>
          `,
          examples: `
            <div style="margin-bottom: 1.5rem;">
              <h4 style="color: #1e293b; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Exemple 1 : Afficher une alerte</h4>
              <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.5rem; margin-bottom: 0.5rem; overflow-x: auto;"><code>alert("Bienvenue sur mon site !");</code></pre>
              <p style="color: #64748b; font-size: 1rem;">Affiche une boîte de dialogue avec un message.</p>
            </div>

            <div style="margin-bottom: 1.5rem;">
              <h4 style="color: #1e293b; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Exemple 2 : Calculer une somme</h4>
              <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.5rem; margin-bottom: 0.5rem; overflow-x: auto;"><code>let resultat = 5 + 3;
console.log(resultat); // Affiche 8</code></pre>
              <p style="color: #64748b; font-size: 1rem;">JavaScript peut effectuer des calculs mathématiques.</p>
            </div>
          `,
          keyPoints: [
            'JavaScript a été créé en 1995 et est devenu le langage standard du web',
            'Il fonctionne directement dans le navigateur, sans installation nécessaire',
            'console.log() permet d\'afficher des messages dans la console',
            'JavaScript peut manipuler le contenu HTML et CSS d\'une page en temps réel'
          ],
          quiz: [
            {
              question: 'En quelle année JavaScript a-t-il été créé ?',
              options: ['1990', '1995', '2000', '2005'],
              correct: 1,
              explanation: 'JavaScript a été créé en 1995 par Brendan Eich chez Netscape Communications.'
            },
            {
              question: 'Quelle fonction permet d\'afficher un message dans la console du navigateur ?',
              options: ['print()', 'console.log()', 'alert()', 'display()'],
              correct: 1,
              explanation: 'console.log() est la fonction standard pour afficher des messages dans la console du navigateur.'
            },
            {
              question: 'JavaScript peut-il être utilisé côté serveur ?',
              options: ['Oui, avec Node.js', 'Non, uniquement dans le navigateur', 'Seulement avec Java', 'Seulement avec Python'],
              correct: 0,
              explanation: 'Oui ! Avec Node.js, JavaScript peut être utilisé pour créer des serveurs et des applications backend.'
            }
          ]
        },
        {
          title: 'Variables et Types de données',
          description: 'Apprendre à stocker et manipuler des données',
          readTime: '15 min',
          unlocked: false,
          completed: false,
          content: `
            <h3 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin-bottom: 1rem;">Les Variables en JavaScript</h3>
            <p style="color: #475569; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1.5rem;">
              Une variable est comme une boîte dans laquelle vous pouvez stocker une information pour l'utiliser plus tard. En JavaScript, on peut créer des variables de trois façons différentes.
            </p>

            <h4 style="color: #1e293b; font-size: 1.5rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">Les trois types de déclaration</h4>
            
            <div style="margin-bottom: 2rem;">
              <h5 style="color: #3b82f6; font-size: 1.25rem; font-weight: bold; margin-bottom: 0.5rem;">1. let - Variable modifiable</h5>
              <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.5rem; margin-bottom: 0.5rem;"><code>let prenom = "Alice";
prenom = "Bob"; // ✓ On peut changer la valeur</code></pre>
              <p style="color: #64748b; font-size: 1rem; margin-bottom: 1rem;">Utilisez <strong>let</strong> quand la valeur peut changer.</p>
            </div>

            <div style="margin-bottom: 2rem;">
              <h5 style="color: #3b82f6; font-size: 1.25rem; font-weight: bold; margin-bottom: 0.5rem;">2. const - Constante (non modifiable)</h5>
              <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.5rem; margin-bottom: 0.5rem;"><code>const age = 25;
age = 26; // ✗ Erreur ! Une constante ne peut pas être modifiée</code></pre>
              <p style="color: #64748b; font-size: 1rem; margin-bottom: 1rem;">Utilisez <strong>const</strong> quand la valeur ne doit jamais changer.</p>
            </div>

            <div style="margin-bottom: 2rem;">
              <h5 style="color: #f59e0b; font-size: 1.25rem; font-weight: bold; margin-bottom: 0.5rem;">3. var - Ancienne méthode (évitez-la)</h5>
              <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.5rem; margin-bottom: 0.5rem;"><code>var ville = "Paris"; // ⚠️ Déprécié, utilisez let ou const</code></pre>
              <p style="color: #64748b; font-size: 1rem;">N'utilisez plus <strong>var</strong>, préférez let ou const.</p>
            </div>

            <h4 style="color: #1e293b; font-size: 1.5rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">Les types de données</h4>
            <p style="color: #475569; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1rem;">
              JavaScript a plusieurs types de données que vous devez connaître :
            </p>

            <div style="background: #f1f5f9; padding: 1.5rem; border-radius: 0.75rem; border-left: 4px solid #3b82f6; margin-bottom: 1rem;">
              <h5 style="color: #1e293b; font-weight: bold; margin-bottom: 0.5rem;">📝 String (Chaîne de caractères)</h5>
              <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.5rem; margin-top: 0.5rem;"><code>let message = "Bonjour";
let nom = 'Alice';
let phrase = \`Je m'appelle \${nom}\`; // Template literal</code></pre>
            </div>

            <div style="background: #f1f5f9; padding: 1.5rem; border-radius: 0.75rem; border-left: 4px solid #3b82f6; margin-bottom: 1rem;">
              <h5 style="color: #1e293b; font-weight: bold; margin-bottom: 0.5rem;">🔢 Number (Nombre)</h5>
              <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.5rem; margin-top: 0.5rem;"><code>let age = 25;
let prix = 19.99;
let negatif = -10;</code></pre>
            </div>

            <div style="background: #f1f5f9; padding: 1.5rem; border-radius: 0.75rem; border-left: 4px solid #3b82f6; margin-bottom: 1rem;">
              <h5 style="color: #1e293b; font-weight: bold; margin-bottom: 0.5rem;">✅ Boolean (Vrai/Faux)</h5>
              <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.5rem; margin-top: 0.5rem;"><code>let estMajeur = true;
let aPermis = false;</code></pre>
            </div>

            <div style="background: #f1f5f9; padding: 1.5rem; border-radius: 0.75rem; border-left: 4px solid #3b82f6; margin-bottom: 1rem;">
              <h5 style="color: #1e293b; font-weight: bold; margin-bottom: 0.5rem;">📋 Array (Tableau)</h5>
              <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.5rem; margin-top: 0.5rem;"><code>let fruits = ["Pomme", "Banane", "Orange"];
console.log(fruits[0]); // Affiche "Pomme"</code></pre>
            </div>

            <div style="background: #f1f5f9; padding: 1.5rem; border-radius: 0.75rem; border-left: 4px solid #3b82f6; margin-bottom: 1rem;">
              <h5 style="color: #1e293b; font-weight: bold; margin-bottom: 0.5rem;">📦 Object (Objet)</h5>
              <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.5rem; margin-top: 0.5rem;"><code>let personne = {
  nom: "Alice",
  age: 25,
  ville: "Paris"
};
console.log(personne.nom); // Affiche "Alice"</code></pre>
            </div>
          `,
          examples: `
            <div style="margin-bottom: 1.5rem;">
              <h4 style="color: #1e293b; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Exemple 1 : Concaténation de strings</h4>
              <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.5rem; margin-bottom: 0.5rem; overflow-x: auto;"><code>let prenom = "Alice";
let nom = "Dupont";
let nomComplet = prenom + " " + nom;
console.log(nomComplet); // "Alice Dupont"

// Avec template literal (moderne)
let message = \`Bonjour \${prenom} \${nom} !\`;
console.log(message); // "Bonjour Alice Dupont !"</code></pre>
              <p style="color: #64748b; font-size: 1rem;">Les template literals (\` \`) permettent d'insérer des variables facilement.</p>
            </div>

            <div style="margin-bottom: 1.5rem;">
              <h4 style="color: #1e293b; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Exemple 2 : Opérations mathématiques</h4>
              <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.5rem; margin-bottom: 0.5rem; overflow-x: auto;"><code>let a = 10;
let b = 3;

console.log(a + b);  // 13 (addition)
console.log(a - b);  // 7  (soustraction)
console.log(a * b);  // 30 (multiplication)
console.log(a / b);  // 3.333... (division)
console.log(a % b);  // 1  (modulo - reste de la division)</code></pre>
              <p style="color: #64748b; font-size: 1rem;">JavaScript supporte toutes les opérations mathématiques de base.</p>
            </div>

            <div style="margin-bottom: 1.5rem;">
              <h4 style="color: #1e293b; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Exemple 3 : Manipuler des tableaux</h4>
              <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.5rem; margin-bottom: 0.5rem; overflow-x: auto;"><code>let courses = ["Pain", "Lait"];
courses.push("Œufs");        // Ajouter à la fin
console.log(courses);        // ["Pain", "Lait", "Œufs"]
console.log(courses.length); // 3</code></pre>
              <p style="color: #64748b; font-size: 1rem;">Les tableaux peuvent grandir dynamiquement avec .push().</p>
            </div>
          `,
          keyPoints: [
            'Utilisez const par défaut, let uniquement si la valeur doit changer',
            'Les strings peuvent utiliser " ", \' \' ou ` ` (template literals)',
            'JavaScript a un typage dynamique : une variable peut changer de type',
            'Les tableaux commencent à l\'index 0',
            'Les objets stockent des paires clé-valeur'
          ],
          quiz: [
            {
              question: 'Quel mot-clé crée une variable qui ne peut pas être réassignée ?',
              options: ['var', 'let', 'const', 'static'],
              correct: 2,
              explanation: 'const crée une constante qui ne peut pas être réassignée après sa déclaration.'
            },
            {
              question: 'Quel est le type de la valeur "42" (avec guillemets) ?',
              options: ['Number', 'String', 'Boolean', 'Integer'],
              correct: 1,
              explanation: 'Les valeurs entre guillemets sont toujours des strings (chaînes de caractères), même si elles contiennent des chiffres.'
            },
            {
              question: 'Comment déclarer un tableau en JavaScript ?',
              options: ['array[1,2,3]', '{1,2,3}', '[1,2,3]', '(1,2,3)'],
              correct: 2,
              explanation: 'Les crochets [] sont utilisés pour déclarer un tableau (array) en JavaScript.'
            },
            {
              question: 'Comment accéder à la propriété "nom" d\'un objet "personne" ?',
              options: ['personne->nom', 'personne.nom', 'personne[nom]', 'personne::nom'],
              correct: 1,
              explanation: 'On utilise la notation point (.) pour accéder aux propriétés d\'un objet : personne.nom'
            }
          ]
        },
        {
          title: 'Fonctions',
          description: 'Créer du code réutilisable et organisé',
          readTime: '12 min',
          unlocked: false,
          completed: false,
          content: `
            <h3 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin-bottom: 1rem;">Les Fonctions en JavaScript</h3>
            <p style="color: #475569; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1.5rem;">
              Une fonction est un bloc de code réutilisable qui effectue une tâche spécifique. Au lieu de répéter le même code plusieurs fois, vous créez une fonction et l'appelez quand vous en avez besoin.
            </p>

            <h4 style="color: #1e293b; font-size: 1.5rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">Déclarer une fonction</h4>
            <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.75rem; margin-bottom: 1rem;"><code>function direBonjour(nom) {
  return "Bonjour " + nom + " !";
}

// Appeler la fonction
let message = direBonjour("Alice");
console.log(message); // "Bonjour Alice !"</code></pre>
            <p style="color: #475569; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1.5rem;">
              Dans cet exemple, <strong>nom</strong> est un <em>paramètre</em> : une variable que la fonction reçoit. <strong>return</strong> renvoie une valeur à l'endroit où la fonction est appelée.
            </p>

            <h4 style="color: #1e293b; font-size: 1.5rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">Fonctions fléchées (Arrow Functions)</h4>
            <p style="color: #475569; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1rem;">
              Les fonctions fléchées sont une syntaxe moderne et plus courte pour écrire des fonctions :
            </p>
            <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.75rem; margin-bottom: 1.5rem;"><code>// Fonction classique
function multiplier(a, b) {
  return a * b;
}

// Fonction fléchée (équivalent)
const multiplier = (a, b) => {
  return a * b;
};

// Fonction fléchée courte (sans accolades si une seule ligne)
const multiplier = (a, b) => a * b;

console.log(multiplier(5, 3)); // 15</code></pre>

            <h4 style="color: #1e293b; font-size: 1.5rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">Paramètres par défaut</h4>
            <p style="color: #475569; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1rem;">
              Vous pouvez définir des valeurs par défaut pour les paramètres :
            </p>
            <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.75rem; margin-bottom: 1.5rem;"><code>function saluer(nom = "Invité") {
  return \`Bonjour \${nom} !\`;
}

console.log(saluer("Alice")); // "Bonjour Alice !"
console.log(saluer());        // "Bonjour Invité !"</code></pre>
          `,
          examples: `
            <div style="margin-bottom: 1.5rem;">
              <h4 style="color: #1e293b; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Exemple 1 : Calculer l'âge</h4>
              <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.5rem; margin-bottom: 0.5rem; overflow-x: auto;"><code>function calculerAge(anneeNaissance) {
  const anneeActuelle = new Date().getFullYear();
  return anneeActuelle - anneeNaissance;
}

console.log(calculerAge(1995)); // 30 (si on est en 2025)</code></pre>
              <p style="color: #64748b; font-size: 1rem;">Une fonction qui calcule l'âge à partir de l'année de naissance.</p>
            </div>

            <div style="margin-bottom: 1.5rem;">
              <h4 style="color: #1e293b; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Exemple 2 : Vérifier un nombre pair</h4>
              <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.5rem; margin-bottom: 0.5rem; overflow-x: auto;"><code>const estPair = (nombre) => nombre % 2 === 0;

console.log(estPair(4));  // true
console.log(estPair(7));  // false</code></pre>
              <p style="color: #64748b; font-size: 1rem;">Fonction fléchée courte qui vérifie si un nombre est pair.</p>
            </div>

            <div style="margin-bottom: 1.5rem;">
              <h4 style="color: #1e293b; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Exemple 3 : Fonction avec plusieurs return</h4>
              <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.5rem; margin-bottom: 0.5rem; overflow-x: auto;"><code>function evaluerNote(note) {
  if (note >= 90) return "Excellent";
  if (note >= 70) return "Bien";
  if (note >= 50) return "Passable";
  return "Insuffisant";
}

console.log(evaluerNote(85));  // "Bien"
console.log(evaluerNote(45));  // "Insuffisant"</code></pre>
              <p style="color: #64748b; font-size: 1rem;">Une fonction peut avoir plusieurs return selon les conditions.</p>
            </div>
          `,
          keyPoints: [
            'Les fonctions évitent la répétition de code',
            'return renvoie une valeur et arrête l\'exécution de la fonction',
            'Les fonctions fléchées (=>) sont plus courtes et modernes',
            'Les paramètres peuvent avoir des valeurs par défaut',
            'Une fonction sans return renvoie undefined'
          ],
          quiz: [
            {
              question: 'Quel mot-clé renvoie une valeur depuis une fonction ?',
              options: ['give', 'return', 'send', 'output'],
              correct: 1,
              explanation: 'return est utilisé pour renvoyer une valeur depuis une fonction et arrêter son exécution.'
            },
            {
              question: 'Quelle syntaxe définit une fonction fléchée ?',
              options: ['function =>', '() =>', '-> ()', '=> function'],
              correct: 1,
              explanation: 'La syntaxe () => définit une fonction fléchée (arrow function).'
            },
            {
              question: 'Que se passe-t-il si une fonction n\'a pas de return ?',
              options: ['Erreur', 'Renvoie 0', 'Renvoie undefined', 'Renvoie null'],
              correct: 2,
              explanation: 'Une fonction sans return renvoie automatiquement undefined en JavaScript.'
            }
          ]
        },
        {
          title: 'Conditions et Boucles',
          description: 'Contrôler le flux d\'exécution de votre code',
          readTime: '18 min',
          unlocked: false,
          completed: false,
          content: `
            <h3 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin-bottom: 1rem;">Les Structures de Contrôle</h3>
            <p style="color: #475569; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1.5rem;">
              Les structures de contrôle permettent de prendre des décisions et de répéter des actions. Ce sont les fondations de la logique en programmation.
            </p>

            <h4 style="color: #1e293b; font-size: 1.5rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">Les Conditions (if, else)</h4>
            <p style="color: #475569; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1rem;">
              Les conditions permettent d'exécuter du code uniquement si une condition est vraie :
            </p>
            <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.75rem; margin-bottom: 1.5rem;"><code>let age = 20;

if (age >= 18) {
  console.log("Vous êtes majeur");
} else {
  console.log("Vous êtes mineur");
}

// Conditions multiples avec else if
let note = 75;

if (note >= 90) {
  console.log("Excellent !");
} else if (note >= 70) {
  console.log("Bien");
} else if (note >= 50) {
  console.log("Passable");
} else {
  console.log("Insuffisant");
}</code></pre>

            <h4 style="color: #1e293b; font-size: 1.5rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">Opérateurs de comparaison</h4>
            <div style="background: #f1f5f9; padding: 1.5rem; border-radius: 0.75rem; margin-bottom: 1.5rem;">
              <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.5rem;"><code>==   // Égal à (vérifie la valeur)
===  // Égal strict (vérifie valeur ET type)
!=   // Différent de
!==  // Différent strict
>    // Supérieur à
<    // Inférieur à
>=   // Supérieur ou égal à
<=   // Inférieur ou égal à</code></pre>
              <p style="color: #475569; margin-top: 1rem; font-weight: bold;">⚠️ Utilisez toujours === et !== pour éviter les comportements étranges !</p>
            </div>

            <h4 style="color: #1e293b; font-size: 1.5rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">Les Boucles</h4>
            <p style="color: #475569; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1rem;">
              Les boucles permettent de répéter du code plusieurs fois :
            </p>

            <div style="margin-bottom: 2rem;">
              <h5 style="color: #3b82f6; font-size: 1.25rem; font-weight: bold; margin-bottom: 0.5rem;">Boucle for</h5>
              <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.5rem; margin-bottom: 0.5rem;"><code>// Afficher les nombres de 0 à 4
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Résultat : 0, 1, 2, 3, 4</code></pre>
              <p style="color: #64748b; font-size: 1rem;">La boucle for est idéale quand on connaît le nombre d'itérations.</p>
            </div>

            <div style="margin-bottom: 2rem;">
              <h5 style="color: #3b82f6; font-size: 1.25rem; font-weight: bold; margin-bottom: 0.5rem;">Boucle while</h5>
              <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.5rem; margin-bottom: 0.5rem;"><code>let count = 0;
while (count < 3) {
  console.log("Count: " + count);
  count++;
}
// Résultat : Count: 0, Count: 1, Count: 2</code></pre>
              <p style="color: #64748b; font-size: 1rem;">while continue tant que la condition est vraie.</p>
            </div>

            <div style="margin-bottom: 2rem;">
              <h5 style="color: #3b82f6; font-size: 1.25rem; font-weight: bold; margin-bottom: 0.5rem;">Boucle for...of (parcourir un tableau)</h5>
              <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.5rem; margin-bottom: 0.5rem;"><code>let fruits = ["Pomme", "Banane", "Orange"];

for (let fruit of fruits) {
  console.log(fruit);
}
// Résultat : Pomme, Banane, Orange</code></pre>
              <p style="color: #64748b; font-size: 1rem;">for...of est parfait pour parcourir les tableaux.</p>
            </div>

            <h4 style="color: #1e293b; font-size: 1.5rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">break et continue</h4>
            <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.75rem; margin-bottom: 1.5rem;"><code>// break : sortir de la boucle
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}
// Résultat : 0, 1, 2, 3, 4

// continue : passer à l'itération suivante
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
// Résultat : 0, 1, 3, 4 (saute 2)</code></pre>
          `,
          examples: `
            <div style="margin-bottom: 1.5rem;">
              <h4 style="color: #1e293b; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Exemple 1 : FizzBuzz classique</h4>
              <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.5rem; margin-bottom: 0.5rem; overflow-x: auto;"><code>for (let i = 1; i <= 15; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}</code></pre>
              <p style="color: #64748b; font-size: 1rem;">Exercice classique combinant boucles et conditions.</p>
            </div>

            <div style="margin-bottom: 1.5rem;">
              <h4 style="color: #1e293b; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Exemple 2 : Trouver le maximum d'un tableau</h4>
              <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.5rem; margin-bottom: 0.5rem; overflow-x: auto;"><code>let nombres = [4, 12, 7, 25, 3, 18];
let max = nombres[0];

for (let nombre of nombres) {
  if (nombre > max) {
    max = nombre;
  }
}

console.log("Le maximum est:", max); // 25</code></pre>
              <p style="color: #64748b; font-size: 1rem;">Parcourir un tableau pour trouver la plus grande valeur.</p>
            </div>

            <div style="margin-bottom: 1.5rem;">
              <h4 style="color: #1e293b; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Exemple 3 : Table de multiplication</h4>
              <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.5rem; margin-bottom: 0.5rem; overflow-x: auto;"><code>let nombre = 7;

for (let i = 1; i <= 10; i++) {
  console.log(\`\${nombre} x \${i} = \${nombre * i}\`);
}
// 7 x 1 = 7
// 7 x 2 = 14
// ... jusqu'à 7 x 10 = 70</code></pre>
              <p style="color: #64748b; font-size: 1rem;">Générer une table de multiplication.</p>
            </div>
          `,
          keyPoints: [
            'Utilisez === (égalité stricte) plutôt que == pour éviter les surprises',
            'Les boucles for sont idéales quand on connaît le nombre d\'itérations',
            'for...of simplifie le parcours des tableaux',
            'break sort de la boucle, continue passe à l\'itération suivante',
            'Attention aux boucles infinies : vérifiez toujours votre condition de sortie'
          ],
          quiz: [
            {
              question: 'Quel opérateur vérifie l\'égalité stricte (valeur ET type) ?',
              options: ['=', '==', '===', '!='],
              correct: 2,
              explanation: '=== vérifie l\'égalité de la valeur ET du type. C\'est la pratique recommandée en JavaScript.'
            },
            {
              question: 'Que fait le mot-clé "break" dans une boucle ?',
              options: ['Passe à l\'itération suivante', 'Sort de la boucle immédiatement', 'Met la boucle en pause', 'Recommence la boucle'],
              correct: 1,
              explanation: 'break permet de sortir immédiatement d\'une boucle, quel que soit l\'état de la condition.'
            },
            {
              question: 'Quelle boucle est la plus adaptée pour parcourir un tableau ?',
              options: ['while', 'do...while', 'for...of', 'if...else'],
              correct: 2,
              explanation: 'for...of est spécialement conçu pour parcourir les éléments d\'un tableau de manière simple et lisible.'
            },
            {
              question: 'Que se passe-t-il si la condition d\'une boucle while est toujours vraie ?',
              options: ['La boucle s\'arrête automatiquement', 'Une erreur est levée', 'Boucle infinie qui bloque le programme', 'Le navigateur arrête l\'exécution'],
              correct: 2,
              explanation: 'Si la condition reste toujours vraie, la boucle while continue indéfiniment (boucle infinie), ce qui peut bloquer votre programme.'
            }
          ]
        },
        {
          title: 'Tableaux et Méthodes',
          description: 'Manipuler des collections de données efficacement',
          readTime: '16 min',
          unlocked: false,
          completed: false,
          content: `
            <h3 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin-bottom: 1rem;">Les Méthodes de Tableaux</h3>
            <p style="color: #475569; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1.5rem;">
              JavaScript offre de puissantes méthodes pour manipuler les tableaux. Ces méthodes vous permettent de transformer, filtrer et parcourir vos données facilement.
            </p>

            <h4 style="color: #1e293b; font-size: 1.5rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">map() - Transformer chaque élément</h4>
            <p style="color: #475569; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1rem;">
              map() crée un nouveau tableau en appliquant une fonction à chaque élément :
            </p>
            <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.75rem; margin-bottom: 1.5rem;"><code>let nombres = [1, 2, 3, 4, 5];

// Multiplier chaque nombre par 2
let doubles = nombres.map(n => n * 2);
console.log(doubles); // [2, 4, 6, 8, 10]

// Transformer des objets
let users = [
  { nom: "Alice", age: 25 },
  { nom: "Bob", age: 30 }
];

let noms = users.map(user => user.nom);
console.log(noms); // ["Alice", "Bob"]</code></pre>

            <h4 style="color: #1e293b; font-size: 1.5rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">filter() - Filtrer les éléments</h4>
            <p style="color: #475569; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1rem;">
              filter() crée un nouveau tableau avec seulement les éléments qui passent un test :
            </p>
            <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.75rem; margin-bottom: 1.5rem;"><code>let nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Garder seulement les nombres pairs
let pairs = nombres.filter(n => n % 2 === 0);
console.log(pairs); // [2, 4, 6, 8, 10]

// Filtrer des utilisateurs
let users = [
  { nom: "Alice", age: 25 },
  { nom: "Bob", age: 17 },
  { nom: "Charlie", age: 30 }
];

let majeurs = users.filter(user => user.age >= 18);
console.log(majeurs); // Alice et Charlie</code></pre>

            <h4 style="color: #1e293b; font-size: 1.5rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">find() - Trouver un élément</h4>
            <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.75rem; margin-bottom: 1.5rem;"><code>let users = [
  { id: 1, nom: "Alice" },
  { id: 2, nom: "Bob" },
  { id: 3, nom: "Charlie" }
];

// Trouver l'utilisateur avec id = 2
let user = users.find(u => u.id === 2);
console.log(user); // { id: 2, nom: "Bob" }

// Retourne undefined si non trouvé
let inconnu = users.find(u => u.id === 999);
console.log(inconnu); // undefined</code></pre>

            <h4 style="color: #1e293b; font-size: 1.5rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">reduce() - Réduire à une seule valeur</h4>
            <p style="color: #475569; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1rem;">
              reduce() accumule les valeurs d'un tableau en une seule valeur :
            </p>
            <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.75rem; margin-bottom: 1.5rem;"><code>let nombres = [1, 2, 3, 4, 5];

// Calculer la somme
let somme = nombres.reduce((total, n) => total + n, 0);
console.log(somme); // 15

// Compter les occurrences
let fruits = ["pomme", "banane", "pomme", "orange", "banane", "pomme"];
let compte = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(compte); 
// { pomme: 3, banane: 2, orange: 1 }</code></pre>

            <h4 style="color: #1e293b; font-size: 1.5rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">Autres méthodes utiles</h4>
            <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.75rem; margin-bottom: 1.5rem;"><code>let nombres = [1, 2, 3, 4, 5];

// some() - Au moins un élément respecte la condition
let aUnPair = nombres.some(n => n % 2 === 0);
console.log(aUnPair); // true

// every() - Tous les éléments respectent la condition
let tousPositifs = nombres.every(n => n > 0);
console.log(tousPositifs); // true

// includes() - Vérifie si un élément existe
let contientTrois = nombres.includes(3);
console.log(contientTrois); // true

// sort() - Trier le tableau
let lettres = ["c", "a", "b"];
lettres.sort();
console.log(lettres); // ["a", "b", "c"]

// reverse() - Inverser l'ordre
nombres.reverse();
console.log(nombres); // [5, 4, 3, 2, 1]</code></pre>
          `,
          examples: `
            <div style="margin-bottom: 1.5rem;">
              <h4 style="color: #1e293b; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Exemple 1 : Chaînage de méthodes</h4>
              <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.5rem; margin-bottom: 0.5rem; overflow-x: auto;"><code>let nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filtrer les pairs, multiplier par 3, puis calculer la somme
let resultat = nombres
  .filter(n => n % 2 === 0)     // [2, 4, 6, 8, 10]
  .map(n => n * 3)              // [6, 12, 18, 24, 30]
  .reduce((sum, n) => sum + n, 0); // 90

console.log(resultat); // 90</code></pre>
              <p style="color: #64748b; font-size: 1rem;">Combinez plusieurs méthodes pour des transformations complexes.</p>
            </div>

            <div style="margin-bottom: 1.5rem;">
              <h4 style="color: #1e293b; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Exemple 2 : Filtrer et afficher des produits</h4>
              <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.5rem; margin-bottom: 0.5rem; overflow-x: auto;"><code>let produits = [
  { nom: "Laptop", prix: 1000, categorie: "Tech" },
  { nom: "Chaise", prix: 150, categorie: "Mobilier" },
  { nom: "Souris", prix: 25, categorie: "Tech" },
  { nom: "Bureau", prix: 300, categorie: "Mobilier" }
];

// Trouver les produits Tech à moins de 500€
let resultat = produits
  .filter(p => p.categorie === "Tech" && p.prix < 500)
  .map(p => p.nom);

console.log(resultat); // ["Souris"]</code></pre>
              <p style="color: #64748b; font-size: 1rem;">Filtrage et transformation de données réelles.</p>
            </div>

            <div style="margin-bottom: 1.5rem;">
              <h4 style="color: #1e293b; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Exemple 3 : Calculer le panier moyen</h4>
              <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.5rem; margin-bottom: 0.5rem; overflow-x: auto;"><code>let commandes = [
  { client: "Alice", total: 150 },
  { client: "Bob", total: 200 },
  { client: "Charlie", total: 175 }
];

let totalCommandes = commandes.reduce((sum, cmd) => sum + cmd.total, 0);
let moyenne = totalCommandes / commandes.length;

console.log("Panier moyen:", moyenne + "€"); // 175€</code></pre>
              <p style="color: #64748b; font-size: 1rem;">Utiliser reduce() pour des calculs statistiques.</p>
            </div>
          `,
          keyPoints: [
            'map() transforme chaque élément et retourne un nouveau tableau',
            'filter() garde seulement les éléments qui passent un test',
            'find() retourne le premier élément qui correspond',
            'reduce() accumule les valeurs en une seule',
            'Ces méthodes ne modifient PAS le tableau original'
          ],
          quiz: [
            {
              question: 'Quelle méthode utiliser pour doubler tous les nombres d\'un tableau ?',
              options: ['filter()', 'map()', 'reduce()', 'find()'],
              correct: 1,
              explanation: 'map() est parfait pour transformer chaque élément d\'un tableau en appliquant une fonction.'
            },
            {
              question: 'Que retourne find() si aucun élément ne correspond ?',
              options: ['null', 'undefined', 'false', '-1'],
              correct: 1,
              explanation: 'find() retourne undefined quand aucun élément ne correspond à la condition.'
            },
            {
              question: 'Quelle méthode utiliser pour calculer la somme des éléments ?',
              options: ['sum()', 'total()', 'reduce()', 'accumulate()'],
              correct: 2,
              explanation: 'reduce() est utilisé pour accumuler des valeurs, comme calculer une somme ou un produit.'
            },
            {
              question: 'Les méthodes map() et filter() modifient-elles le tableau original ?',
              options: ['Oui', 'Non', 'Seulement map()', 'Seulement filter()'],
              correct: 1,
              explanation: 'Non ! Ces méthodes créent un nouveau tableau et laissent l\'original intact (principe d\'immutabilité).'
            }
          ]
        },
        {
          title: 'Asynchrone et Promesses',
          description: 'Gérer les opérations asynchrones et les API',
          readTime: '22 min',
          unlocked: false,
          completed: false,
          content: `
            <h3 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin-bottom: 1rem;">La Programmation Asynchrone</h3>
            <p style="color: #475569; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1.5rem;">
              JavaScript exécute le code ligne par ligne (synchrone). Mais certaines opérations prennent du temps : récupérer des données d'une API, lire un fichier, attendre un timer. La programmation asynchrone permet de ne pas bloquer l'exécution pendant ces opérations.
            </p>

            <h4 style="color: #1e293b; font-size: 1.5rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">setTimeout et setInterval</h4>
            <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.75rem; margin-bottom: 1.5rem;"><code>// Exécuter une fois après un délai
setTimeout(() => {
  console.log("Ceci s'affiche après 2 secondes");
}, 2000); // 2000 ms = 2 secondes

// Exécuter répétitivement
let compteur = 0;
let interval = setInterval(() => {
  compteur++;
  console.log("Tick:", compteur);
  
  if (compteur === 5) {
    clearInterval(interval); // Arrêter l'intervalle
  }
}, 1000); // Toutes les secondes</code></pre>

            <h4 style="color: #1e293b; font-size: 1.5rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">Les Promesses (Promises)</h4>
            <p style="color: #475569; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1rem;">
              Une promesse représente une opération asynchrone qui peut réussir ou échouer dans le futur :
            </p>
            <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.75rem; margin-bottom: 1.5rem;"><code>// Créer une promesse
let maPromesse = new Promise((resolve, reject) => {
  let succes = true;
  
  setTimeout(() => {
    if (succes) {
      resolve("Opération réussie !");
    } else {
      reject("Erreur survenue");
    }
  }, 1000);
});

// Utiliser la promesse
maPromesse
  .then(resultat => {
    console.log(resultat); // "Opération réussie !"
  })
  .catch(erreur => {
    console.error(erreur);
  });</code></pre>

            <h4 style="color: #1e293b; font-size: 1.5rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">async / await</h4>
            <p style="color: #475569; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1rem;">
              async/await rend le code asynchrone plus lisible :
            </p>
            <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.75rem; margin-bottom: 1.5rem;"><code>// Fonction asynchrone
async function recupererDonnees() {
  try {
    let resultat = await maPromesse;
    console.log(resultat);
    return resultat;
  } catch (erreur) {
    console.error("Erreur:", erreur);
  }
}

// Appeler la fonction
recupererDonnees();</code></pre>

            <h4 style="color: #1e293b; font-size: 1.5rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">Fetch API - Récupérer des données</h4>
            <p style="color: #475569; font-size: 1.125rem; line-height: 1.75; margin-bottom: 1rem;">
              fetch() permet de faire des requêtes HTTP pour récupérer ou envoyer des données :
            </p>
            <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.75rem; margin-bottom: 1.5rem;"><code>// Avec .then()
fetch("https://api.example.com/users")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Erreur:", error);
  });

// Avec async/await (plus moderne)
async function chargerUtilisateurs() {
  try {
    let response = await fetch("https://api.example.com/users");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Erreur:", error);
  }
}</code></pre>

            <h4 style="color: #1e293b; font-size: 1.5rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">Envoyer des données (POST)</h4>
            <pre style="background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.75rem; margin-bottom: 1.5rem;"><code>async function creerUtilisateur(nom, email) {
  try {
    let response = await fetch("https://api.example.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nom: nom,
        email: email
      })
    });
    
    let data = await response.json();
    console.log("Utilisateur créé:", data);
  } catch (error) {
    console.error("Erreur:", error);
  }
}</code></pre>
          `,
          examples: `
            <div style="margin-bottom: 1.5rem;">
              <h4 style="color: #1e293b; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Exemple 1 : Récupérer des citations aléatoires</h4>
              <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.5rem; margin-bottom: 0.5rem; overflow-x: auto;"><code>async function obtenirCitation() {
  try {
    let response = await fetch("https://api.quotable.io/random");
    let data = await response.json();
    
    console.log(\`"\${data.content}" - \${data.author}\`);
  } catch (error) {
    console.error("Impossible de récupérer la citation");
  }
}

obtenirCitation();</code></pre>
              <p style="color: #64748b; font-size: 1rem;">Utiliser une API publique pour récupérer des données.</p>
            </div>

            <div style="margin-bottom: 1.5rem;">
              <h4 style="color: #1e293b; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Exemple 2 : Charger plusieurs utilisateurs</h4>
              <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.5rem; margin-bottom: 0.5rem; overflow-x: auto;"><code>async function afficherUtilisateurs() {
  let liste = document.getElementById("users");
  liste.innerHTML = "Chargement...";
  
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();
    
    liste.innerHTML = "";
    users.forEach(user => {
      let li = document.createElement("li");
      li.textContent = \`\${user.name} - \${user.email}\`;
      liste.appendChild(li);
    });
  } catch (error) {
    liste.innerHTML = "Erreur de chargement";
  }
}</code></pre>
              <p style="color: #64748b; font-size: 1rem;">Combiner fetch() avec manipulation du DOM.</p>
            </div>

            <div style="margin-bottom: 1.5rem;">
              <h4 style="color: #1e293b; font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Exemple 3 : Minuteur avec promesse</h4>
              <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.5rem; margin-bottom: 0.5rem; overflow-x: auto;"><code>function attendre(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function compteur() {
  console.log("Début");
  await attendre(1000);
  console.log("1 seconde");
  await attendre(1000);
  console.log("2 secondes");
  await attendre(1000);
  console.log("3 secondes - Fin !");
}

compteur();</code></pre>
              <p style="color: #64748b; font-size: 1rem;">Créer une fonction utilitaire pour attendre.</p>
            </div>
          `,
          keyPoints: [
            'async/await rend le code asynchrone plus lisible que les .then()',
            'fetch() est l\'outil moderne pour faire des requêtes HTTP',
            'Toujours utiliser try/catch avec async/await pour gérer les erreurs',
            'Une fonction marquée async retourne toujours une promesse',
            'await ne fonctionne que dans une fonction async'
          ],
          quiz: [
            {
              question: 'Quel mot-clé transforme une fonction en fonction asynchrone ?',
              options: ['await', 'async', 'promise', 'setTimeout'],
              correct: 1,
              explanation: 'Le mot-clé async avant function la transforme en fonction asynchrone qui retourne une promesse.'
            },
            {
              question: 'Que fait await dans une fonction async ?',
              options: ['Attend que la promesse se résolve', 'Crée une nouvelle promesse', 'Annule l\'opération', 'Accélère l\'exécution'],
              correct: 0,
              explanation: 'await met en pause l\'exécution jusqu\'à ce que la promesse se résolve et retourne sa valeur.'
            },
            {
              question: 'Quelle méthode permet de faire une requête HTTP en JavaScript ?',
              options: ['http.get()', 'request()', 'fetch()', 'ajax()'],
              correct: 2,
              explanation: 'fetch() est l\'API moderne pour faire des requêtes HTTP en JavaScript.'
            },
            {
              question: 'Comment gérer les erreurs avec async/await ?',
              options: ['.catch()', 'try/catch', 'error()', 'onerror'],
              correct: 1,
              explanation: 'On utilise try/catch pour gérer les erreurs dans les fonctions async/await.'
            }
          ]
        }
      ]
    };
  },
  computed: {
    completedChapters() {
      return this.chapters.filter(ch => ch.completed).length;
    },
    progressPercentage() {
      return (this.completedChapters / this.chapters.length) * 100;
    }
  },
  methods: {
    selectChapter(index) {
      if (this.chapters[index].unlocked) {
        this.selectedChapter = index;
        this.showQuiz = false;
        this.resetQuiz();
      }
    },
    closeChapter() {
      this.selectedChapter = null;
      this.showQuiz = false;
      this.resetQuiz();
    },
    startQuiz() {
      this.showQuiz = true;
      this.resetQuiz();
    },
    selectAnswer(index) {
      if (this.selectedAnswer === null) {
        this.selectedAnswer = index;
        if (index === this.chapters[this.selectedChapter].quiz[this.currentQuestion].correct) {
          this.quizScore++;
        }
      }
    },
    nextQuestion() {
      if (this.currentQuestion < this.chapters[this.selectedChapter].quiz.length - 1) {
        this.currentQuestion++;
        this.selectedAnswer = null;
      } else {
        this.quizCompleted = true;
      }
    },
    resetQuiz() {
      this.currentQuestion = 0;
      this.selectedAnswer = null;
      this.quizScore = 0;
      this.quizCompleted = false;
    },
    retryQuiz() {
      this.resetQuiz();
    },
    completeChapter() {
      if (this.quizScore >= this.chapters[this.selectedChapter].quiz.length * 0.7) {
        this.chapters[this.selectedChapter].completed = true;
        
        // Débloquer le chapitre suivant
        if (this.selectedChapter < this.chapters.length - 1) {
          this.chapters[this.selectedChapter + 1].unlocked = true;
        }
        
        this.closeChapter();
      }
    }
  }
};
</script>