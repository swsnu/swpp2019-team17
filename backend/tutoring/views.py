from django.shortcuts import render
from django.http import HttpResponse
import json
# Create your views here.



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

def signup_tutee_manager(request):
    if request.method == 'POST':
        return HttpResponse(status=201)
    else:
        return HttpResponse(status=405)

def signup_tutor(request):
    if request.method == 'POST':
        return HttpResponse(status=201)
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
def tutee_page_create(request,tutor_id):
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