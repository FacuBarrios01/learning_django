from .models import Car
from rest_framework.test import APIClient
from rest_framework.test import APITestCase
from rest_framework import status


class CarTestCase(APITestCase):

    """
    Test suite for Car
    """

    def setUp(self):
        self.client = APIClient()
        self.data = {
            "model": "Test Kuga",
            "releaseYear": "2023-02-13",
            "color": "sky blue",
            "engine_model": "Testing Engine"
        }
        self.url = "/cars/"

    def test_create_car(self):
        '''
        test CarViewSet create method
        '''
        data = self.data
        response = self.client.post(self.url, data, format="json")
        print(data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Car.objects.get(model="Test Kuga").model, "Test Kuga")

    def test_create_car_without_model(self):
        '''
        test CarViewSet create method when name is not in data
        '''
        data = self.data
        data.pop("model")
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_create_car_when_model_equals_blank(self):
        '''
        test CarViewSet create method when model is blank
        '''
        data = self.data
        data["name"] = ""
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_create_car_without_message(self):
        '''
        test CarViewSet create method when releaseYear is not in data
        '''
        data = self.data
        data.pop("releaseYear")
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_create_Car_when_releaseYear_equals_blank(self):
        '''
        test CarViewSet create method when releaseYear is blank
        '''
        data = self.data
        data["releaseYear"] = ""
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_create_Car_without_color(self):
        '''
        test CarViewSet create method when color is not in data
        '''
        data = self.data
        data.pop("color")
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_create_Car_when_color_equals_blank(self):
        '''
        test CarViewSet create method when color is blank
        '''
        data = self.data
        data["color"] = ""
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_create_Car_without_engine_model(self):
        '''
        test CarViewSet create method when engine_model is not in data
        '''
        data = self.data
        data.pop("engine_model")
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_create_Car_when_engine_model_equals_blank(self):
        '''
        test CarViewSet create method when engine_model is blank
        '''
        data = self.data
        data["engine_model"] = ""
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
