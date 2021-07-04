# Generated by Django 3.1.12 on 2021-06-04 20:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0029_auto_20210604_2002'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productattribute',
            name='type',
            field=models.CharField(choices=[('text', 'text'), ('integer', 'integer'), ('boolean', 'boolean'), ('option', 'option'), ('multi_option', 'multi_option')], default='text', max_length=100),
        ),
    ]
