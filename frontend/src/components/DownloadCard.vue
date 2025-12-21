<template>
  <div class="download-card card hover:shadow-xl transition-all duration-300 group">
    <div class="flex items-start mb-4">
      <div class="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center mr-4"
           :class="iconClass">
        <span class="text-xl">{{ icon }}</span>
      </div>
      <div class="flex-grow">
        <h4 class="font-bold text-gray-900">{{ title }}</h4>
        <p class="text-gray-600 text-sm">{{ description }}</p>
        <div class="mt-2 flex items-center text-gray-500 text-sm">
          <span>{{ format }}</span>
          <span class="mx-2">•</span>
          <span>{{ size }}</span>
          <span class="mx-2">•</span>
          <span>👥 {{ downloads }} téléchargements</span>
        </div>
      </div>
    </div>
    
    <a 
      :href="filePath"
      :download="fileName"
      class="block w-full btn-primary text-center mt-4"
    >
      📥 Télécharger
    </a>
  </div>
</template>

<script>
export default {
  name: 'DownloadCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    filePath: {
      type: String,
      required: true
    },
    fileName: {
      type: String,
      required: true
    },
    format: {
      type: String,
      default: 'PDF'
    },
    size: {
      type: String,
      default: '2.4MB'
    },
    downloads: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: 'pdf', // pdf, exercise, solution
      validator: (value) => ['pdf', 'exercise', 'solution'].includes(value)
    }
  },
  computed: {
    icon() {
      const icons = {
        pdf: '📄',
        exercise: '💪',
        solution: '✅'
      }
      return icons[this.type] || '📄'
    },
    iconClass() {
      const classes = {
        pdf: 'bg-blue-100 text-blue-600',
        exercise: 'bg-green-100 text-green-600',
        solution: 'bg-purple-100 text-purple-600'
      }
      return classes[this.type] || 'bg-gray-100 text-gray-600'
    }
  }
}
</script>