from rest_framework import serializers
from .models import Person
from django.contrib.auth.models import User

class UserSerilaizer(serializers.ModelSerializer):
  class Meta:
    model=User
    fields='__all__'

class PersonSerilaizer(serializers.ModelSerializer):
  class Meta:
    model = Person
    fields='__all__'
