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
    country_of_origin = serializers.SlugRelatedField(slug_field='country_name', queryset=Country.objects.all())
    car_details = serializers.SlugRelatedField(slug_field='spares_name', many=True, queryset=Spare.objects.all())
    class Meta:
        model = Car
        fields = '__all__'
