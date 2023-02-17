from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import generics, status
from .serializers import CarSerializer
from .models import Car
from django.core.exceptions import ObjectDoesNotExist
from .exception import ParamsRequiredException


# Utilizais genericApiView por vuestro CoreCRUD?
class GetCarViewSet(generics.GenericAPIView):

    def get_serializer_context(self):
        return {
            'request': self.request,
            'format': self.format_kwarg,
            'view': self
        }

    def get_serializer(self, *args, **kwargs):
        kwargs['context'] = self.get_serializer_context()
        return self.serializer_class(*args, **kwargs)

    def post(self, request):
        try:
            try:
                data = JSONParser().parse(request)
            except Exception as error:
                return JsonResponse({"success": "False", "message": error.detail}, status=status.HTTP_200_OK)

            serializer = CarSerializer(data=data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return JsonResponse({"success": "True", "data": serializer.data}, status=status.HTTP_200_OK)
            else:
                return JsonResponse({"success": "False", "message": serializer.errors}, status=status.HTTP_200_OK)
        except Exception as error:
            return JsonResponse({"success": "False", "message": error.detail})

    def get(self, request):
        serializer = CarSerializer(Car.objects.all(), many=True)
        if len(serializer.data) > 0:
            return JsonResponse({"success": "True", "data": serializer.data}, status=status.HTTP_200_OK)
        else:
            return JsonResponse({"success": "False", "message": "No cars found"}, status=status.HTTP_200_OK)

    def delete(self, request):
        try:
            try:
                data = JSONParser().parse(request)
            except Exception as error:
                return JsonResponse({"success": "False", "message": error.detail}, status=status.HTTP_200_OK)

            if "params" not in data:
                raise ParamsRequiredException

            cars_to_delete = []
            try:
                for id in data["params"]["ids"]:
                    cars_to_delete.append(Car.objects.get(pk=id))
            except Exception as error:
                return JsonResponse({"success": "False", "message": str(error)})

            for object in cars_to_delete:
                object.delete()
            return JsonResponse({"success": "True", "data": {"deleted_car_ids": data["params"]["ids"]}}, status=status.HTTP_200_OK)

        except Exception as error:
            return JsonResponse({"success": "False", "message": str(error)})

    def patch(self, request):
        pass
        # TODO
