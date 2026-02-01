from django.contrib.auth.models import User

def ensure_admin_exists(stdout=None, style=None):
    email = "7bhilal.chitou7@gmail.com"
    username = "7bhilal.chitou7"
    password = "Bh7777777"

    # Check for existing user with this email
    try:
        user = User.objects.get(email=email)
        if stdout and style:
            stdout.write(style.WARNING(f'User with email {email} found. Deleting...'))
        user.delete()
    except User.DoesNotExist:
        pass
    
    # Check if username exists
    try:
        user = User.objects.get(username=username)
        if stdout and style:
            stdout.write(style.WARNING(f'User with username {username} found. Deleting...'))
        user.delete()
    except User.DoesNotExist:
        pass

    # Create the superuser
    User.objects.create_superuser(username=username, email=email, password=password)
    if stdout and style:
        stdout.write(style.SUCCESS(f'Successfully created superuser {username}'))
