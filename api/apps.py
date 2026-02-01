from django.apps import AppConfig
from django.db.models.signals import post_migrate

class ApiConfig(AppConfig):
    name = 'api'

    def ready(self):
        post_migrate.connect(self.run_ensure_admin, sender=self)

    def run_ensure_admin(self, **kwargs):
        from api.utils import ensure_admin_exists
        ensure_admin_exists()
