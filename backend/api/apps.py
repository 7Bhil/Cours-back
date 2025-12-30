from django.apps import AppConfig  # <-- IMPORT ESSENTIEL !

class ApiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'api'
    verbose_name = 'API Machine Learning'
