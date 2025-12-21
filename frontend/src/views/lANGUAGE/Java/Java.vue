
	components: {
		Java,
	},<template>
  <div class="java-page bg-white">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-b from-red-50 to-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center gap-8">
          <!-- Logo et titre -->
          <div class="flex-shrink-0">
            <div class="flex items-center mb-4">
              <div class="w-24 h-22 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-17 h-71 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- Texte -->
          <div class="flex-1 text-center md:text-left">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Java
            </h1>
            <p class="text-xl text-gray-600 mb-6">
              Le langage de programmation orienté objet le plus populaire. Développez des applications robustes, des systèmes backend et des applications Android.
            </p>
            <div class="flex flex-wrap gap-3 justify-center md:justify-start">
              <span class="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700">
                Applications Desktop
              </span>
              <span class="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700">
                Backend (Spring Boot)
              </span>
              <span class="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700">
                Android
              </span>
              <span class="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700">
                Entreprise
              </span>
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
            Installation JDK
          </button>
          <button @click="scrollTo('bases')" class="text-sm font-medium text-gray-600 hover:text-red-600 whitespace-nowrap transition-colors focus:outline-none">
            Syntaxe de base
          </button>
          <button @click="scrollTo('poo')" class="text-sm font-medium text-gray-600 hover:text-red-600 whitespace-nowrap transition-colors focus:outline-none">
            Programmation OO
          </button>
          <button @click="scrollTo('frameworks')" class="text-sm font-medium text-gray-600 hover:text-red-600 whitespace-nowrap transition-colors focus:outline-none">
            Frameworks
          </button>
          <button @click="scrollTo('ressources')" class="text-sm font-medium text-gray-600 hover:text-red-600 whitespace-nowrap transition-colors focus:outline-none">
            Ressources
          </button>
          <button @click="scrollTo('pratique')" class="text-sm font-medium text-gray-600 hover:text-red-600 whitespace-nowrap transition-colors focus:outline-none">
            Projets
          </button>
          <button @click="scrollTo('contact')" class="text-sm font-medium text-gray-600 hover:text-red-600 whitespace-nowrap transition-colors focus:outline-none">
            Contact
          </button>
        </nav>
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Contenu principal -->
        <div class="lg:col-span-2 space-y-12">
          <!-- Installation JDK -->
          <section id="installation" class="scroll-mt-32">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Installation du JDK</h2>
            
            <div class="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">1. Télécharger Java JDK</h3>
              <p class="text-gray-600 mb-4">
                Téléchargez le Java Development Kit (JDK) depuis le site officiel d'Oracle ou utilisez OpenJDK.
              </p>
              <div class="bg-white border border-gray-200 rounded-lg p-4 mb-4">
                <p class="text-sm text-gray-600 mb-2">Sites de téléchargement :</p>
                <ul class="space-y-2 text-sm text-gray-700">
                  <li><strong>Oracle JDK :</strong> <a href="https://www.oracle.com/java/technologies/downloads" target="_blank" class="text-red-600 hover:text-red-700 underline">oracle.com/java</a></li>
                  <li><strong>OpenJDK :</strong> <a href="https://openjdk.org" target="_blank" class="text-red-600 hover:text-red-700 underline">openjdk.org</a></li>
                  <li><strong>Adoptium :</strong> <a href="https://adoptium.net" target="_blank" class="text-red-600 hover:text-red-700 underline">adoptium.net</a></li>
                </ul>
              </div>
            </div>

            <div class="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">2. Installation et configuration</h3>
              
              <div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto mb-4">
                <pre># Windows :
# 1. Exécutez le fichier .exe téléchargé
# 2. Ajoutez JAVA_HOME dans les variables d'environnement
# 3. Ajoutez %JAVA_HOME%\bin au PATH

# macOS :
# Avec Homebrew :
brew install openjdk@17

# Manuellement :
# Téléchargez le .dmg et suivez l'installateur

# Linux (Ubuntu/Debian) :
sudo apt update
sudo apt install openjdk-17-jdk

