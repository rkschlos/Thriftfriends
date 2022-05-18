from django.urls import path

from .views import (
    api_brands,
)

urlpatterns = [
    path("brands/", api_brands, name="api_brands",),
]