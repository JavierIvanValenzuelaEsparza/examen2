from rest_framework import generics
from rest_framework.response import Response
from .models import ToDo
from .serializers import ToDoSerializer

class ToDoListView(generics.ListCreateAPIView):
    queryset = ToDo.objects.all()
    serializer_class = ToDoSerializer

class ToDoListIDsAndTitlesView(generics.ListAPIView):
    queryset = ToDo.objects.all()
    serializer_class = ToDoSerializer

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset().values('id', 'title')
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
    queryset = ToDo.objects.all()
    serializer_class = ToDoSerializer

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset().values('id', 'user')
        return Response(queryset)

class ToDoListResolvedIDsAndUserView(generics.ListAPIView):
    serializer_class = ToDoSerializer

    def get_queryset(self):
        return ToDo.objects.filter(status='complete').values('id', 'user')

class ToDoListUnresolvedIDsAndUserView(generics.ListAPIView):
    serializer_class = ToDoSerializer

    def get_queryset(self):
        return ToDo.objects.filter(status='pending').values('id', 'user')

class ToDoListView(generics.ListCreateAPIView):
    queryset = ToDo.objects.all()
    serializer_class = ToDoSerializer

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset().values_list('id', flat=True)
        id_list = [{'id': id} for id in queryset]
        return Response(id_list)
