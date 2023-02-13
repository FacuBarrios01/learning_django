from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import views, status
from .serializers import CarSerializer


class GetCarViewSet(views.APIView):  # Utilizais genericApiView por vuestro CoreCRUD?

    serializer_class = CarSerializer

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
                return JsonResponse({"succefull": "False", "message": error.detail}, status=status.HTTP_400_BAD_REQUEST)

            serializer = CarSerializer(data=data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return JsonResponse({"succeful": "True", "data": serializer.data}, status=status.HTTP_200_OK)
            else:
                return JsonResponse({"succeful": "Fasle", "message": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as error:
            return JsonResponse({"succefull": "False", "message": error.detail})
