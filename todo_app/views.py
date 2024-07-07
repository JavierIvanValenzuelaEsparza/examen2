from rest_framework import generics
from rest_framework.response import Response
from .models import ToDo
from .serializers import ToDoSerializer, ToDoIDAndUserSerializer

class ToDoListView(generics.ListCreateAPIView):
    queryset = ToDo.objects.all()
    serializer_class = ToDoSerializer

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

class ToDoListIDsAndTitlesView(generics.ListAPIView):
    serializer_class = ToDoSerializer

    def list(self, request, *args, **kwargs):
        queryset = ToDo.objects.all().values('id', 'title')
        return Response(queryset)

class ToDoListUnresolvedView(generics.ListAPIView):
    serializer_class = ToDoSerializer

    def get_queryset(self):
        return ToDo.objects.filter(status='pending')

class ToDoListResolvedView(generics.ListAPIView):
    serializer_class = ToDoSerializer

    def get_queryset(self):
        return ToDo.objects.filter(status='completed')

class ToDoListIDsAndUserView(generics.ListAPIView):
    def list(self, request, *args, **kwargs):
        queryset = ToDo.objects.all().values('id', 'user')
        return Response(queryset)

class ToDoListResolvedIDsAndUserView(generics.ListAPIView):
    serializer_class = ToDoIDAndUserSerializer

    def get_queryset(self):
        return ToDo.objects.filter(status='completed').values('id', 'user')

class ToDoListUnresolvedIDsAndUserView(generics.ListAPIView):
    serializer_class = ToDoIDAndUserSerializer

    def get_queryset(self):
        return ToDo.objects.filter(status='pending').values('id', 'user')