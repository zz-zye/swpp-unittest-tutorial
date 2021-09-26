from django.db import models

class Todo(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    done = models.BooleanField(default=False)
    year = models.IntegerField(default=2021)
    month = models.IntegerField(default=9)
    date = models.IntegerField(default=1)
