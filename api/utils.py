import os
from django.conf import settings
from django.contrib.auth import get_user_model

def ensure_admin_exists(stdout=None, style=None):
    User = get_user_model()
    
    username = os.environ.get("ADMIN_USERNAME") or ("admin" if getattr(settings, "DEBUG", False) else None)
    password = os.environ.get("ADMIN_PASSWORD") or ("admin123" if getattr(settings, "DEBUG", False) else None)
    email = os.environ.get("ADMIN_EMAIL", "admin@example.com")

    if not username or not password:
        if stdout and style:
            stdout.write(style.WARNING("ADMIN_USERNAME ou ADMIN_PASSWORD non défini. Création automatique de l'admin ignorée."))
        return

    try:
        user = User.objects.get(username=username)
        # S'assurer que l'utilisateur a bien les droits admin sans réinitialiser son mot de passe
        if not user.is_superuser or not user.is_staff:
            user.is_superuser = True
            user.is_staff = True
            user.save()
            if stdout and style:
                stdout.write(style.SUCCESS(f'Droits superuser configurés pour {username}.'))
        elif stdout and style:
            stdout.write(style.SUCCESS(f'Superuser {username} existe déjà.'))
    except User.DoesNotExist:
        User.objects.create_superuser(username=username, email=email, password=password)
        if stdout and style:
            stdout.write(style.SUCCESS(f'Superuser {username} créé avec succès.'))


