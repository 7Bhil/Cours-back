from django.urls import path
from .views import ping

urlpatterns = [
    path('ping/', ping),
]
urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
]