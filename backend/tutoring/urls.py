from django.urls import path
from tutoring import views

urlpatterns = [
    path('signup/tutee_manager/', views.signup_tutee_manager, name='signup'),
    path('signup/tutor/', views.signup_tutor, name='signup'),
    path('signin/', views.signin, name='signin'),
    path('signout/', views.signout, name='signout'),

    path('tutor/<int:tutor_id>/',views.tutor_page_profile,name='tutor_profile'),
    path('tutor/review/<int:tutor_id>/',views.tutor_page_review,name='tutor_review'),
    path('tutor/tutoring/<int:tutor_id>/',views.tutor_page_tutoring,name='tutor_tutoring'),
    
    path('tutee/',views.tutee_page_create,name='tutee_profile'),
    path('tutee/<int:tutor_id>/',views.tutee_page_profile,name='tutee_profile'),
    path('tutee/review/<int:tutor_id>/',views.tutee_page_review,name='tutee_profile'),
    path('tutee/tutoring/<int:tutor_id>/',views.tutee_page_tutoring,name='tutee_profile'),

    path('address/<str:keyword>/', views.address, name='address'),
    path('token/', views.token, name='token')
]