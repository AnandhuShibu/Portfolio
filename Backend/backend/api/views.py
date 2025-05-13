from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

class SkillView(APIView):
    def post(self, request):

        skill_name = request.data.get('skill_name')



        return Response({'message': 'skill created successfully'}, status=status.HTTP_201_CREATED)
