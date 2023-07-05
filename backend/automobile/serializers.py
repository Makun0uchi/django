from rest_framework import serializers
from .models import Car, Country, Spare


class SpareSerializer(serializers.ModelSerializer):
    class Meta:
        model = Spare
        fields = '__all__'


class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = '__all__'


class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = '__all__'
