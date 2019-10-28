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