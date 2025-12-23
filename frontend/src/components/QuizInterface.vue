<!-- QuizInterface.vue -->
<template>
  <div class="p-8">
    <!-- En-tête -->
    <div class="mb-8">
      <div class="flex items-center justify-between mb-4">
        <div>
          <h2 class="text-xl font-semibold text-gray-900">Quiz: {{ chapterTitle }}</h2>
          <p class="text-gray-600 mt-1">Question {{ currentQuestion + 1 }} sur {{ quiz.length }}</p>
        </div>
        <div class="text-lg font-semibold text-blue-700">
          Score: {{ score }}/{{ quiz.length }}
        </div>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-1.5">
        <div 
          class="bg-blue-600 h-1.5 rounded-full transition-all duration-300"
          :style="{ width: ((currentQuestion + 1) / quiz.length * 100) + '%' }"
        ></div>
      </div>
    </div>

    <!-- Question -->
    <div class="mb-8">
      <div class="mb-2">
        <span class="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
          Question {{ currentQuestion + 1 }}
        </span>
      </div>
      
      <h3 class="text-lg font-medium text-gray-900 mb-6">
        {{ currentQuestionObj.question }}
      </h3>

      <!-- Options -->
      <div class="space-y-3">
        <button
          v-for="(option, idx) in currentQuestionObj.options"
          :key="idx"
          @click="selectAnswer(idx)"
          :disabled="selectedAnswer !== null"
          :class="[
            'w-full text-left p-4 rounded-lg border transition-all',
            getOptionClass(idx)
          ]"
        >
          <div class="flex items-center">
            <div :class="[
              'w-8 h-8 rounded-md flex items-center justify-center mr-3 text-sm font-medium',
              getOptionIconClass(idx)
            ]">
              {{ String.fromCharCode(65 + idx) }}
            </div>
            <span>{{ option }}</span>
          </div>
        </button>
      </div>
    </div>

    <!-- Feedback -->
    <div v-if="selectedAnswer !== null" class="mb-8">
      <div :class="[
        'rounded-lg p-6 mb-6',
        isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
      ]">
        <div class="flex items-start">
          <div :class="[
            'flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-1',
            isCorrect ? 'bg-green-600' : 'bg-red-600'
          ]">
            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path v-if="isCorrect" fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              <path v-else fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
            </svg>
          </div>
          <div>
            <h4 :class="[
              'font-medium mb-2',
              isCorrect ? 'text-green-800' : 'text-red-800'
            ]">
              {{ isCorrect ? 'Correct' : 'Incorrect' }}
            </h4>
            <p :class="[
              'text-sm',
              isCorrect ? 'text-green-700' : 'text-red-700'
            ]">
              {{ currentQuestionObj.explanation }}
            </p>
          </div>
        </div>
      </div>

      <button 
        @click="nextQuestion"
        class="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
      >
        {{ currentQuestion < quiz.length - 1 ? 'Question suivante →' : 'Voir les résultats' }}
      </button>
    </div>

    <!-- Résultats -->
    <div v-if="showResults" class="text-center">
      <div class="mb-6">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" 
             :class="finalScore >= 70 ? 'bg-green-100' : 'bg-yellow-100'">
          <span class="text-2xl" :class="finalScore >= 70 ? 'text-green-600' : 'text-yellow-600'">
            {{ finalScore >= 70 ? '✓' : '!' }}
          </span>
        </div>
        <h3 class="text-lg font-semibold text-gray-900 mb-2">
          {{ finalScore >= 70 ? 'Quiz réussi' : 'Quiz échoué' }}
        </h3>
        <div class="text-3xl font-bold mb-2" 
             :class="finalScore >= 70 ? 'text-green-600' : 'text-yellow-600'">
          {{ finalScore }}%
        </div>
        <p class="text-gray-600 mb-2">
          Score: {{ score }}/{{ quiz.length }}
        </p>
        <p v-if="finalScore < 70" class="text-sm text-gray-500">
          Score minimum requis: 70%
        </p>
      </div>
      
      <div class="grid grid-cols-2 gap-3">
        <button @click="$emit('retry')" 
                class="py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium">
          Réessayer
        </button>
        <button @click="$emit('complete', finalScore)" 
                class="py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
          Continuer
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  quiz: {
    type: Array,
    default: () => []
  },
  chapterTitle: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['complete', 'retry'])

const currentQuestion = ref(0)
const selectedAnswer = ref(null)
const score = ref(0)
const showResults = ref(false)

const currentQuestionObj = computed(() => props.quiz[currentQuestion.value] || {})
const isCorrect = computed(() => selectedAnswer.value === currentQuestionObj.value.correct)
const finalScore = computed(() => Math.round((score.value / props.quiz.length) * 100))

function getOptionClass(idx) {
  if (selectedAnswer.value === null) {
    return 'border-gray-300 hover:border-blue-500 hover:bg-blue-50'
  }
  
  if (idx === currentQuestionObj.value.correct) {
    return 'border-green-500 bg-green-50'
  }
  
  if (selectedAnswer.value === idx && idx !== currentQuestionObj.value.correct) {
    return 'border-red-500 bg-red-50'
  }
  
  return 'border-gray-200 bg-gray-50'
}

function getOptionIconClass(idx) {
  if (selectedAnswer.value === null) {
    return 'border border-gray-300 text-gray-700'
  }
  
  if (idx === currentQuestionObj.value.correct) {
    return 'bg-green-600 text-white'
  }
  
  if (selectedAnswer.value === idx && idx !== currentQuestionObj.value.correct) {
    return 'bg-red-600 text-white'
  }
  
  return 'bg-gray-200 text-gray-500'
}

function selectAnswer(idx) {
  if (selectedAnswer.value === null) {
    selectedAnswer.value = idx
    if (idx === currentQuestionObj.value.correct) {
      score.value++
    }
  }
}

function nextQuestion() {
  if (currentQuestion.value < props.quiz.length - 1) {
    currentQuestion.value++
    selectedAnswer.value = null
  } else {
    showResults.value = true
  }
}
</script>