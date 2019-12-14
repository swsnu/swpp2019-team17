from django.shortcuts import render
from django.http import HttpResponse,JsonResponse,HttpResponseNotAllowed
from django.contrib.auth import authenticate,login,logout
import json
from .models import Tutor,TuteeManager,Tutee,Tutoring,Review
from django.contrib.auth import get_user_model, authenticate, login
from json import JSONDecodeError
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.csrf import ensure_csrf_cookie
import requests
import copy

User = get_user_model()

def signin(request):
    if request.method == 'POST':
        try:
            user_name=json.loads(request.body.decode())['username']
            user_pass=json.loads(request.body.decode())['password']
        except (KeyError, JSONDecodeError) as e:
            return HttpResponse(status=400)

        userA=authenticate(username=user_name,password=user_pass)
        if userA is not None:
            login(request,userA)
            try:
                Tutor.objects.get(username=user_name)
                return JsonResponse('Tutor',status=204,safe=False)    
            except:
                return JsonResponse('TuteeManager',status=204,safe=False)
        else:
            return HttpResponse(status=401)
    else :
        return HttpResponse(status=405)

def signout(request):
    if request.method == 'GET':
        if not request.user.is_authenticated:
            return HttpResponse(status=401)
        else:
            logout(request)
            return HttpResponse(status=204)
    else:
        return HttpResponse(status=405)


def signup_tutee_manager(request):
    if request.method == 'POST':
        try:
            req_data = json.loads(request.body.decode())
            user_name1 = req_data['username']
            pass_word1 = req_data['password']
            phone1=req_data['phonenumber']
        except (KeyError, JSONDecodeError) as e:
            return HttpResponse(status=400)
        
        TuteeManager.objects.create_user(username=user_name1,password=pass_word1,phonenumber=phone1) 
        '''
        check if register tutee or not
        '''
        return JsonResponse("TuteeManager",status=201,safe=False)
    else:
        return HttpResponse(status=405)



def signup_tutor(request):
    if request.method == 'POST':
        try:
            req_data = json.loads(request.body.decode())
            username = req_data['username']
            password = req_data['password']
            phonenumber = None
            address = None
            subject = None
            gender = None
            schedule = None
            if('phonenumber' in req_data):
                phonenumber = req_data['phonenumber']
            if('address' in req_data):
                index = 0
                address = {}
                for x in req_data['address']:
                    address[str(index)] = x
                    index += 1
            if('subject' in req_data):
                subject = req_data['subject']
            if('gender' in req_data):
                gender = req_data['gender']
            if('schedule' in req_data):
                index = 0
                schedule = {}
                for x in req_data['schedule']:
                    schedule[str(index)] = x
                    index += 1
        except (KeyError, JSONDecodeError) as e:
            return HttpResponse(status=400)
        tutor = Tutor.objects.create_user(username=username, password=password, phonenumber=phonenumber,
            address=address, gender=gender,subject=subject, schedule=schedule)
        tutor.save()
        tutor.refresh_from_db()
        tutor2 = authenticate(request, username=username, password=password)
        if tutor2 is not None:
            login(request, tutor2)
            print(tutor2)
        else:
            None
        # tutor to json, and send back
        return JsonResponse(tutor.schedule,status=201,safe=False)
    else:
        return HttpResponse(status=405)

'''
tutors page
'''
def tutor_page_review(request,tutor_id):

    get_object_or_404(Tutor.objects.filter(id=tutor_id))
    if request.method == 'GET':
        review_list = [Review for Review in Review.objects.filter(tutor_id=tutor_id).values()]  
        return JsonResponse(review_list,safe=False,status=200)
    else:    
        return HttpResponse(status=405)

def tutor_page_profile(request,tutor_id):

    get_object_or_404(Tutor.objects.filter(id=tutor_id))
    if request.method == 'GET':
        tutor = Tutor.objects.get(id=tutor_id)
        response_dict={
            'name':tutor.name,
            'age':tutor.age,
            'subject':tutor.subject,
            'address':tutor.address,
            'phonenumber':tutor.phone1,
            'gender':tutor.gender,
        }
        return JsonResponse(response_dict,status=200,safe=False)
    elif request.method == 'POST':
        try:
            req_data = json.loads(request.body.decode())
            name = req_data['name']
            age = req_data['age']
            subject = req_data['subject']
            address = req_data['address']
            phonenumber = req_data['phonenumber']
            gender = req_data['gender']
        except (KeyError, JSONDecodeError) as e:
            return HttpResponse(status=400)
        tutor=Tutor.objects.get(id=tutor_id)

        tutor.name = name
        tutor.age = age
        tutor.subject = subject
        tutor.address = address
        tutor.gender = gender
        tutor.phonenumber = phonenumber
        tutor.save()
        return HttpResponse(status=201)
    else:    
        return HttpResponse(status=405) 

