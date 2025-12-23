<template>
  <div class="min-h-screen bg-gradient-to-b from-yellow-50 to-amber-50">
    <!-- Header responsive -->
    <header class="fixed z-10 w-full bg-gradient-to-r from-yellow-500 to-amber-600 text-gray-900 shadow-lg">
      <div class="container mx-auto px-4 py-3 sm:py-4">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <!-- Logo et titre AVEC BOUTON RETOUR -->
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <!-- Bouton Retour -->
              <Router-Link 
                to="/javascript"
                class="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-900/20 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-yellow-900/30 transition-all group mr-2"
                title="Retour à l'accueil"
              >
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-yellow-100 group-hover:scale-110 transition-transform" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
              </Router-Link>
              
              <!-- Logo JS -->
              <Router-Link 
                to="/javascript"
                class="flex items-center space-x-3 group"
              >
                <div class="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-900/20 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span class="text-yellow-100 font-bold text-sm sm:text-base">JS</span>
                </div>
                <div>
                  <h1 class="text-lg sm:text-xl font-bold text-gray-900">JavaScript Masterclass</h1>
                  <p class="text-xs sm:text-sm text-yellow-900/80">38 chapitres</p>
                </div>
              </Router-Link>
            </div>
            
            <!-- Menu mobile -->
            <button @click="mobileMenuOpen = true" class="sm:hidden text-gray-900 right-4 top-27 p-2">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
          
          <!-- Progression -->
          <div class="flex items-center justify-between sm:justify-center gap-4">
            <div class="flex-1 sm:flex-none flex items-center space-x-2">
              <div class="hidden sm:block text-sm text-gray-900">Progression</div>
              <div class="flex-1 sm:w-32 bg-yellow-900/20 rounded-full h-2">
                <div 
                  class="h-full bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full transition-all duration-700"
                  :style="{ width: progressPercentage + '%' }"
                ></div>
              </div>
              <span class="text-sm font-medium min-w-[40px] text-gray-900">{{ progressPercentage }}%</span>
            </div>
            
            <!-- Stats -->
            <div class="flex items-center space-x-3 sm:space-x-4">
              <div class="text-center hidden sm:block">
                <div class="text-lg font-bold text-gray-900">{{ completedCount }}</div>
                <div class="text-xs text-yellow-900/80">Terminés</div>
              </div>
              <div class="text-center hidden sm:block">
                <div class="text-lg font-bold text-gray-900">{{ totalChapters }}</div>
                <div class="text-xs text-yellow-900/80">Chapitres</div>
              </div>
              <!-- Stats mobiles -->
              <div class="flex items-center space-x-2 sm:hidden">
                <span class="px-2 py-1 bg-yellow-900/20 rounded text-xs text-gray-900">
                  {{ completedCount }}/{{ totalChapters }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="px-4 pt-24 pb-12 ">
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
                  <h2 class="text-lg font-bold text-gray-800">Menu</h2>
                  <p class="text-sm text-gray-600">Navigation</p>
                </div>
                <button @click="mobileMenuOpen = false" class="p-2 text-gray-600">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>

              <!-- Navigation -->
              <div class="space-y-4">
                <div v-for="(level, levelIndex) in levels" :key="levelIndex" class="mb-4">
                  <!-- Niveau -->
                  <div 
                    @click="selectLevel(levelIndex)"
                    :class="[
                      'p-3 rounded-lg cursor-pointer transition-all',
                      selectedLevel === levelIndex 
                        ? 'bg-yellow-50 border border-yellow-200' 
                        : 'hover:bg-gray-50'
                    ]"
                  >
                    <div class="flex items-center justify-between">
                      <div class="flex items-center space-x-3">
                        <div class="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                             :style="{ background: getLevelColor(levelIndex) }">
                          {{ levelIndex + 1 }}
                        </div>
                        <div>
                          <h3 class="text-sm font-semibold text-gray-800">{{ level.name }}</h3>
                          <p class="text-xs text-gray-500">{{ getLevelProgress(levelIndex) }}% complété</p>
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
                          ? 'bg-yellow-100 text-yellow-800 border border-yellow-300' 
                          : chapter.unlocked 
                            ? 'text-gray-700 hover:bg-yellow-50' 
                            : 'text-gray-400',
                        !chapter.unlocked && 'cursor-not-allowed'
                      ]"
                    >
                      <div class="flex items-center space-x-2">
                        <div v-if="chapter.completed" class="text-green-500">
                          ✓
                        </div>
                        <div v-else-if="chapter.unlocked" class="text-amber-500">
                          {{ getChapterNumber(levelIndex, chapterIndex) }}.
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
                      ? 'text-gray-700 border-gray-300 hover:bg-yellow-50'
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
                      ? 'bg-gradient-to-r from-yellow-500 to-amber-600 text-white border-yellow-600 hover:from-yellow-600 hover:to-amber-700'
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
          <div class="bg-white rounded-xl shadow-lg border border-amber-100 overflow-hidden sticky top-6">
            <!-- En-tête sidebar -->
            <div class="bg-gradient-to-r from-yellow-500 to-amber-600 p-4">
              <h2 class="text-lg font-bold text-gray-900">Parcours d'apprentissage</h2>
              <p class="text-yellow-900 text-sm">Niveau {{ selectedLevel + 1 }}/{{ levels.length }}</p>
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
                      ? 'bg-yellow-50 border border-yellow-200' 
                      : 'hover:bg-yellow-50/50'
                  ]"
                >
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold bg-gradient-to-br from-yellow-500 to-amber-600">
                      {{ levelIndex + 1 }}
                    </div>
                    <div class="min-w-0 flex-1">
                      <h3 class="text-sm font-semibold text-gray-800 truncate">{{ level.name }}</h3>
                      <p class="text-xs text-gray-500">{{ level.chapters.length }} chapitres</p>
                    </div>
                  </div>
                  <div class="text-right">
                    <div class="text-sm font-bold text-amber-600">
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
                        ? 'bg-yellow-100 border-2 border-yellow-400' 
                        : chapter.unlocked 
                          ? 'hover:bg-yellow-50 hover:border hover:border-yellow-200' 
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
                             class="w-6 h-6 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-md flex items-center justify-center text-gray-900 text-xs font-bold">
                          {{ getChapterNumber(levelIndex, chapterIndex) }}
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
                        <h4 class="text-xs font-medium text-gray-800 truncate group-hover:text-amber-600">
                          {{ chapter.title }}
                        </h4>
                        <div class="flex items-center text-xs text-gray-500">
                          <span class="truncate">{{ chapter.readTime }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Navigation sidebar -->
            <div class="p-4 border-t border-yellow-100 bg-yellow-50/30">
              <div class="flex gap-2">
                <button
                  @click="previousChapter"
                  :disabled="!hasPreviousChapter"
                  :class="[
                    'flex-1 px-3 py-2 text-sm font-medium rounded-lg border transition-all flex items-center justify-center',
                    hasPreviousChapter
                      ? 'text-gray-700 border-yellow-300 hover:bg-yellow-100'
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
                      ? 'bg-gradient-to-r from-yellow-500 to-amber-600 text-gray-900 border-yellow-600 hover:from-yellow-600 hover:to-amber-700'
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
          <div class="bg-white rounded-xl shadow-lg border border-amber-100 overflow-hidden">
            <!-- Header du contenu -->
            <div class="bg-gradient-to-r from-yellow-50 to-amber-100 p-4 sm:p-6 border-b border-amber-200">
              <div class="space-y-4">
                <!-- Breadcrumb -->
                <div class="flex flex-wrap items-center gap-2">
                  <button 
                    @click="mobileMenuOpen = true"
                    class="lg:hidden flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-yellow-500 to-amber-600 text-gray-900 text-xs font-medium rounded-lg hover:from-yellow-600 hover:to-amber-700 transition-all"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                    Menu
                  </button>
                  <span class="px-3 py-1.5 bg-gradient-to-r from-yellow-500 to-amber-600 text-gray-900 text-xs font-medium rounded-lg">
                    {{ currentLevel.name }}
                  </span>
                  <span class="text-gray-400">/</span>
                  <span class="px-3 py-1.5 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-lg">
                    Chapitre {{ currentChapterNumber }}
                  </span>
                </div>
                
                <!-- Titre et actions -->
                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div class="flex-1">
                    <div class="flex items-start gap-3">
                      <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg sm:rounded-xl flex items-center justify-center text-gray-900 font-bold text-lg sm:text-xl">
                        {{ currentChapterNumber }}
                      </div>
                      <div>
                        <h1 class="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{{ currentChapter.title }}</h1>
                        <p class="text-gray-700 text-sm sm:text-base">{{ currentChapter.description }}</p>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Boutons d'action mobile -->
                  <div class="flex flex-col sm:flex-row gap-2">
                    <button
                      v-if="!currentChapter.completed && !showQuiz"
                      @click="startQuiz"
                      class="px-4 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-600 text-gray-900 font-semibold rounded-lg hover:from-amber-600 hover:to-yellow-700 transition-all flex items-center justify-center gap-2 text-sm shadow-md js-button"
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
                          : 'bg-yellow-100 text-yellow-800 border-yellow-300 hover:bg-yellow-200'
                      ]"
                    >
                      <span v-if="currentChapter.completed">✓</span>
                      <span>{{ currentChapter.completed ? 'Terminé' : 'Terminer' }}</span>
                    </button>
                  </div>
                </div>

                <!-- Métriques -->
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div class="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                    <div class="flex items-center gap-2">
                      <div class="w-8 h-8 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-md flex items-center justify-center">
                        <svg class="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div class="font-bold text-gray-900 text-sm">{{ currentChapter.readTime }}</div>
                        <div class="text-xs text-amber-700">Durée</div>
                      </div>
                    </div>
                  </div>

                  <div class="bg-amber-50 p-3 rounded-lg border border-amber-200">
                    <div class="flex items-center gap-2">
                      <div class="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-md flex items-center justify-center">
                        <svg class="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div class="font-bold text-gray-900 text-sm">{{ currentChapter.quiz.length }}</div>
                        <div class="text-xs text-amber-700">Questions</div>
                      </div>
                    </div>
                  </div>

                  <div class="bg-orange-50 p-3 rounded-lg border border-orange-200">
                    <div class="flex items-center gap-2">
                      <div class="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-md flex items-center justify-center">
                        <svg class="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <div class="font-bold text-gray-900 text-sm">{{ currentChapter.examplesCount || 0 }}</div>
                        <div class="text-xs text-orange-700">Exemples</div>
                      </div>
                    </div>
                  </div>

                  <div class="bg-yellow-100 p-3 rounded-lg border border-yellow-300">
                    <div class="flex items-center gap-2">
                      <div class="w-8 h-8 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-md flex items-center justify-center">
                        <svg class="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div class="font-bold text-gray-900 text-sm capitalize">{{ currentChapter.difficulty || 'Débutant' }}</div>
                        <div class="text-xs text-yellow-800">Niveau</div>
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
                    <div class="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h2 class="text-lg sm:text-xl font-bold text-gray-900">Contenu pédagogique</h2>
                      <p class="text-amber-700 text-sm">Apprenez les concepts fondamentaux</p>
                    </div>
                  </div>
                  <div v-html="currentChapter.content" class="text-sm sm:text-base"></div>
                </section>

                <!-- Exemples -->
                <section v-if="currentChapter.examples" class="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-4 sm:p-6 border border-amber-200">
                  <div class="flex items-center gap-3 mb-4">
                    <div class="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h2 class="text-lg sm:text-xl font-bold text-gray-900">Exemples pratiques</h2>
                      <p class="text-amber-700 text-sm">Mettez en pratique vos connaissances</p>
                    </div>
                  </div>
                  <div v-html="currentChapter.examples" class="bg-black text-sm sm:text-base"></div>
                </section>

                <!-- Points clés -->
                <section v-if="currentChapter.keyPoints" class="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-4 sm:p-6 border border-yellow-300">
                  <div class="flex items-center gap-3 mb-4">
                    <div class="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h2 class="text-lg sm:text-xl font-bold text-gray-900">Points clés</h2>
                      <p class="text-yellow-800 text-sm">Les concepts essentiels</p>
                    </div>
                  </div>
                  <div class="space-y-3">
                    <div 
                      v-for="(point, idx) in currentChapter.keyPoints" 
                      :key="idx"
                      class="bg-yellow-50/80 p-3 rounded-lg border border-yellow-200 hover:border-yellow-400 transition-colors"
                    >
                      <div class="flex items-start gap-3">
                        <div class="w-6 h-6 bg-gradient-to-br from-yellow-400 to-amber-500 text-gray-900 rounded-md flex items-center justify-center font-bold text-sm flex-shrink-0">
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
                      <div class="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <span class="text-2xl sm:text-3xl">🎯</span>
                      </div>
                      <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">Validation des connaissances</h3>
                      <p class="text-amber-700 text-sm sm:text-base mb-2">
                        Testez votre compréhension avec {{ currentChapter.quiz.length }} questions.
                      </p>
                      <p class="text-xs sm:text-sm text-yellow-700 font-medium">
                        ✓ Score minimum requis : 70%
                      </p>
                    </div>
                    
                    <button
                      @click="startQuiz"
                      class="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-gray-900 font-bold rounded-lg sm:rounded-xl hover:from-yellow-600 hover:to-amber-700 transition-all duration-300 hover:shadow-lg text-sm sm:text-base shadow-md js-button"
                    >
                      <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                      Commencer le quiz
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
           'bg-gradient-to-r from-yellow-500 to-amber-600 text-gray-900'
         ]">
      {{ toast.message }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import QuizInterface from '../../QuizInterface.vue'
import { COURSE_LEVELS, getProgress } from '@/data/javascript-courses'

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

const progress = computed(() => getProgress(levels.value))
const progressPercentage = computed(() => progress.value.percentage)

const hasPreviousChapter = computed(() => {
  return selectedChapterIndex.value > 0 || selectedLevel.value > 0
})

const hasNextChapter = computed(() => {
  const nextInLevel = selectedChapterIndex.value < currentLevel.value.chapters.length - 1
  const nextLevel = selectedLevel.value < levels.value.length - 1
  return (nextInLevel && currentChapter.value.unlocked) || nextLevel
})

// Méthodes
function getLevelColor(levelIndex) {
  const colors = [
    '#F59E0B', // Jaune
    '#D97706', // Jaune foncé
    '#FBBF24', // Jaune clair
    '#FCD34D', // Jaune très clair
    '#FDE68A', // Jaune pâle
    '#FEF3C7'  // Jaune crème
  ]
  return colors[levelIndex % colors.length]
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
    
    // Débloquer suivant
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
    
    // Auto-avancement
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
  
  localStorage.setItem('js-learning-progress', JSON.stringify(progress))
}

function loadProgress() {
  const saved = localStorage.getItem('js-learning-progress')
  if (saved) {
    try {
      const progress = JSON.parse(saved)
      
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
  color: #1f2937;
}

.content-prose :deep(h2) {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 0.75rem;
  margin-bottom: 0.5rem;
  color: #374151;
}

.content-prose :deep(h3) {
  font-size: 1.125rem;
  font-weight: 600;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
  color: #4b5563;
}

.content-prose :deep(code) {
  background-color: #fef3c7;
  color: #92400e;
  padding: 0.125rem 0.25rem;
  border-radius: 0.125rem;
  font-size: 0.8125rem;
  border: 1px solid #fcd34d;
}

.content-prose :deep(pre) {
  background-color: #1e293b;
  color: #f1f5f9;
  padding: 0.75rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin: 0.75rem 0;
  font-size: 0.8125rem;
  border: 1px solid #f59e0b;
}

.content-prose :deep(ul) {
  padding-left: 1.25rem;
  margin-bottom: 0.75rem;
}

.content-prose :deep(ol) {
  padding-left: 1.25rem;
  margin-bottom: 0.75rem;
}

/* Animation pour les boutons JS */
@keyframes js-pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.7);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(245, 158, 11, 0);
  }
}

.js-button {
  animation: js-pulse 2s infinite;
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
  
  .content-prose :deep(pre) {
    padding: 1rem;
    margin: 1rem 0;
    font-size: 0.875rem;
  }
  
  .content-prose :deep(code) {
    font-size: 0.875rem;
    padding: 0.2rem 0.4rem;
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
  
  .content-prose :deep(pre) {
    padding: 0.5rem;
    font-size: 0.75rem;
  }
}

/* Animation hover pour le bouton retour */
.nav-back-btn:hover {
  transform: scale(1.1);
  transition: transform 0.2s ease;
}

/* Styles pour le thème JavaScript */
.text-js-yellow {
  color: #F59E0B;
}

.bg-js-yellow {
  background-color: #F59E0B;
}

.border-js-yellow {
  border-color: #F59E0B;
}

.hover\:bg-js-yellow:hover {
  background-color: #F59E0B;
}

.hover\:text-js-yellow:hover {
  color: #F59E0B;
}
</style>