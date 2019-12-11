from django.test import TestCase, Client
from .models import Tutee,TuteeManager,Tutor
import json
from django.contrib.auth.hashers import check_password

# Create your tests here.


class ViewTest(TestCase):
    def setUp(self):
        test_tutor = Tutor.objects.create_user(username='test_id',password='test',name='ske',age='26',address='Seoul',gender='Male',subject='Math',phonenumber='01012341234')
        test_tutee_manager=TuteeManager.objects.create_user(username='test_id2',password='test')

    def tearDown(self):
        pass

    def test_signTutor(self):
        client=Client()
        response=client.get('/api/signup/tutor/')
        self.assertEqual(response.status_code,405)
        response=client.post('/api/signup/tutor/',{'userme':'newtest','password':'test'})
        self.assertEqual(response.status_code,400)
        response=client.post('/api/signup/tutor/',json.dumps({'username':'newtest','password':'test','phonenumber':'01012340000','subject':'Science,Math','gender':'Male','address':'Pusan'}),content_type='application/json')
        self.assertEqual(response.status_code,201)

        response=client.get('/api/signout/')
        self.assertEqual(response.status_code,401)
        response=client.post('/api/signin/')
        self.assertEqual(response.status_code,400)
        
        response=client.post('/api/signin/',json.dumps({'username':'test_id','password':'111test'}),content_type='application/json')
        self.assertEqual(response.status_code,204)
        response=client.post('/api/signin/',json.dumps({'username':'test_id','password':'test'}),content_type='application/json')
        self.assertEqual(response.status_code,204)

        response=client.post('/api/signout/')
        self.assertEqual(response.status_code,405)
        response=client.get('/api/signout/')
        self.assertEqual(response.status_code,204)

    def test_signTuteeManager(self):
        client=Client()
        response=client.get('/api/signup/tutee_manager/')
        self.assertEqual(response.status_code,405)
        response=client.post('/api/signup/tutee_manager/',{'userme':'newtest','password':'test'})
        self.assertEqual(response.status_code,400)
        response=client.post('/api/signup/tutee_manager/',json.dumps({'username':'newtest','password':'test','phonenumber':'01012340000'}),content_type='application/json')
        self.assertEqual(response.status_code,201)
        response=client.post('/api/signin/',json.dumps({'username':'test_id2','password':'test'}),content_type='application/json')
        self.assertEqual(response.status_code,204)


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

