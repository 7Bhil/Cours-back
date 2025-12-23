from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.core.validators import validate_email
import re

User = get_user_model()

class RegisterSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    username = serializers.CharField(required=True, min_length=3, max_length=50)
    password = serializers.CharField(
        required=True, 
        min_length=8,
        write_only=True,
        style={'input_type': 'password'}
    )
    full_name = serializers.CharField(required=True, min_length=2)
    
    def validate_email(self, value):
        # Vérifier si email existe déjà
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("Cet email est déjà utilisé")
        return value
    
    def validate_username(self, value):
        # Vérifier si username existe déjà
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError("Ce nom d'utilisateur est déjà pris")
        
        # Vérifier format (lettres, chiffres, underscore)
        if not re.match(r'^[a-zA-Z0-9_]+$', value):
            raise serializers.ValidationError(
                "Seuls les lettres, chiffres et underscores sont autorisés"
            )
        return value
    
    def validate_password(self, value):
        # Vérifications de sécurité
        if len(value) < 8:
            raise serializers.ValidationError(
                "Le mot de passe doit contenir au moins 8 caractères"
            )
        
        # Optionnel : Vérifications supplémentaires
        if not any(char.isdigit() for char in value):
            raise serializers.ValidationError(
                "Le mot de passe doit contenir au moins un chiffre"
            )
        
        return value