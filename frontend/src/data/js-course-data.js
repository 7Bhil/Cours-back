// data/js-course-data.js

export const javascriptCourse = {
  id: 'javascript-complet',
  title: 'JavaScript Complet',
  description: 'Apprenez JavaScript de A à Z, des bases aux concepts avancés',
  icon: '🎯',
  totalChapters: 8,
  totalLessons: 45,
  estimatedHours: 50,
  levels: ['débutant', 'intermédiaire', 'avancé'],
  
  chapters: [
    {
      id: 1,
      title: "Introduction à JavaScript",
      description: "Découvrez ce qu'est JavaScript et comment il fonctionne",
      icon: "🚀",
      level: "débutant",
      duration: "2h",
      order: 1,
      completed: false,
      progress: 25,
      
      sections: [
        {
          id: 'intro',
          type: 'text',
          title: "Qu'est-ce que JavaScript ?",
          content: "JavaScript est un langage de programmation qui permet de créer du contenu dynamique et interactif sur les pages web.",
          completed: true,
          duration: "15min"
        },
        {
          id: 'installation',
          type: 'text',
          title: "Installation et configuration",
          content: "Apprenez à configurer votre environnement de développement JavaScript.",
          completed: true,
          duration: "30min"
        },
        {
          id: 'first-script',
          type: 'code',
          title: "Votre premier script",
          description: "Créez votre premier fichier JavaScript et exécutez-le",
          code: `// mon-premier-script.js
console.log("Bonjour JavaScript !");
alert("Bienvenue dans l'apprentissage de JS !");`,
          language: 'javascript',
          completed: false,
          duration: "45min"
        },
        {
          id: 'console',
          type: 'exercise',
          title: "Exercice : Utiliser la console",
          description: "Apprenez à utiliser la console du navigateur",
          exercise: "Ouvrez la console de votre navigateur et tapez : console.log('Je maîtrise la console !')",
          solution: `console.log('Je maîtrise la console !');`,
          points: 10,
          completed: false,
          duration: "30min"
        }
      ]
    },
    
    {
      id: 2,
      title: "Les bases du langage",
      description: "Variables, types de données et opérations de base",
      icon: "📚",
      level: "débutant",
      duration: "4h",
      order: 2,
      completed: false,
      progress: 10,
      
      sections: [
        {
          id: 'variables',
          type: 'text',
          title: "Variables : let, const, var",
          content: "Découvrez comment déclarer et utiliser des variables en JavaScript.",
          completed: false,
          duration: "45min"
        },
        {
          id: 'types',
          type: 'text',
          title: "Types de données",
          content: "String, Number, Boolean, Array, Object, null, undefined",
          completed: false,
          duration: "1h"
        },
        {
          id: 'operators',
          type: 'code',
          title: "Opérateurs",
          description: "Opérateurs arithmétiques, de comparaison et logiques",
          code: `// Opérateurs arithmétiques
let a = 10;
let b = 5;
console.log(a + b);  // 15
console.log(a * b);  // 50

// Opérateurs de comparaison
console.log(a > b);   // true
console.log(a === b); // false

// Opérateurs logiques
let estVrai = true;
let estFaux = false;
console.log(estVrai && estFaux);  // false
console.log(estVrai || estFaux);  // true`,
          language: 'javascript',
          completed: false,
          duration: "1h"
        },
        {
          id: 'exercise-variables',
          type: 'exercise',
          title: "Exercice : Manipuler les variables",
          description: "Créez des variables et effectuez des opérations",
          exercise: `1. Créez une variable 'nom' avec votre prénom
2. Créez une constante 'age' avec votre âge
3. Affichez : "Bonjour [nom], vous avez [age] ans"`,
          solution: `const nom = "Marie";
const age = 25;
console.log(\`Bonjour \${nom}, vous avez \${age} ans\`);`,
          points: 15,
          completed: false,
          duration: "1h15min"
        }
      ]
    },
    
    {
      id: 3,
      title: "Structures de contrôle",
      description: "Conditions et boucles pour contrôler le flux d'exécution",
      icon: "🔄",
      level: "débutant",
      duration: "3h",
      order: 3,
      completed: false,
      progress: 0,
      
      sections: [
        {
          id: 'conditions',
          type: 'text',
          title: "Instructions conditionnelles",
          content: "if, else, else if, switch",
          completed: false,
          duration: "45min"
        },
        {
          id: 'loops',
          type: 'code',
          title: "Boucles",
          description: "for, while, do...while, for...of, for...in",
          code: `// Boucle for classique
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// For...of pour les tableaux
const fruits = ['pomme', 'banane', 'orange'];
for (const fruit of fruits) {
  console.log(fruit);
}

// For...in pour les objets
const personne = { nom: 'Jean', age: 30 };
for (const key in personne) {
  console.log(key + ': ' + personne[key]);
}`,
          language: 'javascript',
          completed: false,
          duration: "1h"
        }
      ]
    },
    
    {
      id: 4,
      title: "Fonctions et portée",
      description: "Créer et utiliser des fonctions, comprendre la portée des variables",
      icon: "⚙️",
      level: "intermédiaire",
      duration: "5h",
      order: 4,
      completed: false,
      progress: 0,
      
      sections: [
        {
          id: 'fonctions-bases',
          type: 'text',
          title: "Fonctions : les bases",
          content: "Déclaration, paramètres, valeur de retour",
          completed: false,
          duration: "1h"
        },
        {
          id: 'arrow-functions',
          type: 'code',
          title: "Fonctions fléchées",
          description: "La syntaxe moderne des fonctions",
          code: `// Fonction classique
function addition(a, b) {
  return a + b;
}

// Fonction fléchée
const soustraction = (a, b) => {
  return a - b;
};

// Version courte (retour implicite)
const multiplication = (a, b) => a * b;

// Sans paramètres
const direBonjour = () => "Bonjour !";

// Un seul paramètre (pas besoin de parenthèses)
const carre = x => x * x;`,
          language: 'javascript',
          completed: false,
          duration: "1h30min"
        }
      ]
    },
    
    {
      id: 5,
      title: "Manipulation du DOM",
      description: "Interagir avec les éléments HTML de la page",
      icon: "🌐",
      level: "intermédiaire",
      duration: "6h",
      order: 5,
      completed: false,
      progress: 0,
      
      sections: [
        {
          id: 'select-elements',
          type: 'text',
          title: "Sélectionner des éléments",
          content: "querySelector, getElementById, getElementsByClassName",
          completed: false,
          duration: "45min"
        },
        {
          id: 'modify-dom',
          type: 'code',
          title: "Modifier le DOM",
          description: "Changer le contenu, les styles et les attributs",
          code: `// Sélectionner un élément
const titre = document.querySelector('h1');

// Modifier le contenu
titre.textContent = 'Nouveau titre';
titre.innerHTML = '<em>Titre stylisé</em>';

// Modifier les styles
titre.style.color = 'blue';
titre.style.fontSize = '2rem';

// Ajouter/retirer des classes
titre.classList.add('important');
titre.classList.remove('ancien');
titre.classList.toggle('actif');

// Modifier les attributs
const image = document.querySelector('img');
image.setAttribute('alt', 'Nouvelle description');
const source = image.getAttribute('src');`,
          language: 'javascript',
          completed: false,
          duration: "1h30min"
        }
      ]
    },
    
    {
      id: 6,
      title: "Événements et interactivité",
      description: "Réagir aux actions de l'utilisateur",
      icon: "🎮",
      level: "intermédiaire",
      duration: "4h",
      order: 6,
      completed: false,
      progress: 0,
      
      sections: [
        {
          id: 'event-listeners',
          type: 'text',
          title: "Écouteurs d'événements",
          content: "addEventListener, gestion des événements",
          completed: false,
          duration: "1h"
        }
      ]
    },
    
    {
      id: 7,
      title: "JavaScript moderne (ES6+)",
      description: "Les nouvelles fonctionnalités d'ECMAScript 6 et supérieur",
      icon: "✨",
      level: "avancé",
      duration: "8h",
      order: 7,
      completed: false,
      progress: 0,
      
      sections: [
        {
          id: 'destructuring',
          type: 'code',
          title: "Destructuration",
          description: "Extraire des valeurs des tableaux et objets",
          code: `// Destructuration d'objet
const personne = { nom: 'Alice', age: 28, ville: 'Paris' };
const { nom, age } = personne;
console.log(nom); // 'Alice'
console.log(age); // 28

// Avec alias
const { nom: prenom } = personne;

// Destructuration de tableau
const nombres = [1, 2, 3, 4, 5];
const [premier, deuxieme, ...reste] = nombres;
console.log(premier); // 1
console.log(reste);   // [3, 4, 5]`,
          language: 'javascript',
          completed: false,
          duration: "1h"
        },
        {
          id: 'spread-rest',
          type: 'code',
          title: "Spread et Rest operators",
          description: "Manipuler les tableaux et objets facilement",
          code: `// Spread operator (...)
const tableau1 = [1, 2, 3];
const tableau2 = [4, 5, 6];
const fusion = [...tableau1, ...tableau2]; // [1, 2, 3, 4, 5, 6]

// Copier un objet
const original = { a: 1, b: 2 };
const copie = { ...original };

// Rest operator (dans les paramètres)
function somme(...nombres) {
  return nombres.reduce((total, n) => total + n, 0);
}
console.log(somme(1, 2, 3, 4)); // 10`,
          language: 'javascript',
          completed: false,
          duration: "1h"
        }
      ]
    },
    
    {
      id: 8,
      title: "Programmation asynchrone",
      description: "Promesses, async/await et requêtes HTTP",
      icon: "⏳",
      level: "avancé",
      duration: "10h",
      order: 8,
      completed: false,
      progress: 0,
      
      sections: [
        {
          id: 'promises',
          type: 'text',
          title: "Les Promesses",
          content: "then, catch, finally",
          completed: false,
          duration: "2h"
        },
        {
          id: 'async-await',
          type: 'code',
          title: "Async/Await",
          description: "La syntaxe moderne pour gérer l'asynchrone",
          code: `// Fonction asynchrone
async function chargerDonnees() {
  try {
    const response = await fetch('https://api.exemple.com/data');
    if (!response.ok) {
      throw new Error('Erreur HTTP: ' + response.status);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (erreur) {
    console.error('Erreur:', erreur);
    throw erreur;
  }
}

// Utilisation
chargerDonnees()
  .then(data => console.log('Succès:', data))
  .catch(err => console.error('Échec:', err));`,
          language: 'javascript',
          completed: false,
          duration: "2h"
        }
      ]
    }
  ],
  
  // Ressources supplémentaires
  resources: [
    {
      id: 1,
      title: "Guide complet JavaScript (PDF)",
      type: "pdf",
      url: "/pdf/javascript-guide.pdf",
      size: "3.2 MB"
    },
    {
      id: 2,
      title: "Exercices pratiques (PDF)",
      type: "pdf",
      url: "/pdf/javascript-exercises.pdf",
      size: "1.8 MB"
    },
    {
      id: 3,
      title: "MDN JavaScript Docs",
      type: "link",
      url: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
      description: "Documentation officielle"
    },
    {
      id: 4,
      title: "JavaScript.info",
      type: "link",
      url: "https://javascript.info",
      description: "Tutoriel moderne"
    }
  ],
  
  // Exercices pratiques
  practiceExercises: [
    {
      id: 1,
      title: "Calculatrice simple",
      difficulty: "débutant",
      description: "Créez une calculatrice avec les 4 opérations de base",
      points: 20
    },
    {
      id: 2,
      title: "To-Do List",
      difficulty: "intermédiaire",
      description: "Application de gestion de tâches avec localStorage",
      points: 30
    },
    {
      id: 3,
      title: "Application Météo",
      difficulty: "avancé",
      description: "Récupérez les données météo via une API",
      points: 50
    }
  ]
};

