# Generated by Django 3.0.7 on 2021-05-27 17:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0021_auto_20210527_1703'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='productattributevalue',
            name='code',
        ),
    ]
