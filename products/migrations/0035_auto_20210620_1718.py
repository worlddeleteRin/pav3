# Generated by Django 3.1.12 on 2021-06-20 17:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0034_attributeoption_code'),
    ]

    operations = [
        migrations.AlterField(
            model_name='attributeoption',
            name='code',
            field=models.CharField(blank=True, default=None, max_length=400, null=True),
        ),
    ]
