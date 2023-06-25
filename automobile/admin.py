from django.contrib import admin
from .models import Car
from .models import Spare
from .models import Country

# Register your models here.
admin.site.register(Car)
admin.site.register(Spare)
admin.site.register(Country)