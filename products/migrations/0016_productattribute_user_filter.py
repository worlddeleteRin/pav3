# Generated by Django 3.0.7 on 2021-05-24 12:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0015_productattribute_filter_type'),
    ]

    operations = [
        migrations.AddField(
            model_name='productattribute',
            name='user_filter',
            field=models.BooleanField(default=True),
        ),
    ]
