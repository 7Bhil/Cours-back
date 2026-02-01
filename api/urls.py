from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CustomLoginView, RegisterView, ProfileView, TaskViewSet, ProgressView, ProgressLoadView, LogoutView, AdminUserProgressView

router = DefaultRouter()
router.register(r'tasks', TaskViewSet, basename='task')

urlpatterns = [
    path('auth/login/', CustomLoginView.as_view(), name='login'),
    path('auth/register/', RegisterView.as_view(), name='register'),
    path('auth/logout/', LogoutView.as_view(), name='logout'),
    path('auth/profile/', ProfileView.as_view(), name='profile'),
    path('progress/save/', ProgressView.as_view(), name='progress-save'),
    path('progress/load/<str:language>/', ProgressLoadView.as_view(), name='progress-load'),
    path('admin/users-progress/', AdminUserProgressView.as_view(), name='admin-users-progress'),
    path('', include(router.urls)),
]
