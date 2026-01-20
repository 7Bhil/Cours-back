import requests
import sys

BASE_URL = 'http://localhost:8000/api/auth'

def test_registration():
    print("\n--- Testing Registration ---")
    
    # 1. Success case
    data = {
        "username": "testuser_unique",
        "email": "test_unique@example.com",
        "password": "Password123!",
        "password_confirm": "Password123!"
    }
    response = requests.post(f"{BASE_URL}/register/", json=data)
    print(f"Register Success Status: {response.status_code}")
    if response.status_code == 201:
        print("Registration successful as expected.")
    else:
        print(f"Registration failed: {response.text}")
        
    # 2. Validation Fail (passwords mismatch)
    data_fail = {
        "username": "testuser_fail",
        "email": "test_fail@example.com",
        "password": "Password123!",
        "password_confirm": "Mismatch!"
    }
    response = requests.post(f"{BASE_URL}/register/", json=data_fail)
    print(f"Register Mismatch Status: {response.status_code}")
    if response.status_code == 400 and 'password' in response.json():
        print("Mismatch caught correctly.")
    else:
         print(f"Mismatch NOT caught: {response.text}")

def test_progress(token):
    headers = {'Authorization': f'Bearer {token}'}
    
    # 1. Sauvegarder la progression
    print("\n1. Sauvegarde progression...")
    data = {
        'language': 'C',
        'progress_data': {'chapter': 'Pointeurs', 'score': 85, 'completed': True}
    }
    API_ROOT = 'http://localhost:8000/api'
    try:
        response = requests.post(f"{API_ROOT}/progress/save/", json=data, headers=headers)
        if response.status_code == 200:
            print("✅ Succès sauvegarde:", response.json())
        else:
            print("❌ Échec sauvegarde:", response.status_code, response.text)
    except Exception as e:
        print("❌ Erreur sauvegarde:", e)

    # 2. Charger la progression
    print("\n2. Chargement progression...")
    try:
        response = requests.get(f"{API_ROOT}/progress/load/C/", headers=headers)
        if response.status_code == 200:
            print("✅ Succès chargement:", response.json())
            loaded_data = response.json()
            if loaded_data.get('score') == 85:
                 print("✅ Données vérifiées correctes")
            else:
                 print("⚠️ Données incohérentes")
        else:
            print("❌ Échec chargement:", response.status_code, response.text)
    except Exception as e:
        print("❌ Erreur chargement:", e)

def test_login_logout():
    print("\n--- Testing Login & Logout ---")
    
    # Login
    data = {"username": "testuser_unique", "password": "Password123!"}
    response = requests.post(f"{BASE_URL}/login/", json=data)
    print(f"Login Status: {response.status_code}")
    
    if response.status_code != 200:
        print("Login failed, skipping logout test.")
        return

    tokens = response.json()
    access = tokens.get('access')
    refresh = tokens.get('refresh')
    
    if not refresh:
        print("No refresh token received!")
        return
        
    print("Login successful, tokens received.")
    
    # Test Progress
    test_progress(access)
    
    # Logout
    logout_data = {"refresh": refresh}
    headers = {"Authorization": f"Bearer {access}"}
    response = requests.post(f"{BASE_URL}/logout/", json=logout_data, headers=headers)
    print(f"Logout Status: {response.status_code}")
    
    if response.status_code == 204:
        print("Logout successful.")
    else:
        print(f"Logout failed: {response.text}")

    # Verify Refresh Token is blacklisted (try using it to refresh)
    # The URL for refresh isn't in my snippets but standard SimpleJWT is usually /api/token/refresh/ 
    # but I haven't added it to urls.py explicitly in the snippet I saw? 
    # settings.py has ROOT_URLCONF = 'bhil_backend.urls', let's check it if I can.
    # But even trying to logout again with same token should fail or using it.
    
    response = requests.post(f"{BASE_URL}/logout/", json=logout_data, headers=headers)
    print(f"Logout Retry Status (should fail): {response.status_code}")
    if response.status_code != 204: # Should be 400 or 500 depending on handling
         print("Double logout rejected as expected (token blacklisted/invalid).")

def test_email_login():
    print("\n--- Testing Email Login ---")
    # Using the same user created in test_registration
    data = {"email": "test_unique@example.com", "password": "Password123!"}
    response = requests.post(f"{BASE_URL}/login/", json=data)
    print(f"Email Login Status: {response.status_code}")
    if response.status_code == 200:
        print("✅ Email Login successful")
    else:
        print(f"❌ Email Login failed: {response.text}")

def test_profile_fields():
    print("\n--- Testing Profile Fields ---")
    # Login again to get token
    data = {"username": "testuser_unique", "password": "Password123!"}
    resp = requests.post(f"{BASE_URL}/login/", json=data)
    if resp.status_code != 200:
        print("Skipping profile test (login failed)")
        return
        
    access = resp.json().get('access')
    headers = {"Authorization": f"Bearer {access}"}
    
    response = requests.get(f"{BASE_URL}/profile/", headers=headers)
    print(f"Profile Status: {response.status_code}")
    
    if response.status_code == 200:
        user_data = response.json()
        print("User Data keys:", user_data.keys())
        required_fields = ['first_name', 'last_name', 'email', 'date_joined']
        missing = [f for f in required_fields if f not in user_data]
        
        if not missing:
            print("✅ All profile fields present")
        else:
            print(f"❌ Missing fields: {missing}")
    else:
        print(f"Failed to fetch profile: {response.text}")

def test_progress_list():
    print("\n--- Testing Progress List ---")
    data = {"username": "testuser_unique", "password": "Password123!"}
    resp = requests.post(f"{BASE_URL}/login/", json=data)
    if resp.status_code != 200:
        return
    access = resp.json().get('access')
    headers = {"Authorization": f"Bearer {access}"}
    
    # We use the same endpoint as save for now due to view structure
    API_ROOT = 'http://localhost:8000/api'
    response = requests.get(f"{API_ROOT}/progress/save/", headers=headers)
    print(f"Progress List Status: {response.status_code}")
    
    if response.status_code == 200:
        prog_list = response.json()
        print(f"✅ Found {len(prog_list)} progress items")
        if len(prog_list) > 0:
            print("Sample item:", prog_list[0])
    else:
        print(f"❌ Failed to fetch progress list: {response.text}")

if __name__ == "__main__":
    try:
        test_registration()
        test_login_logout()
        test_email_login()
        test_profile_fields()
        test_progress_list()
    except requests.exceptions.ConnectionError:
        print("Error: Could not connect to server. Is it running?")
