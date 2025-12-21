<template>
  <div class="cybersecurity">
    <!-- En-tête -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">
        Cybersécurité & Réseaux
      </h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Apprenez à sécuriser les systèmes, réseaux et applications contre les cybermenaces.
      </p>
    </div>

    <!-- Deux colonnes : Cybersécurité + Réseaux -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      <!-- Cybersécurité -->
      <div class="card">
        <div class="flex items-center mb-6">
          <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
            <span class="text-2xl text-red-600">🛡️</span>
          </div>
          <h2 class="text-3xl font-bold text-gray-900">Cybersécurité</h2>
        </div>
        
        <div class="space-y-4 mb-6">
          <div class="flex items-start">
            <span class="text-green-500 mr-3 mt-1">✓</span>
            <div>
              <h3 class="font-bold text-gray-900">Sécurité Web</h3>
              <p class="text-gray-600 text-sm">OWASP Top 10, injections SQL, XSS, CSRF</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <span class="text-green-500 mr-3 mt-1">✓</span>
            <div>
              <h3 class="font-bold text-gray-900">Cryptographie</h3>
              <p class="text-gray-600 text-sm">Hashing, chiffrement symétrique/asymétrique, SSL/TLS</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <span class="text-green-500 mr-3 mt-1">✓</span>
            <div>
              <h3 class="font-bold text-gray-900">Pentesting</h3>
              <p class="text-gray-600 text-sm">Tests d'intrusion, outils Kali Linux, méthodologie</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <span class="text-green-500 mr-3 mt-1">✓</span>
            <div>
              <h3 class="font-bold text-gray-900">Sécurité système</h3>
              <p class="text-gray-600 text-sm">Hardening, audits de sécurité, journaux d'événements</p>
            </div>
          </div>
        </div>
        
        <div class="mt-6 pt-6 border-t border-gray-200">
          <h4 class="font-bold text-gray-900 mb-3">Ressources disponibles :</h4>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              PDF Résumés
            </span>
            <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              Exercices pratiques
            </span>
            <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
              Labs virtuels
            </span>
            <span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
              Études de cas
            </span>
          </div>
          
          <a 
            href="mailto:7bhilal.chitou7@gmail.com?subject=Question Cybersécurité"
            class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
          >
            <span class="mr-2">📧</span> Poser une question spécifique
          </a>
        </div>
      </div>

      <!-- Réseaux -->
      <div class="card">
        <div class="flex items-center mb-6">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
            <span class="text-2xl text-blue-600">🌐</span>
          </div>
          <h2 class="text-3xl font-bold text-gray-900">Réseaux</h2>
        </div>
        
        <div class="space-y-4 mb-6">
          <div class="flex items-start">
            <span class="text-green-500 mr-3 mt-1">✓</span>
            <div>
              <h3 class="font-bold text-gray-900">Réseaux TCP/IP</h3>
              <p class="text-gray-600 text-sm">Modèle OSI, protocoles, sous-réseaux, routage</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <span class="text-green-500 mr-3 mt-1">✓</span>
            <div>
              <h3 class="font-bold text-gray-900">Services Réseau</h3>
              <p class="text-gray-600 text-sm">DNS, DHCP, HTTP/HTTPS, FTP, SSH</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <span class="text-green-500 mr-3 mt-1">✓</span>
            <div>
              <h3 class="font-bold text-gray-900">Sécurité Réseau</h3>
              <p class="text-gray-600 text-sm">Firewalls, VPN, IDS/IPS, segmentation réseau</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <span class="text-green-500 mr-3 mt-1">✓</span>
            <div>
              <h3 class="font-bold text-gray-900">Administration</h3>
              <p class="text-gray-600 text-sm">Cisco, matériel réseau, monitoring, dépannage</p>
            </div>
          </div>
        </div>
        
        <div class="mt-6 pt-6 border-t border-gray-200">
          <h4 class="font-bold text-gray-900 mb-3">Matériel disponible :</h4>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              Schémas réseaux
            </span>
            <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              Configurations pratiques
            </span>
            <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
              Cas réels d'étude
            </span>
            <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
              Exercices Packet Tracer
            </span>
          </div>
          
          <a 
            href="https://wa.me/22998874019?text=Bonjour, question sur les réseaux"
            target="_blank"
            class="inline-flex items-center text-green-600 font-semibold hover:text-green-700"
          >
            <span class="mr-2">💬</span> Discuter sur WhatsApp
          </a>
        </div>
      </div>
    </div>

    <!-- Téléchargements -->
    <div class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">📥 Téléchargements disponibles</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a href="#" class="card hover:border-blue-500 hover:shadow-xl transition-all group">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-red-200">
              <span class="text-2xl text-red-600">📄</span>
            </div>
            <div>
              <h4 class="font-bold text-gray-900">Guide Cybersécurité Débutant</h4>
              <p class="text-gray-600 text-sm">PDF • 2.4 MB • 45 pages</p>
            </div>
          </div>
          <p class="text-gray-600 text-sm">Introduction aux concepts de base de la sécurité informatique</p>
          <div class="mt-4 flex justify-between items-center">
            <span class="text-blue-600 font-semibold">Télécharger</span>
            <span class="text-gray-400 text-sm">👥 245 téléchargements</span>
          </div>
        </a>
        
        <a href="#" class="card hover:border-blue-500 hover:shadow-xl transition-all group">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200">
              <span class="text-2xl text-blue-600">🔧</span>
            </div>
            <div>
              <h4 class="font-bold text-gray-900">Exercices Réseaux</h4>
              <p class="text-gray-600 text-sm">ZIP • 1.8 MB • 15 exercices</p>
            </div>
          </div>
          <p class="text-gray-600 text-sm">Pratiquez la configuration réseau avec des scénarios réels</p>
          <div class="mt-4 flex justify-between items-center">
            <span class="text-blue-600 font-semibold">Télécharger</span>
            <span class="text-gray-400 text-sm">👥 189 téléchargements</span>
          </div>
        </a>
        
        <a href="#" class="card hover:border-blue-500 hover:shadow-xl transition-all group">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-200">
              <span class="text-2xl text-green-600">✅</span>
            </div>
            <div>
              <h4 class="font-bold text-gray-900">Corrigés Sécurité Web</h4>
              <p class="text-gray-600 text-sm">PDF • 3.1 MB • Solutions détaillées</p>
            </div>
          </div>
          <p class="text-gray-600 text-sm">Corrigés commentés des exercices de sécurité web</p>
          <div class="mt-4 flex justify-between items-center">
            <span class="text-blue-600 font-semibold">Télécharger</span>
            <span class="text-gray-400 text-sm">👥 312 téléchargements</span>
          </div>
        </a>
      </div>
    </div>

    <!-- Certifications -->
    <div class="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8">
      <h2 class="text-3xl font-bold mb-6 text-center">🎓 Préparation aux certifications</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-gray-800 p-6 rounded-xl">
          <h4 class="font-bold text-lg mb-2">CompTIA Security+</h4>
          <p class="text-gray-300 text-sm mb-4">Certification de base en sécurité</p>
          <ul class="text-gray-400 text-sm space-y-1">
            <li>• Ressources de révision</li>
            <li>• Questions pratiques</li>
            <li>• Guide d'étude</li>
          </ul>
        </div>
        
        <div class="bg-gray-800 p-6 rounded-xl">
          <h4 class="font-bold text-lg mb-2">CEH (Ethical Hacker)</h4>
          <p class="text-gray-300 text-sm mb-4">Hacking éthique</p>
          <ul class="text-gray-400 text-sm space-y-1">
            <li>• Méthodologies</li>
            <li>• Outils et techniques</li>
            <li>• Labs pratiques</li>
          </ul>
        </div>
        
        <div class="bg-gray-800 p-6 rounded-xl">
          <h4 class="font-bold text-lg mb-2">CCNA (Cisco)</h4>
          <p class="text-gray-300 text-sm mb-4">Réseaux Cisco</p>
          <ul class="text-gray-400 text-sm space-y-1">
            <li>• Configurations routeur/switch</li>
            <li>• Exercices Packet Tracer</li>
            <li>• Préparation examen</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CybersecurityView'
}
</script>