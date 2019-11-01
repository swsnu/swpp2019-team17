from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.

class User(AbstractUser):
    
    phonenumber=models.CharField(blank=False, max_length=13)
    address=models.CharField(max_length=40)

class Tutor(User):
    '''
    schedule imagefield or 
    certificate imagefield
    address tt
    '''
    GENDER_CHOICES = (
        ('male', 'Male'),
        ('female', 'Female'),
    )
    gender=models.CharField(max_length=20, choices=GENDER_CHOICES)
    subject=models.CharField(max_length=40)

class TuteeManager(User):
    '''
    tutee=onetomany field
    '''
    tutee_list=models.ManyToManyField("Tutee")

class Tutee(models.Model):
    '''
    tutee=
    '''
    GENDER_CHOICES = (
        ('male', 'Male'),
        ('female', 'Female'),
    )

    tutee_manager=models.ForeignKey(
        TuteeManager,
        on_delete=models.CASCADE,
    )
    gender=models.CharField(max_length=20, choices=GENDER_CHOICES)
    subject=models.CharField(max_length=40)
    detailed_address_x=models.CharField(max_length=40)
    detailed_address_y=models.CharField(max_length=40)