<template>
  <div class="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 py-8 px-4">
    <div class="max-w-4xl mx-auto">
      
      <!-- Écran de résultats final -->
      <div v-if="testCompleted" class="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
        <div class="text-center mb-8">
          <div class="text-6xl mb-4">{{ gradeIcon }}</div>
          <h2 class="text-4xl font-bold text-gray-900 mb-2">Test Ruby terminé !</h2>
          <p :class="`text-2xl font-semibold ${gradeColor} mb-6`">{{ grade }}</p>
        </div>

        <div class="bg-gradient-to-r from-red-500 to-pink-500 rounded-xl p-8 text-white mb-8">
          <div class="text-center">
            <div class="text-6xl font-bold mb-2">{{ finalPercentage }}%</div>
            <p class="text-xl">Score global</p>
            <p class="text-sm opacity-90 mt-2">{{ score }} / {{ totalQuestions }} réponses correctes</p>
          </div>
        </div>

        <div class="space-y-6 mb-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Détails par niveau</h3>
          
          <div v-for="level in [1, 2, 3]" :key="level" class="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div class="flex items-center justify-between mb-3">
              <h4 class="font-semibold text-gray-900">{{ getLevelData(level).title }}</h4>
              <span class="text-sm font-medium text-gray-600">{{ getLevelScore(level) }}/{{ getLevelTotal(level) }}</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3 mb-2">
              <div 
                class="bg-gradient-to-r from-red-500 to-pink-500 h-3 rounded-full transition-all duration-500"
                :style="{ width: getLevelPercentage(level) + '%' }"
              ></div>
            </div>
            <p class="text-sm text-gray-600">{{ getLevelPercentage(level) }}% de réussite</p>
          </div>
        </div>

        <div class="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div class="flex items-start">
            <svg class="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
            </svg>
            <div>
              <h4 class="font-semibold text-blue-900 mb-2">Recommandations</h4>
              <ul class="text-sm text-blue-800 space-y-1">
                <li v-for="(recommendation, index) in recommendations" :key="index">{{ recommendation }}</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Notification d'envoi automatique -->
        <div v-if="emailSent" class="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <div class="flex items-center">
            <svg class="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <p class="text-green-800 font-medium">
              <span v-if="emailStatus === 'redirecting'">
                Redirection vers Gmail en cours...
              </span>
              <span v-else-if="emailStatus === 'sent'">
                Email envoyé avec succès ! Vous pouvez maintenant fermer cette fenêtre.
              </span>
              <span v-else>
                Préparation de l'email...
              </span>
            </p>
          </div>
        </div>

        <!-- Bouton principal pour envoyer les résultats -->
        <div class="mb-8">
          <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <div class="flex items-start">
              <svg class="w-6 h-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
              <div>
                <h4 class="font-semibold text-yellow-900 mb-2">Envoyer les résultats</h4>
                <p class="text-sm text-yellow-800 mb-4">
                  Pour finaliser votre test et recevoir votre certification, veuillez envoyer vos résultats.
                  Cette action ouvrira Gmail avec un email pré-rempli adressé au formateur.
                </p>
                <button
                  @click="sendResultsToInstructor"
                  :disabled="emailStatus === 'redirecting' || emailStatus === 'sent'"
                  class="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span v-if="emailStatus === 'redirecting'">Redirection en cours...</span>
                  <span v-else-if="emailStatus === 'sent'">Email envoyé ✓</span>
                  <span v-else>Envoyer mes résultats au formateur</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Section de partage (optionnel) -->
        <div class="mb-8">
          <h4 class="text-lg font-semibold text-gray-900 mb-4">Partager mon résultat</h4>
          
          <button
            @click="shareResultsWithFriends"
            class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all mb-4 flex items-center justify-center gap-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
            </svg>
            Partager avec mes amis
          </button>

          <div class="mt-4">
            <p class="text-sm text-gray-600 mb-2">Lien de partage :</p>
            <div class="flex gap-2">
              <input
                type="text"
                :value="shareableLink"
                readonly
                class="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-700 text-sm"
              />
              <button
                @click="copyToClipboard"
                class="bg-gray-800 text-white px-4 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all flex items-center gap-2"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
                Copier
              </button>
            </div>
            <p v-if="copiedToClipboard" class="text-green-600 text-sm mt-2 text-center">
              ✓ Lien copié dans le presse-papier !
            </p>
          </div>
        </div>

        <!-- Bouton recommencer -->
        <button
          @click="resetTest"
          class="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-4 rounded-lg font-semibold hover:from-red-700 hover:to-pink-700 transition-all flex items-center justify-center gap-2"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
          Recommencer le test
        </button>
      </div>

      <!-- Écran du test (reste inchangé) -->
      <div v-else>
        <!-- Header -->
        <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h1 class="text-3xl font-bold text-gray-900">Test Ruby - Évaluation de compétences</h1>
              <p class="text-gray-600 mt-1">{{ currentLevelData.title }}</p>
            </div>
            <div class="text-right">
              <div class="text-2xl font-bold text-red-600">{{ score }}/{{ totalQuestions }}</div>
              <div class="text-sm text-gray-600">Score</div>
            </div>
          </div>

          <!-- Progress bar -->
          <div class="w-full bg-gray-200 rounded-full h-3 mb-2">
            <div 
              class="bg-gradient-to-r from-red-500 to-pink-500 h-3 rounded-full transition-all duration-300"
              :style="{ width: progressPercentage + '%' }"
            ></div>
          </div>
          <div class="flex justify-between text-sm text-gray-600">
            <span>Question {{ answers.length + 1 }} / {{ totalQuestions }}</span>
            <span>{{ progressPercentage }}% complété</span>
          </div>
        </div>

        <!-- Question Card -->
        <div class="bg-white rounded-xl shadow-lg p-8">
          <div class="mb-6">
            <div class="flex items-center gap-2 mb-4">
              <span class="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                Niveau {{ currentLevel }}
              </span>
              <span class="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                Question {{ currentQuestion + 1 }}/{{ currentLevelData.questions.length }}
              </span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ question.question }}</h3>
          </div>

          <!-- Code Display -->
          <div v-if="question.code" class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm mb-6 overflow-x-auto">
            <pre>{{ question.code }}</pre>
          </div>

          <!-- Answer Options - MCQ -->
          <div v-if="question.type === 'mcq'" class="space-y-3">
            <button
              v-for="(option, index) in question.options"
              :key="index"
              @click="handleAnswer(index)"
              :disabled="showResult"
              :class="getOptionClass(index)"
              class="w-full text-left p-4 rounded-lg border-2 transition-all duration-200"
            >
              <div class="flex items-center justify-between">
                <span class="font-medium">{{ option }}</span>
                <svg v-if="showResult && index === question.correct" class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <svg v-if="showResult && index === selectedAnswer && index !== question.correct" class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
            </button>
          </div>

          <!-- Answer Input - Completion -->
          <div v-if="question.type === 'completion'">
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Votre réponse :
            </label>
            <input
              type="text"
              v-model="userInput"
              :disabled="showResult"
              placeholder="Tapez votre réponse ici..."
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 focus:outline-none disabled:bg-gray-100 transition-all"
              @keyup.enter="checkAnswer"
            />
          </div>

          <!-- Answer Input - Error Detection -->
          <div v-if="question.type === 'error'">
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Numéro de la ligne contenant l'erreur :
            </label>
            <input
              type="number"
              v-model="userInput"
              :disabled="showResult"
              placeholder="Ex: 5"
              min="1"
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 focus:outline-none disabled:bg-gray-100 transition-all"
              @keyup.enter="checkAnswer"
            />
          </div>

          <!-- Result Message -->
          <div v-if="showResult" :class="getResultClass()" class="mt-6 p-4 rounded-lg border-2">
            <div class="flex items-start gap-3">
              <svg v-if="lastAnswerCorrect" class="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <svg v-else class="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div>
                <p :class="getResultTextClass()" class="font-semibold mb-1">
                  {{ lastAnswerCorrect ? 'Bonne réponse ! 🎉' : 'Réponse incorrecte 💡' }}
                </p>
                <p class="text-sm text-gray-700">{{ question.explanation }}</p>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="mt-6 flex gap-4">
            <button
              v-if="!showResult"
              @click="checkAnswer"
              :disabled="!canSubmit"
              class="flex-1 bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Vérifier
            </button>
            <button
              v-else
              @click="nextQuestion"
              class="flex-1 bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-pink-700 transition-all flex items-center justify-center gap-2"
            >
              {{ getNextButtonText() }}
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Info Card -->
        <div class="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div class="flex items-start gap-3">
            <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div class="text-sm text-blue-800">
              <p class="font-medium mb-1">Astuce pour ce niveau :</p>
              <p>{{ currentLevelData.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RubyQuizTest',
  data() {
    return {
      currentLevel: 1,
      currentQuestion: 0,
      selectedAnswer: null,
      showResult: false,
      score: 0,
      answers: [],
      testCompleted: false,
      userInput: '',
      selectedQuestions: {},
      
      // Email
      emailSent: false,
      emailStatus: null, // 'preparing', 'redirecting', 'sent', 'error'
      
      // Partage
      showShareOptions: false,
      copiedToClipboard: false,
      
      // Pool de questions Ruby (reste inchangé)
      questionPool: {
        level1: {
          title: "Niveau 1 - Fondamentaux Ruby",
          description: "Questions théoriques sur les bases de Ruby",
          questions: [
            {
              id: 1,
              type: "mcq",
              question: "Quelle est la méthode pour afficher du texte avec un retour à la ligne en Ruby?",
              code: null,
              options: [
                "print()",
                "puts()",
                "console.log()",
                "System.out.println()"
              ],
              correct: 1,
              explanation: "La méthode 'puts' est utilisée pour afficher du texte avec un retour à la ligne en Ruby."
            },
            {
              id: 2,
              type: "mcq",
              question: "Quel mot-clé est utilisé pour définir une méthode en Ruby ?",
              code: null,
              options: ["function", "def", "method", "define"],
              correct: 1,
              explanation: "En Ruby, on utilise 'def' pour définir une méthode."
            },
            {
              id: 3,
              type: "mcq",
              question: "Quelle est la différence entre un symbole et une chaîne en Ruby ?",
              code: null,
              options: [
                "Les symboles sont mutables, les strings sont immuables",
                "Les symboles sont immuables, les strings sont mutables",
                "Il n'y a pas de différence",
                "Les symboles sont plus lents que les strings"
              ],
              correct: 1,
              explanation: "Les symboles (:symbole) sont immuables et plus efficaces en mémoire que les strings."
            },
            {
              id: 4,
              type: "mcq",
              question: "Quelle est la valeur de 'nil' en Ruby ?",
              code: null,
              options: [
                "0",
                "false",
                "un objet spécial représentant l'absence de valeur",
                "une chaîne vide"
              ],
              correct: 2,
              explanation: "nil est un objet spécial de la classe NilClass qui représente l'absence de valeur."
            },
            {
              id: 5,
              type: "mcq",
              question: "Comment définir une variable d'instance en Ruby ?",
              code: null,
              options: [
                "@variable",
                "$variable",
                "variable",
                "self.variable"
              ],
              correct: 0,
              explanation: "Les variables d'instance commencent par '@' en Ruby."
            },
            {
              id: 6,
              type: "mcq",
              question: "Quelle méthode est utilisée pour convertir une chaîne en nombre entier ?",
              code: null,
              options: ["to_int", "to_i", "parse_int", "convert_int"],
              correct: 1,
              explanation: "La méthode 'to_i' convertit une chaîne en entier (integer)."
            },
            {
              id: 7,
              type: "mcq",
              question: "Quel mot-clé est utilisé pour l'héritage en Ruby ?",
              code: null,
              options: ["inherits", "extends", "<", "super"],
              correct: 2,
              explanation: "En Ruby, on utilise '<' pour l'héritage : class Enfant < Parent."
            },
            {
              id: 8,
              type: "mcq",
              question: "Quelle est la méthode pour obtenir la taille d'un tableau ?",
              code: null,
              options: ["size", "length", "count", "Toutes ces réponses"],
              correct: 3,
              explanation: "En Ruby, size, length et count retournent tous la taille d'un tableau."
            },
            {
              id: 9,
              type: "mcq",
              question: "Comment définir une constante en Ruby ?",
              code: null,
              options: [
                "CONSTANTE",
                "const CONSTANTE",
                "final CONSTANTE",
                "#{CONSTANTE}"
              ],
              correct: 0,
              explanation: "En Ruby, les constantes commencent par une majuscule."
            },
            {
              id: 10,
              type: "mcq",
              question: "Quelle est la syntaxe correcte pour un bloc do...end ?",
              code: null,
              options: [
                "[1,2,3].each { |n| puts n }",
                "[1,2,3].each do |n| puts n end",
                "[1,2,3].each do |n| puts n",
                "Les deux premières réponses sont correctes"
              ],
              correct: 3,
              explanation: "Les blocs peuvent utiliser {} pour une ligne ou do...end pour plusieurs lignes."
            }
          ]
        },
        level2: {
          title: "Niveau 2 - Complétion de code Ruby",
          description: "Complétez les portions de code manquantes",
          questions: [
            {
              id: 1,
              type: "completion",
              question: "Complétez le code pour créer une boucle qui affiche les nombres de 0 à 4 :",
              code: `(0..4).each do |i|
    puts ___
end`,
              correct: "i",
              alternatives: ["i", "I", "(i)"],
              explanation: "La variable 'i' contient le numéro de l'itération et doit être affichée"
            },
            {
              id: 2,
              type: "completion",
              question: "Complétez la définition de méthode pour calculer une somme :",
              code: `___ somme(a, b)
    a + b
end`,
              correct: "def",
              alternatives: ["def", "Def", "function"],
              explanation: "On utilise 'def' pour définir une méthode en Ruby"
            },
            {
              id: 3,
              type: "completion",
              question: "Complétez le constructeur de la classe Personne :",
              code: `class Personne
    def initialize(nom)
        ___@nom = nom
    end
end`,
              correct: "self.",
              alternatives: ["self.", "this.", "self::", "this->"],
              explanation: "'self' fait référence à l'instance courante en Ruby"
            },
            {
              id: 4,
              type: "completion",
              question: "Complétez le code pour créer un tableau :",
              code: `nombres = [1, 2, 3, 4, ___]`,
              correct: "5",
              alternatives: ["5", "five", "cinq"],
              explanation: "Le tableau doit contenir le nombre 5 pour compléter la séquence"
            },
            {
              id: 5,
              type: "completion",
              question: "Complétez le code pour gérer une exception :",
              code: `begin
    result = 10 / 0
___ ZeroDivisionError => e
    puts "Division par zéro !"
end`,
              correct: "rescue",
              alternatives: ["rescue", "catch", "except", "Rescue"],
              explanation: "'rescue' est utilisé pour capturer les exceptions en Ruby"
            },
            {
              id: 6,
              type: "completion",
              question: "Complétez l'accès à une valeur dans un hash :",
              code: `personne = { nom: "Alice", age: 25 }
puts personne[___]`,
              correct: ":nom",
              alternatives: [":nom", "nom", "'nom'", "\"nom\""],
              explanation: "On accède à une valeur dans un hash avec son symbole :nom"
            },
            {
              id: 7,
              type: "completion",
              question: "Complétez la définition d'un module :",
              code: `___ MonModule
    def ma_methode
        puts "Module"
    end
end`,
              correct: "module",
              alternatives: ["module", "Module", "mod", "Mod"],
              explanation: "'module' est utilisé pour définir un module en Ruby"
            },
            {
              id: 8,
              type: "completion",
              question: "Complétez l'inclusion d'un module :",
              code: `class MaClasse
    ___ MonModule
end`,
              correct: "include",
              alternatives: ["include", "extend", "import", "use"],
              explanation: "'include' est utilisé pour inclure un module dans une classe"
            },
            {
              id: 9,
              type: "completion",
              question: "Complétez la condition unless :",
              code: `___ note < 10
    puts "Réussite"
end`,
              correct: "unless",
              alternatives: ["unless", "if not", "except", "Unless"],
              explanation: "'unless' est l'équivalent de 'if not' en Ruby"
            },
            {
              id: 10,
              type: "completion",
              question: "Complétez l'itération sur un hash :",
              code: `{a: 1, b: 2}.each do |key, ___|
    puts "\#{key}: \#{value}"
end`,
              correct: "value",
              alternatives: ["value", "Value", "val", "valeur"],
              explanation: "La deuxième variable du bloc représente la valeur dans le hash"
            }
          ]
        },
        level3: {
          title: "Niveau 3 - Détection d'erreurs Ruby",
          description: "Trouvez la ligne contenant l'erreur (numéro de ligne)",
          questions: [
            {
              id: 1,
              type: "error",
              question: "Quelle ligne contient une erreur ?",
              code: `1: def calculer_somme(a, b)
2:     result = a + b
3:     return result
4: end
5: 
6: puts calculer_somme(5, "10")`,
              correct: 6,
              explanation: "Ligne 6 : On ne peut pas additionner un entier et une chaîne de caractères"
            },
            {
              id: 2,
              type: "error",
              question: "Quelle ligne contient une erreur de syntaxe ?",
              code: `1: class Voiture
2:     attr_accessor :marque, :modele
3:     
4:     def initialize(marque, modele)
5:         @marque = marque
6:         @modele = modele
7:     
8: end`,
              correct: 8,
              explanation: "Ligne 8 : Il manque 'end' pour la méthode initialize"
            },
            {
              id: 3,
              type: "error",
              question: "Quelle ligne contient une erreur ?",
              code: `1: nombres = [1, 2, 3, 4, 5]
2: 
3: nombres.each do |n|
4:     puts n * 2
5: 
6: puts "Terminé!"`,
              correct: 5,
              explanation: "Ligne 5 : Il manque 'end' pour fermer le bloc do"
            },
            {
              id: 4,
              type: "error",
              question: "Quelle ligne contient une erreur ?",
              code: `1: def diviser(a, b)
2:     a / b
3: rescue
4:     puts "Erreur de division"
5: end
6: 
7: puts diviser(10, 0)`,
              correct: 2,
              explanation: "Ligne 2 : Division par zéro - devrait être dans le bloc begin/rescue"
            },
            {
              id: 5,
              type: "error",
              question: "Quelle ligne contient une erreur d'exécution ?",
              code: `1: hash = { nom: "Alice", age: 25 }
2: 
3: puts hash[:ville]
4: 
5: ville = hash[:ville] || "Inconnu"
6: puts ville.upcase`,
              correct: 6,
              explanation: "Ligne 6 : upcase sur nil - hash[:ville] retourne nil"
            },
            {
              id: 6,
              type: "error",
              question: "Quelle ligne causera une erreur ?",
              code: `1: class Animal
2:     def parler
3:         puts "Je suis un animal"
4:     end
5: end
6: 
7: chien = Animal.new
8: chien.parler
9: chien.manger`,
              correct: 9,
              explanation: "Ligne 9 : La méthode 'manger' n'est pas définie pour la classe Animal"
            },
            {
              id: 7,
              type: "error",
              question: "Quelle ligne contient une erreur ?",
              code: `1: CONSTANTE = 100
2: 
3: def modifier_constante
4:     CONSTANTE = 200
5:     puts CONSTANTE
6: end
7: 
8: modifier_constante`,
              correct: 4,
              explanation: "Ligne 4 : On ne peut pas redéfinir une constante à l'intérieur d'une méthode"
            },
            {
              id: 8,
              type: "error",
              question: "Quelle ligne contient une erreur ?",
              code: `1: module Authenticable
2:     def login
3:         puts "Connexion..."
4:     end
5: end
6: 
7: class User
8:     include Authenticable
9:     
10:    def initialize
11:        login
12:    end
13: end
14: 
15: user = User.login`,
              correct: 15,
              explanation: "Ligne 15 : 'login' est une méthode d'instance, pas une méthode de classe"
            },
            {
              id: 9,
              type: "error",
              question: "Quelle ligne contient une erreur ?",
              code: `1: def calculer_prix(prix, tva = 0.20)
2:     prix * (1 + tva)
3: end
4: 
5: puts calculer_prix(100, 0.20, 0.05)
6: puts calculer_prix(200)`,
              correct: 5,
              explanation: "Ligne 5 : Trop d'arguments - la méthode n'accepte que 1 ou 2 arguments"
            },
            {
              id: 10,
              type: "error",
              question: "Quelle ligne contient une erreur ?",
              code: `1: class Calculatrice
2:     def self.addition(a, b)
3:         a + b
4:     end
5:     
6:     def soustraction(a, b)
7:         a - b
8:     end
9: end
10: 
11: puts Calculatrice.soustraction(10, 5)`,
              correct: 11,
              explanation: "Ligne 11 : 'soustraction' est une méthode d'instance, pas une méthode de classe"
            }
          ]
        }
      },
      questionsPerLevel: {
        level1: 5,
        level2: 5,
        level3: 5
      }
    }
  },
  computed: {
    currentLevelData() {
      const levelKey = `level${this.currentLevel}`;
      if (!this.selectedQuestions[levelKey]) {
        return this.questionPool[levelKey] || {
          title: "Niveau en cours",
          description: "Chargement...",
          questions: []
        };
      }
      return this.selectedQuestions[levelKey];
    },
    question() {
      const questions = this.currentLevelData.questions || [];
      if (this.currentQuestion >= questions.length) {
        return {};
      }
      return questions[this.currentQuestion];
    },
    totalQuestions() {
      return Object.values(this.questionsPerLevel).reduce((sum, count) => sum + count, 0);
    },
    progressPercentage() {
      const total = this.totalQuestions || 1;
      return Math.min(100, Math.max(0, ((this.answers.length / total) * 100).toFixed(0)));
    },
    finalPercentage() {
      const total = this.totalQuestions || 1;
      return ((this.score / total) * 100).toFixed(1);
    },
    grade() {
      const percentage = parseFloat(this.finalPercentage);
      if (percentage >= 90) return "Excellent";
      if (percentage >= 75) return "Très bien";
      if (percentage >= 60) return "Bien";
      if (percentage >= 50) return "Passable";
      return "À améliorer";
    },
    gradeColor() {
      const percentage = parseFloat(this.finalPercentage);
      if (percentage >= 90) return "text-green-600";
      if (percentage >= 75) return "text-blue-600";
      if (percentage >= 60) return "text-yellow-600";
      if (percentage >= 50) return "text-orange-600";
      return "text-red-600";
    },
    gradeIcon() {
      const percentage = parseFloat(this.finalPercentage);
      if (percentage >= 90) return "🏆";
      if (percentage >= 75) return "⭐";
      if (percentage >= 60) return "👍";
      if (percentage >= 50) return "📚";
      return "💪";
    },
    recommendations() {
      const percentage = parseFloat(this.finalPercentage);
      if (percentage >= 90) {
        return [
          "• Excellente maîtrise de Ruby ! Vous êtes prêt pour Ruby on Rails.",
          "• Explorez les design patterns Ruby et les gems avancées."
        ];
      }
      if (percentage >= 75) {
        return [
          "• Très bon niveau Ruby ! Continuez avec des projets pratiques.",
          "• Approfondissez les concepts de métaprogrammation."
        ];
      }
      if (percentage >= 60) {
        return [
          "• Bon niveau de base. Pratiquez les blocs et les modules.",
          "• Concentrez-vous sur la programmation orientée objet Ruby."
        ];
      }
      return [
        "• Révisez les fondamentaux de Ruby (syntaxe, types de données).",
        "• Pratiquez avec des exercices sur les tableaux et hashes.",
        "• Étudiez les méthodes et la portée des variables."
      ];
    },
    canSubmit() {
      if (!this.question.type) return false;
      
      if (this.question.type === 'mcq') {
        return this.selectedAnswer !== null;
      }
      if (this.question.type === 'error') {
        const input = parseInt(this.userInput);
        return !isNaN(input) && input > 0;
      }
      return this.userInput.trim() !== '';
    },
    lastAnswerCorrect() {
      return this.answers.length > 0 && this.answers[this.answers.length - 1].correct;
    },
    shareMessage() {
      return `J'ai obtenu ${this.finalPercentage}% au test Ruby ! 💎\n` +
             `Score: ${this.score}/${this.totalQuestions}\n` +
             `Niveau 1: ${this.getLevelPercentage(1)}%\n` +
             `Niveau 2: ${this.getLevelPercentage(2)}%\n` +
             `Niveau 3: ${this.getLevelPercentage(3)}%\n` +
             `#RubyQuiz #Programming`;
    },
    shareableLink() {
      const resultData = {
        score: this.score,
        total: this.totalQuestions,
        percentage: this.finalPercentage,
        grade: this.grade,
        date: new Date().toISOString(),
        levels: {
          1: this.getLevelPercentage(1),
          2: this.getLevelPercentage(2),
          3: this.getLevelPercentage(3)
        }
      };
      const encodedData = btoa(JSON.stringify(resultData));
      return `${window.location.origin}${window.location.pathname}?result=${encodedData}`;
    },
    // Email body pour l'envoi au formateur
    instructorEmailBody() {
      let body = `🎯 NOUVEAU RÉSULTAT TEST RUBY - ÉTUDIANT\n`;
      body += `==========================================\n\n`;
      
      body += `📊 SCORE GLOBAL : ${this.finalPercentage}%\n`;
      body += `📝 NOTE : ${this.score}/${this.totalQuestions}\n`;
      body += `🏅 APPRÉCIATION : ${this.grade}\n\n`;
      
      body += `📈 DÉTAILS PAR NIVEAU\n`;
      body += `====================\n`;
      
      for (let level of [1, 2, 3]) {
        const levelData = this.getLevelData(level);
        const score = this.getLevelScore(level);
        const total = this.getLevelTotal(level);
        const percentage = this.getLevelPercentage(level);
        
        body += `• ${levelData.title} : ${score}/${total} - ${percentage}%\n`;
      }
      
      body += `\n💡 RECOMMANDATIONS AUTOMATIQUES\n`;
      body += `==============================\n`;
      this.recommendations.forEach(rec => {
        body += `${rec}\n`;
      });
      
      body += `\n📅 DATE DU TEST : ${new Date().toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })}\n\n`;
      
      body += `⚠️ CET EMAIL A ÉTÉ GÉNÉRÉ AUTOMATIQUEMENT PAR LE SYSTÈME DE TEST RUBY\n`;
      body += `👉 L'étudiant a été redirigé vers Gmail pour envoyer cet email.\n`;
      body += `👉 Il peut ajouter des commentaires personnels avant d'envoyer.\n`;
      
      return body;
    }
  },
  watch: {
    testCompleted(newVal) {
      if (newVal) {
        this.saveResult();
        // On ne redirige plus automatiquement, on attend que l'utilisateur clique
      }
    }
  },
  methods: {
    // Méthode principale pour envoyer les résultats au formateur
    async sendResultsToInstructor() {
      try {
        this.emailStatus = 'preparing';
        this.emailSent = true;
        
        // Construire l'URL mailto pour rediriger vers Gmail
        const subject = encodeURIComponent(`📊 Résultat Test Ruby - ${this.finalPercentage}% - ${this.grade}`);
        
        // Corps de l'email pour le formateur
        let emailBody = this.instructorEmailBody;
        
        // Ajouter une section pour les commentaires de l'étudiant
        emailBody += `\n\n📝 COMMENTAIRES DE L'ÉTUDIANT :\n`;
        emailBody += `---------------------------------\n`;
        emailBody += `(L'étudiant peut écrire ses commentaires ici avant d'envoyer)\n\n`;
        emailBody += `• Ce que j'ai trouvé facile :\n\n`;
        emailBody += `• Ce que j'ai trouvé difficile :\n\n`;
        emailBody += `• Questions supplémentaires :\n\n`;
        
        const body = encodeURIComponent(emailBody);
        
        // Votre adresse email
        const toEmail = '7bhilal.chitou7@gmail.com';
        
        // Construire l'URL mailto qui redirigera vers Gmail
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${toEmail}&su=${subject}&body=${body}`;
        
        // Option 1: Rediriger directement vers Gmail
        this.emailStatus = 'redirecting';
        
        // Ouvrir Gmail dans un nouvel onglet
        const newWindow = window.open(gmailUrl, '_blank');
        
        // Attendre un peu puis changer le statut
        setTimeout(() => {
          this.emailStatus = 'sent';
          
          // Afficher des instructions supplémentaires
          setTimeout(() => {
            alert('✅ Gmail ouvert ! Veuillez vérifier votre brouillon, ajouter vos commentaires si nécessaire, puis cliquer sur "Envoyer".\n\nAprès avoir envoyé l\'email, vous pouvez fermer cette fenêtre.');
          }, 1000);
          
        }, 2000);
        
      } catch (error) {
        console.error('Erreur lors de l\'envoi des résultats:', error);
        this.emailStatus = 'error';
        alert('❌ Une erreur est survenue. Veuillez réessayer ou contacter le support.');
      }
    },
    
    // Méthode alternative pour partager avec des amis (sans envoyer au formateur)
    shareResultsWithFriends() {
      const subject = encodeURIComponent(`Regarde mon résultat Test Ruby : ${this.finalPercentage}%`);
      const body = encodeURIComponent(
        `Salut !\n\n` +
        `Je viens de terminer le test Ruby et j'ai obtenu ${this.finalPercentage}% ! 🎉\n\n` +
        `📊 Score : ${this.score}/${this.totalQuestions}\n` +
        `🏅 Appréciation : ${this.grade}\n\n` +
        `Niveau 1 : ${this.getLevelPercentage(1)}%\n` +
        `Niveau 2 : ${this.getLevelPercentage(2)}%\n` +
        `Niveau 3 : ${this.getLevelPercentage(3)}%\n\n` +
        `Teste aussi tes connaissances Ruby ici : ${this.shareableLink}`
      );
      
      window.open(`mailto:?subject=${subject}&body=${body}`, '_blank');
    },
    
    // Méthodes existantes pour la gestion du test
    selectRandomQuestions() {
      const selected = {};
      
      for (const level in this.questionPool) {
        const pool = this.questionPool[level];
        const questionsNeeded = this.questionsPerLevel[level];
        
        let availableQuestions = [...pool.questions];
        const selectedQuestions = [];
        
        for (let i = 0; i < Math.min(questionsNeeded, availableQuestions.length); i++) {
          const randomIndex = Math.floor(Math.random() * availableQuestions.length);
          selectedQuestions.push(availableQuestions[randomIndex]);
          availableQuestions.splice(randomIndex, 1);
        }
        
        selected[level] = {
          title: pool.title,
          description: pool.description,
          questions: selectedQuestions
        };
      }
      
      this.selectedQuestions = selected;
    },
    
    handleAnswer(index) {
      this.selectedAnswer = index;
    },
    
    checkAnswer() {
      if (!this.canSubmit) return;
      
      let isCorrect = false;

      if (this.question.type === "mcq") {
        isCorrect = this.selectedAnswer === this.question.correct;
      } else if (this.question.type === "completion") {
        const userAnswer = this.userInput.trim().toLowerCase();
        isCorrect = this.question.alternatives.some(alt => 
          userAnswer === alt.toLowerCase()
        );
      } else if (this.question.type === "error") {
        isCorrect = parseInt(this.userInput) === this.question.correct;
      }

      this.answers.push({
        level: this.currentLevel,
        question: this.currentQuestion,
        correct: isCorrect
      });

      if (isCorrect) {
        this.score++;
      }

      this.showResult = true;
    },
    
    nextQuestion() {
      const questions = this.currentLevelData.questions || [];
      
      if (this.currentQuestion < questions.length - 1) {
        this.currentQuestion++;
      } else if (this.currentLevel < 3) {
        this.currentLevel++;
        this.currentQuestion = 0;
      } else {
        this.testCompleted = true;
      }
      
      this.selectedAnswer = null;
      this.userInput = '';
      this.showResult = false;
    },
    
    resetTest() {
      this.currentLevel = 1;
      this.currentQuestion = 0;
      this.selectedAnswer = null;
      this.showResult = false;
      this.score = 0;
      this.answers = [];
      this.testCompleted = false;
      this.userInput = '';
      this.emailSent = false;
      this.emailStatus = null;
      this.showShareOptions = false;
      this.copiedToClipboard = false;
      
      this.selectRandomQuestions();
    },
    
    getOptionClass(index) {
      if (!this.showResult) {
        if (this.selectedAnswer === index) {
          return 'border-red-500 bg-red-50 hover:bg-red-100';
        }
        return 'border-gray-200 hover:border-red-300 hover:bg-gray-50';
      }
      
      if (index === this.question.correct) {
        return 'border-green-500 bg-green-50';
      }
      if (index === this.selectedAnswer && index !== this.question.correct) {
        return 'border-red-500 bg-red-50';
      }
      return 'border-gray-200 bg-gray-50';
    },
    
    getResultClass() {
      return this.lastAnswerCorrect 
        ? 'bg-green-50 border-green-200' 
        : 'bg-red-50 border-red-200';
    },
    
    getResultTextClass() {
      return this.lastAnswerCorrect 
        ? 'text-green-900' 
        : 'text-red-900';
    },
    
    getNextButtonText() {
      if (this.currentQuestion < this.currentLevelData.questions.length - 1) {
        return 'Question suivante';
      }
      if (this.currentLevel < 3) {
        return 'Niveau suivant';
      }
      return 'Voir les résultats';
    },
    
    getLevelData(level) {
      const levelKey = `level${level}`;
      return this.selectedQuestions[levelKey] || this.questionPool[levelKey] || { 
        title: `Niveau ${level}`, 
        questions: [] 
      };
    },
    
    getLevelScore(level) {
      const levelAnswers = this.answers.filter(a => a.level === level);
      return levelAnswers.filter(a => a.correct).length;
    },
    
    getLevelTotal(level) {
      return this.questionsPerLevel[`level${level}`] || 0;
    },
    
    getLevelPercentage(level) {
      const score = this.getLevelScore(level);
      const total = this.getLevelTotal(level);
      return total > 0 ? Math.round((score / total) * 100) : 0;
    },
    
    copyToClipboard() {
      navigator.clipboard.writeText(this.shareableLink)
        .then(() => {
          this.copiedToClipboard = true;
          setTimeout(() => {
            this.copiedToClipboard = false;
          }, 3000);
        })
        .catch(() => {
          const textArea = document.createElement('textarea');
          textArea.value = this.shareableLink;
          textArea.style.position = 'fixed';
          textArea.style.left = '-9999px';
          document.body.appendChild(textArea);
          textArea.select();
          
          try {
            document.execCommand('copy');
            this.copiedToClipboard = true;
            setTimeout(() => {
              this.copiedToClipboard = false;
            }, 3000);
          } catch (err) {
            console.error('Erreur lors de la copie:', err);
          }
          
          document.body.removeChild(textArea);
        });
    },
    
    saveResult() {
      const result = {
        score: this.score,
        total: this.totalQuestions,
        percentage: this.finalPercentage,
        grade: this.grade,
        date: new Date().toISOString(),
        levels: {
          1: this.getLevelPercentage(1),
          2: this.getLevelPercentage(2),
          3: this.getLevelPercentage(3)
        }
      };
      
      try {
        localStorage.setItem('rubyTestResult', JSON.stringify(result));
        console.log('✅ Résultat sauvegardé localement');
      } catch (error) {
        console.error('❌ Erreur lors de la sauvegarde:', error);
      }
    }
  },
  created() {
    this.selectRandomQuestions();
    
    const savedResult = localStorage.getItem('rubyTestResult');
    if (savedResult) {
      try {
        const result = JSON.parse(savedResult);
        console.log('Résultat précédent:', result);
      } catch (e) {
        console.error('Erreur lors du chargement du résultat:', e);
      }
    }
  }
}
</script>

<style scoped>
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: 'Courier New', monospace;
  line-height: 1.4;
  tab-size: 2;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

input:focus {
  outline: none;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.text-green-600 {
  animation: fadeIn 0.3s ease-in-out;
}

.bg-gradient-to-r {
  background-size: 200% auto;
  transition: background-position 0.5s ease;
}

.bg-gradient-to-r:hover {
  background-position: right center;
}

.focus\:ring-2:focus {
  box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
}

/* Animation pour le statut d'email */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.email-redirecting {
  animation: pulse 1.5s infinite;
}
</style>