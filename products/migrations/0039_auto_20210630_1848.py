# Generated by Django 3.1.12 on 2021-06-30 18:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0038_auto_20210620_1933'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='slug',
            field=models.SlugField(allow_unicode=True, default=None, max_length=255, unique=True),
        ),
        migrations.AlterField(
            model_name='category',
            name='name',
            field=models.CharField(default=None, max_length=250),
        ),
        migrations.AlterField(
            model_name='category',
            name='name_en',
            field=models.CharField(default=None, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='category',
            name='name_ge',
            field=models.CharField(default=None, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='category',
            name='name_ru',
            field=models.CharField(default=None, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='category',
            name='name_tr',
            field=models.CharField(default=None, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='category',
            name='name_uk',
            field=models.CharField(default=None, max_length=250, null=True),
        ),
    ]