from django.test import TestCase, Client
from .models import Tutee,TuteeManager,Tutor
import json
from django.contrib.auth.hashers import check_password

# Create your tests here.

'''
viewTest ++
'''
class ViewTest(TestCase):
    def setUp(self):
        '''
        build test data
        '''
        pass

    def tearDown(self):
        pass


class APITest(TestCase):
    def test_api(self):
        pass


class ModelTest(TestCase):
    def test_model(self):
        test_tutor = Tutor.objects.create_user(username='test_id',password='test',name='ske',age='26',address='Seoul',gender='Male',subject='Math',phonenumber='01012341234')
        self.assertEquals(check_password('test',test_tutor.password),True)
        self.assertEqual(test_tutor.username, 'test_id')
        self.assertEqual(test_tutor.name, 'ske')
        self.assertEqual(test_tutor.age, '26')
        '''
        need to test multiselectfield
        '''


class tokenTest(TestCase):
    def test_csrf(self):
        client = Client(enforce_csrf_checks=True)
        response = client.post('/api/signup/tutor/', json.dumps({'username': 'chris', 'password': 'chris'}),
                               content_type='application/json')
        self.assertEqual(response.status_code, 403) 

        response = client.get('/api/token/')
        self.assertEqual(response.status_code, 204)
        csrftoken = response.cookies['csrftoken'].value  

        response = client.post('/api/signup/tutor/', json.dumps({'username': 'chris', 'password': 'chris','phonenumber':'01012341234','subject':'Math','gender':'Male','address':'Seoul'}),
                               content_type='application/json', HTTP_X_CSRFTOKEN=csrftoken)
        self.assertEqual(response.status_code, 201) 