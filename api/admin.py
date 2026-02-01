from django.contrib import admin
from .models import Task, UserProgress

@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ('title', 'user', 'completed', 'created_at')
    list_filter = ('completed', 'user')
    search_fields = ('title', 'description')

@admin.register(UserProgress)
class UserProgressAdmin(admin.ModelAdmin):
    list_display = ('user', 'language', 'updated_at')
    list_filter = ('language', 'user')
    search_fields = ('user__username', 'language')
