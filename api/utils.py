import os
from django.contrib.auth import get_user_model

def ensure_admin_exists(stdout=None, style=None):
    User = get_user_model()
    username = os.environ.get("ADMIN_USERNAME", "admin")
    password = os.environ.get("ADMIN_PASSWORD", "admin123")
    email = os.environ.get("ADMIN_EMAIL", "admin@example.com")

    try:
        user = User.objects.get(username=username)
        user.set_password(password)
        user.is_superuser = True
        user.is_staff = True
        user.save()
        if stdout and style:
            stdout.write(style.SUCCESS(f'Superuser {username} mis à jour avec le mot de passe spécifié.'))
    except User.DoesNotExist:
        User.objects.create_superuser(username=username, email=email, password=password)
        if stdout and style:
            stdout.write(style.SUCCESS(f'Superuser {username} créé avec succès.'))

