# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('todos/', views.ToDoListView.as_view(), name='todo-list'),
    path('todos/ids/', views.ToDoListIDsAndTitlesView.as_view(), name='todo-id-list'),
    path('todos/ids-and-titles/', views.ToDoListIDsAndTitlesView.as_view(), name='todo-list-ids-titles'),
    path('todos/unresolved/', views.ToDoListUnresolvedView.as_view(), name='todo-list-unresolved'),
    path('todos/resolved/', views.ToDoListResolvedView.as_view(), name='todo-list-resolved'),
    path('todos/ids-and-user/', views.ToDoListIDsAndUserView.as_view(), name='todo-list-ids-user'),
    path('todos/resolved/ids-and-user/', views.ToDoListResolvedIDsAndUserView.as_view(), name='todo-list-resolved-ids-user'),
    path('todos/unresolved/ids-and-user/', views.ToDoListUnresolvedIDsAndUserView.as_view(), name='todo-list-unresolved-ids-user'),
    path('users/', views.ToDoListView.as_view(), name='user-list'),
    ]
