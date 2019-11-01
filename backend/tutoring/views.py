from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
import json
from .models import Tutor,TuteeManager,Tutee
from django.contrib.auth import get_user_model
from json import JSONDecodeError
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt

# Create your views here.


User = get_user_model()

def signin(request):
    if request.method == 'POST':
        return HttpResponse(status=401)
    else :
        return HttpResponse(status=405)

def signout(request):
    if request.method == 'GET':
        return HttpResponse(status=204)
    else:
        return HttpResponse(status=405)

@csrf_exempt
def signup_tutee_manager(request):
    if request.method == 'POST':
        try:
            req_data = json.loads(request.body.decode())
            user_name1 = req_data['username']
            pass_word1 = req_data['password']
            phone1=req_data['phonenumber']
            address1=req_data['address']
        except (KeyError, JSONDecodeError) as e:
            return HttpResponse(status=400)
        
        TuteeManager.objects.create_user(username=user_name1,password=pass_word1,phonenumber=phone1)
        tuteeManager_list= [TuteeManager for TuteeManager in TuteeManager.objects.all().values()] 
        '''
        check if register tutee or not
        '''
        return JsonResponse(tuteeManager_list,status=201,safe=False)
    else:
        return HttpResponse(status=405)


@csrf_exempt
def signup_tutor(request):
    if request.method == 'POST':
        try:
            req_data = json.loads(request.body.decode())
            user_name1 = req_data['username']
            pass_word1 = req_data['password']
            phone1=req_data['phonenumber']
            address1=req_data['address']
            subject1=req_data['subject']
            gender1=req_data['gender']
        except (KeyError, JSONDecodeError) as e:
            return HttpResponse(status=400)
        
        Tutor.objects.create_user(username=user_name1,password=pass_word1,phonenumber=phone1,address=address1,gender=gender1,subject=subject1)
        tutor_list= [Tutor for Tutor in Tutor.objects.all().values()] 
        
        return JsonResponse(tutor_list,status=201,safe=False)
    else:
        return HttpResponse(status=405)

'''
tutors page
'''
def tutor_page_review(request,tutor_id):
    '''
    implement
    '''
    return HttpResponse(status=404)

def tutor_page_profile(request,tutor_id):
    '''
    implement
    '''
    return HttpResponse(status=404)   

def tutor_page_tutoring(request,tutor_id):
    '''
    implement
    '''
    return HttpResponse(status=404)   

'''
tutee_managers page
'''
def tutee_page_create(request):
    '''
    implement
    '''
    return HttpResponse(status=404)  

def tutee_page_profile(request,tutor_id):
    '''
    implement
    '''
    return HttpResponse(status=404)       

def tutee_page_review(request,tutor_id):
    '''
    implement
    '''
    return HttpResponse(status=404)

def tutee_page_tutoring(request,tutor_id):
    '''
    implement
    '''
    return HttpResponse(status=404)