# Vérification :
java -version
javac -version</pre>
              </div>
              
              <div class="bg-red-50 border border-red-200 rounded-lg p-4">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <p class="text-sm text-red-800">
                    <strong>Important :</strong> Choisissez Java 11 ou 17 (versions LTS) pour les projets professionnels. Configurez la variable d'environnement JAVA_HOME.
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">3. IDE recommandés</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 class="font-semibold text-gray-900 mb-2">IntelliJ IDEA</h4>
                  <p class="text-sm text-gray-600 mb-3">IDE le plus populaire pour Java avec Community Edition gratuite.</p>
                  <a href="https://www.jetbrains.com/idea" target="_blank" class="text-sm text-red-600 hover:text-red-700 font-medium underline">
                    Télécharger →
                  </a>
                </div>
                <div class="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 class="font-semibold text-gray-900 mb-2">Eclipse</h4>
                  <p class="text-sm text-gray-600 mb-3">IDE open-source très utilisé dans l'industrie.</p>
                  <a href="https://www.eclipse.org/downloads" target="_blank" class="text-sm text-red-600 hover:text-red-700 font-medium underline">
                    Télécharger →
                  </a>
                </div>
              </div>
            </div>
          </section>

          <!-- Syntaxe de base -->
          <section id="bases" class="scroll-mt-32">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Syntaxe de base de Java</h2>
            
            <!-- Première classe -->
            <div class="mb-8">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">1. Votre première classe Java</h3>
              <p class="text-gray-600 mb-4">
                En Java, tout est contenu dans des classes. Voici la structure de base :
              </p>
              <div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre>// HelloWorld.java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}

// Compilation et exécution :
// javac HelloWorld.java  → Compile
// java HelloWorld        → Exécute</pre>
              </div>
            </div>

            <!-- Variables -->
            <div class="mb-8">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">2. Variables et types primitifs</h3>
              <p class="text-gray-600 mb-4">
                Java est un langage fortement typé. Toutes les variables doivent avoir un type déclaré.
              </p>
              <div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre>public class Variables {
    public static void main(String[] args) {
        // Types primitifs
        int age = 25;               // Entier 32-bit
        double prix = 19.99;        // Nombre à virgule
        boolean estVrai = true;     // Booléen
        char lettre = 'A';          // Caractère
        
        // Chaînes de caractères (objet)
        String nom = "Jean";
        
        // Constantes
        final double PI = 3.14159;
        
        // Tableaux
        int[] nombres = {1, 2, 3, 4, 5};
        String[] fruits = {"Pomme", "Banane", "Orange"};
        
        System.out.println("Nom: " + nom + ", Age: " + age);
    }
}</pre>
              </div>
            </div>

            <!-- Structures de contrôle -->
            <div class="mb-8">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">3. Structures de contrôle</h3>
              <div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre>public class ControlStructures {
    public static void main(String[] args) {
        int note = 15;
        
        // Condition if-else
        if (note >= 10) {
            System.out.println("Admis");
        } else {
            System.out.println("Échec");
        }
        
        // Boucle for
        for (int i = 0; i < 5; i++) {
            System.out.println("Itération: " + i);
        }
        
        // Boucle while
        int compteur = 0;
        while (compteur < 3) {
            System.out.println("Compteur: " + compteur);
            compteur++;
        }
        
        // Switch (Java 14+)
        String jour = "LUNDI";
        switch (jour) {
            case "LUNDI" -> System.out.println("Début de semaine");
            case "VENDREDI" -> System.out.println("Weekend approche!");
            default -> System.out.println("Jour normal");
        }
    }
}</pre>
              </div>
            </div>

            <!-- Méthodes -->
            <div class="mb-8">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">4. Méthodes (fonctions)</h3>
              <div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre>public class Methodes {
    
    // Méthode avec retour
    public static int addition(int a, int b) {
        return a + b;
    }
    
    // Méthode sans retour (void)
    public static void afficherMessage(String message) {
        System.out.println("Message: " + message);
    }
    
    // Méthode avec paramètres multiples
    public static double calculerMoyenne(double... nombres) {
        double somme = 0;
        for (double n : nombres) {
            somme += n;
        }
        return somme / nombres.length;
    }
    
    public static void main(String[] args) {
        int resultat = addition(5, 3);
        System.out.println("5 + 3 = " + resultat);
        
        afficherMessage("Bonjour Java!");
        
        double moyenne = calculerMoyenne(10.5, 15.0, 12.5);
        System.out.println("Moyenne: " + moyenne);
    }
}</pre>
              </div>
            </div>
          </section>

          <!-- Programmation Orientée Objet -->
          <section id="poo" class="scroll-mt-32">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Programmation Orientée Objet</h2>
            
            <div class="space-y-6">
              <!-- Classe et Objet -->
              <div class="bg-white border border-gray-200 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-3">Classes et Objets</h3>
                <p class="text-gray-600 mb-4">
                  En Java, tout est objet (sauf les types primitifs). Une classe est un modèle pour créer des objets.
                </p>
                <div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre>// Définition de la classe
