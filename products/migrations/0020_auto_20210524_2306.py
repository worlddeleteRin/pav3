# Generated by Django 3.0.7 on 2021-05-24 23:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0019_auto_20210524_2305'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productattributevalue',
            name='boolean',
            field=models.CharField(blank=True, choices=[('yes', 'Yes'), ('no', 'No')], default=None, max_length=20, null=True),
        ),
    ]