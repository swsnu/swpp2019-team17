# Generated by Django 2.2.6 on 2019-12-09 07:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tutoring', '0008_auto_20191202_1608'),
    ]

    operations = [
        migrations.AddField(
            model_name='tutoring',
            name='state',
            field=models.CharField(default='suspended', max_length=10),
        ),
    ]