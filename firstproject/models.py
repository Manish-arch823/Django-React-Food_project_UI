from django.db import models 
from django.contrib.auth.models import User 



class signup_page(models.Model):
	Email = models.CharField(max_length=50)
	Password = models.CharField(max_length=20)
	Address = models.CharField(max_length=200)
	Address2=models.CharField(max_length=200)
	City = models.CharField(max_length=100)
	State = models.CharField(max_length=100)
	Pincode=models.IntegerField()

