public class Personne {
    // Attributs (variables d'instance)
    private String nom;
    private int age;
    
    // Constructeur
    public Personne(String nom, int age) {
        this.nom = nom;
        this.age = age;
    }
    
    // Méthodes (getters/setters)
    public String getNom() {
        return nom;
    }
    
    public void setNom(String nom) {
        this.nom = nom;
    }
    
    public int getAge() {
        return age;
    }
    
    public void afficherInfo() {
        System.out.println("Nom: " + nom + ", Age: " + age);
    }
}

// Utilisation
public class Main {
    public static void main(String[] args) {
        // Création d'objets
        Personne personne1 = new Personne("Marie", 25);
        Personne personne2 = new Personne("Jean", 30);
        
        personne1.afficherInfo();
        personne2.afficherInfo();
    }
}</pre>
                </div>
              </div>

              <!-- Héritage -->
              <div class="bg-white border border-gray-200 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-3">Héritage et Polymorphisme</h3>
                <p class="text-gray-600 mb-4">
                  L'héritage permet de créer une nouvelle classe basée sur une classe existante.
                </p>
                <div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre>// Classe parent
public class Animal {
    protected String nom;
    
    public Animal(String nom) {
        this.nom = nom;
    }
    
    public void faireDuBruit() {
        System.out.println("L'animal fait du bruit");
    }
}

// Classe enfant
public class Chien extends Animal {
    public Chien(String nom) {
        super(nom); // Appel du constructeur parent
    }
    
    // Redéfinition (override)
    @Override
    public void faireDuBruit() {
        System.out.println(nom + " dit: Wouaf Wouaf!");
    }
    
    // Méthode spécifique
    public void remuerLaQueue() {
        System.out.println(nom + " remue la queue");
    }
}

public class Chat extends Animal {
    public Chat(String nom) {
        super(nom);
    }
    
    @Override
    public void faireDuBruit() {
        System.out.println(nom + " dit: Miaou!");
    }
}

// Utilisation du polymorphisme
public class Main {
    public static void main(String[] args) {
        Animal[] animaux = {
            new Chien("Rex"),
            new Chat("Mimi"),
            new Chien("Max")
        };
        
        for (Animal animal : animaux) {
            animal.faireDuBruit(); // Polymorphisme
        }
    }
}</pre>
                </div>
              </div>

              <!-- Interfaces -->
              <div class="bg-white border border-gray-200 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-3">Interfaces et Classes Abstraites</h3>
                <p class="text-gray-600 mb-4">
                  Les interfaces définissent un contrat que les classes doivent implémenter.
                </p>
                <div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre>// Interface
public interface Forme {
    double calculerAire();
    double calculerPerimetre();
}

// Classe abstraite
public abstract class FormeGeometrique {
    protected String nom;
    
    public FormeGeometrique(String nom) {
        this.nom = nom;
    }
    
    public abstract double calculerAire();
    
    public void afficherNom() {
        System.out.println("Forme: " + nom);
    }
}

