from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder

from .models import Brand
# Create your views here

class BrandEncoder(ModelEncoder):
    model = Brand
    properties = [
        "id",
        "name",
    ]

@require_http_methods(["GET", "POST"])
def api_brands(request):
    if request.method == "GET":
        brands = Brand.objects.all()
        return JsonResponse(
            {"brands": brands},
            encoder=BrandEncoder,
        )
    else:
        try: 
            content = json.loads(request.body)
            brand = Brand.objects.create(**content)
            return JsonResponse(
                brand,
                encoder=BrandEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the brand"}
            )
            response.status_code = 400
            return response