from django.http import HttpResponse
from django.shortcuts import render

def home(request):
    return HttpResponse("""
    <h1>✅ Django fonctionne !</h1>
    <p>Le serveur est réparé.</p>
    <ul>
        <li><a href="/admin/">Admin</a></li>
        <li><a href="/dashboard/">Dashboard</a></li>
        <li><a href="/api/test/">API Test</a></li>
    </ul>
    """)

def dashboard(request):
    return render(request, 'predictions/dashboard.html', {
        'title': 'Mon Projet ML',
        'user': 'Bhil'
    })

def api_test(request):
    return HttpResponse('{"status": "ok", "message": "API prête"}', content_type='application/json')
