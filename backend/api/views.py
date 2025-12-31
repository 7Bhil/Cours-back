from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from .serializers import RegisterSerializer, LoginSerializer, UserSerializer

# Vue 1 : Inscription
# Dans api/views.py, modifie la fonction register
@api_view(['POST'])
@permission_classes([AllowAny])
def register(request):
    # Log les données reçues
    print("📨 Données reçues:", request.data)
    print("📨 Headers:", request.headers)
    
    serializer = RegisterSerializer(data=request.data)
    
    if serializer.is_valid():
        print("✅ Données valides")
        user = serializer.save()
        
        # Crée les tokens JWT
        refresh = RefreshToken.for_user(user)
        
        return Response({
            'success': True,
            'message': 'Inscription réussie !',
            'user': UserSerializer(user).data,
            'tokens': {
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }
        }, status=status.HTTP_201_CREATED)
    
    print("❌ Erreurs de validation:", serializer.errors)
    return Response({
        'success': False,
        'errors': serializer.errors
    }, status=status.HTTP_400_BAD_REQUEST)
# Vue 2 : Connexion
@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    serializer = LoginSerializer(data=request.data)
    
    if serializer.is_valid():
        username = serializer.validated_data['username']
        password = serializer.validated_data['password']
        
        user = authenticate(username=username, password=password)
        
        if user:
            # Crée les tokens JWT
            refresh = RefreshToken.for_user(user)
            
            return Response({
                'success': True,
                'message': 'Connexion réussie !',
                'user': UserSerializer(user).data,
                'tokens': {
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                }
            })
        
        return Response({
            'success': False,
            'error': 'Identifiants incorrects'
        }, status=status.HTTP_401_UNAUTHORIZED)
    
    return Response({
        'success': False,
        'errors': serializer.errors
    }, status=status.HTTP_400_BAD_REQUEST)

# Vue 3 : Profil utilisateur
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def profile(request):
    return Response({
        'success': True,
        'user': UserSerializer(request.user).data
    })

# Vue 4 : Rafraîchir le token
@api_view(['POST'])
@permission_classes([AllowAny])
def refresh_token(request):
    refresh_token = request.data.get('refresh')
    
    if not refresh_token:
        return Response({
            'success': False,
            'error': 'Token de rafraîchissement requis'
        }, status=status.HTTP_400_BAD_REQUEST)
    
    try:
        refresh = RefreshToken(refresh_token)
        user_id = refresh.payload.get('user_id')
        user = User.objects.get(id=user_id)
        
        # Crée un nouveau token d'accès
        new_access_token = str(refresh.access_token)
        
        return Response({
            'success': True,
            'access': new_access_token
        })
        
    except Exception as e:
        return Response({
            'success': False,
            'error': 'Token invalide ou expiré'
        }, status=status.HTTP_401_UNAUTHORIZED)

# Vue 5 : Déconnexion
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout(request):
    try:
        # Pour invalider le token, on pourrait utiliser une blacklist
        # Pour l'instant, on laisse le client supprimer le token
        return Response({
            'success': True,
            'message': 'Déconnexion réussie'
        })
    except Exception as e:
        return Response({
            'success': False,
            'error': str(e)
        }, status=status.HTTP_400_BAD_REQUEST)

# Vue 6 : Test API (garde celle-ci)
@api_view(['GET'])
@permission_classes([AllowAny])
def hello_api(request):
    return Response({
        'message': '🎉 API Django fonctionnelle !',
        'status': 'online',
        'project': 'Machine Learning avec Vue.js',
        'endpoints': {
            'register': '/api/auth/register/',
            'login': '/api/auth/login/',
            'profile': '/api/auth/profile/',
            'refresh': '/api/auth/refresh/',
            'logout': '/api/auth/logout/'
        }
    })

# Vue 7 : Prédiction ML (garde celle-ci)
@api_view(['POST'])
@permission_classes([AllowAny])
def predict_simple(request):
    from django.views.decorators.csrf import csrf_exempt
    import json
    import random
    
    # Simulation de prédiction ML
    features = request.data.get('features', [])
    model_name = request.data.get('model', 'default')
    
    prediction = {
        'predicted_class': random.choice(['A', 'B', 'C']),
        'confidence': round(random.uniform(0.7, 0.99), 2),
        'input_received': features,
        'model_used': model_name,
        'message': 'Prédiction simulée - Intègre ton vrai modèle ici!'
    }
    
    return Response({
        'success': True,
        'prediction': prediction,
        'django_message': '✅ Prédiction effectuée avec succès!'
    })
