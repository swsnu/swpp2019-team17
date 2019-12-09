from django.db import models
from django.contrib.auth.models import AbstractUser
from multiselectfield import MultiSelectField

# Create your models here.

class User(AbstractUser):
    
    phonenumber=models.CharField(blank=False, max_length=13)
    address=models.CharField(max_length=40,null=True,blank=True)

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
    name=models.CharField(max_length=10,null=True,blank=True)
    photo=models.ImageField(upload_to='tutor/',null=True)
    age=models.CharField(max_length=3,null=True,blank=True)

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
    SUBJECT_CHOICES = (
        ('math','Math'),
        ('korean','Korean'),
        ('english','English'),
        ('society','Society'),
        ('science','Science'),
    )
    tutee_manager=models.ForeignKey(
        TuteeManager,
        on_delete=models.CASCADE,
    )
    name=models.CharField(max_length=10,null=True,blank=True)
    gender=models.CharField(max_length=20, choices=GENDER_CHOICES)
    subject=MultiSelectField(choices=SUBJECT_CHOICES,max_choices=5,max_length=5)
    detailed_address_x=models.CharField(max_length=40,default='0')
    detailed_address_y=models.CharField(max_length=40,default='0')
    age=models.CharField(max_length=3,null=True,blank=True)

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
    state=models.CharField(max_length=10,default="suspended")
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