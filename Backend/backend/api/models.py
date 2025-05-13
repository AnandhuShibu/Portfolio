from django.db import models

class Skills(models.Model):
    skill_name = models.CharField(max_length=200)
    skill_image = models.ImageField()

    def __str__(self):
        return self.skill_name

class Projects(models.Model):
    project_name = models.CharField(max_length=400)
    project_image = models.ImageField()
    project_description = models.TextField()
    technologies = models.CharField(max_length=400)

    def __str__(self):
        return self.project_name
