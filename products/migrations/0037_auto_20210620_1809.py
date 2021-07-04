# Generated by Django 3.1.12 on 2021-06-20 18:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0036_auto_20210620_1719'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='attributeoption',
            name='group',
        ),
        migrations.RemoveField(
            model_name='productattribute',
            name='option_group',
        ),
        migrations.AddField(
            model_name='attributeoption',
            name='attribute',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='products.productattribute'),
            preserve_default=False,
        ),
    ]