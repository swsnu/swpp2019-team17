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
    name=models.CharField(max_length=10,null=True,blank=True)
    gender=models.CharField(max_length=20, choices=GENDER_CHOICES)
    subject=models.CharField(max_length=40)
    detailed_address_x=models.CharField(max_length=40,default='0')
    detailed_address_y=models.CharField(max_length=40,default='0')

class Tutoring(models.Model):
    subject=models.CharField(max_length=40)
    tutee=models.ForeignKey(
        Tutee,
        on_delete=models.CASCADE,
    )
    tutor=models.ForeignKey(
        Tutor,
        on_delete=models.CASCADE,
    )
    address=models.CharField(max_length=40)
    fee=models.IntegerField()

class Review(models.Model):
    tutee=models.ForeignKey(
        Tutee,
        on_delete=models.CASCADE,
    )
    tutor=models.ForeignKey(
        Tutor,
        on_delete=models.CASCADE,
    )
    content=models.TextField(default="Not reviewed yet")
    date=models.DateField(auto_now=True)
    create_date=models.DateField(auto_now_add=True)