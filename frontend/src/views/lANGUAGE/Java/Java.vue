<template>
  <div class="java-page bg-white">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-b from-red-50 to-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Bouton de retour en haut à gauche -->
        <div class="mb-8 md:mb-12">
          <router-link 
            to="/langages"
            class="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-red-200 text-gray-700 font-medium rounded-lg hover:bg-red-50 hover:border-red-300 hover:shadow-md transition-all duration-200 group"
          >
            <svg class="w-4 h-4 text-gray-600 group-hover:text-red-600 transition-colors" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            <span class="text-sm">Retour</span>
          </router-link>
        </div>

        <div class="flex flex-col md:flex-row items-center gap-8">
          <!-- Logo Java -->
          <div class="flex-shrink-0">
            <div class="w-24 h-24 bg-gradient-to-br from-red-500 via-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg group hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <!-- Logo Java textuel élégant -->
              <span class="text-4xl font-bold text-white tracking-tighter">
                <svg class="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/>
                </svg>
              </span>
            </div>
          </div>

          <!-- Texte amélioré -->
          <div class="flex-1 text-center md:text-left">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Java Masterclass
            </h1>
            <p class="text-xl text-gray-600 mb-6">
              Maîtrisez Java de A à Z avec un parcours complet. Du développement d'applications d'entreprise aux microservices modernes.
            </p>
            
            <!-- Bouton d'accès au cours -->
            <div class="flex flex-col sm:flex-row items-center gap-4 mb-6">
              <router-link 
                to="/java/cours"
                class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-xl hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group"
              >
                <svg class="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
                Démarrer le cours interactif
              </router-link>

              <!-- Bouton retour secondaire (mobile seulement) -->
              <router-link 
                to="/"
                class="sm:hidden inline-flex items-center gap-2 px-6 py-3 border border-red-300 text-gray-700 font-medium rounded-lg hover:bg-red-50 transition-all"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
                Retour
              </router-link>
            </div>

            <!-- Badges améliorés -->
            <div class="flex flex-wrap gap-3 justify-center md:justify-start">
              <span class="px-4 py-2 bg-white border border-red-100 rounded-lg text-sm font-medium text-gray-700 hover:border-red-300 transition-colors hover:shadow-sm">
                <span class="text-red-500 mr-1">🏢</span> Applications Entreprise
              </span>
              <span class="px-4 py-2 bg-white border border-orange-100 rounded-lg text-sm font-medium text-gray-700 hover:border-orange-300 transition-colors hover:shadow-sm">
                <span class="text-orange-500 mr-1">🌐</span> Spring Boot
              </span>
              <span class="px-4 py-2 bg-white border border-red-100 rounded-lg text-sm font-medium text-gray-700 hover:border-red-300 transition-colors hover:shadow-sm">
                <span class="text-red-500 mr-1">📱</span> Android
              </span>
              <span class="px-4 py-2 bg-white border border-orange-100 rounded-lg text-sm font-medium text-gray-700 hover:border-orange-300 transition-colors hover:shadow-sm">
                <span class="text-orange-500 mr-1">⚡</span> Microservices
              </span>
            </div>
          </div>
        </div>

        <!-- Statistiques -->
        <div class="mt-12 pt-8 border-t border-red-100">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div class="text-center p-4 bg-red-50/50 rounded-xl border border-red-100 hover:border-red-200 transition-colors">
              <div class="text-2xl font-bold text-gray-900">40+</div>
              <div class="text-sm text-red-600 font-medium">Chapitres</div>
            </div>
            <div class="text-center p-4 bg-orange-50/50 rounded-xl border border-orange-100 hover:border-orange-200 transition-colors">
              <div class="text-2xl font-bold text-gray-900">50+</div>
              <div class="text-sm text-orange-600 font-medium">Exercices pratiques</div>
            </div>
            <div class="text-center p-4 bg-red-50/50 rounded-xl border border-red-100 hover:border-red-200 transition-colors">
              <div class="text-2xl font-bold text-gray-900">30+</div>
              <div class="text-sm text-red-600 font-medium">Heures de contenu</div>
            </div>
            <div class="text-center p-4 bg-orange-50/50 rounded-xl border border-orange-100 hover:border-orange-200 transition-colors">
              <div class="text-2xl font-bold text-gray-900">100%</div>
              <div class="text-sm text-orange-600 font-medium">Orienté Projet</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Navigation rapide -->
    <section class="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex space-x-8 overflow-x-auto py-4">
          <button @click="scrollTo('installation')" class="text-sm font-medium text-gray-600 hover:text-red-600 whitespace-nowrap transition-colors focus:outline-none">
            Installation
          </button>
          <button @click="scrollTo('bases')" class="text-sm font-medium text-gray-600 hover:text-red-600 whitespace-nowrap transition-colors focus:outline-none">
            POO Java
          </button>
          <button @click="scrollTo('domaines')" class="text-sm font-medium text-gray-600 hover:text-red-600 whitespace-nowrap transition-colors focus:outline-none">
            Écosystème Java
          </button>
          <button @click="scrollTo('ressources')" class="text-sm font-medium text-gray-600 hover:text-red-600 whitespace-nowrap transition-colors focus:outline-none">
            Ressources
          </button>
          <button @click="scrollTo('quiz')" class="text-sm font-medium text-gray-600 hover:text-red-600 whitespace-nowrap transition-colors focus:outline-none">
            Quiz rapide
          </button>
        </nav>
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Contenu principal -->
        <div class="lg:col-span-2 space-y-12">
          <!-- Installation - Version simplifiée -->
          <section id="installation" class="scroll-mt-32">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">🏗️ Installation de Java</h2>
            
            <div class="bg-gradient-to-r from-red-50 to-orange-100 border border-red-200 rounded-lg p-6 mb-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">JDK (Java Development Kit)</h3>
              <p class="text-gray-700 mb-4">
                Installez le JDK pour développer en Java :
              </p>
              <div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto mb-4">
                <pre># Téléchargez depuis https://jdk.java.net
