from django.db import models
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token


# Create your models here.
# @receiver(post_save, sender=settings.AUTH_USER_MODEL)
# def create_auth_token(sender, instance=None, created=False, **kwargs):
#     if created:
#         Token.objects.create(user=instance)


class Car(models.Model):
    car_nums = models.CharField(max_length=10)
    car_brand = models.CharField(max_length=200)
    car_speed = models.IntegerField()

    country_of_origin = models.ForeignKey('automobile.Country', on_delete=models.CASCADE, null=True)
    car_details = models.ManyToManyField('automobile.Spare')

    def __str__(self):
        return self.car_brand
    
class Spare(models.Model):
    spares_name = models.CharField(max_length=100, null=True)
    spares_num = models.CharField(max_length=100)
    spares_price = models.IntegerField()
    spares_availability = models.BooleanField()

    def __str__(self):
        return self.spares_name

class Country(models.Model):
    country_name = models.CharField(max_length=100)
    country_size = models.IntegerField()
    сountry_num = models.CharField(max_length=10)

    def __str__(self):
        return self.country_name    