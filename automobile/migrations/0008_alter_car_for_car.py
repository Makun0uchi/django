# Generated by Django 4.2.2 on 2023-07-03 21:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('automobile', '0007_alter_country_сountry_code'),
    ]

    operations = [
        migrations.AlterField(
            model_name='car',
            name='for_car',
            field=models.ManyToManyField(to='automobile.spare'),
        ),
    ]
