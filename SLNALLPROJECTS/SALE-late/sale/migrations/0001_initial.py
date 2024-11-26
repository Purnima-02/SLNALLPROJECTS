# Generated by Django 4.2.16 on 2024-11-19 08:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SALE',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dsa_registerid', models.CharField(max_length=100)),
                ('dsa_name', models.CharField(max_length=100)),
                ('dsa_password', models.CharField(blank=True, max_length=200, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='SALE_Applications',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cust_applicationId', models.CharField(max_length=100)),
                ('dsa', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='dsa', to='sale.sale')),
            ],
        ),
    ]