// Fonction pour calculer la progression globale
export function calculateTotalProgress(course) {
  if (!course.chapters || course.chapters.length === 0) return 0;
  
  const totalSections = course.chapters.reduce((total, chapter) => {
    return total + (chapter.sections ? chapter.sections.length : 0);
  }, 0);
  
  const completedSections = course.chapters.reduce((total, chapter) => {
    if (!chapter.sections) return total;
    return total + chapter.sections.filter(section => section.completed).length;
  }, 0);
  
  return totalSections > 0 ? Math.round((completedSections / totalSections) * 100) : 0;
}

// Fonction pour marquer une section comme terminée
export function markSectionAsCompleted(course, chapterId, sectionId) {
  const chapterIndex = course.chapters.findIndex(ch => ch.id === chapterId);
  if (chapterIndex === -1) return course;
  
  const sectionIndex = course.chapters[chapterIndex].sections.findIndex(sec => sec.id === sectionId);
  if (sectionIndex === -1) return course;
  
  // Créer une copie pour éviter la mutation directe
  const updatedCourse = JSON.parse(JSON.stringify(course));
  updatedCourse.chapters[chapterIndex].sections[sectionIndex].completed = true;
  
  // Recalculer la progression du chapitre
  const chapterSections = updatedCourse.chapters[chapterIndex].sections;
  const completedInChapter = chapterSections.filter(s => s.completed).length;
  updatedCourse.chapters[chapterIndex].progress = Math.round((completedInChapter / chapterSections.length) * 100);
  
  return updatedCourse;
}

// Fonction pour obtenir la section suivante
export function getNextSection(course, currentChapterId, currentSectionId) {
  const chapterIndex = course.chapters.findIndex(ch => ch.id === currentChapterId);
  if (chapterIndex === -1) return null;
  
  const sectionIndex = course.chapters[chapterIndex].sections.findIndex(sec => sec.id === currentSectionId);
  if (sectionIndex === -1) return null;
  
  // Vérifier s'il y a une section suivante dans le même chapitre
  if (sectionIndex + 1 < course.chapters[chapterIndex].sections.length) {
    return {
      chapterId: currentChapterId,
      sectionId: course.chapters[chapterIndex].sections[sectionIndex + 1].id
    };
  }
  
  // Sinon, passer au chapitre suivant
  if (chapterIndex + 1 < course.chapters.length) {
    return {
      chapterId: course.chapters[chapterIndex + 1].id,
      sectionId: course.chapters[chapterIndex + 1].sections[0]?.id || null
    };
  }
  
  return null; // C'est la dernière section
}