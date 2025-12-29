# Mettez à jour la section DATABASES :
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'ml_projet_db',
        'USER': 'ml_user',
        'PASSWORD': 'votre_mot_de_passe_securise',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

# Ajoutez au début de INSTALLED_APPS :
INSTALLED_APPS = [
    'corsheaders',  # Pour connecter avec Vue.js
    'django.contrib.admin',
    'django.contrib.auth',
    # ... autres apps par défaut
]

# Ajoutez au MIDDLEWARE :
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',  # Doit être en haut
    'django.middleware.common.CommonMiddleware',
    # ... autres middlewares
]

# Configurez CORS (en bas du fichier) :
CORS_ALLOWED_ORIGINS = [
    "http://localhost:8080",  # URL de votre Vue.js
    "http://localhost:5173",  # Ou Vite par défaut
]

CORS_ALLOW_CREDENTIALS = True

# Optionnel : pour développement, vous pouvez autoriser toutes les origines
# CORS_ALLOW_ALL_ORIGINS = True  # À désactiver en production