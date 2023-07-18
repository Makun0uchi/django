from django.contrib import admin
from django.urls import path, include
from automobile.views import *
from rest_framework import routers
from rest_framework.authtoken import views


router = routers.DefaultRouter()
router.register(r'carlist', CarViewSet)
router.register(r'sparelist', SpareViewSet)
router.register(r'countrylist', CountryViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
