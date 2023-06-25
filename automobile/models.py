from django.db import models

# Create your models here.
class Car(models.Model):
    car_nums = models.CharField(max_length=10)
    car_brand = models.CharField(max_length=200)
    car_speed = models.IntegerField()

    def __str__(self):
        return self.car_nums
    
class Spare(models.Model):
    spares_num = models.CharField(max_length=100)
    spares_price = models.IntegerField()
    spares_availability = models.BooleanField()

    for_car = models.ForeignKey('automobile.Car', on_delete=models.CASCADE, null = True)

    def __str__(self):
        return self.spares_num

class Country(models.Model):
    country_name = models.CharField(max_length=100)
    Country_code = models.IntegerField()
    country_size = models.IntegerField()

    car_from = models.ForeignKey('automobile.Car', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.country_name      