# JDK 17+ recommandé (LTS)

# Vérification
java --version
# Doit afficher : java 17.x.x

javac --version
# Doit afficher : javac 17.x.x</pre>
              </div>
              
              <div class="bg-gradient-to-r from-amber-100 to-amber-50 border border-amber-300 rounded-lg p-4">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <div>
                    <p class="text-sm font-medium text-amber-800 mb-1">Conseil Pro</p>
                    <p class="text-sm text-amber-700">
                      Choisissez JDK 17 (LTS) pour la stabilité et le support à long terme. Configurez JAVA_HOME dans les variables d'environnement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-r from-orange-50 to-red-100 border border-orange-200 rounded-lg p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">IDE Recommandés</h3>
              <p class="text-gray-700 mb-4">
                Pour un développement Java efficace :
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-white p-4 rounded-lg border border-gray-200">
                  <div class="flex items-center mb-2">
                    <div class="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-md flex items-center justify-center mr-3">
                      <span class="text-white font-bold text-xs">I</span>
                    </div>
                    <h4 class="font-bold text-gray-900">IntelliJ IDEA</h4>
                  </div>
                  <p class="text-sm text-gray-600">IDE le plus populaire pour Java</p>
                </div>
                <div class="bg-white p-4 rounded-lg border border-gray-200">
                  <div class="flex items-center mb-2">
                    <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-md flex items-center justify-center mr-3">
                      <span class="text-white font-bold text-xs">V</span>
                    </div>
                    <h4 class="font-bold text-gray-900">VS Code</h4>
                  </div>
                  <p class="text-sm text-gray-600">Avec extensions Java</p>
                </div>
              </div>
            </div>
          </section>

          <!-- POO Java - Version concise -->
          <section id="bases" class="scroll-mt-32">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">📚 Programmation Orientée Objet</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Classes & Objets -->
              <div class="bg-gradient-to-br from-red-50 to-white border border-red-200 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-900 mb-3">Classes & Objets</h3>
                <div class="bg-gray-900 text-gray-100 rounded-lg p-3 font-mono text-sm overflow-x-auto mb-3">
                  <pre>public class Personne {
    private String nom;
    private int age;
    
    // Constructeur
    public Personne(String nom, int age) {
        this.nom = nom;
        this.age = age;
    }
    
    // Méthode
    public void sePresenter() {
        System.out.println("Je m'appelle " + nom);
    }
}</pre>
                </div>
                <p class="text-sm text-gray-600">
                  Encapsulation avec <code class="bg-red-100 px-1.5 py-0.5 rounded">private</code> et constructeurs.
                </p>
              </div>

              <!-- Héritage -->
              <div class="bg-gradient-to-br from-orange-50 to-white border border-orange-200 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-900 mb-3">Héritage</h3>
                <div class="bg-gray-900 text-gray-100 rounded-lg p-3 font-mono text-sm overflow-x-auto mb-3">
                  <pre>public class Etudiant 
       extends Personne {
    
    private String formation;
    
    public Etudiant(String nom, 
                    int age, 
                    String formation) {
        super(nom, age);
        this.formation = formation;
    }
}</pre>
                </div>
                <p class="text-sm text-gray-600">
                  Mot-clé <code class="bg-orange-100 px-1.5 py-0.5 rounded">extends</code> pour l'héritage, <code>super()</code> pour le constructeur parent.
                </p>
              </div>

              <!-- Interfaces -->
              <div class="bg-gradient-to-br from-amber-50 to-white border border-amber-200 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-900 mb-3">Interfaces</h3>
                <div class="bg-gray-900 text-gray-100 rounded-lg p-3 font-mono text-sm overflow-x-auto mb-3">
                  <pre>public interface Vehicule {
    void demarrer();
    void arreter();
}

