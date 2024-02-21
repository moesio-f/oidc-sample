from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from mozilla_django_oidc.contrib.drf import OIDCAuthentication


class Unprotected(APIView):
    authentication_classes = []
    permission_classes = []

    def get(self, request, format=None):
        return Response({"msg": "Unprotected endpoint.",
                         "is_authenticated": request.user.is_authenticated,
                         "user": request.user.get_username(),
                         "success": True})


class Protected(APIView):
    authentication_classes = [OIDCAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        return Response({"msg": "Protected endpoint.",
                         "is_authenticated": request.user.is_authenticated,
                         "user": request.user.get_username(),
                         "success": True})
