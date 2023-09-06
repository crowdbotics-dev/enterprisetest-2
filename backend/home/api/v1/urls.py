from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import BhfhViewSet,Dfd34ViewSet,BhfhViewSet,Dfd34ViewSet,BhfhViewSet,Dfd34ViewSet,BhfhViewSet,Dfd34ViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register('bhfh', BhfhViewSet )
router.register('dfd34', Dfd34ViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
