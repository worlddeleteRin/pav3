# Generated by Django 3.0.7 on 2021-05-22 11:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0010_productattribute'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productattribute',
            name='code',
            field=models.CharField(default=None, max_length=300),
        ),
    ]
