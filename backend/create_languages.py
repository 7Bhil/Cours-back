#!/usr/bin/env python
import os
import django
import json

# Configuration Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from nom_app.models import ProgrammingLanguage
from django.utils.text import slugify

def create_languages():
    languages = [
        {
            "name": "C",
            "description": "Langage de programmation procédural pour les systèmes. Fondations de l'informatique moderne.",
            "icon": "🔧",
            "color": "indigo",
            "difficulty": 3
        },
        {
            "name": "C++",
            "description": "Langage de programmation orienté objet, extension du C. Utilisé pour les jeux vidéo et applications haute performance.",
            "icon": "⚡",
            "color": "blue",
            "difficulty": 3
        },
        {
            "name": "Java",
            "description": "Langage orienté objet multiplateforme. Dominant dans les applications d'entreprise et Android.",
            "icon": "☕",
            "color": "orange",
            "difficulty": 2
        },
        {
            "name": "JavaScript",
            "description": "Langage de script pour le web. Essentiel pour le développement web moderne.",
            "icon": "🟨",
            "color": "yellow",
            "difficulty": 2
        },
        {
            "name": "Ruby",
            "description": "Langage dynamique et élégant, populaire avec Ruby on Rails.",
            "icon": "💎",
            "color": "red",
            "difficulty": 2
        },
        {
            "name": "Python",
            "description": "Langage interprété, simple et puissant. Idéal pour débutants et data science.",
            "icon": "🐍",
            "color": "green",
            "difficulty": 1
        }
    ]
    
    print("🔧 Création des langages de programmation...")
    
    for lang in languages:
        # Générer le slug
        lang['slug'] = slugify(lang['name'])
        
        # Créer ou mettre à jour
        obj, created = ProgrammingLanguage.objects.update_or_create(
            name=lang['name'],
            defaults=lang
        )
        
        if created:
            print(f"✅ Créé: {obj.name} ({obj.icon})")
        else:
            print(f"📝 Mis à jour: {obj.name}")
    
    # Afficher le résultat
    print("\n🎯 Langages disponibles:")
    for lang in ProgrammingLanguage.objects.all():
        print(f"  • {lang.icon} {lang.name} - {lang.color} (Difficulté: {lang.difficulty})")
    
    print(f"\n✅ {ProgrammingLanguage.objects.count()} langages créés avec succès !")

if __name__ == "__main__":
    create_languages()