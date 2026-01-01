from django.urls import path
from . import views

urlpatterns = [
    path('test/', views.test_api, name='test-api'),
    path('languages/', views.get_languages, name='languages-list'),
    path('progress/save/', views.save_user_progress, name='save-progress'),
    path('progress/load/<str:language>/', views.get_user_progress, name='load-progress'),
]
