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

if __name__ == "__main__":
    try:
        test_registration()
        test_login_logout()
    except requests.exceptions.ConnectionError:
        print("Error: Could not connect to server. Is it running?")
