from .models import Car
from rest_framework.test import APIClient
from rest_framework.test import APITestCase
from rest_framework import status
import json


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
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Car.objects.get(model="Test Kuga").model, "Test Kuga")

    def test_create_car_without_model(self):
        '''
        test CarViewSet create method when name is not in data
        '''
        data = self.data
        data.pop("model")
        response = self.client.post(self.url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        success_status = response.json()["success"]
        messages = response.json()["message"]
        self.assertEqual("False", success_status)
        self.assertTrue(
            "model" in messages and
            "This field is required." in messages["model"]
        )

    def test_create_car_when_model_equals_blank(self):
        '''
        test CarViewSet create method when model is blank
        '''
        data = self.data
        data["model"] = ""
        response = self.client.post(self.url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        response_json_strg = json.dumps(response.json())
        print(response_json_strg)
        self.assertIn("This field may not be blank.", response_json_strg)

    def test_create_car_without_releaseYear(self):
        '''
        test CarViewSet create method when releaseYear is not in data
        '''
        data = self.data
        data.pop("releaseYear")
        response = self.client.post(self.url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        success_status = response.json()["success"]
        messages = response.json()["message"]
        self.assertEqual("False", success_status)
        self.assertTrue(
            "releaseYear" in messages and
            "This field is required." in messages["releaseYear"]
        )

    def test_create_Car_when_releaseYear_equals_blank(self):
        '''
        test CarViewSet create method when releaseYear is blank
        '''
        data = self.data
        data["releaseYear"] = ""
        response = self.client.post(self.url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        success_status = response.json()["success"]
        messages = response.json()["message"]
        self.assertEqual("False", success_status)
        self.assertTrue(
            "releaseYear" in messages and
            "Date has wrong format. Use one of these formats instead: YYYY-MM-DD." in messages["releaseYear"]
        )

    def test_create_Car_without_color(self):
        '''
        test CarViewSet create method when color is not in data
        '''
        data = self.data
        data.pop("color")
        response = self.client.post(self.url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        success_status = response.json()["success"]
        messages = response.json()["message"]
        self.assertEqual("False", success_status)
        self.assertTrue(
            "color" in messages and
            "This field is required." in messages["color"]
        )

    def test_create_Car_when_color_equals_blank(self):
        '''
        test CarViewSet create method when color is blank
        '''
        data = self.data
        data["color"] = ""
        response = self.client.post(self.url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        success_status = response.json()["success"]
        messages = response.json()["message"]
        self.assertEqual("False", success_status)
        self.assertTrue(
            "color" in messages and
            "This field may not be blank." in messages["color"]
        )

    def test_create_Car_without_engine_model(self):
        '''
        test CarViewSet create method when engine_model is not in data
        '''
        data = self.data
        data.pop("engine_model")
        response = self.client.post(self.url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        success_status = response.json()["success"]
        messages = response.json()["message"]
        self.assertEqual("False", success_status)
        self.assertTrue(
            "engine_model" in messages and
            "This field is required." in messages["engine_model"]
        )

    def test_create_Car_when_engine_model_equals_blank(self):
        '''
        test CarViewSet create method when engine_model is blank
        '''
        data = self.data
        data["engine_model"] = ""
        data["model"] = ""
        response = self.client.post(self.url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        success_status = response.json()["success"]
        messages = response.json()["message"]
        self.assertEqual("False", success_status)
        self.assertTrue(
            "engine_model" in messages and
            "This field may not be blank." in messages["engine_model"]
        )
