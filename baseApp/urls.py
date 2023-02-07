from django.urls import path
from . import views

app_name = 'baseApp'
urlpatterns = [
    path('', views.getCars , name='getCars'),
    path('<int:car_id>/', views.getCar, name='getCar'),
 ]