def tutor_page_tutoring(request,tutor_id):
    get_object_or_404(Tutor.objects.filter(id=tutor_id))
    if request.method == 'GET':
        tutoring_list = [Tutoring for Tutoring in Tutoring.objects.filter(tutor_id=tutor_id).values()]  
        return JsonResponse(tutoring_list,safe=False,status=200)
    else:    
        return HttpResponse(status=405)    

'''
def tutoring_page(request,tutoring_id):
    if request.method == 'GET':
        tutoring = Tutoring.objects.get(tutoring_id=tutoring_id)
        return HttpResponse(status=200)
    elif request.method == 'PUT':
        return HttpResponse(status=204)
    elif request.method == 'DELETE':
        return HttpResponse(status=204)
    else:
        return HttpResponse(status=405)
    return HttpResponse(status=404)
'''

'''
tutee_managers page
'''
def tutee_page_create(request):
    if not request.user.is_authenticated:
        return HttpResponse(status=401)
    else:
        if request.method == 'POST':
            try:
                req_data = json.loads(request.body.decode())
                name1 = req_data['name']
                gender1 = req_data['gender']
                subject1=req_data['subject']
            except (KeyError, JSONDecodeError) as e:
                return HttpResponse(status=400)
            tutee=Tutee()
            tutee.name=name1
            tutee.gender=gender1
            tutee.subject=subject1
            tutee.save()
            return HttpResponse(status=201)
        else:
            return HttpResponse(status=405)  

def tutee_page_profile(request,tuteemanager_id):
    if not request.user.is_authenticated:
        return HttpResponse(status=401)
    else:
        tutee_manager1 = TuteeManager.objects.get(id=tuteemanager_id)
        if request.method == 'GET':
            tutee_list = [Tutee for Tutee in Tutee.objects.filter(tutee_manager_id=tuteemanager_id).values()]  
            return JsonResponse(tutee_list,safe=False,status=200)
        elif request.method == 'POST':
            try:
                req_data = json.loads(request.body.decode())
                name1 = req_data['name']
                gender1 = req_data['gender']
            except (KeyError, JSONDecodeError) as e:
                return HttpResponse(status=400)
            tutee=Tutee()
            tutee.name=name1
            tutee.gender=gender1
            tutee.tutee_manager=tutee_manager1
            tutee.save()
            return HttpResponse(status=201)
        elif request.method == 'PUT':
            try:
                req_data = json.loads(request.body.decode())
                name1 = req_data['name']
                gender1 = req_data['gender']
                tuteeid = req_data['ChildID']
            except (KeyError, JSONDecodeError) as e:
                return HttpResponse(status=400)
            Tutee.objects.filter(id=tuteeid).update(name=name1)
            Tutee.objects.filter(id=tuteeid).update(gender=gender1)
            return HttpResponse(status=201)
        elif request.method == 'DELETE':
            try:
                req_data = json.loads(request.body.decode())
                tuteeid = req_data['ChildID']
            except (KeyError, JSONDecodeError) as e:
                return HttpResponse(status=400)
            tutee=Tutee.objects.get(id=tuteeid)
            tutee.delete()
            return HttpResponse(status=204)
        else:
            return HttpResponse(status=405)       

def tutee_page_review(request,tuteemanager_id):
    get_object_or_404(TuteeManager.objects.filter(id=tuteemanager_id))
    if request.method == 'GET':
        review_list = [Review for Review in Review.objects.filter(tutee_id=tuteemanager_id).values()]  
        return JsonResponse(review_list,safe=False,status=200)
    else:    
        return HttpResponse(status=405)

