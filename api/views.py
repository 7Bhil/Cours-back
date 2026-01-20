from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken, AccessToken
from .serializers import UserSerializer, RegisterSerializer, TaskSerializer, CustomTokenObtainPairSerializer, LogoutSerializer
from .models import Task, UserProgress

class CustomLoginView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

class RegisterView(APIView):
    permission_classes = (AllowAny,)
    
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            refresh = RefreshToken.for_user(user)
            return Response({
                'user': UserSerializer(user).data,
                'access': str(refresh.access_token),
                'refresh': str(refresh),
                'message': 'Registration successful!'
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LogoutView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        serializer = LogoutSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProfileView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)

class TaskViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    serializer_class = TaskSerializer

    def get_queryset(self):
        return Task.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class ProgressView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        language = request.data.get('language')
        progress_data = request.data.get('progress_data')
        
        if not language:
            return Response({'error': 'Language required'}, status=400)

        # Try to get existing progress
        progress, created = UserProgress.objects.get_or_create(
            user=request.user,
            language=language,
            defaults={'progress_data': {}}
        )
        
        # Merge existing data with new data
        if not created and progress.progress_data:
            current_data = progress.progress_data
            if isinstance(current_data, dict) and isinstance(progress_data, dict):
                current_data.update(progress_data)
                progress.progress_data = current_data
            else:
                progress.progress_data = progress_data
        else:
            progress.progress_data = progress_data
            
        progress.save()
        return Response({'success': True, 'message': 'Progress saved'})

    def get(self, request):
        progress_list = UserProgress.objects.filter(user=request.user)
        data = []
        for p in progress_list:
            data.append({
                'language': p.language,
                'progress_data': p.progress_data,
                'updated_at': p.updated_at
            })
        return Response(data)

class ProgressLoadView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, language):
        try:
            progress = UserProgress.objects.get(user=request.user, language=language)
            return Response(progress.progress_data)
        except UserProgress.DoesNotExist:
            return Response({})
