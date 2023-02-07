from django.db import models
from django.utils.translation import gettext_lazy as _

class Car(models.Model):
    
    class FuelType(models.TextChoices):
        ELECTRIC = 'Electric', _('Electric')
        DIESEL = 'Diesel', _('Diesel')
        REGULAR = 'Regular', _('Regular')
    
    registration_date = models.DateField(auto_now=True)  
    model = models.CharField(max_length=200)
    releaseYear = models.DateField()
    color = models.CharField(max_length=200)
    number_of_doors = models.IntegerField(default=5)
    engine_model = models.CharField(max_length=200)
    kilometer = models.CharField(max_length=200, null=True)
    fuel_type = models.CharField(
        max_length=200,
        choices=(FuelType.choices),
        default= FuelType.REGULAR,
        null = False)
    observations = models.TextField(blank=True)
        

    def __str__(self):
        return self.model

