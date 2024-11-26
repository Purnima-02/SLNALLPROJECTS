# Generated by Django 5.0.7 on 2024-08-26 16:45

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dsaSLN', '0003_delete_demo_remove_dsa_applications_loan_type'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comission',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('application_id', models.CharField(max_length=100)),
                ('loan_amount', models.DecimalField(decimal_places=2, max_digits=15)),
                ('loan_type', models.CharField(max_length=100)),
                ('comissionPercentage', models.CharField(max_length=100)),
                ('comissionAmount', models.CharField(max_length=100)),
                ('disbursedAmount', models.CharField(max_length=100)),
                ('con', models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, related_name='comission', to='dsaSLN.dsa')),
            ],
        ),
    ]