def tutee_page_tutoring(request,tuteemanager_id):
    if not request.user.is_authenticated:
        return HttpResponse(status=401)
    else:
        if request.method == 'GET':
            try:
                req_data = json.loads(request.body.decode())
                tuteeid = req_data['ChildID']
            except (KeyError, JSONDecodeError) as e:
                return HttpResponse(status=400)
            tutoring_list = [Tutoring for Tutoring in Tutoring.objects.filter(tutee_id=tuteeid).values()]
            return JsonResponse(tutoring_list,status=201,safe=False)
        elif request.method == 'POST':
            try:
                req_data = json.loads(request.body.decode())
                option_gender = req_data['gender']
                option_subject = req_data['subject']
                option_age_min = req_data['minAge']
                option_age_max = req_data['maxAge']
                tuteeid = req_data['ChildID']
            except (KeyError, JSONDecodeError) as e:
                return HttpResponse(status=400)
            tutee1=Tutee.objects.get(id=tuteeid)
            tutor_list=Tutor.objects.filter(subject=option_subject).filter(gender=option_gender).filter(age__gte=option_age_min).filter(age__lte=option_age_max)
            if tutor_list.exists():
                for tutor_target in tutor_list.iterator():
                    tutor_list[i].update(distance=get_distance())
            sorted_tutor_list=tutor_list.order_by('distance')    
            return JsonResponse(sorted_tutor_list,status=201,safe=False)
        else:
            return HttpResponse(status=405)

def get_distance(start_x,start_y,end_x,end_y,point_x,point_y):
    if start_x==end_x and start_y==end_y:
        return (abs(start_x-point_x)**2+abs(start_y-end_y)**2)**0.5
    elif start_x==end_x:
        return 0

def tutee_request_tutoring(request,tutee_id):
    if not request.user.is_authenticated:
        return HttpResponse(status=401)
    else:
        if request.method == 'POST':
            try:
                req_data = json.loads(request.body.decode())
                tutorid = req_data['TutorID']
                option_subject = req_data['subject']
            except (KeyError, JSONDecodeError) as e:
                return HttpResponse(status=400)
            tutoring_new = Tutoring()
            tutoring_new.tutee=tutee1
            tutoring_new.tutor=Tutor.objects.get(id=tutorid)
            tutoring_new.address=tutee1.address
            tutoring_new.subject=option_subject
            tutoring_new.save()
            return JsonResponse(tutoring_new,status=201,safe=False)
        else:
            return HttpResponse(status=405)

def address(request, keyword):
    url = "http://api.vworld.kr/req/search?service=search&request=search&version=2.0&crs=EPSG:900913&size=10&page=1&type=address&category=road&format=json&errorformat=json&key=32988E9B-F11C-3071-B5BC-6806FAF87CE8&query="
    response = requests.get(url+keyword)
    if(response.json()['response']['status'] == 'NOT_FOUND'):
        return HttpResponse(status=404)
    else:
        result = []
        x = len(response.json()['response']['result']['items'])
        result.append(response.json()['response']['result']['items'][0])
        for i in range(1,x):
            if (response.json()['response']['result']['items'][0]['id'] != response.json()['response']['result']['items'][i]['id']):
                result.append(response.json()['response']['result']['items'][i])
        return JsonResponse(result, status=200, safe=False)


def certificate(request):
    if request.method == 'POST':
        url = "https://kapi.kakao.com/v1/vision/text/detect"
        headers = {
            "Authorization": "KakaoAK c7a2dff8d5d6606bae24c70081c2b5cd"
            #"Content-Type": "multipart/form-data"
        }

        copiedblob = copy.deepcopy(request.FILES['file']) # requests.post has somewhat side effect

        response_mid = requests.post(url, files={'file': request.FILES['file']}, headers=headers)

        if (response_mid.status_code == 400):
            return HttpResponse(status=400)
        else:
            boxes = response_mid.json()['result']['boxes']

            url = "https://kapi.kakao.com/v1/vision/text/recognize"

            response_final = requests.post(url, files={'file': copiedblob}, data={"boxes": json.dumps(boxes)}, headers=headers)
            return JsonResponse(response_final.json()['result'], status=200, safe=False)
    else:
        return HttpResponseNotAllowed(['POST'])
        




@ensure_csrf_cookie
def token(request):
    if request.method == 'GET':
        return HttpResponse(status=204)
    else:
        return HttpResponseNotAllowed(['GET'])