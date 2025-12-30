from django.apps import AppConfig  # <-- IMPORT ESSENTIEL !

class PredictionsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'predictions'
    verbose_name = 'Prédictions ML'
