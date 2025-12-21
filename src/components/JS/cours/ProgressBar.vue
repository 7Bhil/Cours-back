<!-- components/ProgressBar.vue -->
<template>
  <div class="progress-bar">
    <div class="flex justify-between mb-1">
      <span class="font-medium text-gray-700" :class="textSize">
        {{ title }}
      </span>
      <span class="font-bold" :class="[`text-${color}-600`, textSize]">
        {{ value }}%
      </span>
    </div>
    <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
      <div 
        class="h-full rounded-full transition-all duration-700 ease-out"
        :class="`bg-${color}-500`"
        :style="{ width: value + '%' }"
      ></div>
    </div>
    <div v-if="showActions" class="mt-2 flex justify-between">
      <button 
        @click="$emit('increase')"
        class="text-sm font-medium text-blue-600 hover:text-blue-800 transition"
      >
        +10%
      </button>
      <button 
        @click="$emit('reset')"
        class="text-sm text-gray-500 hover:text-gray-700 transition"
      >
        Réinitialiser
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  value: Number,
  color: {
    type: String,
    default: 'blue'
  },
  textSize: {
    type: String,
    default: 'text-sm'
  },
  showActions: {
    type: Boolean,
    default: false
  }
})

defineEmits(['increase', 'reset'])
</script>