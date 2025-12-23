<template>
  <div class="min-h-screen bg-gradient-to-b from-emerald-50 to-gray-50">
    <!-- Header responsive -->
    <header class="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white shadow-md">
      <div class="container mx-auto px-4 py-3 sm:py-4">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <!-- Logo et titre -->
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center">
                <span class="text-white font-bold text-sm sm:text-base">🐍</span>
              </div>
              <div>
                <h1 class="text-lg sm:text-xl font-bold">Python Masterclass</h1>
                <p class="text-xs sm:text-sm text-emerald-200">32 chapitres</p>
              </div>
            </div>
            
            <!-- Menu mobile -->
            <button @click="mobileMenuOpen = true" class="sm:hidden p-2">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
          
          <!-- Progression -->
          <div class="flex items-center justify-between sm:justify-center gap-4">
            <div class="flex-1 sm:flex-none flex items-center space-x-2">
              <div class="hidden sm:block text-sm">Progression</div>
              <div class="flex-1 sm:w-32 bg-white/20 rounded-full h-2">
                <div 
                  class="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full transition-all duration-700"
                  :style="{ width: progressPercentage + '%' }"
                ></div>
              </div>
              <span class="text-sm font-medium min-w-[40px]">{{ progressPercentage }}%</span>
            </div>
            
            <!-- Stats -->
            <div class="flex items-center space-x-3 sm:space-x-4">
              <div class="text-center hidden sm:block">
                <div class="text-lg font-bold">{{ completedCount }}</div>
                <div class="text-xs text-emerald-200">Terminés</div>
              </div>
              <div class="text-center hidden sm:block">
                <div class="text-lg font-bold">{{ totalChapters }}</div>
                <div class="text-xs text-emerald-200">Chapitres</div>
              </div>
              <!-- Stats mobiles -->
              <div class="flex items-center space-x-2 sm:hidden">
                <span class="px-2 py-1 bg-white/20 rounded text-xs">
                  {{ completedCount }}/{{ totalChapters }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="container mx-auto px-4 py-6">
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
                  <h2 class="text-lg font-bold text-gray-800">Menu Python</h2>
                  <p class="text-sm text-gray-600">Navigation</p>
                </div>
                <button @click="mobileMenuOpen = false" class="p-2">
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
                        ? 'bg-emerald-50 border border-emerald-200' 
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
                        <div v-else-if="chapter.unlocked" class="text-emerald-500">
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
                      ? 'bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700'
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
            <div class="bg-gradient-to-r from-emerald-600 to-emerald-700 p-4">
              <h2 class="text-lg font-bold text-white">Parcours Python</h2>
              <p class="text-emerald-100 text-sm">Niveau {{ selectedLevel + 1 }}/{{ levels.length }}</p>
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
                      ? 'bg-emerald-50 border border-emerald-200' 
                      : 'hover:bg-gray-50'
                  ]"
                >
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                         :style="{ background: getLevelColor(levelIndex) }">
                      {{ levelIndex + 1 }}
                    </div>
                    <div class="min-w-0 flex-1">
                      <h3 class="text-sm font-semibold text-gray-800 truncate">{{ level.name }}</h3>
                      <p class="text-xs text-gray-500">{{ level.chapters.length }} chapitres</p>
                    </div>
                  </div>
                  <div class="text-right">
                    <div class="text-sm font-bold" :style="{ color: getLevelColor(levelIndex) }">
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
                             class="w-6 h-6 bg-emerald-500 rounded-md flex items-center justify-center text-white text-xs font-bold">
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
                        <h4 class="text-xs font-medium text-gray-800 truncate group-hover:text-emerald-600">
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
                      ? 'bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700'
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
            <div class="bg-gradient-to-r from-emerald-50 to-emerald-100 p-4 sm:p-6 border-b border-gray-200">
              <div class="space-y-4">
                <!-- Breadcrumb -->
                <div class="flex flex-wrap items-center gap-2">
                  <button 
                    @click="mobileMenuOpen = true"
                    class="lg:hidden flex items-center gap-1 px-3 py-1.5 bg-emerald-600 text-white text-xs font-medium rounded-lg"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                    Menu
                  </button>
                  <span class="px-3 py-1.5 bg-emerald-600 text-white text-xs font-medium rounded-lg">
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
                      <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                        {{ currentChapterNumber }}
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
                  <div class="bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                    <div class="flex items-center gap-2">
                      <div class="w-8 h-8 bg-emerald-500 rounded-md flex items-center justify-center">
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
                        <div class="font-bold text-gray-900 text-sm">{{ currentChapter.quiz.length }}</div>
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
                    <div class="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
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
                  
                  <!-- Code Python avec coloration syntaxique -->
                  <div class="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto font-mono text-sm sm:text-base">
                    <pre><code>{{ currentChapter.examples }}</code></pre>
                  </div>
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
                      <div class="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <span class="text-2xl sm:text-3xl">🎯</span>
                      </div>
                      <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">Validation des connaissances</h3>
                      <p class="text-gray-600 text-sm sm:text-base mb-2">
                        Testez votre compréhension avec {{ currentChapter.quiz.length }} questions.
                      </p>
                      <p class="text-xs sm:text-sm text-emerald-600 font-medium">
                        ✓ Score minimum requis : 70%
                      </p>
                    </div>
                    
                    <button
                      @click="startQuiz"
                      class="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold rounded-lg sm:rounded-xl hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 hover:shadow-lg text-sm sm:text-base"
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
           'bg-emerald-500 text-white'
         ]">
      {{ toast.message }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import QuizInterface from './QuizInterface.vue'

// Données du cours Python
const PYTHON_LEVELS = [
  {
    name: "Débutant",
    chapters: [
      {
        title: "Introduction à Python",
        description: "Découvrez Python, son histoire et son environnement",
        readTime: "15 min",
        quiz: [
          { question: "Python est un langage...", options: ["Compilé", "Interprété", "Assembleur", "Machine"], correct: 1 },
          { question: "Qui a créé Python ?", options: ["Guido van Rossum", "Brendan Eich", "James Gosling", "Larry Wall"], correct: 0 },
          { question: "Python est particulièrement adapté pour...", options: ["Applications mobiles", "Data Science", "Systèmes embarqués", "Jeux 3D"], correct: 1 }
        ],
        content: `
          <h2>Qu'est-ce que Python ?</h2>
          <p>Python est un langage de programmation interprété, de haut niveau et généraliste. Créé par Guido van Rossum et publié pour la première fois en 1991, Python est aujourd'hui l'un des langages les plus populaires au monde.</p>
          
          <h3>Caractéristiques principales</h3>
          <ul>
            <li><strong>Syntaxe simple et lisible</strong> : La philosophie Python privilégie la lisibilité du code</li>
            <li><strong>Multi-paradigme</strong> : Orienté objet, impératif, fonctionnel</li>
            <li><strong>Dynamiquement typé</strong> : Pas besoin de déclarer les types de variables</li>
            <li><strong>Bibliothèque standard riche</strong> : "Batteries included"</li>
          </ul>
          
          <h3>Applications de Python</h3>
          <ul>
            <li>Développement web (Django, Flask)</li>
            <li>Science des données et Machine Learning</li>
            <li>Automatisation et scripts</li>
            <li>Éducation et recherche</li>
          </ul>
        `,
        examples: `# Premier programme Python
print("Hello, World!")

# Variables et types
nom = "Alice"
age = 25
temperature = 36.6
est_etudiant = True

# Affichage multiple
print(f"Nom: {nom}, Age: {age} ans")`,
        examplesCount: 5,
        difficulty: "Débutant",
        keyPoints: [
          "Python est interprété et multiplateforme",
          "La syntaxe Python est conçue pour être lisible",
          "Les indentations sont obligatoires pour les blocs de code",
          "Python supporte plusieurs paradigmes de programmation"
        ],
        completed: false,
        unlocked: true
      },
      {
        title: "Variables et Types de Données",
        description: "Apprenez à manipuler les données en Python",
        readTime: "20 min",
        quiz: [
          { question: "Quel type utilise-t-on pour les nombres décimaux ?", options: ["int", "float", "str", "bool"], correct: 1 },
          { question: "Comment déclare-t-on une chaîne de caractères ?", options: ["Avec quotes simples", "Avec quotes doubles", "Les deux", "Aucune"], correct: 2 },
          { question: "Quelle est la valeur de type(None) ?", options: ["NoneType", "null", "undefined", "void"], correct: 0 }
        ],
        content: `
          <h2>Les Variables en Python</h2>
          <p>En Python, une variable est une référence vers un objet. La déclaration est simple : on assigne une valeur à un nom.</p>
          
          <h3>Règles de nommage</h3>
          <ul>
            <li>Peut contenir lettres, chiffres et underscores (_)</li>
            <li>Ne peut pas commencer par un chiffre</li>
            <li>Respect de la casse (age ≠ Age)</li>
            <li>Évitez les mots-clés du langage</li>
          </ul>
          
          <h2>Types de Données Basiques</h2>
          <h3>Numériques</h3>
          <ul>
            <li><code>int</code> : nombres entiers (42, -7)</li>
            <li><code>float</code> : nombres à virgule (3.14, -0.5)</li>
            <li><code>complex</code> : nombres complexes (1+2j)</li>
          </ul>
          
          <h3>Textuel</h3>
          <p><code>str</code> : chaînes de caractères. Peut utiliser 'simple' ou "double" quotes.</p>
          
          <h3>Booléen</h3>
          <p><code>bool</code> : <code>True</code> ou <code>False</code> (attention à la majuscule)</p>
          
          <h3>Spéciaux</h3>
          <p><code>None</code> : représente l'absence de valeur</p>
        `,
        examples: `# Déclaration de variables
nombre_entier = 42
nombre_decimal = 3.14159
nom = "Python"
est_valide = True
valeur_nulle = None

# Vérification des types
print(type(nombre_entier))  # <class 'int'>
print(type(nombre_decimal)) # <class 'float'>
print(type(nom))            # <class 'str'>
print(type(est_valide))     # <class 'bool'>
print(type(valeur_nulle))   # <class 'NoneType'>

# Conversion de types (casting)
chaine = "123"
nombre = int(chaine)
decimal = float("3.14")

# Opérations avec différents types
resultat = nombre_entier + nombre_decimal
print(f"Résultat: {resultat}")`,
        examplesCount: 8,
        difficulty: "Débutant",
        keyPoints: [
          "Python est dynamiquement typé : le type est inféré",
          "Les variables sont des références vers des objets",
          "Utilisez type() pour connaître le type d'une variable",
          "Les conversions se font avec int(), float(), str(), bool()"
        ],
        completed: false,
        unlocked: false
      },
      {
        title: "Opérateurs et Expressions",
        description: "Manipulez les données avec les opérateurs Python",
        readTime: "25 min",
        quiz: [
          { question: "Quel opérateur donne le reste de la division ?", options: ["/", "%", "//", "*"], correct: 1 },
          { question: "Quelle est la valeur de 3 ** 2 ?", options: ["6", "9", "8", "5"], correct: 1 },
          { question: "Quel opérateur de comparaison vérifie l'égalité ?", options: ["=", "==", "===", "!="], correct: 1 }
        ],
        content: `
          <h2>Opérateurs Arithmétiques</h2>
          <p>Python supporte tous les opérateurs arithmétiques classiques :</p>
          
          <table>
            <thead>
              <tr><th>Opérateur</th><th>Description</th><th>Exemple</th></tr>
            </thead>
            <tbody>
              <tr><td><code>+</code></td><td>Addition</td><td><code>5 + 3 → 8</code></td></tr>
              <tr><td><code>-</code></td><td>Soustraction</td><td><code>10 - 4 → 6</code></td></tr>
              <tr><td><code>*</code></td><td>Multiplication</td><td><code>6 * 7 → 42</code></td></tr>
              <tr><td><code>/</code></td><td>Division (toujours float)</td><td><code>10 / 3 → 3.333...</code></td></tr>
              <tr><td><code>//</code></td><td>Division entière</td><td><code>10 // 3 → 3</code></td></tr>
              <tr><td><code>%</code></td><td>Modulo (reste)</td><td><code>10 % 3 → 1</code></td></tr>
              <tr><td><code>**</code></td><td>Exponentiation</td><td><code>2 ** 3 → 8</code></td></tr>
            </tbody>
          </table>
          
          <h2>Opérateurs de Comparaison</h2>
          <p>Retournent toujours un booléen (<code>True</code> ou <code>False</code>) :</p>
          
          <ul>
            <li><code>==</code> : égal à</li>
            <li><code>!=</code> : différent de</li>
            <li><code>></code> : supérieur à</li>
            <li><code><</code> : inférieur à</li>
            <li><code>>=</code> : supérieur ou égal</li>
            <li><code><=</code> : inférieur ou égal</li>
          </ul>
          
          <h2>Opérateurs Logiques</h2>
          <ul>
            <li><code>and</code> : ET logique</li>
            <li><code>or</code> : OU logique</li>
            <li><code>not</code> : NON logique</li>
          </ul>
          
          <h2>Opérateurs d'Affectation</h2>
          <p>En plus du simple <code>=</code>, Python propose des opérateurs combinés :</p>
          <ul>
            <li><code>+=</code> : <code>x += 5</code> équivaut à <code>x = x + 5</code></li>
            <li><code>-=</code>, <code>*=</code>, <code>/=</code>, etc.</li>
          </ul>
        `,
        examples: `# Opérateurs arithmétiques
a = 10
b = 3

print(f"Addition: {a} + {b} = {a + b}")
print(f"Soustraction: {a} - {b} = {a - b}")
print(f"Multiplication: {a} * {b} = {a * b}")
print(f"Division: {a} / {b} = {a / b}")
print(f"Division entière: {a} // {b} = {a // b}")
print(f"Modulo: {a} % {b} = {a % b}")
print(f"Puissance: {a} ** {b} = {a ** b}")

# Opérateurs de comparaison
print(f"{a} > {b} : {a > b}")
print(f"{a} == {b} : {a == b}")
print(f"{a} != {b} : {a != b}")

# Opérateurs logiques
age = 25
est_majeur = age >= 18
a_permis = True

peut_conduire = est_majeur and a_permis
print(f"Peut conduire: {peut_conduire}")

# Opérateurs d'affectation
x = 5
x += 3  # x = x + 3
print(f"x après += 3: {x}")

x *= 2  # x = x * 2
print(f"x après *= 2: {x}")`,
        examplesCount: 10,
        difficulty: "Débutant",
        keyPoints: [
          "// donne la division entière (tronquée)",
          "% donne le reste de la division",
          "** est l'opérateur de puissance",
          "and, or, not sont les opérateurs logiques",
          "Les opérateurs de comparaison retournent des booléens"
        ],
        completed: false,
        unlocked: false
      }
    ]
  },
  {
    name: "Structures de Contrôle",
    chapters: [
      {
        title: "Conditions : if, elif, else",
        description: "Contrôlez le flux d'exécution avec les conditions",
        readTime: "30 min",
        quiz: [
          { question: "Quel mot-clé signifie 'sinon si' en Python ?", options: ["else if", "elif", "elseif", "elsif"], correct: 1 },
          { question: "Quelle indentation est correcte pour un if ?", options: ["Tabulations", "Espaces", "Les deux", "Aucune importance"], correct: 2 },
          { question: "Quelle est la valeur booléenne de 0 en Python ?", options: ["True", "False", "Erreur", "None"], correct: 1 }
        ],
        content: `
          <h2>La Structure Conditionnelle if</h2>
          <p>Les conditions permettent d'exécuter du code seulement si certaines conditions sont remplies.</p>
          
          <h3>Syntaxe de base</h3>
          <pre><code>if condition:
    # code exécuté si condition est True
elif autre_condition:
    # code exécuté si autre_condition est True
else:
    # code exécuté si aucune condition n'est True</code></pre>
          
          <h3>Règles importantes</h3>
          <ul>
            <li><strong>Indentation</strong> : Le bloc de code doit être indenté (généralement 4 espaces)</li>
            <li><strong>elif</strong> : Python utilise <code>elif</code> et non <code>else if</code></li>
            <li><strong>else</strong> : Optionnel, toujours en dernier</li>
            <li>Pas de limites sur le nombre de <code>elif</code></li>
          </ul>
          
          <h2>Conditions Complexes</h2>
          <p>Les conditions peuvent combiner plusieurs expressions avec <code>and</code>, <code>or</code>, <code>not</code> :</p>
          <pre><code>if age >= 18 and a_permis:
    print("Vous pouvez conduire")
elif age >= 16 or accompagne:
    print("Vous pouvez conduire accompagné")
else:
    print("Vous ne pouvez pas conduire")</code></pre>
          
          <h2>Valeurs Truthy et Falsy</h2>
          <p>En Python, certaines valeurs sont considérées comme <code>False</code> dans un contexte booléen :</p>
          <ul>
            <li><code>False</code></li>
            <li><code>None</code></li>
            <li>Zéro numérique (<code>0</code>, <code>0.0</code>, <code>0j</code>)</li>
            <li>Séquences vides (<code>""</code>, <code>[]</code>, <code>()</code>, <code>{}</code>)</li>
            <li>Dictionnaires vides (<code>{}</code>)</li>
            <li>Tout le reste est considéré comme <code>True</code></li>
          </ul>
        `,
        examples: `# Structure conditionnelle basique
age = 20

if age < 13:
    print("Enfant")
elif age < 18:
    print("Adolescent")
elif age < 65:
    print("Adulte")
else:
    print("Senior")

# Conditions avec opérateurs logiques
note = 85
present = True

if note >= 50 and present:
    print("Réussi")
else:
    print("Échoué")

# Conditions avec valeurs truthy/falsy
nom = ""
if nom:  # Équivalent à if nom != ""
    print(f"Bonjour {nom}")
else:
    print("Nom non spécifié")

# Condition ternaire (forme courte)
age = 18
statut = "Majeur" if age >= 18 else "Mineur"
print(f"Statut: {statut}")

# Conditions imbriquées
temperature = 25
pluie = False

if temperature > 30:
    if pluie:
        print("Temps tropical")
    else:
        print("Canicule")
elif temperature > 20:
    print("Agréable")
else:
    print("Frais")`,
        examplesCount: 12,
        difficulty: "Débutant",
        keyPoints: [
          "L'indentation définit les blocs de code",
          "Utilisez elif pour 'sinon si'",
          "Les conditions sont évaluées dans l'ordre",
          "Les valeurs vides sont considérées comme False",
          "Les conditions peuvent être imbriquées"
        ],
        completed: false,
        unlocked: false
      },
      {
        title: "Boucles : for et while",
        description: "Répétez des actions avec les boucles",
        readTime: "35 min",
        quiz: [
          { question: "Quelle boucle est utilisée pour itérer sur une séquence ?", options: ["for", "while", "loop", "repeat"], correct: 0 },
          { question: "Quel mot-clé permet de sauter à l'itération suivante ?", options: ["break", "continue", "skip", "next"], correct: 1 },
          { question: "Quel mot-clé sort complètement d'une boucle ?", options: ["break", "continue", "exit", "stop"], correct: 0 }
        ],
        content: `
          <h2>La Boucle for</h2>
          <p>La boucle <code>for</code> permet d'itérer sur les éléments d'une séquence (liste, chaîne, tuple, dictionnaire, etc.)</p>
          
          <h3>Syntaxe</h3>
          <pre><code>for element in sequence:
    # code à exécuter pour chaque élément</code></pre>
          
          <h3>Fonction range()</h3>
          <p><code>range()</code> génère une séquence de nombres, très utile avec <code>for</code> :</p>
          <ul>
            <li><code>range(5)</code> : 0, 1, 2, 3, 4</li>
            <li><code>range(2, 6)</code> : 2, 3, 4, 5</li>
            <li><code>range(0, 10, 2)</code> : 0, 2, 4, 6, 8</li>
            <li><code>range(10, 0, -1)</code> : 10, 9, 8, ..., 1</li>
          </ul>
          
          <h2>La Boucle while</h2>
          <p>La boucle <code>while</code> répète du code tant qu'une condition est vraie.</p>
          
          <h3>Syntaxe</h3>
          <pre><code>while condition:
    # code exécuté tant que condition est True</code></pre>
          
          <h3>Attention aux boucles infinies !</h3>
          <p>Assurez-vous que la condition devienne éventuellement fausse.</p>
          
          <h2>Contrôle des Boucles</h2>
          <ul>
            <li><code>break</code> : sort immédiatement de la boucle</li>
            <li><code>continue</code> : saute à l'itération suivante</li>
            <li><code>else</code> (avec boucles) : exécuté si la boucle se termine normalement (sans break)</li>
          </ul>
        `,
        examples: `# Boucle for avec liste
fruits = ["pomme", "banane", "orange"]
for fruit in fruits:
    print(f"Je mange une {fruit}")

# Boucle for avec range
print("\\nComptage:")
for i in range(1, 6):
    print(i)

print("\\nTable de multiplication:")
for i in range(1, 11):
    print(f"5 x {i} = {5 * i}")

# Boucle while
compteur = 0
print("\\nBoucle while:")
while compteur < 5:
    print(f"Compteur: {compteur}")
    compteur += 1

# break et continue
print("\\nBreak et continue:")
for i in range(10):
    if i == 2:
        continue  # Saute 2
    if i == 7:
        break     # Arrête à 7
    print(i)

# else avec boucle
print("\\nElse avec boucle:")
for i in range(5):
    print(i)
else:
    print("Boucle terminée normalement")

# Boucle while avec condition complexe
mot_de_passe = ""
while mot_de_passe != "python123":
    mot_de_passe = input("Entrez le mot de passe: ")
    if mot_de_passe == "python123":
        print("Accès autorisé!")
    else:
        print("Mot de passe incorrect")`,
        examplesCount: 15,
        difficulty: "Intermédiaire",
        keyPoints: [
          "for itère sur des séquences",
          "while répète tant qu'une condition est vraie",
          "range() génère des séquences de nombres",
          "break sort de la boucle, continue saute une itération",
          "else s'exécute si la boucle se termine normalement"
        ],
        completed: false,
        unlocked: false
      }
    ]
  },
  {
    name: "Structures de Données",
    chapters: [
      {
        title: "Listes et Tuples",
        description: "Manipulez des collections ordonnées de données",
        readTime: "40 min",
        quiz: [
          { question: "Quelle structure est mutable (modifiable) ?", options: ["Liste", "Tuple", "Les deux", "Aucune"], correct: 0 },
          { question: "Comment accéder au dernier élément d'une liste ?", options: ["list[0]", "list[-1]", "list.last()", "list[end]"], correct: 1 },
          { question: "Comment créer un tuple avec un seul élément ?", options: ["(1)", "(1,)", "[1]", "{1}"], correct: 1 }
        ],
        content: `
          <h2>Les Listes</h2>
          <p>Les listes sont des collections <strong>ordonnées</strong> et <strong>mutables</strong> (modifiables).</p>
          
          <h3>Création et Accès</h3>
          <pre><code>ma_liste = [1, 2, 3, "quatre", 5.0]
print(ma_liste[0])  # Premier élément
print(ma_liste[-1]) # Dernier élément</code></pre>
          
          <h3>Opérations sur les listes</h3>
          <ul>
            <li><code>append(x)</code> : ajoute à la fin</li>
            <li><code>insert(i, x)</code> : insère à l'index i</li>
            <li><code>remove(x)</code> : supprime la première occurrence</li>
            <li><code>pop(i)</code> : supprime et retourne l'élément à l'index i</li>
            <li><code>sort()</code> : trie la liste</li>
            <li><code>reverse()</code> : inverse l'ordre</li>
          </ul>
          
          <h2>Les Tuples</h2>
          <p>Les tuples sont des collections <strong>ordonnées</strong> mais <strong>immuables</strong> (non modifiables).</p>
          
          <h3>Création</h3>
          <pre><code>mon_tuple = (1, 2, 3)
vide = ()
singleton = (1,)  # Notez la virgule</code></pre>
          
          <h3>Avantages des tuples</h3>
          <ul>
            <li>Plus rapides que les listes</li>
            <li>Peuvent être utilisés comme clés de dictionnaire</li>
            <li>Sécurisent les données contre les modifications accidentelles</li>
            <li>Retournés par défaut par les fonctions avec multiples valeurs</li>
          </ul>
          
          <h2>Découpage (Slicing)</h2>
          <p>Commun aux listes et tuples :</p>
          <pre><code>sequence = [0, 1, 2, 3, 4, 5]
print(sequence[1:4])    # [1, 2, 3]
print(sequence[:3])     # [0, 1, 2]
print(sequence[3:])     # [3, 4, 5]
print(sequence[::2])    # [0, 2, 4]
print(sequence[::-1])   # [5, 4, 3, 2, 1, 0]</code></pre>
        `,
        examples: `# Listes - Création et manipulation
fruits = ["pomme", "banane", "orange"]
print(f"Liste originale: {fruits}")

# Ajout
fruits.append("kiwi")
print(f"Après append: {fruits}")

# Insertion
fruits.insert(1, "mangue")
print(f"Après insert: {fruits}")

# Suppression
fruits.remove("banane")
print(f"Après remove: {fruits}")

# Tri
fruits.sort()
print(f"Après sort: {fruits}")

# Longueur
print(f"Nombre de fruits: {len(fruits)}")

# Tuples
coordonnees = (48.8566, 2.3522)
print(f"\\nCoordonnées: {coordonnees}")

# Unpacking
lat, lon = coordonnees
print(f"Latitude: {lat}, Longitude: {lon}")

# Slicing
nombres = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(f"\\nSlicing:")
print(f"Premiers 3: {nombres[:3]}")
print(f"3 derniers: {nombres[-3:]}")
print(f"Pairs: {nombres[::2]}")
print(f"Inverse: {nombres[::-1]}")

# Liste de listes (matrice)
matrice = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
print(f"\\nMatrice 3x3: {matrice}")
print(f"Élément central: {matrice[1][1]}")

# Conversion
liste_tuple = tuple(fruits)
tuple_liste = list(coordonnees)
print(f"\\nConversion:")
print(f"Liste -> Tuple: {liste_tuple}")
print(f"Tuple -> Liste: {tuple_liste}")`,
        examplesCount: 18,
        difficulty: "Intermédiaire",
        keyPoints: [
          "Les listes sont mutables, les tuples sont immuables",
          "Utilisez [] pour les listes, () pour les tuples",
          "Le slicing permet d'extraire des sous-séquences",
          "Les tuples avec un élément nécessitent une virgule : (x,)",
          "append() ajoute, insert() insère, remove() supprime"
        ],
        completed: false,
        unlocked: false
      }
    ]
  }
]

// État
const selectedLevel = ref(0)
const selectedChapterIndex = ref(0)
const showQuiz = ref(false)
const mobileMenuOpen = ref(false)
const toast = ref({ visible: false, message: '', type: 'info' })
const levels = ref(PYTHON_LEVELS)

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
  const total = totalChapters.value
  const completed = completedCount.value
  return total > 0 ? Math.round((completed / total) * 100) : 0
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
function getLevelColor(levelIndex) {
  const colors = [
    '#10B981', // Vert émeraude
    '#3B82F6', // Bleu
    '#F59E0B', // Ambre
    '#8B5CF6', // Violet
    '#EF4444', // Rouge
    '#06B6D4'  // Cyan
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
  
  localStorage.setItem('python-learning-progress', JSON.stringify(progress))
}

function loadProgress() {
  const saved = localStorage.getItem('python-learning-progress')
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
      console.error('Erreur chargement progression Python:', error)
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
  color: #065f46;
}

.content-prose :deep(h2) {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 0.75rem;
  margin-bottom: 0.5rem;
  color: #047857;
}

.content-prose :deep(h3) {
  font-size: 1.125rem;
  font-weight: 600;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
  color: #059669;
}

.content-prose :deep(code) {
  background-color: #d1fae5;
  padding: 0.125rem 0.25rem;
  border-radius: 0.125rem;
  font-size: 0.8125rem;
  color: #065f46;
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

.content-prose :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

.content-prose :deep(th) {
  background-color: #d1fae5;
  padding: 0.5rem;
  text-align: left;
  border: 1px solid #a7f3d0;
}

.content-prose :deep(td) {
  padding: 0.5rem;
  border: 1px solid #a7f3d0;
}

/* Styles pour le code Python dans les exemples */
.bg-gray-900 pre {
  font-family: 'Courier New', monospace;
  line-height: 1.5;
}

.bg-gray-900 code {
  color: #f8fafc;
}

/* Couleurs syntaxiques Python (basiques) */
.bg-gray-900 .keyword {
  color: #f472b6; /* Rose pour les mots-clés */
}

.bg-gray-900 .string {
  color: #86efac; /* Vert pour les strings */
}

.bg-gray-900 .number {
  color: #60a5fa; /* Bleu pour les nombres */
}

.bg-gray-900 .comment {
  color: #94a3b8; /* Gris pour les commentaires */
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

/* Animation pour le toast */
@keyframes slideIn {
  from {
    transform: translateX(-50%) translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
}

.fixed.bottom-4 {
  animation: slideIn 0.3s ease-out;
}
</style>