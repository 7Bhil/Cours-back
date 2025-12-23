<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-50 to-gray-50">
    <!-- Header responsive -->
    <header class="fixed z-10 w-full bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg">
      <div class="container mx-auto px-4 py-3 sm:py-4">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <!-- Logo et titre AVEC BOUTON RETOUR -->
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <!-- Bouton Retour -->
              <Router-Link 
                to="/java"
                class="w-8 h-8 sm:w-10 sm:h-10 bg-red-900/30 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-red-900/40 transition-all group mr-1"
                title="Retour aux langages"
              >
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-red-100 group-hover:scale-110 transition-transform" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
              </Router-Link>
              
              <!-- Logo Java -->
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-red-500 to-red-700 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg border border-red-400/30 group hover:shadow-red-400/20 hover:scale-105 transition-all">
                  <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/>
                </svg>
                </div>
                <div>
                  <h1 class="text-lg sm:text-xl font-bold tracking-tight">Java Masterclass</h1>
                  <p class="text-xs sm:text-sm text-red-200/90">
                    {{ totalChapters }} chapitres • {{ currentLevel.subtitle || 'Formation complète' }}
                  </p>
                </div>
              </div>
            </div>
            
            <!-- Menu mobile -->
            <button @click="mobileMenuOpen = true" class="sm:hidden p-2 hover:bg-red-700/50 rounded-lg transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
          
          <!-- Progression -->
          <div class="flex items-center justify-between sm:justify-center gap-4">
            <div class="flex-1 sm:flex-none flex items-center space-x-2">
              <div class="hidden sm:block text-sm text-red-100">Progression</div>
              <div class="flex-1 sm:w-32 bg-red-900/30 rounded-full h-2">
                <div 
                  class="h-full bg-gradient-to-r from-red-400 to-red-300 rounded-full transition-all duration-700 shadow-inner"
                  :style="{ width: progressPercentage + '%' }"
                ></div>
              </div>
              <span class="text-sm font-medium min-w-[40px] text-white">{{ progressPercentage }}%</span>
            </div>
            
            <!-- Stats -->
            <div class="flex items-center space-x-3 sm:space-x-4">
              <div class="text-center hidden sm:block">
                <div class="text-lg font-bold text-white">{{ completedCount }}</div>
                <div class="text-xs text-red-200/90">Terminés</div>
              </div>
              <div class="text-center hidden sm:block">
                <div class="text-lg font-bold text-white">{{ totalChapters }}</div>
                <div class="text-xs text-red-200/90">Chapitres</div>
              </div>
              <!-- Stats mobiles -->
              <div class="flex items-center space-x-2 sm:hidden">
                <span class="px-2 py-1 bg-red-900/30 rounded text-xs text-red-100 backdrop-blur-sm">
                  {{ completedCount }}/{{ totalChapters }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="pt-28 container mx-auto px-4 py-6">
      <div class="flex flex-col lg:flex-row gap-6">
        <!-- Sidebar mobile overlay -->
        <div 
          v-if="mobileMenuOpen"
          class="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          @click="mobileMenuOpen = false"
        >
          <div 
            class="absolute top-0 left-0 h-full w-4/5 max-w-sm bg-white shadow-xl transform transition-transform overflow-y-auto"
            @click.stop
          >
            <!-- Contenu du sidebar mobile -->
            <div class="p-4">
              <!-- En-tête -->
              <div class="flex items-center justify-between mb-6">
                <div>
                  <h2 class="text-lg font-bold text-gray-800">Menu Java</h2>
                  <p class="text-sm text-gray-600">Navigation</p>
                </div>
                <button @click="mobileMenuOpen = false" class="p-2">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>

              <!-- Navigation -->
              <div class="space-y-4 max-h-[70vh] overflow-y-auto">
                <div v-for="(level, levelIndex) in levels" :key="levelIndex" class="mb-4">
                  <!-- Niveau -->
                  <div 
                    @click="selectLevel(levelIndex)"
                    :class="[
                      'p-3 rounded-lg cursor-pointer transition-all',
                      selectedLevel === levelIndex 
                        ? 'bg-red-50 border border-red-200' 
                        : 'hover:bg-gray-50'
                    ]"
                  >
                    <div class="flex items-center justify-between">
                      <div class="flex items-center space-x-3">
                        <div class="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                             :style="{ background: getLevelColor(level) }">
                          {{ level.icon || (levelIndex + 1) }}
                        </div>
                        <div>
                          <h3 class="text-sm font-semibold text-gray-800">{{ level.name }}</h3>
                          <p class="text-xs text-gray-500">{{ getLevelProgress(levelIndex) }}% complété • {{ level.chapters.length }} chapitres</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Chapitres -->
                  <div class="space-y-1 ml-4 mt-2">
                    <div
                      v-for="(chapter, chapterIndex) in level.chapters"
                      :key="chapterIndex"
                      @click="selectChapter(levelIndex, chapterIndex)"
                      :class="[
                        'p-2 rounded-lg cursor-pointer transition-all text-sm',
                        isSelected(levelIndex, chapterIndex) 
                          ? 'bg-amber-50 text-amber-700' 
                          : chapter.unlocked 
                            ? 'text-gray-700 hover:bg-gray-100' 
                            : 'text-gray-400',
                        !chapter.unlocked && 'cursor-not-allowed'
                      ]"
                    >
                      <div class="flex items-center space-x-2">
                        <div v-if="chapter.completed" class="text-green-500">
                          ✓
                        </div>
                        <div v-else-if="chapter.unlocked" class="text-red-500">
                          {{ chapter.icon || getChapterNumber(levelIndex, chapterIndex) }}
                        </div>
                        <div v-else class="text-gray-400">
                          🔒
                        </div>
                        <span class="truncate">{{ chapter.title }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Boutons navigation -->
              <div class="mt-8 space-y-3">
                <button
                  @click="previousChapter"
                  :disabled="!hasPreviousChapter"
                  :class="[
                    'w-full px-4 py-2 text-sm font-medium rounded-lg border transition-all',
                    hasPreviousChapter
                      ? 'text-gray-700 border-gray-300 hover:bg-gray-50'
                      : 'text-gray-400 border-gray-200 cursor-not-allowed'
                  ]"
                >
                  ← Chapitre précédent
                </button>
                <button
                  @click="nextChapter"
                  :disabled="!hasNextChapter"
                  :class="[
                    'w-full px-4 py-2 text-sm font-medium rounded-lg border transition-all',
                    hasNextChapter
                      ? 'bg-red-600 text-white border-red-600 hover:bg-red-700'
                      : 'bg-gray-400 text-white border-gray-400 cursor-not-allowed'
                  ]"
                >
                  Chapitre suivant →
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar desktop -->
        <aside class="hidden lg:block lg:w-1/3 xl:w-1/4">
          <div class="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden sticky top-6">
            <!-- En-tête sidebar -->
            <div class="bg-gradient-to-r from-red-600 to-red-700 p-4">
              <h2 class="text-lg font-bold text-white">Parcours Java</h2>
              <p class="text-red-100 text-sm">{{ currentLevel.name }} • {{ getLevelProgress(selectedLevel) }}% complété</p>
            </div>

            <!-- Contenu sidebar -->
            <div class="p-4 max-h-[calc(100vh-12rem)] overflow-y-auto">
              <div v-for="(level, levelIndex) in levels" :key="levelIndex" class="mb-4">
                <!-- Niveau -->
                <div 
                  @click="selectLevel(levelIndex)"
                  :class="[
                    'flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all mb-2',
                    selectedLevel === levelIndex 
                      ? 'bg-red-50 border border-red-200' 
                      : 'hover:bg-gray-50'
                  ]"
                >
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                         :style="{ background: getLevelColor(level) }">
                      {{ level.icon || (levelIndex + 1) }}
                    </div>
                    <div class="min-w-0 flex-1">
                      <h3 class="text-sm font-semibold text-gray-800 truncate">{{ level.name }}</h3>
                      <p class="text-xs text-gray-500">{{ level.subtitle || `${level.chapters.length} chapitres` }}</p>
                    </div>
                  </div>
                  <div class="text-right">
                    <div class="text-sm font-bold" :style="{ color: getLevelColor(level) }">
                      {{ getLevelProgress(levelIndex) }}%
                    </div>
                  </div>
                </div>

                <!-- Chapitres -->
                <div class="space-y-1 ml-3">
                  <div
                    v-for="(chapter, chapterIndex) in level.chapters"
                    :key="chapterIndex"
                    @click="selectChapter(levelIndex, chapterIndex)"
                    :class="[
                      'group p-2 rounded-lg cursor-pointer transition-all',
                      isSelected(levelIndex, chapterIndex) 
                        ? 'bg-amber-50 border border-amber-200' 
                        : chapter.unlocked 
                          ? 'hover:bg-gray-50 hover:border-gray-200' 
                          : 'opacity-50',
                      !chapter.unlocked && 'cursor-not-allowed'
                    ]"
                  >
                    <div class="flex items-center space-x-2">
                      <!-- État du chapitre -->
                      <div class="flex-shrink-0">
                        <div v-if="chapter.completed" 
                             class="w-6 h-6 bg-green-500 rounded-md flex items-center justify-center">
                          <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                          </svg>
                        </div>
                        <div v-else-if="chapter.unlocked" 
                             class="w-6 h-6 bg-red-500 rounded-md flex items-center justify-center text-white text-xs font-bold">
                          {{ chapter.icon || getChapterNumber(levelIndex, chapterIndex) }}
                        </div>
                        <div v-else 
                             class="w-6 h-6 bg-gray-300 rounded-md flex items-center justify-center">
                          <svg class="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
                          </svg>
                        </div>
                      </div>

                      <!-- Info chapitre -->
                      <div class="flex-1 min-w-0">
                        <h4 class="text-xs font-medium text-gray-800 truncate group-hover:text-red-600">
                          {{ chapter.title }}
                        </h4>
                        <div class="flex items-center text-xs text-gray-500">
                          <span class="truncate">{{ chapter.readTime }}</span>
                          <span class="mx-1">•</span>
                          <span class="capitalize">{{ chapter.difficulty || 'Débutant' }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Navigation sidebar -->
            <div class="p-4 border-t border-gray-100 bg-gray-50">
              <div class="flex gap-2">
                <button
                  @click="previousChapter"
                  :disabled="!hasPreviousChapter"
                  :class="[
                    'flex-1 px-3 py-2 text-sm font-medium rounded-lg border transition-all flex items-center justify-center',
                    hasPreviousChapter
                      ? 'text-gray-700 border-gray-300 hover:bg-white'
                      : 'text-gray-400 border-gray-200 cursor-not-allowed'
                  ]"
                >
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                  </svg>
                  <span class="hidden sm:inline">Précédent</span>
                </button>
                <button
                  @click="nextChapter"
                  :disabled="!hasNextChapter"
                  :class="[
                    'flex-1 px-3 py-2 text-sm font-medium rounded-lg border transition-all flex items-center justify-center',
                    hasNextChapter
                      ? 'bg-red-600 text-white border-red-600 hover:bg-red-700'
                      : 'bg-gray-400 text-white border-gray-400 cursor-not-allowed'
                  ]"
                >
                  <span class="hidden sm:inline mr-1">Suivant</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </aside>

        <!-- Contenu principal -->
        <main class="flex-1">
          <div class="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <!-- Header du contenu -->
            <div class="bg-gradient-to-r from-red-50 to-red-100 p-4 sm:p-6 border-b border-gray-200">
              <div class="space-y-4">
                <!-- Breadcrumb -->
                <div class="flex flex-wrap items-center gap-2">
                  <button 
                    @click="mobileMenuOpen = true"
                    class="lg:hidden flex items-center gap-1 px-3 py-1.5 bg-red-600 text-white text-xs font-medium rounded-lg"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                    Menu
                  </button>
                  <span class="px-3 py-1.5 bg-red-600 text-white text-xs font-medium rounded-lg">
                    {{ currentLevel.name }}
                  </span>
                  <span class="text-gray-400">/</span>
                  <span class="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg">
                    Chapitre {{ currentChapterNumber }}
                  </span>
                </div>
                
                <!-- Titre et actions -->
                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div class="flex-1">
                    <div class="flex items-start gap-3">
                      <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg sm:rounded-xl flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                        {{ currentChapter.icon || currentChapterNumber }}
                      </div>
                      <div>
                        <h1 class="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{{ currentChapter.title }}</h1>
                        <p class="text-gray-600 text-sm sm:text-base">{{ currentChapter.description }}</p>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Boutons d'action -->
                  <div class="flex flex-col sm:flex-row gap-2">
                    <button
                      v-if="!currentChapter.completed && !showQuiz"
                      @click="startQuiz"
                      class="px-4 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all flex items-center justify-center gap-2 text-sm"
                    >
                      <span>🎯</span>
                      <span>Quiz</span>
                    </button>
                    <button
                      @click="markAsCompleted"
                      :class="[
                        'px-4 py-2.5 font-semibold rounded-lg border transition-all flex items-center justify-center gap-2 text-sm',
                        currentChapter.completed
                          ? 'bg-green-500 text-white border-green-600 hover:bg-green-600'
                          : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                      ]"
                    >
                      <span v-if="currentChapter.completed">✓</span>
                      <span>{{ currentChapter.completed ? 'Terminé' : 'Terminer' }}</span>
                    </button>
                  </div>
                </div>

                <!-- Métriques -->
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div class="bg-red-50 p-3 rounded-lg border border-red-200">
                    <div class="flex items-center gap-2">
                      <div class="w-8 h-8 bg-red-500 rounded-md flex items-center justify-center">
                        <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div class="font-bold text-gray-900 text-sm">{{ currentChapter.readTime }}</div>
                        <div class="text-xs text-gray-600">Durée</div>
                      </div>
                    </div>
                  </div>

                  <div class="bg-green-50 p-3 rounded-lg border border-green-200">
                    <div class="flex items-center gap-2">
                      <div class="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                        <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div class="font-bold text-gray-900 text-sm">{{ currentChapter.quiz?.length || 0 }}</div>
                        <div class="text-xs text-gray-600">Questions</div>
                      </div>
                    </div>
                  </div>

                  <div class="bg-amber-50 p-3 rounded-lg border border-amber-200">
                    <div class="flex items-center gap-2">
                      <div class="w-8 h-8 bg-amber-500 rounded-md flex items-center justify-center">
                        <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <div class="font-bold text-gray-900 text-sm">{{ currentChapter.examplesCount || 0 }}</div>
                        <div class="text-xs text-gray-600">Exemples</div>
                      </div>
                    </div>
                  </div>

                  <div class="bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <div class="flex items-center gap-2">
                      <div class="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                        <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div class="font-bold text-gray-900 text-sm capitalize">{{ currentChapter.difficulty || 'Débutant' }}</div>
                        <div class="text-xs text-gray-600">Niveau</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Quiz -->
            <QuizInterface 
              v-if="showQuiz"
              :quiz="currentChapter.quiz"
              :chapter-title="currentChapter.title"
              @complete="handleQuizComplete"
              @retry="retryQuiz"
              class="p-4 sm:p-6"
            />

            <!-- Contenu pédagogique -->
            <div v-else class="p-4 sm:p-6">
              <div class="space-y-8 max-w-4xl mx-auto">
                <!-- Théorie -->
                <section class="space-y-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h2 class="text-lg sm:text-xl font-bold text-gray-900">Contenu pédagogique</h2>
                      <p class="text-gray-600 text-sm">Apprenez les concepts fondamentaux</p>
                    </div>
                  </div>
                  <div v-html="currentChapter.content" class="content-prose text-sm sm:text-base"></div>
                </section>

                <!-- Exemples pratiques -->
                <section v-if="currentChapter.examples" class="bg-green-50 rounded-xl p-4 sm:p-6 border border-green-200">
                  <div class="flex items-center gap-3 mb-4">
                    <div class="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h2 class="text-lg sm:text-xl font-bold text-gray-900">Exemples pratiques</h2>
                      <p class="text-gray-600 text-sm">Mettez en pratique vos connaissances</p>
                    </div>
                  </div>
                  <div v-html="currentChapter.examples" class="content-prose text-sm sm:text-base"></div>
                </section>

                <!-- Points clés -->
                <section v-if="currentChapter.keyPoints" class="bg-amber-50 rounded-xl p-4 sm:p-6 border border-amber-200">
                  <div class="flex items-center gap-3 mb-4">
                    <div class="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h2 class="text-lg sm:text-xl font-bold text-gray-900">Points clés</h2>
                      <p class="text-gray-600 text-sm">Les concepts essentiels</p>
                    </div>
                  </div>
                  <div class="space-y-3">
                    <div 
                      v-for="(point, idx) in currentChapter.keyPoints" 
                      :key="idx"
                      class="bg-white p-3 rounded-lg border border-amber-200 hover:border-amber-300 transition-colors"
                    >
                      <div class="flex items-start gap-3">
                        <div class="w-6 h-6 bg-amber-500 text-white rounded-md flex items-center justify-center font-bold text-sm flex-shrink-0">
                          {{ idx + 1 }}
                        </div>
                        <div class="text-gray-700 text-sm sm:text-base">{{ point }}</div>
                      </div>
                    </div>
                  </div>
                </section>

                <!-- CTA Quiz -->
                <section class="text-center py-6 sm:py-8">
                  <div class="max-w-md mx-auto">
                    <div class="mb-4 sm:mb-6">
                      <div class="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <span class="text-2xl sm:text-3xl">🎯</span>
                      </div>
                      <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">Validation des connaissances</h3>
                      <p class="text-gray-600 text-sm sm:text-base mb-2">
                        Testez votre compréhension avec {{ currentChapter.quiz?.length || 0 }} questions.
                      </p>
                      <p class="text-xs sm:text-sm text-red-600 font-medium">
                        ✓ Score minimum requis : 70%
                      </p>
                    </div>
                    
                    <button
                      @click="startQuiz"
                      :disabled="!currentChapter.quiz || currentChapter.quiz.length === 0"
                      :class="[
                        'inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-lg sm:rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 hover:shadow-lg text-sm sm:text-base',
                        (!currentChapter.quiz || currentChapter.quiz.length === 0) && 'opacity-50 cursor-not-allowed'
                      ]"
                    >
                      <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                      {{ currentChapter.quiz && currentChapter.quiz.length > 0 ? 'Commencer le quiz' : 'Quiz non disponible' }}
                    </button>
                    
                    <p v-if="currentChapter.completed" class="mt-3 sm:mt-4 text-sm text-green-600 font-medium">
                      ✅ Quiz déjà réussi
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>

    <!-- Toast -->
    <div v-if="toast.visible" 
         :class="[
           'fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-3 rounded-lg shadow-lg z-50 transition-all duration-300',
           toast.type === 'success' ? 'bg-green-500 text-white' :
           toast.type === 'error' ? 'bg-red-500 text-white' :
           'bg-red-500 text-white'
         ]">
      {{ toast.message }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import QuizInterface from '@/components/QuizInterface.vue'
import { COURSE_LEVELS } from '@/data/java-courses'
import C from '@/views/lANGUAGE/C/C.vue'

// Fonction pour calculer la progression
function getProgress(levels) {
  const totalChapters = levels.reduce((sum, level) => sum + level.chapters.length, 0)
  const completedChapters = levels.reduce((sum, level) => 
    sum + level.chapters.filter(ch => ch.completed).length, 0
  )
  
  return {
    completed: completedChapters,
    total: totalChapters,
    percentage: totalChapters > 0 ? Math.round((completedChapters / totalChapters) * 100) : 0
  }
}

// État
const selectedLevel = ref(0)
const selectedChapterIndex = ref(0)
const showQuiz = ref(false)
const mobileMenuOpen = ref(false)
const toast = ref({ visible: false, message: '', type: 'info' })
const levels = ref(COURSE_LEVELS)

// Computed
const currentChapter = computed(() => {
  return levels.value[selectedLevel.value]?.chapters[selectedChapterIndex.value] || {}
})

const currentLevel = computed(() => {
  return levels.value[selectedLevel.value] || {}
})

const currentChapterNumber = computed(() => {
  let count = 0
  for (let i = 0; i < selectedLevel.value; i++) {
    count += levels.value[i]?.chapters.length || 0
  }
  return count + selectedChapterIndex.value + 1
})

const totalChapters = computed(() => {
  return levels.value.reduce((sum, level) => sum + level.chapters.length, 0)
})

const completedCount = computed(() => {
  return levels.value.reduce((sum, level) => 
    sum + level.chapters.filter(ch => ch.completed).length, 0
  )
})

const progressPercentage = computed(() => {
  const progress = getProgress(levels.value)
  return progress.percentage
})

const hasPreviousChapter = computed(() => {
  return selectedChapterIndex.value > 0 || selectedLevel.value > 0
})

const hasNextChapter = computed(() => {
  const nextInLevel = selectedChapterIndex.value < currentLevel.value.chapters.length - 1
  const nextLevel = selectedLevel.value < levels.value.length - 1
  return (nextInLevel && currentChapter.value.unlocked) || nextLevel
})

// Méthodes
function getLevelColor(level) {
  const colorMap = {
    'emerald': '#10B981',
    'blue': '#3B82F6', 
    'orange': '#F59E0B',
    'purple': '#8B5CF6',
    'red': '#EF4444',
    'cyan': '#06B6D4',
    'pink': '#EC4899',
    'indigo': '#6366F1'
  }
  return colorMap[level.color] || colorMap.red // Par défaut rouge pour Java
}

function getLevelProgress(levelIndex) {
  const level = levels.value[levelIndex]
  const completed = level.chapters.filter(ch => ch.completed).length
  return Math.round((completed / level.chapters.length) * 100) || 0
}

function isSelected(levelIndex, chapterIndex) {
  return selectedLevel.value === levelIndex && selectedChapterIndex.value === chapterIndex
}

function getChapterNumber(levelIndex, chapterIndex) {
  let count = 0
  for (let i = 0; i < levelIndex; i++) {
    count += levels.value[i]?.chapters.length || 0
  }
  return count + chapterIndex + 1
}

function selectChapter(levelIndex, chapterIndex) {
  const chapter = levels.value[levelIndex].chapters[chapterIndex]
  
  if (chapter.unlocked) {
    selectedLevel.value = levelIndex
    selectedChapterIndex.value = chapterIndex
    showQuiz.value = false
    mobileMenuOpen.value = false
    window.scrollTo({ top: 0, behavior: 'smooth' })
    saveProgress()
  } else {
    showToast('Terminez le chapitre précédent pour débloquer celui-ci', 'info')
  }
}

function selectLevel(levelIndex) {
  selectedLevel.value = levelIndex
  selectedChapterIndex.value = 0
  mobileMenuOpen.value = false
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function startQuiz() {
  showQuiz.value = true
  mobileMenuOpen.value = false
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function retryQuiz() {
  showQuiz.value = false
  setTimeout(() => {
    showQuiz.value = true
  }, 300)
}

function handleQuizComplete(score) {
  const success = score >= 70
  
  if (success) {
    levels.value[selectedLevel.value].chapters[selectedChapterIndex.value].completed = true
    
    // Débloquer le prochain chapitre
    const nextInLevel = selectedChapterIndex.value + 1
    if (nextInLevel < currentLevel.value.chapters.length) {
      levels.value[selectedLevel.value].chapters[nextInLevel].unlocked = true
    } else {
      const nextLevel = selectedLevel.value + 1
      if (nextLevel < levels.value.length) {
        levels.value[nextLevel].chapters[0].unlocked = true
      }
    }
    
    saveProgress()
    showToast(`Quiz réussi ! Score: ${score}%`, 'success')
    
    // Auto-avancement après 1.5s
    setTimeout(() => {
      showQuiz.value = false
      window.scrollTo({ top: 0, behavior: 'smooth' })
      if (nextInLevel < currentLevel.value.chapters.length) {
        selectChapter(selectedLevel.value, nextInLevel)
      } else if (selectedLevel.value + 1 < levels.value.length) {
        selectChapter(selectedLevel.value + 1, 0)
      }
    }, 1500)
  } else {
    showToast(`Score: ${score}%. 70% minimum requis`, 'error')
    setTimeout(() => {
      showQuiz.value = false
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 2000)
  }
}

function markAsCompleted() {
  if (!currentChapter.value.completed) {
    levels.value[selectedLevel.value].chapters[selectedChapterIndex.value].completed = true
    saveProgress()
    showToast('Chapitre terminé', 'success')
  }
}

function nextChapter() {
  const nextInLevel = selectedChapterIndex.value + 1
  const nextLevel = selectedLevel.value + 1
  
  if (nextInLevel < currentLevel.value.chapters.length && currentLevel.value.chapters[nextInLevel].unlocked) {
    selectChapter(selectedLevel.value, nextInLevel)
  } else if (nextLevel < levels.value.length && levels.value[nextLevel].chapters[0].unlocked) {
    selectChapter(nextLevel, 0)
  }
}

function previousChapter() {
  const prevInLevel = selectedChapterIndex.value - 1
  const prevLevel = selectedLevel.value - 1
  
  if (prevInLevel >= 0) {
    selectChapter(selectedLevel.value, prevInLevel)
  } else if (prevLevel >= 0) {
    const chapters = levels.value[prevLevel].chapters
    selectChapter(prevLevel, chapters.length - 1)
  }
}

function showToast(message, type = 'info') {
  toast.value = { visible: true, message, type }
  setTimeout(() => {
    toast.value.visible = false
  }, 3000)
}

function saveProgress() {
  const progress = {
    levels: levels.value.map(level => ({
      chapters: level.chapters.map(chapter => ({
        completed: chapter.completed,
        unlocked: chapter.unlocked
      }))
    })),
    lastChapter: {
      level: selectedLevel.value,
      chapter: selectedChapterIndex.value
    },
    timestamp: new Date().toISOString()
  }
  
  localStorage.setItem('java-courses-progress', JSON.stringify(progress))
}

function loadProgress() {
  const saved = localStorage.getItem('java-courses-progress')
  if (saved) {
    try {
      const progress = JSON.parse(saved)
      
      // Appliquer la progression sauvegardée
      progress.levels.forEach((levelData, levelIndex) => {
        if (levels.value[levelIndex]) {
          levelData.chapters.forEach((chapterData, chapterIndex) => {
            if (levels.value[levelIndex].chapters[chapterIndex]) {
              levels.value[levelIndex].chapters[chapterIndex].completed = chapterData.completed
              levels.value[levelIndex].chapters[chapterIndex].unlocked = chapterData.unlocked
            }
          })
        }
      })
      
      // Restaurer la dernière position
      if (progress.lastChapter) {
        selectedLevel.value = progress.lastChapter.level
        selectedChapterIndex.value = progress.lastChapter.chapter
      }
    } catch (error) {
      console.error('Erreur chargement progression:', error)
    }
  }
}

onMounted(() => {
  loadProgress()
  
  // S'assurer que le premier chapitre est débloqué
  if (levels.value[0]?.chapters[0]) {
    levels.value[0].chapters[0].unlocked = true
  }
})
</script>

<style scoped>
.content-prose :deep(*) {
  font-size: 0.875rem;
}

.content-prose :deep(h1) {
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: #7f1d1d;
}

.content-prose :deep(h2) {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 0.75rem;
  margin-bottom: 0.5rem;
  color: #991b1b;
}

.content-prose :deep(h3) {
  font-size: 1.125rem;
  font-weight: 600;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
  color: #dc2626;
}

.content-prose :deep(code) {
  background-color: #fee2e2;
  padding: 0.125rem 0.25rem;
  border-radius: 0.125rem;
  font-size: 0.8125rem;
  color: #7f1d1d;
  font-family: 'Courier New', monospace;
}

.content-prose :deep(pre) {
  background-color: #1e293b;
  color: #f1f5f9;
  padding: 0.75rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin: 0.75rem 0;
  font-size: 0.8125rem;
  font-family: 'Courier New', monospace;
}

.content-prose :deep(pre code) {
  background-color: transparent;
  color: #f1f5f9;
}

.content-prose :deep(ul) {
  padding-left: 1.25rem;
  margin-bottom: 0.75rem;
}

.content-prose :deep(ol) {
  padding-left: 1.25rem;
  margin-bottom: 0.75rem;
}

.content-prose :deep(li) {
  margin-bottom: 0.25rem;
}

/* Media queries pour la responsivité */
@media (min-width: 640px) {
  .content-prose :deep(*) {
    font-size: 1rem;
  }
  
  .content-prose :deep(h1) {
    font-size: 1.875rem;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .content-prose :deep(h2) {
    font-size: 1.5rem;
    margin-top: 1.25rem;
    margin-bottom: 0.75rem;
  }
  
  .content-prose :deep(h3) {
    font-size: 1.25rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
}

@media (max-width: 640px) {
  .content-prose :deep(h1) {
    font-size: 1.25rem;
  }
  
  .content-prose :deep(h2) {
    font-size: 1.125rem;
  }
  
  .content-prose :deep(h3) {
    font-size: 1rem;
  }
}
</style>