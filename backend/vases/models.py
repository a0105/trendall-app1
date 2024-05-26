from django.db import models

# Create your models here.
class Vase(models.Model):
    image = models.ImageField(upload_to='uploads/images', null=True, blank=True)
    number = models.IntegerField(null=False, blank=False)
    vaseID = models.CharField(max_length=100, null=True, blank=True)
    fabric = models.CharField(max_length=100, null=False, blank=False)
    technique = models.CharField(max_length=100, null=True, blank=True)
    painter = models.CharField(max_length=100, null=True, blank=True)
    type = models.CharField(max_length=100, null=True, blank=True)
    collection = models.CharField(max_length=200, null=True, blank=True)
    provenance = models.CharField(max_length=200, null=True, blank=True)
    height = models.DecimalField(max_digits=10, decimal_places=1, null=True, blank=True)
    diameter = models.DecimalField(max_digits=10, decimal_places=1, null=True, blank=True)
    publications = models.TextField()
    description = models.TextField()

    def __str__(self):
        return str(self.number)