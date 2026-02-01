from django.core.management.base import BaseCommand
from api.utils import ensure_admin_exists

class Command(BaseCommand):
    help = 'Ensures the admin user exists, deleting any conflict'

    def handle(self, *args, **options):
        ensure_admin_exists(self.stdout, self.style)
