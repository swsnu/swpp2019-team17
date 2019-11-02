from django.contrib import admin
from .models import User,Tutee,TuteeManager,Tutor
# Register your models here.

admin.site.register(User)
admin.site.register(TuteeManager)
admin.site.register(Tutor)
admin.site.register(Tutee)