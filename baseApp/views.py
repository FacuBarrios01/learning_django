from django.http import HttpResponse
from .models import Car
from django.core import serializers

# Create your views here.
def getCars(request):
    return HttpResponse("TODO")

def getCar(request, car_id):
    successful = True
    try:
        car = Car.objects.get(pk=car_id)
    except Car.DoesNotExist:
        successful = False
    
    json = serializers.serialize('json', car)
    
    #Como añado el parametro successful al JSON???
    return JsonResponse(json, safe = False)
