from django.shortcuts import render
from rest_framework import viewsets
from django.contrib.auth.models import User
from .serializers import PersonSerilaizer,UserSerilaizer
from .models import Person


class UserViewSet(viewsets.ModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerilaizer

class PersonViewSet(viewsets.ModelViewSet):
  queryset = Person.objects.all()
  serializer_class = PersonSerilaizer
