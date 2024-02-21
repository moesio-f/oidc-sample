from django.urls import path

from . import views

urlpatterns = [
    path("unprotected/", views.Unprotected.as_view()),
    path("protected/", views.Protected.as_view())
]
