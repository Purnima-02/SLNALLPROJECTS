# Generated by Django 5.0.7 on 2024-09-05 06:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dsaSLN', '0008_alter_comission_loan_amount_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='dsa',
            name='dsa_password',
            field=models.CharField(max_length=200, null=True),
        ),
    ]
