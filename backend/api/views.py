from rest_framework import status, views
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.contrib.auth import get_user_model
from .serializers import RegisterSerializer
import logging
from django.http import JsonResponse

def ping(request):
    return JsonResponse({"status": "ok"})

logger = logging.getLogger(__name__)
User = get_user_model()

class RegisterView(views.APIView):
    permission_classes = [AllowAny]
    
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        
        if serializer.is_valid():
            try:
                # Créer l'utilisateur
                user = User.objects.create_user(
                    username=serializer.validated_data['username'],
                    email=serializer.validated_data['email'],
                    password=serializer.validated_data['password'],
                    full_name=serializer.validated_data.get('full_name', '')
                )
                
                # Générer le token
                from rest_framework.authtoken.models import Token
                token, created = Token.objects.get_or_create(user=user)
                
                # Réponse
                return Response({
                    'message': 'Compte créé avec succès',
                    'user': {
                        'id': user.id,
                        'username': user.username,
                        'email': user.email,
                        'full_name': user.full_name,
                        'current_level': user.current_level,
                        'total_progress': user.total_progress
                    },
                    'token': token.key
                }, status=status.HTTP_201_CREATED)
                
            except Exception as e:
                logger.error(f"Erreur création utilisateur: {str(e)}")
                return Response({
                    'error': 'Erreur lors de la création du compte',
                    'details': str(e)
                }, status=status.HTTP_400_BAD_REQUEST)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)