// Implémentation concrète
public class Cercle extends FormeGeometrique implements Forme {
    private double rayon;
    
    public Cercle(String nom, double rayon) {
        super(nom);
        this.rayon = rayon;
    }
    
    @Override
    public double calculerAire() {
        return Math.PI * rayon * rayon;
    }
    
    @Override
    public double calculerPerimetre() {
        return 2 * Math.PI * rayon;
    }
}

public class Rectangle extends FormeGeometrique implements Forme {
    private double longueur;
    private double largeur;
    
    public Rectangle(String nom, double longueur, double largeur) {
        super(nom);
        this.longueur = longueur;
        this.largeur = largeur;
    }
    
    @Override
    public double calculerAire() {
        return longueur * largeur;
    }
    
    @Override
    public double calculerPerimetre() {
        return 2 * (longueur + largeur);
    }
}</pre>
                </div>
              </div>
            </div>
          </section>

          <!-- Frameworks populaires -->
          <section id="frameworks" class="scroll-mt-32">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Frameworks Java populaires</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div class="flex items-start mb-4">
                  <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span class="text-green-600 font-bold text-lg">S</span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">Spring Boot</h3>
                    <p class="text-sm text-gray-600 mb-2">Framework pour applications web et microservices</p>
                    <span class="text-xs text-gray-500">Backend • API REST</span>
                  </div>
                </div>
                <ul class="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Configuration automatique</li>
                  <li>• Intégration Spring Security</li>
                  <li>• Base de données avec JPA</li>
                  <li>• Déploiement embarqué (Tomcat)</li>
                </ul>
                <a href="https://spring.io/projects/spring-boot" target="_blank" class="text-sm text-red-600 hover:text-red-700 font-medium underline block text-center">
                  Documentation officielle →
                </a>
              </div>

              <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div class="flex items-start mb-4">
                  <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span class="text-blue-600 font-bold text-lg">H</span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">Hibernate</h3>
                    <p class="text-sm text-gray-600 mb-2">ORM (Object-Relational Mapping)</p>
                    <span class="text-xs text-gray-500">Base de données • JPA</span>
                  </div>
                </div>
                <ul class="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Mapping objet-relationnel</li>
                  <li>• Cache de premier niveau</li>
                  <li>• Requêtes HQL/JPQL</li>
                  <li>• Transactions automatiques</li>
                </ul>
                <a href="https://hibernate.org" target="_blank" class="text-sm text-red-600 hover:text-red-700 font-medium underline block text-center">
                  Documentation officielle →
                </a>
              </div>

              <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div class="flex items-start mb-4">
                  <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span class="text-purple-600 font-bold text-lg">M</span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">Maven</h3>
                    <p class="text-sm text-gray-600 mb-2">Gestion de dépendances et build</p>
                    <span class="text-xs text-gray-500">Build • Dépendances</span>
                  </div>
                </div>
                <ul class="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Gestion des dépendances</li>
                  <li>• Cycle de vie du build</li>
                  <li>• Structure de projet standard</li>
                  <li>• Intégration continue</li>
                </ul>
                <a href="https://maven.apache.org" target="_blank" class="text-sm text-red-600 hover:text-red-700 font-medium underline block text-center">
                  Documentation officielle →
                </a>
              </div>

              <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div class="flex items-start mb-4">
                  <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span class="text-yellow-600 font-bold text-lg">J</span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">JUnit</h3>
                    <p class="text-sm text-gray-600 mb-2">Framework de tests unitaires</p>
                    <span class="text-xs text-gray-500">Tests • Qualité</span>
                  </div>
                </div>
                <ul class="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Tests unitaires</li>
                  <li>• Assertions fluides</li>
                  <li>• Tests paramétrés</li>
                  <li>• Intégration IDE</li>
                </ul>
                <a href="https://junit.org/junit5" target="_blank" class="text-sm text-red-600 hover:text-red-700 font-medium underline block text-center">
                  Documentation officielle →
                </a>
              </div>
            </div>
          </section>

          <!-- Ressources -->
          <section id="ressources" class="scroll-mt-32">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Ressources de formation</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div class="flex items-start mb-4">
                  <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">Guide complet Java</h3>
                    <p class="text-sm text-gray-600 mb-2">Cours détaillé de Java 8 à Java 17</p>
                    <span class="text-xs text-gray-500">PDF • 4.5 MB</span>
                  </div>
                </div>
                <button 
                  @click="downloadPDF('01-java-bases.pdf')"
                  class="w-full bg-red-600 text-white py-2.5 rounded-lg font-medium hover:bg-red-700 transition-colors focus:outline-none"
                >
                  Télécharger le guide
                </button>
              </div>

              <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div class="flex items-start mb-4">
                  <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">Exercices pratiques</h3>
                    <p class="text-sm text-gray-600 mb-2">100 exercices avec solutions</p>
                    <span class="text-xs text-gray-500">PDF • 2.8 MB</span>
                  </div>
                </div>
                <button 
                  @click="downloadPDF('02-java-exercices.pdf')"
                  class="w-full bg-red-600 text-white py-2.5 rounded-lg font-medium hover:bg-red-700 transition-colors focus:outline-none"
                >
                  Télécharger les exercices
                </button>
              </div>

              <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div class="flex items-start mb-4">
                  <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">Spring Boot Projets</h3>
                    <p class="text-sm text-gray-600 mb-2">3 projets complets Spring Boot</p>
                    <span class="text-xs text-gray-500">ZIP • 5.2 MB</span>
                  </div>
                </div>
                <button 
                  @click="downloadPDF('03-spring-boot-projets.zip')"
                  class="w-full bg-red-600 text-white py-2.5 rounded-lg font-medium hover:bg-red-700 transition-colors focus:outline-none"
                >
                  Télécharger les projets
                </button>
              </div>

              <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div class="flex items-start mb-4">
                  <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">Quiz  Java</h3>
                    <p class="text-sm text-gray-600 mb-2">Question rapides pour évaluer vos connaissances</p>
                  </div>
                </div>
                <RouterLink to="/javatest">
                <Button
                to="/javatest"
                  class="w-full bg-red-600 text-white py-2.5 rounded-lg font-medium hover:bg-red-700 transition-colors focus:outline-none"
                >
                    Passer le teste de niveau
                </Button>
                </RouterLink>
              </div>
            </div>
          </section>

          <!-- Projets -->
          <section id="pratique" class="scroll-mt-32">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Projets pratiques</h2>
            
            <div class="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-6 mb-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-3">Niveaux de projets</h3>
              <p class="text-gray-600 mb-4">
                Progressez en réalisant des projets concrets adaptés à votre niveau. Chaque projet inclut un énoncé détaillé et une solution complète.
              </p>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="bg-white rounded-lg p-4 border border-gray-200">
                  <div class="text-green-600 font-semibold mb-2">Débutant</div>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Calculatrice</li>
                    <li>• Gestion de contacts</li>
                    <li>• Jeux console</li>
                    <li>• Système de réservation</li>
                  </ul>
                </div>
                <div class="bg-white rounded-lg p-4 border border-gray-200">
                  <div class="text-yellow-600 font-semibold mb-2">Intermédiaire</div>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• API REST avec Spring</li>
                    <li>• Gestion de bibliothèque</li>
                    <li>• Application bancaire</li>
                    <li>• E-commerce backend</li>
                  </ul>
                </div>
                <div class="bg-white rounded-lg p-4 border border-gray-200">
                  <div class="text-red-600 font-semibold mb-2">Avancé</div>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Microservices</li>
                    <li>• Application Android</li>
                    <li>• Système de facturation</li>
                    <li>• API sécurisée</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <div class="sticky top-32 space-y-6">
            <!-- Contact -->
            <div id="contact" class="bg-white border border-gray-200 rounded-lg p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Besoin d'aide en Java ?</h3>
              <p class="text-sm text-gray-600 mb-4">
                Questions sur Java, POO, Spring Boot ou projets ? Contactez-moi directement.
              </p>
              <div class="space-y-3">
                <a 
                  href="mailto:7bhilal.chitou7@gmail.com?subject=Question sur Java"
                  class="flex items-center justify-center bg-gray-100 text-gray-700 py-2.5 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  Email
                </a>
                
                <a 
                  href="https://wa.me/22998874019?text=Bonjour! J'ai une question sur Java"
                  target="_blank"
                  class="flex items-center justify-center bg-green-500 text-white py-2.5 px-4 rounded-lg font-medium hover:bg-green-600 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-green-300"
                >
                  <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.032 5.99c-3.554 0-6.447 2.895-6.447 6.447 0 1.416.458 2.727 1.237 3.793l-.796 2.658 2.739-.796c1.041.71 2.315 1.125 3.704 1.125 3.554 0 6.447-2.895 6.447-6.447s-2.894-6.447-6.447-6.447zm0 11.773c-1.083 0-2.104-.281-2.989-.772l-2.146.625.625-2.146c-.531-.937-.833-2.02-.833-3.146 0-2.947 2.396-5.343 5.343-5.343 2.947 0 5.343 2.396 5.343 5.343 0 2.947-2.396 5.343-5.343 5.343z"/>
                    <path d="M14.692 13.393c-.25-.125-1.49-.735-1.721-.816-.23-.082-.398-.125-.566.125-.168.25-.648.816-.794.99-.147.172-.293.188-.543.063-.25-.125-1.054-.416-2.01-1.238-.75-.668-1.256-1.49-1.406-1.74-.148-.25-.015-.387.111-.51.114-.114.25-.293.375-.458.125-.166.166-.25.25-.416.082-.166.042-.312-.021-.458-.063-.146-.562-1.366-.77-1.886-.208-.52-.417-.437-.562-.447-.146-.01-.312-.01-.478-.01s-.438.063-.66.312c-.22.25-.854.832-.854 2.022 0 1.189.896 2.397 1.022 2.553.125.157 1.741 2.647 4.245 3.697 2.504 1.05 2.504.688 2.952.646.448-.042 1.449-.593 1.656-1.177.208-.583.208-1.093.146-1.177-.063-.083-.23-.146-.48-.271z"/>
                  </svg>
                  WhatsApp (Questions)
                </a>
                
                <a 
                  href="https://wa.me/22998874019?text=Bonjour! Je souhaite prendre un cours particulier de Java"
                  target="_blank"
                  class="flex items-center justify-center bg-red-600 text-white py-2.5 px-4 rounded-lg font-medium hover:bg-red-700 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-red-300"
                >
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                  </svg>
                  Cours Java (WhatsApp)
                </a>
              </div>
            </div>

            <!-- Certification -->
            <div class="bg-white border border-gray-200 rounded-lg p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Certifications Java</h3>
              <div class="space-y-3">
                <div class="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div class="w-8 h-8 bg-red-100 rounded flex items-center justify-center mr-3">
                    <span class="text-red-600 font-bold text-xs">OCA</span>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-900">Java SE 8 Programmer I</p>
                    <p class="text-xs text-gray-500">Oracle Certified Associate</p>
                  </div>
                </div>
                <div class="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div class="w-8 h-8 bg-red-100 rounded flex items-center justify-center mr-3">
                    <span class="text-red-600 font-bold text-xs">OCP</span>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-900">Java SE 11 Developer</p>
                    <p class="text-xs text-gray-500">Oracle Certified Professional</p>
                  </div>
                </div>
                <button @click="scrollTo('contact')" class="w-full mt-2 bg-gray-100 text-gray-700 py-2.5 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm focus:outline-none">
                  Préparation certification
                </button>
              </div>
            </div>

            <!-- Quiz Java -->
            <div class="bg-white border border-gray-200 rounded-lg p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Quiz Java</h3>
              <div class="bg-gray-50 rounded-lg p-4 mb-4">
                <p class="text-sm font-medium text-gray-900 mb-3">
                  Quelle est la différence entre <code class="bg-gray-200 px-1 rounded">ArrayList</code> et <code class="bg-gray-200 px-1 rounded">LinkedList</code> ?
                </p>
                <div class="space-y-2">
                  <label class="flex items-center text-sm text-gray-700 cursor-pointer">
                    <input type="radio" name="javaQuiz" value="1" v-model="quizAnswer" class="mr-2">
                    <span>ArrayList est synchronisée</span>
                  </label>
                  <label class="flex items-center text-sm text-gray-700 cursor-pointer">
                    <input type="radio" name="javaQuiz" value="2" v-model="quizAnswer" class="mr-2">
                    <span>LinkedList utilise un tableau redimensionnable</span>
                  </label>
                  <label class="flex items-center text-sm text-gray-700 cursor-pointer">
                    <input type="radio" name="javaQuiz" value="3" v-model="quizAnswer" class="mr-2">
                    <span>ArrayList est plus rapide pour l'accès aléatoire</span>
                  </label>
                </div>
              </div>
                <RouterLink to="/javatest">
                    <button @click="checkQuiz" class="w-full bg-red-600 text-white py-2.5 rounded-lg font-medium hover:bg-red-700 transition-colors text-sm focus:outline-none">
                        Vérifier la réponse et passez le test
                      </button>
                </RouterLink>
            </div>

            <!-- Conseils -->
            <div class="bg-red-50 border border-red-200 rounded-lg p-4">
              <div class="flex items-start">
                <svg class="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
                <div>
                  <p class="text-sm font-medium text-red-800 mb-1">Conseil Pro</p>
                  <p class="text-xs text-red-700">
                    Maîtrisez les concepts de POO avant de passer aux frameworks. Une bonne base Java est essentielle pour Spring Boot.
                  </p>
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
import Java from '@/views/Java.vue'

