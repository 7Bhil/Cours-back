from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('predictions.urls')),  # Racine du site
    path('api/', include('predictions.urls')),  # Pour l'API aussi
]
