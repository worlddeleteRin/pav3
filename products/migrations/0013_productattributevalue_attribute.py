# Generated by Django 3.0.7 on 2021-05-22 11:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0012_auto_20210522_1129'),
    ]

    operations = [
        migrations.AddField(
            model_name='productattributevalue',
            name='attribute',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='products.ProductAttribute'),
        ),
    ]
