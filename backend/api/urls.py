# backend/api/urls.py - CORRIGE COMME ÇA
from django.urls import path
from . import views

urlpatterns = [
    # CORRECTION : Enlever le préfixe 'auth/' car il est déjà dans l'URL principale
    path('register/', views.register, name='register'),
    path('login/', views.login, name='login'),
    path('profile/', views.profile, name='profile'),
    path('refresh/', views.refresh_token, name='refresh_token'),
    path('logout/', views.logout, name='logout'),
    
    # API générale
    path('hello/', views.hello_api, name='hello_api'),
    path('predict/', views.predict_simple, name='predict_simple'),
]