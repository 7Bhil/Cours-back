from django.db import models
from django.contrib.auth import get_user_model
from django.utils.text import slugify

User = get_user_model()

class ProgrammingLanguage(models.Model):
    """Langages de programmation disponibles"""
    name = models.CharField(max_length=50, unique=True)
    slug = models.SlugField(unique=True, blank=True)
    description = models.TextField(blank=True)
    icon = models.CharField(max_length=50, default='🔧')
    color = models.CharField(max_length=20, default='blue')
    difficulty = models.IntegerField(
        choices=[(1, 'Débutant'), (2, 'Intermédiaire'), (3, 'Avancé')], 
        default=1
    )
    created_at = models.DateTimeField(auto_now_add=True)
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)
    
    def __str__(self):
        return self.name
    
class Meta:
        ordering = ['name']
        verbose_name = 'Langage de programmation'
        verbose_name_plural = 'Langages de programmation'
class UserProgress(models.Model):
    """Progression utilisateur par langage - SIMPLE"""
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    language = models.CharField(max_length=50)  # "javascript", "python", etc.
    percentage = models.IntegerField(default=0)  # Ton progressPercentage
    data = models.JSONField(default=dict)  # Toutes les données (optionnel)
    last_updated = models.DateTimeField(auto_now=True)
    
    class Meta:
        unique_together = ['user', 'language']
    
    def __str__(self):
        return f"{self.user or 'Anonymous'} - {self.language}: {self.percentage}%"