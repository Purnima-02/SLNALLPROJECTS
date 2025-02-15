# Generated by Django 5.0.7 on 2024-11-11 06:19

import ravi.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ravi', '0006_alter_personalbasicdetail_gender_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='applicantdocument',
            name='latest_3_yrs_itr_1',
            field=models.FileField(blank=True, null=True, upload_to='documents/', validators=[ravi.models.validate_pdf_file]),
        ),
        migrations.AlterField(
            model_name='applicantdocument',
            name='latest_3_yrs_itr_2',
            field=models.FileField(blank=True, null=True, upload_to='documents/', validators=[ravi.models.validate_pdf_file]),
        ),
    ]