public class Voiture 
       implements Vehicule {
    
    public void demarrer() {
        System.out.println("Voiture démarre");
    }
    
    public void arreter() {
        System.out.println("Voiture arrêtée");
    }
}</pre>
                </div>
                <p class="text-sm text-gray-600">
                  <code class="bg-amber-100 px-1.5 py-0.5 rounded">interface</code> définit un contrat, <code>implements</code> pour l'implémenter.
                </p>
              </div>

              <!-- Collections -->
              <div class="bg-gradient-to-br from-red-100 to-white border border-red-300 rounded-xl p-6">
                <h3 class="text-lg font-bold text-gray-900 mb-3">Collections</h3>
                  <div class="bg-gray-900 text-gray-100 rounded-lg p-3 font-mono text-sm overflow-x-auto mb-3">
                    <pre>// Liste (ArrayList)
List&lt;String&gt; noms = new ArrayList&lt;&gt;();
noms.add("Alice");

// Map (HashMap)
Map&lt;String, Integer&gt; ages = 
    new HashMap&lt;&gt;();
ages.put("Alice", 25);</pre>
                </div>
                <p class="text-sm text-gray-600">
                  Collections typées avec génériques <code>&lt;Type&gt;</code>.
                </p>
              </div>
            </div>
          </section>

          <!-- Écosystème Java -->
          <section id="domaines" class="scroll-mt-32">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">🎯 Écosystème Java</h2>
            
            <div class="space-y-4">
              <div class="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 pl-6 pr-4 py-4">
                <h3 class="text-lg font-bold text-gray-900 mb-2">Spring Boot</h3>
                <p class="text-gray-700 mb-2">Framework pour applications d'entreprise</p>
                <div class="bg-gray-800 text-gray-100 rounded-lg p-3 font-mono text-sm overflow-x-auto">
                  <pre>@SpringBootApplication
public class MonApplication {
    public static void main(String[] args) {
        SpringApplication.run(
            MonApplication.class, args);
    }
}

