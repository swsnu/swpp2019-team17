from django.test import TestCase, Client
from .models import Tutee,TuteeManager,Tutor
import json
from django.contrib.auth.hashers import check_password

# Create your tests here.

'''
viewTest ++
'''


class ModelTest(TestCase):
    def test_model(self):
        test_tutor = Tutor.objects.create_user(username='test_id',password='test')

class tokenTest(TestCase):
    def test_csrf(self):
        client = Client(enforce_csrf_checks=True)
        response = client.post('/signup/tutor/', json.dumps({'username': 'chris', 'password': 'chris'}),
                               content_type='application/json')
        self.assertEqual(response.status_code, 403) 

        response = client.get('/token/')
        self.assertEqual(response.status_code, 204)
        csrftoken = response.cookies['csrftoken'].value  

        response = client.post('/signup/tutor/', json.dumps({'username': 'chris', 'password': 'chris'}),
                               content_type='application/json', HTTP_X_CSRFTOKEN=csrftoken)
        self.assertEqual(response.status_code, 201) 