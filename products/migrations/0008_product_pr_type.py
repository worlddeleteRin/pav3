# Generated by Django 3.0.7 on 2021-05-22 11:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0007_auto_20210522_0952'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='pr_type',
            field=models.CharField(choices=[('stand_alone', 'stand_alone'), ('parent', 'parent'), ('child', 'child')], default='stand_alone', max_length=50),
        ),
    ]
