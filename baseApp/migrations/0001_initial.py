# Generated by Django 4.1.6 on 2023-02-06 12:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Car',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('model', models.CharField(max_length=200)),
                ('releaseYear', models.DateField()),
                ('color', models.CharField(max_length=200)),
                ('number_of_doors', models.IntegerField(default=5)),
                ('engine_model', models.CharField(max_length=200)),
                ('observations', models.TextField()),
            ],
        ),
    ]