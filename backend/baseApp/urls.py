from django.urls import path, include
from rest_framework import routers
from . import views
from django.contrib import admin

# router = routers.DefaultRouter()
# router.register(r'cars', views.GetCarViewSet.as_view(), basename='cars')

# urlpatterns = router.urls

urlpatterns = [
    path('cars/', views.GetCarViewSet.as_view())

]
