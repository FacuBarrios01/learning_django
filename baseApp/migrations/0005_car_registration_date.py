# Generated by Django 4.1.6 on 2023-02-07 08:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('baseApp', '0004_alter_car_observations'),
    ]

    operations = [
        migrations.AddField(
            model_name='car',
            name='registration_date',
            field=models.DateField(auto_now=True),
        ),
    ]
