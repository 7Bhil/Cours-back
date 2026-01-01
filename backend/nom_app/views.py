from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import ProgrammingLanguage, UserProgress
from .serializers import ProgrammingLanguageSerializer

@api_view(['GET'])
@permission_classes([AllowAny])
def test_api(request):
    return Response({
        'status': 'API Django fonctionnelle',
        'message': 'Bienvenue sur Bhil Learning API',
        'version': '1.0'
    })

@api_view(['GET'])
@permission_classes([AllowAny])
def get_languages(request):
    languages = ProgrammingLanguage.objects.all()
    serializer = ProgrammingLanguageSerializer(languages, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_language_detail(request, pk):
    try:
        language = ProgrammingLanguage.objects.get(pk=pk)
        serializer = ProgrammingLanguageSerializer(language)
        return Response(serializer.data)
    except ProgrammingLanguage.DoesNotExist:
        return Response({'error': 'Langage non trouvé'}, status=404)

# backend/nom_app/views.py - AJOUTE CES FONCTIONS

@api_view(['POST'])
@permission_classes([AllowAny])  # Pour commencer, ensuite on mettra IsAuthenticated
def save_progress(request):
    """
    Sauvegarde la progression d'un utilisateur
    Format attendu: {"language": "javascript", "progress_data": {...}}
    """
    data = request.data
    
    # Pour l'instant, juste logger et retourner OK
    # Plus tard, on sauvegardera dans la base
    print(f"📦 Progression reçue pour {data.get('language')}")
    print(f"Données: {data.get('progress_data', {})}")
    
    return Response({
        'success': True,
        'message': 'Progression sauvegardée',
        'received_at': timezone.now().isoformat()
    })

@api_view(['GET'])
@permission_classes([AllowAny])
def load_progress(request, language_slug):
    """
    Charge la progression pour un langage
    Pour l'instant, retourne des données vides
    """
    return Response({
        'language': language_slug,
        'progress': {},  # Vide pour l'instant
        'message': 'Aucune progression sauvegardée'
    })
# backend/nom_app/views.py - AJOUTE CETTE VUE SIMPLE
@api_view(['POST'])
@permission_classes([AllowAny])
def save_user_progress(request):
    """
    Sauvegarde la progression d'un utilisateur
    Format attendu: {
        "language": "javascript",
        "percentage": 45,
        "data": {...}  # optionnel
    }
    """
    data = request.data
    language = data.get('language', 'javascript')
    percentage = data.get('percentage', 0)
    
    # Identifier l'utilisateur (anonyme ou connecté)
    user = None
    if request.user.is_authenticated:
        user = request.user
    
    # Créer ou mettre à jour
    progress, created = UserProgress.objects.update_or_create(
        user=user,
        language=language,
        defaults={
            'percentage': percentage,
            'data': data.get('data', {})
        }
    )
    
    return Response({
        'success': True,
        'created': created,
        'message': f'Progression {language} sauvegardée: {percentage}%',
        'progress': {
            'language': progress.language,
            'percentage': progress.percentage,
            'last_updated': progress.last_updated
        }
    })
    
# backend/nom_app/views.py - AJOUTE CETTE FONCTION
@api_view(['GET'])
@permission_classes([AllowAny])
def get_user_progress(request, language):
    """Récupère la progression pour un langage"""
    user = request.user if request.user.is_authenticated else None
    
    try:
        progress = UserProgress.objects.get(user=user, language=language)
        return Response({
            'language': progress.language,
            'percentage': progress.percentage,
            'data': progress.data,
            'last_updated': progress.last_updated
        })
    except UserProgress.DoesNotExist:
        return Response({
            'language': language,
            'percentage': 0,
            'data': {},
            'message': 'Aucune progression trouvée'
        })