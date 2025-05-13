from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class SkillView(APIView):

    def post(self, request):
        skill_name = request.data.get('skill_name')

        if not skill_name:

            print('NO SKILL')
            return Response({'error': 'skill_name is required'}, status=status.HTTP_400_BAD_REQUEST)

        print("SKILL:", skill_name)

        # You can save to a model here if needed

        return Response({'message': 'Skill created successfully'}, status=status.HTTP_201_CREATED)
