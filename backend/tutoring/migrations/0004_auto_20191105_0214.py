# Generated by Django 2.2.5 on 2019-11-04 17:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tutoring', '0003_auto_20191102_0111'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tuteemanager',
            name='tutee_list',
        ),
        migrations.RemoveField(
            model_name='tutor',
            name='detailed_address_x',
        ),
        migrations.RemoveField(
            model_name='tutor',
            name='detailed_address_y',
        ),
        migrations.AddField(
            model_name='tutee',
            name='name',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
        migrations.CreateModel(
            name='Tutoring',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('subject', models.CharField(max_length=40)),
                ('address', models.CharField(max_length=40)),
                ('fee', models.IntegerField()),
                ('tutee', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tutoring.Tutee')),
                ('tutor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tutoring.Tutor')),
            ],
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField(default='Not reviewed yet')),
                ('date', models.DateField(auto_now=True)),
                ('create_date', models.DateField(auto_now_add=True)),
                ('tutee', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tutoring.Tutee')),
                ('tutor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tutoring.Tutor')),
            ],
        ),
    ]
