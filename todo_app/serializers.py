from rest_framework import serializers
from .models import ToDo
from django.contrib.auth.models import User  # Agregar esta línea

class ToDoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToDo
        fields = ['id', 'title', 'description', 'status', 'user', 'created_at']

class ToDoIDAndUserSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    user = serializers.IntegerField()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']