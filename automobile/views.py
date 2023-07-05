from django.shortcuts import render
from rest_framework import generics, viewsets
from .models import Car, Country, Spare
from .serializers import CarSerializer, CountrySerializer, SpareSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


# Create your views here.
class SpareViewSet(viewsets.ModelViewSet):
    queryset = Spare.objects.all()
    serializer_class = SpareSerializer
    #permission_classes = [IsAuthenticated]


class CountryViewSet(viewsets.ModelViewSet):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer
    #permission_classes = [IsAuthenticated]


class CarViewSet(viewsets.ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer  
    #permission_classes = [IsAuthenticated]

    @action(methods=['get'], detail=False)
    def country(self, requets):
        countrys = Country.objects.all()
        return Response({'countrys': [c.country_name for c in countrys]}) 