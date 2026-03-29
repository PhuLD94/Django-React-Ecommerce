from django.shortcuts import render
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView
from userauths.models import User, Profile
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from userauths.serializer import MyTokenObtainPairSerializer, RegisterSerializer, UserSerializer, ProfileSerializer
# Create your views here.
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer