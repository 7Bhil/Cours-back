# backend/backend/urls.py - VERSION CORRECTE
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # API Authentication (login, register, etc.)
    path('api/auth/', include('api.urls')),
    
    # API principale - LANGAGES ET PROGRESSION
    # Note: pas de doublon "api/api/" !
    path('api/', include('nom_app.urls')),  # UNIQUEMENT CETTE LIGNE
    
    # Pas de path('api/api/') ! ← SUPPRIME SI TU L'AS
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)