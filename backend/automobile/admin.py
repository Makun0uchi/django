from django.contrib import admin
from .models import Car
from .models import Spare
from .models import Country
from rest_framework.authtoken.admin import TokenAdmin


# Register your models here.
TokenAdmin.raw_id_fields = ['user']


admin.site.register(Car)
admin.site.register(Spare)
admin.site.register(Country)