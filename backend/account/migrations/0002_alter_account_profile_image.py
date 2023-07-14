# Generated by Django 4.2.2 on 2023-07-07 19:59

import account.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='profile_image',
            field=models.ImageField(default='profile_images/default_profile_image.png', upload_to=account.models.get_profile_image_path),
        ),
    ]
