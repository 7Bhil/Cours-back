from django.apps import AppConfig  # <-- IMPORT ESSENTIEL !

class UsersConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'users'
    verbose_name = 'Utilisateurs'
