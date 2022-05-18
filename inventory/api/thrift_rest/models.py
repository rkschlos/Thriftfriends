from django.db import models
from django.urls import reverse

# Create your models here.
class Brand(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def get_api_url(self):
        return reverse("api_brand", kwargs={"pk": self.id})

    def __str__(self):
        return self.name

#class Seller

# class Availability(models.Model):
#     SOLD = 'Sold'
#     AVAILABLE = "Available"

# class Category(models.Model):
#     name = models.CharField(max)

# class Item