@RestController
public class MonController {
    @GetMapping("/hello")
    public String hello() {
        return "Hello World!";
    }
}</pre>
                </div>
              </div>

              <div class="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 pl-6 pr-4 py-4">
                <h3 class="text-lg font-bold text-gray-900 mb-2">Android</h3>
                <p class="text-gray-700 mb-2">Développement d'applications mobiles</p>
                <div class="bg-gray-800 text-gray-100 rounded-lg p-3 font-mono text-sm overflow-x-auto">
                  <pre>public class MainActivity 
       extends AppCompatActivity {
    
    @Override
    protected void onCreate(
            Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        TextView textView = findViewById(
            R.id.textView);
        textView.setText("Bonjour Android!");
    }
}</pre>
                </div>
              </div>

              <div class="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-600 pl-6 pr-4 py-4">
                <h3 class="text-lg font-bold text-gray-900 mb-2">Microservices</h3>
                <p class="text-gray-700 mb-2">Architecture moderne avec Spring Cloud</p>
                <div class="bg-gray-800 text-gray-100 rounded-lg p-3 font-mono text-sm overflow-x-auto">
                  <pre>@SpringBootApplication
@EnableEurekaClient
public class UserService {
    
    @Bean
    @LoadBalanced
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
    
    @GetMapping("/users/{id}")
    public User getUser(@PathVariable Long id) {
        return userRepository.findById(id);
    }
}</pre>
                </div>
              </div>
            </div>
          </section>

          <!-- Ressources -->
          <section id="ressources" class="scroll-mt-32">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-3xl font-bold text-gray-900">📁 Ressources de formation</h2>
              <span class="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">PDF • Gratuit</span>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Guide -->
              <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div class="flex items-start mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 text-lg mb-1">Guide Complet Java</h3>
                    <p class="text-sm text-gray-600 mb-2">De la syntaxe à Spring Boot</p>
                    <div class="flex items-center text-xs">
                      <span class="text-gray-500 mr-3">📄 55 pages</span>
                      <span class="text-gray-500">⚡ 4.2 MB</span>
                    </div>
                  </div>
                </div>
                <button 
                  @click="downloadPDF('guide-java.pdf')"
                  class="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span class="flex items-center justify-center">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                    </svg>
                    Télécharger le guide
                  </span>
                </button>
              </div>

              <!-- Spring Boot -->
              <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div class="flex items-start mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 text-lg mb-1">Spring Boot Masterclass</h3>
                    <p class="text-sm text-gray-600 mb-2">API REST, sécurité, bases de données</p>
                    <div class="flex items-center text-xs">
                      <span class="text-gray-500 mr-3">📄 70 pages</span>
                      <span class="text-gray-500">⚡ 5.1 MB</span>
                    </div>
                  </div>
                </div>
                <button 
                  @click="downloadPDF('spring-boot.pdf')"
                  class="w-full bg-gradient-to-r from-green-600 to-emerald-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-800 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span class="flex items-center justify-center">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                    </svg>
                    Télécharger Spring Boot
                  </span>
                </button>
              </div>

              <!-- Design Patterns -->
              <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div class="flex items-start mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 text-lg mb-1">Design Patterns Java</h3>
                    <p class="text-sm text-gray-600 mb-2">Singleton, Factory, Observer, etc.</p>
                    <div class="flex items-center text-xs">
                      <span class="text-gray-500 mr-3">📄 60 pages</span>
                      <span class="text-gray-500">⚡ 4.5 MB</span>
                    </div>
                  </div>
                </div>
                <button 
                  @click="downloadPDF('design-patterns-java.pdf')"
                  class="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span class="flex items-center justify-center">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                    </svg>
                    Télécharger Design Patterns
                  </span>
                </button>
              </div>

              <!-- Android -->
              <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div class="flex items-start mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 text-lg mb-1">Android avec Java</h3>
                    <p class="text-sm text-gray-600 mb-2">UI, activités, fragments, API REST</p>
                    <div class="flex items-center text-xs">
                      <span class="text-gray-500 mr-3">📄 80 pages</span>
                      <span class="text-gray-500">⚡ 6.2 MB</span>
                    </div>
                  </div>
                </div>
                <button 
                  @click="downloadPDF('android-java.pdf')"
                  class="w-full bg-gradient-to-r from-green-600 to-cyan-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-cyan-800 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span class="flex items-center justify-center">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                    </svg>
                    Télécharger Android Guide
                  </span>
                </button>
              </div>
            </div>
          </section>

          <!-- Quiz rapide -->
          <section id="quiz" class="scroll-mt-32">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">🧠 Quiz rapide</h2>
            
            <div class="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-6">
              <div class="mb-4">
                <span class="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                  Question 1/3
                </span>
              </div>
              
              <h3 class="text-lg font-bold text-gray-900 mb-4">
                Quelle est la différence entre <code class="bg-red-100 px-2 py-1 rounded">abstract class</code> et <code class="bg-red-100 px-2 py-1 rounded">interface</code> en Java ?
              </h3>
              
              <div class="space-y-3 mb-6">
                <label class="flex items-center p-3 bg-white border border-gray-300 rounded-lg hover:border-red-400 cursor-pointer transition-colors">
                  <input type="radio" name="quiz1" value="1" class="mr-3" v-model="quizAnswer">
                  <span class="text-gray-700">Les deux sont identiques, juste des noms différents</span>
                </label>
                <label class="flex items-center p-3 bg-white border border-gray-300 rounded-lg hover:border-red-400 cursor-pointer transition-colors">
                  <input type="radio" name="quiz1" value="2" class="mr-3" v-model="quizAnswer">
                  <span class="text-gray-700">Les interfaces peuvent avoir des attributs, pas les classes abstraites</span>
                </label>
                <label class="flex items-center p-3 bg-white border border-gray-300 rounded-lg hover:border-red-400 cursor-pointer transition-colors">
                  <input type="radio" name="quiz1" value="3" class="mr-3" v-model="quizAnswer">
                  <span class="text-gray-700">Les classes abstraites peuvent avoir des implémentations, les interfaces non (avant Java 8)</span>
                </label>
              </div>
              
              <button 
                @click="checkQuiz"
                class="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold py-3 rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Vérifier ma réponse
              </button>
            </div>
          </section>

          <!-- CTA Final -->
          <section class="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h3 class="text-2xl md:text-3xl font-bold mb-4">🚀 Prêt à maîtriser Java ?</h3>
            <p class="text-red-100 mb-6 text-lg">
              Rejoignez notre cours interactif avec progression, projets réels et apprentissage personnalisé !
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <router-link 
                to="/java/cours"
                class="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-red-400 to-orange-400 text-white font-bold rounded-xl hover:from-red-500 hover:to-orange-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group"
              >
                <svg class="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
                Démarrer le cours interactif
              </router-link>
              
              <button 
                @click="showDemo"
                class="px-8 py-3.5 bg-white/20 backdrop-blur-sm text-white font-medium rounded-xl hover:bg-white/30 transition-colors border border-white/30"
              >
                Voir une démo
              </button>
            </div>
            
            <div class="grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div class="text-center">
                <div class="text-2xl font-bold">40</div>
                <div class="text-xs text-red-200">Chapitres</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold">150+</div>
                <div class="text-xs text-red-200">Exercices</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold">4</div>
                <div class="text-xs text-red-200">Projets réels</div>
              </div>
            </div>
          </section>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <div class="sticky top-32 space-y-6">
            <!-- Explorer plus -->
            <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 class="text-lg font-bold text-gray-900 mb-4">📌 Explorer plus</h3>
              <div class="space-y-3">
                <router-link 
                  to="/java/cours"
                  class="flex items-center justify-between bg-gradient-to-r from-red-50 to-orange-100 border border-red-200 text-red-700 py-3 px-4 rounded-lg font-medium hover:from-red-100 hover:to-orange-200 transition-all group"
                >
                  <div class="flex items-center">
                    <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                    <span>Cours interactif</span>
                  </div>
                  <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </router-link>
              </div>
              
              <div class="mt-4 pt-4 border-t border-gray-200">
                <p class="text-xs text-gray-500 text-center">
                  Cliquez pour découvrir le cours interactif
                </p>
              </div>
            </div>

            <!-- Pourquoi Java ? -->
            <div class="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-xl p-6">
              <h3 class="text-lg font-bold text-gray-900 mb-3">☕ Pourquoi Java ?</h3>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-orange-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-sm text-gray-700">Portabilité "Write Once, Run Anywhere"</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-orange-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-sm text-gray-700">Performances élevées (JVM)</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-4 h-4 text-orange-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-sm text-gray-700">Écosystème immense (Spring, Android...)</span>
                </li>
              </ul>
            </div>

            <!-- Conseils -->
            <div class="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl p-6">
              <div class="flex items-start">
                <div class="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-sm font-bold text-gray-900 mb-1">Astuce Pro</p>
                  <p class="text-xs text-gray-700">
                    Maîtrisez les concepts POO avant d'aborder Spring Boot ou Android.
                  </p>
                </div>
              </div>
            </div>

            <!-- Frameworks populaires -->
            <div class="bg-white border border-gray-200 rounded-xl p-6">
              <h3 class="text-lg font-bold text-gray-900 mb-3">⚡ Frameworks populaires</h3>
              <div class="space-y-2">
                <div class="flex items-center text-sm">
                  <div class="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span class="text-gray-700">Spring Boot - Applications web</span>
                </div>
                <div class="flex items-center text-sm">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span class="text-gray-700">Hibernate - ORM</span>
                </div>
                <div class="flex items-center text-sm">
                  <div class="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                  <span class="text-gray-700">Android SDK - Mobile</span>
                </div>
                <div class="flex items-center text-sm">
                  <div class="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  <span class="text-gray-700">Apache Kafka - Streaming</span>
                </div>
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
  name: 'JavaLandingPage',
  data() {
    return {
      quizAnswer: null
    }
  },
  methods: {
    scrollTo(id) {
      const element = document.getElementById(id);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        history.pushState(null, null, `#${id}`);
      }
    },
    
    downloadPDF(filename) {
      alert(`✅ Téléchargement de "${filename}" démarré !`);
    },
    
    checkQuiz() {
      if (this.quizAnswer === '3') {
        alert('🎉 Bravo ! Les classes abstraites peuvent avoir des implémentations (méthodes concrètes), les interfaces non (avant Java 8).');
      } else if (this.quizAnswer) {
        alert('❌ Presque ! La bonne réponse est : Les classes abstraites peuvent avoir des implémentations, les interfaces non (avant Java 8).');
      } else {
        alert('⚠️ Sélectionnez une réponse avant de vérifier.');
      }
    },
    
    showDemo() {
      alert("🎬 Découvrez notre cours interactif Java avec :\n\n✅ 40 chapitres progressifs\n✅ 4 projets réels (Spring Boot, Android)\n✅ Quiz après chaque chapitre\n✅ Progression sauvegardée\n✅ Support complet\n✅ Interface moderne et intuitive\n\nCliquez sur 'Démarrer le cours interactif' pour commencer !");
    },
    
    initScrollFromUrl() {
      if (window.location.hash) {
        const hash = window.location.hash.replace('#', '');
        setTimeout(() => {
          this.scrollTo(hash);
        }, 100);
      }
    }
  },
  mounted() {
    this.initScrollFromUrl();
    window.addEventListener('hashchange', () => {
      this.initScrollFromUrl();
    });
  }
}
</script>

<style scoped>
.scroll-mt-32 {
  scroll-margin-top: 8rem;
}

.java-page {
  min-height: 100vh;
}

/* Styles pour le code */
code {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.875em;
}

/* Effets d'ombre et transitions */
.hover\:shadow-xl:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.transition-all {
  transition: all 0.3s ease;
}

/* Styling des inputs radio */
input[type="radio"] {
  accent-color: #EF4444;
}

/* Animation pour les cartes */
.hover\:-translate-y-1:hover {
  transform: translateY(-4px);
}

/* Gradient spécifique Java */
.bg-gradient-java {
  background: linear-gradient(135deg, #ED8B00 0%, #5382A1 50%, #E76F00 100%);
}
</style>