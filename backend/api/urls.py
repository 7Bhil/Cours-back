from django.urls import path
from . import views

urlpatterns = [
    # Authentification
    path('auth/register/', views.register, name='register'),
    path('auth/login/', views.login, name='login'),
    path('auth/profile/', views.profile, name='profile'),
    path('auth/refresh/', views.refresh_token, name='refresh_token'),
    path('auth/logout/', views.logout, name='logout'),
    
    # API générale
    path('hello/', views.hello_api, name='hello_api'),
    path('predict/', views.predict_simple, name='predict_simple'),
]
