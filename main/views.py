from django.shortcuts import render

# Create your views here.

def index(request):
	template = 'main/base.html'
	context = {}
	return render(request, template, context)

def app_client(request):
	template = 'main/base.html'
	context = {}
	return render(request, template, context)


