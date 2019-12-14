from django.db import models
from django.contrib.auth.models import AbstractUser
from multiselectfield import MultiSelectField
from django.contrib.postgres.fields import JSONField

# Create your models here.

class User(AbstractUser):
    phonenumber=models.CharField(null=True, blank=True, max_length=15)

class Tutor(User):
    schedule = JSONField(null=True, blank=True) # { 0:{start: date, end: date} 1:{start: date, end: date} ... ]
    address = JSONField(null=True, blank=True) # { 0:{startRoad: "", startX: float, startY: float, endRoad: "", endX: float, endY: float}, 1:{...} ...]
    # certificate = models.ImageField
    GENDER_CHOICES = (
        ('male', 'Male'),
        ('female', 'Female'),
    )
    gender=models.CharField(max_length=20, choices=GENDER_CHOICES, null=True, blank=True)
    subject=models.CharField(max_length=40, null=True, blank=True)
    name=models.CharField(max_length=10,null=True,blank=True)
    photo=models.ImageField(upload_to='tutor/',null=True)
    distance=models.FloatField(default=0,null=True,blank=True)
    age=models.IntegerField(null=True,blank=True)

class TuteeManager(User):
    '''
    tutee=onetomany field
    '''
    address=JSONField(null=True,blank=True)

class Tutee(models.Model):
    # schedule = models.JsonField()  [ {start: date,end: date} {start: date, end: date} ... ]
    # address = models.JsonField()  [Road: "", X: float, Y: float]
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
    age=models.IntegerField(null=True,blank=True)
    
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
    state=models.CharField(max_length=10,default="requested")
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