export default {
  name: 'JavaPage',
  data() {
    return {
      showModal: false,
      quizAnswer: null
    }
  },
  methods: {
    // Méthode pour le défilement fluide
    scrollTo(id) {
      const element = document.getElementById(id);
      if (element) {
        const offset = 100; // Ajustement pour le header fixe
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Mettre à jour l'URL sans recharger la page
        history.pushState(null, null, `#${id}`);
      }
    },
    
    // Méthode pour télécharger les fichiers PDF
    downloadPDF(filename) {
      // Chemin vers les fichiers dans le dossier public
      const filePath = `/pdf/langages/java/${filename}`;
      
      // Créer un lien temporaire pour le téléchargement
      const link = document.createElement('a');
      link.href = filePath;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Afficher une notification
      this.showNotification(`Téléchargement de ${filename} commencé`);
    },
    
    // Méthode pour vérifier le quiz
    checkQuiz() {
      if (this.quizAnswer === '3') {
        this.showNotification('✅ Bonne réponse ! ArrayList est effectivement plus rapide pour l\'accès aléatoire.', 'success');
      } else if (this.quizAnswer) {
        this.showNotification('❌ Réponse incorrecte. La bonne réponse est: ArrayList est plus rapide pour l\'accès aléatoire.', 'error');
      } else {
        this.showNotification('⚠️ Veuillez sélectionner une réponse.', 'warning');
      }
    },
    
    // Méthode pour afficher des notifications
    showNotification(message, type = 'info') {
      // Vous pouvez remplacer par votre système de notifications préféré
      // Par exemple: toast, alert, ou un composant personnalisé
      alert(message);
      
      // Alternative avec console
      console.log(`${type.toUpperCase()}: ${message}`);
    },
    
    // Initialiser le défilement depuis l'URL
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
    // Initialiser le défilement depuis l'URL au chargement
    this.initScrollFromUrl();
    
    // Écouter les changements d'URL
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

/* Styles pour la navigation */
nav button {
  cursor: pointer;
}

/* Amélioration du focus pour l'accessibilité */
button:focus, a:focus {
  outline: 2px solid #dc2626;
  outline-offset: 2px;
}

/* Styles pour les boutons radio */
input[type="radio"] {
  cursor: pointer;
}

/* Styles pour les liens */
a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>