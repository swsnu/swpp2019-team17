from django.urls import path
from tutoring import views

urlpatterns = [
    path('signup/tutee_manager', views.signup_tutee_manager, name='signup'),
    path('signup/tutor', views.signup_tutor, name='signup'),
    path('signin', views.signin, name='signin'),
    path('signout', views.signout, name='signin'),
]