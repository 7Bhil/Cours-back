<template>
  <div class="contact">
    <!-- En-tête -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">
        Contactez-moi
      </h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Une question sur une ressource ? Une suggestion ? Une demande spécifique ? N'hésitez pas à me contacter !
      </p>
    </div>

    <!-- Deux colonnes : Contact rapide + Formulaire -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      <!-- Contact rapide -->
      <div class="space-y-6">
        <!-- Email -->
        <div class="card">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <span class="text-2xl text-blue-600">📧</span>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900">Email</h3>
              <p class="text-gray-600">Réponse sous 24h en semaine</p>
            </div>
          </div>
          
          <div class="space-y-4">
            <a 
              href="mailto:7bhilal.chitou7@gmail.com"
              class="btn-primary w-full text-center block"
            >
              ✉️ Envoyer un email
            </a>
            
            <div class="p-4 bg-blue-50 rounded-lg">
              <p class="text-blue-800 text-sm">
                <span class="font-bold">Idéal pour :</span> Questions techniques détaillées, corrections, suggestions de contenu, collaborations.
              </p>
            </div>
          </div>
        </div>

        <!-- WhatsApp -->
        <div class="card">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
              <span class="text-2xl text-green-600">💬</span>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900">WhatsApp</h3>
              <p class="text-gray-600">Réponse rapide</p>
            </div>
          </div>
          
          <div class="space-y-4">
            <a 
              href="https://wa.me/22998874019?text=Bonjour%20Bhil$,%20j'ai%20une%20question"
              target="_blank"
              class="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg text-center block transition"
            >
              💬 Ouvrir WhatsApp
            </a>
            
            <div class="p-4 bg-green-50 rounded-lg">
              <p class="text-green-800 text-sm mb-2">
                <span class="font-bold">Disponibilité :</span> Lundi-Vendredi, 9h-18h
              </p>
              <p class="text-green-800 text-sm">
                <span class="font-bold">Idéal pour :</span> Discussions rapides, aide immédiate, clarification rapide.
              </p>
            </div>
          </div>
        </div>

        <!-- Autres infos -->
        <div class="card bg-gradient-to-r from-gray-50 to-blue-50">
          <h4 class="text-xl font-bold text-gray-900 mb-4">💡 Pour un contact efficace</h4>
          <ul class="space-y-3">
            <li class="flex items-start">
              <span class="text-blue-500 mr-3 mt-1">•</span>
              <div>
                <span class="font-medium text-gray-900">Précisez la technologie</span>
                <p class="text-gray-600 text-sm">ex: "Python", "React", "Sécurité Web"</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-blue-500 mr-3 mt-1">•</span>
              <div>
                <span class="font-medium text-gray-900">Décrivez clairement</span>
                <p class="text-gray-600 text-sm">Votre problème, question ou suggestion</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-blue-500 mr-3 mt-1">•</span>
              <div>
                <span class="font-medium text-gray-900">Partagez le contexte</span>
                <p class="text-gray-600 text-sm">Code, erreurs, capture d'écran si possible</p>
              </div>
            </li>
            <li class="flex items-start">
              <span class="text-blue-500 mr-3 mt-1">•</span>
              <div>
                <span class="font-medium text-gray-900">Indiquez votre niveau</span>
                <p class="text-gray-600 text-sm">Débutant, intermédiaire, avancé</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Formulaire de contact -->
      <div class="card">
        <h3 class="text-2xl font-bold text-gray-900 mb-6">Formulaire de contact</h3>
        
        <form @submit.prevent="sendMessage" class="space-y-6">
          <div>
            <label class="block text-gray-700 font-medium mb-2" for="name">
              Votre nom *
            </label>
            <input
              v-model="form.name"
              type="text"
              id="name"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="Votre nom"
            >
          </div>
          
          <div>
            <label class="block text-gray-700 font-medium mb-2" for="email">
              Votre email *
            </label>
            <input
              v-model="form.email"
              type="email"
              id="email"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="votre@email.com"
            >
          </div>
          
          <div>
            <label class="block text-gray-700 font-medium mb-2" for="subject">
              Sujet *
            </label>
            <select
              v-model="form.subject"
              id="subject"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
            >
              <option value="">Choisissez un sujet</option>
              <option value="python">Question sur Python</option>
              <option value="javascript">Question sur JavaScript</option>
              <option value="web">Parcours Web</option>
              <option value="cybersecurite">Cybersécurité/Réseaux</option>
              <option value="suggestion">Suggestion de contenu</option>
              <option value="correction">Correction/Erreur</option>
              <option value="collaboration">Collaboration</option>
              <option value="autre">Autre</option>
            </select>
          </div>
          
          <div>
            <label class="block text-gray-700 font-medium mb-2" for="message">
              Votre message *
            </label>
            <textarea
              v-model="form.message"
              id="message"
              rows="6"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="Décrivez votre question ou suggestion en détail..."
            ></textarea>
            <p class="text-gray-500 text-sm mt-2">
              Plus votre message est détaillé, plus je pourrai vous aider efficacement.
            </p>
          </div>
          
          <div class="flex items-start">
            <input
              v-model="form.newsletter"
              type="checkbox"
              id="newsletter"
              class="mt-1 mr-3"
            >
            <label for="newsletter" class="text-gray-700 text-sm">
              Je souhaite recevoir les nouvelles ressources et mises à jour par email (optionnel)
            </label>
          </div>
          
          <button
            type="submit"
            class="w-full btn-primary"
          >
            📤 Envoyer le message
          </button>
          
          <p class="text-gray-500 text-sm text-center">
            * Champs obligatoires. Vos données ne seront utilisées que pour répondre à votre message.
          </p>
        </form>
      </div>
    </div>

    <!-- FAQ -->
    <div class="card bg-gradient-to-r from-purple-50 to-pink-50">
      <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">❓ Questions fréquentes</h3>
      
      <div class="space-y-4">
        <div class="bg-white p-4 rounded-lg">
          <h4 class="font-bold text-gray-900 mb-2">Les ressources sont-elles vraiment gratuites ?</h4>
          <p class="text-gray-600">Oui, toutes les ressources sur Bhil$ sont 100% gratuites. C'est un projet éducatif bénévole.</p>
        </div>
        
        <div class="bg-white p-4 rounded-lg">
          <h4 class="font-bold text-gray-900 mb-2">Puis-je proposer du contenu ou des corrections ?</h4>
          <p class="text-gray-600">Absolument ! Envoyez-moi un email avec votre proposition. Les contributions sont les bienvenues.</p>
        </div>
        
        <div class="bg-white p-4 rounded-lg">
          <h4 class="font-bold text-gray-900 mb-2">Y aura-t-il des vidéos ou cours en ligne ?</h4>
          <p class="text-gray-600">Pour l'instant, le contenu est sous forme écrite (PDF). Les vidéos sont envisagées pour l'avenir.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
        newsletter: false
      }
    }
  },
  methods: {
    sendMessage() {
      // En front-end, on utilise mailto: pour ouvrir le client mail
      const subject = `Contact Bhil$: ${this.getSubjectText(this.form.subject)} - ${this.form.name}`;
      const body = `Nom: ${this.form.name}
Email: ${this.form.email}
Sujet: ${this.getSubjectText(this.form.subject)}
Newsletter: ${this.form.newsletter ? 'Oui' : 'Non'}

Message:
${this.form.message}`;

      window.location.href = `mailto:7bhilal.chitou7@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Réinitialiser le formulaire
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: '',
        newsletter: false
      };
      
      alert('Votre client mail va s\'ouvrir. Veuillez envoyer le message depuis votre application email.');
    },
    getSubjectText(value) {
      const subjects = {
        'python': 'Question sur Python',
        'javascript': 'Question sur JavaScript',
        'web': 'Parcours Web',
        'cybersecurite': 'Cybersécurité/Réseaux',
        'suggestion': 'Suggestion de contenu',
        'correction': 'Correction/Erreur',
        'collaboration': 'Collaboration',
        'autre': 'Autre sujet'
      };
      return subjects[value] || 'Autre sujet';
    }
  }
}
</script>