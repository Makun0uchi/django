# Generated by Django 4.2.2 on 2023-07-03 20:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('automobile', '0006_remove_spare_for_car_car_for_car_spare_spares_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='country',
            name='сountry_code',
            field=models.CharField(max_length=10),
        ),
    ]
