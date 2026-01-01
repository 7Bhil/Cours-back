# backend/nom_app/admin.py
from django.contrib import admin
from .models import ProgrammingLanguage, UserProgress  # AJOUTE UserProgress

# Enregistrer ProgrammingLanguage
admin.site.register(ProgrammingLanguage)

# Enregistrer UserProgress
@admin.register(UserProgress)
class UserProgressAdmin(admin.ModelAdmin):
    list_display = ('user', 'language', 'percentage', 'last_updated')
    list_filter = ('language', 'last_updated')
    search_fields = ('user__username', 'language')
    ordering = ('-last_updated',)

# OU plus simple :
# admin.site.register(UserProgress)