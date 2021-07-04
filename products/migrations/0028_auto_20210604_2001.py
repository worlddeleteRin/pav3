# Generated by Django 3.1.12 on 2021-06-04 20:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0027_auto_20210604_1949'),
    ]

    operations = [
        migrations.AddField(
            model_name='productattributevalue',
            name='value_multi_option',
            field=models.ManyToManyField(blank=True, related_name='multi_value_attribute_values', to='products.AttributeOption'),
        ),
        migrations.AddField(
            model_name='productattributevalue',
            name='value_option',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='products.attributeoption'),
        ),
    ]
