# predictions/models.py
from django.db import models
from django.conf import settings

class Dataset(models.Model):
    """Un jeu de données pour l'entraînement"""
    
    DATASET_TYPES = [
        ('csv', '📊 CSV'),
        ('json', '📝 JSON'),
        ('image', '🖼️ Images'),
        ('text', '📄 Texte'),
    ]
    
    name = models.CharField(max_length=200, verbose_name="Nom du dataset")
    description = models.TextField(blank=True, verbose_name="Description")
    file_path = models.CharField(max_length=500, verbose_name="Chemin du fichier")
    dataset_type = models.CharField(max_length=20, choices=DATASET_TYPES, default='csv')
    size = models.IntegerField(default=0, verbose_name="Taille (en octets)")
    rows = models.IntegerField(default=0, verbose_name="Nombre de lignes")
    
    # Relation avec l'utilisateur
    owner = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='datasets'
    )
    
    # Métadonnées
    is_public = models.BooleanField(default=False, verbose_name="Public")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"📁 {self.name} ({self.get_dataset_type_display()})"
    
    def get_file_size_mb(self):
        """Retourne la taille en Mo"""
        return round(self.size / (1024 * 1024), 2)
    
    class Meta:
        verbose_name = "Dataset"
        verbose_name_plural = "Datasets"
        ordering = ['-created_at']
# predictions/models.py - AJOUTE cette classe
class MLModel(models.Model):
    """Un modèle de machine learning entraîné"""
    
    MODEL_TYPES = [
        ('classification', '🏷️ Classification'),
        ('regression', '📈 Régression'),
        ('clustering', '🔍 Clustering'),
        ('neural_network', '🧠 Réseau de neurones'),
    ]
    
    name = models.CharField(max_length=200, verbose_name="Nom du modèle")
    description = models.TextField(blank=True)
    model_type = models.CharField(max_length=50, choices=MODEL_TYPES)
    model_file = models.FileField(upload_to='models/', verbose_name="Fichier du modèle")
    
    # Métriques
    accuracy = models.FloatField(null=True, blank=True, verbose_name="Précision")
    loss = models.FloatField(null=True, blank=True, verbose_name="Perte")
    training_time = models.FloatField(null=True, blank=True, verbose_name="Temps d'entraînement (s)")
    
    # Relations
    dataset = models.ForeignKey(
        Dataset,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='trained_models'
    )
    owner = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='ml_models'
    )
    
    # Statut
    is_active = models.BooleanField(default=True, verbose_name="Actif")
    version = models.CharField(max_length=20, default='1.0.0')
    
    # Métadonnées
    created_at = models.DateTimeField(auto_now_add=True)
    trained_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"🤖 {self.name} v{self.version}"
    
    class Meta:
        verbose_name = "Modèle ML"
        verbose_name_plural = "Modèles ML"
        ordering = ['-created_at']
# predictions/models.py - FIN AJOUTE cette classe

# predictions/models.py - AJOUTE cette classe
class Prediction(models.Model):
    """Une prédiction faite par un modèle"""
    
    STATUS_CHOICES = [
        ('pending', '⏳ En attente'),
        ('processing', '⚡ En traitement'),
        ('completed', '✅ Terminée'),
        ('failed', '❌ Échouée'),
    ]
    
    # Données
    input_data = models.JSONField(verbose_name="Données d'entrée")
    output_data = models.JSONField(
        null=True, 
        blank=True, 
        verbose_name="Résultat"
    )
    
    # Métriques
    confidence = models.FloatField(null=True, blank=True, verbose_name="Confiance")
    processing_time = models.FloatField(null=True, blank=True, verbose_name="Temps de traitement (ms)")
    
    # Relations
    ml_model = models.ForeignKey(
        MLModel,
        on_delete=models.CASCADE,
        related_name='predictions'
    )
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='predictions',
        null=True,
        blank=True
    )
    
    # Statut
    status = models.CharField(
        max_length=20, 
        choices=STATUS_CHOICES, 
        default='pending'
    )
    error_message = models.TextField(blank=True, verbose_name="Message d'erreur")
    
    # Métadonnées
    created_at = models.DateTimeField(auto_now_add=True)
    completed_at = models.DateTimeField(null=True, blank=True)
    
    def __str__(self):
        return f"🔮 Prédiction #{self.id} - {self.get_status_display()}"
    
    def is_successful(self):
        return self.status == 'completed' and self.confidence is not None
    
    def get_confidence_percentage(self):
        if self.confidence:
            return f"{self.confidence * 100:.1f}%"
        return "N/A"
    
    class Meta:
        verbose_name = "Prédiction"
        verbose_name_plural = "Prédictions"
        ordering = ['-created_at']