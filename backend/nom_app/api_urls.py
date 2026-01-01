# backend/nom_app/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

# Créer un router pour les ViewSets
router = DefaultRouter()
router.register(r'languages', views.ProgrammingLanguageViewSet, basename='language')

urlpatterns = [
    # Progress endpoint (existant)
    path('progress/', views.LanguageProgressAPIView.as_view(), name='progress'),
    
    # Inclure les URLs du router
    path('', include(router.urls)),
    
    # Autres endpoints
    path('languages/<int:pk>/chapters/', 
         views.ProgrammingLanguageViewSet.as_view({'get': 'chapters'}), 
         name='language-chapters'),
    path('languages/<int:pk>/start_learning/', 
         views.ProgrammingLanguageViewSet.as_view({'post': 'start_learning'}), 
         name='start-learning'),
]